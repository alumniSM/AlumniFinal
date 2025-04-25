const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const surveyRoutes = require('./routes/surveys');

// Initialize Express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/alumni-survey-db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/surveys', surveyRoutes);

// Update survey routes to handle answers
const SurveyAnswer = require('./models/SurveyAnswer');
const Survey = require('./models/Survey');

// Submit survey answers (extended version)
app.post('/api/surveys/:id/submit-with-answers', async (req, res) => {
  try {
    const { id } = req.params;
    const { userId, answers } = req.body;
    
    const survey = await Survey.findById(id);
    if (!survey) {
      return res.status(404).json({ message: 'Survey not found' });
    }
    
    // Check if survey is still active
    if (new Date(survey.deadline) < new Date()) {
      return res.status(400).json({ message: 'Survey has expired' });
    }
    
    // Check if user has already participated
    if (survey.hasParticipated(userId)) {
      return res.status(400).json({ message: 'You have already participated in this survey' });
    }
    
    // Add participant and increment response count
    survey.addParticipant(userId);
    
    // Save the survey with the new participant
    await survey.save();
    
    // Save the actual answers
    const newSurveyAnswer = new SurveyAnswer({
      surveyId: id,
      userId,
      answers,
      submittedAt: new Date()
    });
    
    await newSurveyAnswer.save();
    
    res.json({ success: true, message: 'Survey answers submitted successfully' });
  } catch (err) {
    console.error('Error submitting survey answers:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get detailed survey results including answers
app.get('/api/surveys/:id/detailed-results', async (req, res) => {
  try {
    const { id } = req.params;
    const survey = await Survey.findById(id);
    
    if (!survey) {
      return res.status(404).json({ message: 'Survey not found' });
    }
    
    // Get all answers for this survey
    const answers = await SurveyAnswer.find({ surveyId: id });
    
    // Process the results
    const results = {};
    
    survey.questions.forEach(question => {
      if (question.type === 'true_false') {
        results[question.id] = { true: 0, false: 0 };
      } else if (question.type === 'multiple_choice') {
        results[question.id] = {};
        question.options.forEach(option => {
          results[question.id][option] = 0;
        });
      } else if (question.type === 'open_ended') {
        results[question.id] = [];
      }
    });
    
    // Count the answers
    answers.forEach(answer => {
      answer.answers.forEach(ans => {
        const question = survey.questions.find(q => q.id === parseInt(ans.questionId));
        if (!question) return;
        
        if (question.type === 'true_false' || question.type === 'multiple_choice') {
          results[ans.questionId][ans.answer] = (results[ans.questionId][ans.answer] || 0) + 1;
        } else if (question.type === 'open_ended') {
          results[ans.questionId].push(ans.answer);
        }
      });
    });
    
    res.json({
      surveyId: survey._id,
      title: survey.title,
      description: survey.description,
      responses: survey.responses,
      participants: survey.participants,
      results
    });
  } catch (err) {
    console.error('Error fetching detailed survey results:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
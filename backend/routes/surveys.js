const express = require('express');
const router = express.Router();
const Survey = require('../models/Survey');

// Get all surveys
router.get('/', async (req, res) => {
  try {
    const surveys = await Survey.find();
    
    // Update isActive based on current date vs deadline
    const updatedSurveys = surveys.map(survey => {
      const surveyObj = survey.toObject();
      surveyObj.isActive = new Date(survey.deadline) > new Date();
      return surveyObj;
    });
    
    res.json(updatedSurveys);
  } catch (err) {
    console.error('Error fetching surveys:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get a specific survey by ID
router.get('/:id', async (req, res) => {
  try {
    const survey = await Survey.findById(req.params.id);
    if (!survey) {
      return res.status(404).json({ message: 'Survey not found' });
    }
    res.json(survey);
  } catch (err) {
    console.error('Error fetching survey:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

// Create a new survey
router.post('/', async (req, res) => {
  try {
    const { title, description, questions, deadline } = req.body;
    
    const newSurvey = new Survey({
      title,
      description,
      questions,
      deadline,
      responses: 0,
      participants: []
    });
    
    const savedSurvey = await newSurvey.save();
    res.status(201).json(savedSurvey);
  } catch (err) {
    console.error('Error creating survey:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

// Check if a user has participated in a survey
router.get('/:id/check-participation/:userId', async (req, res) => {
  try {
    const { id, userId } = req.params;
    const survey = await Survey.findById(id);
    
    if (!survey) {
      return res.status(404).json({ message: 'Survey not found' });
    }
    
    const hasParticipated = survey.hasParticipated(userId);
    res.json({ hasParticipated });
  } catch (err) {
    console.error('Error checking participation:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

// Submit survey answers
router.post('/:id/submit', async (req, res) => {
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
    
    // Here you would typically also save the actual answers in a separate collection
    // For simplicity, we're just acknowledging the submission
    
    res.json({ success: true, message: 'Survey answers submitted successfully' });
  } catch (err) {
    console.error('Error submitting survey answers:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get survey results
router.get('/:id/results', async (req, res) => {
  try {
    const { id } = req.params;
    const survey = await Survey.findById(id);
    
    if (!survey) {
      return res.status(404).json({ message: 'Survey not found' });
    }
    
    // In a real app, you would fetch and aggregate the actual answers here
    // For now, we'll just return the participation count
    
    res.json({
      surveyId: survey._id,
      title: survey.title,
      responses: survey.responses,
      participants: survey.participants.length
    });
  } catch (err) {
    console.error('Error fetching survey results:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
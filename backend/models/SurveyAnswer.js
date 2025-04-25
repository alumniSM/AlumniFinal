const mongoose = require('mongoose');

const SurveyAnswerSchema = new mongoose.Schema({
  surveyId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Survey',
    required: true
  },
  userId: {
    type: String,
    required: true
  },
  answers: [{
    questionId: {
      type: Number,
      required: true
    },
    answer: {
      type: mongoose.Schema.Types.Mixed,
      required: true
    }
  }],
  submittedAt: {
    type: Date,
    default: Date.now
  }
});

// Create a compound index to ensure a user can only submit once per survey
SurveyAnswerSchema.index({ surveyId: 1, userId: 1 }, { unique: true });

module.exports = mongoose.model('SurveyAnswer', SurveyAnswerSchema);
const mongoose = require('mongoose');

const SurveySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    trim: true
  },
  questions: [{
    id: {
      type: Number,
      required: true
    },
    text: {
      type: String,
      required: true
    },
    type: {
      type: String,
      enum: ['multiple_choice', 'true_false', 'open_ended'],
      required: true
    },
    options: [{
      type: String
    }]
  }],
  createdAt: {
    type: Date,
    default: Date.now
  },
  deadline: {
    type: Date,
    required: true
  },
  responses: {
    type: Number,
    default: 0
  },
  isActive: {
    type: Boolean,
    default: true
  },
  participants: [{
    userId: {
      type: String,
      required: true
    },
    submittedAt: {
      type: Date,
      default: Date.now
    }
  }]
});

// Virtual property to check if survey is active based on deadline
SurveySchema.virtual('isActiveNow').get(function() {
  return new Date(this.deadline) > new Date();
});

// Method to check if a user has already participated
SurveySchema.methods.hasParticipated = function(userId) {
  return this.participants.some(participant => participant.userId === userId);
};

// Method to add a participant
SurveySchema.methods.addParticipant = function(userId) {
  if (!this.hasParticipated(userId)) {
    this.participants.push({ userId });
    this.responses += 1;
  }
};

module.exports = mongoose.model('Survey', SurveySchema);
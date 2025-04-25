// SurveyAPI.js - Real API service for survey operations
import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

const SurveyAPI = {
  // Get all surveys
  getSurveys: async () => {
    try {
      const response = await axios.get(`${API_URL}/surveys`);
      return response.data;
    } catch (error) {
      console.error('Error fetching surveys:', error);
      throw error;
    }
  },

  // Get a specific survey by ID
  getSurvey: async (surveyId) => {
    try {
      const response = await axios.get(`${API_URL}/surveys/${surveyId}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching survey:', error);
      throw error;
    }
  },

  // Create a new survey
  createSurvey: async (surveyData) => {
    try {
      const response = await axios.post(`${API_URL}/surveys`, surveyData);
      return response.data;
    } catch (error) {
      console.error('Error creating survey:', error);
      throw error;
    }
  },

  // Check if a user has already participated in a survey
  checkParticipation: async (userId, surveyId) => {
    try {
      const response = await axios.get(`${API_URL}/surveys/${surveyId}/check-participation/${userId}`);
      return response.data.hasParticipated;
    } catch (error) {
      console.error('Error checking participation:', error);
      throw error;
    }
  },

  // Submit survey answers
  submitSurveyAnswers: async (surveyId, userId, answers) => {
    try {
      const response = await axios.post(`${API_URL}/surveys/${surveyId}/submit-with-answers`, {
        userId,
        answers
      });
      return response.data;
    } catch (error) {
      console.error('Error submitting survey answers:', error);
      throw error;
    }
  },

  // Get survey results
  getSurveyResults: async (surveyId) => {
    try {
      const response = await axios.get(`${API_URL}/surveys/${surveyId}/detailed-results`);
      return response.data;
    } catch (error) {
      console.error('Error fetching survey results:', error);
      throw error;
    }
  }
};

export default SurveyAPI;
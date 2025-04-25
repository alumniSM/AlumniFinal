import React, { useState, useEffect } from "react";
import { Send, ArrowLeft, AlertCircle } from "lucide-react";
import { useParams, useNavigate } from "react-router-dom";
import DashboardLayout from "../Layout";

const AnswerSurvey = () => {
  // In a real application, you would fetch the survey data from an API
  // For this example, we'll use mock data
  const { id } = useParams();
  const navigate = useNavigate();
  const [survey, setSurvey] = useState(null);
  const [loading, setLoading] = useState(true);
  const [answers, setAnswers] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [alreadyParticipated, setAlreadyParticipated] = useState(false);
  const [expired, setExpired] = useState(false);

  useEffect(() => {
    // Simulate fetching survey data
    setTimeout(() => {
      // In a real app, you would fetch the survey with the given ID
      const mockSurvey = {
        id: "survey123",
        title: "Alumni Feedback Survey",
        description: "Help us improve our alumni network by providing your feedback.",
        deadline: "2025-10-31T23:59:59Z",
        responses: 24,
        questions: [
          {
            id: 1,
            text: "Are you satisfied with the alumni events?",
            type: "true_false"
          },
          {
            id: 2,
            text: "How would you rate our communication channels?",
            type: "multiple_choice",
            options: ["Excellent", "Good", "Average", "Poor"]
          },
          {
            id: 3,
            text: "What improvements would you suggest for our alumni network?",
            type: "open_ended"
          }
        ]
      };
      
      // Check if survey has expired
      const isExpired = new Date(mockSurvey.deadline) < new Date();
      setExpired(isExpired);
      
      // Check if user has already participated (in a real app, this would be from a database)
      // For demo, we'll use localStorage to simulate this
      const participatedSurveys = JSON.parse(localStorage.getItem('participatedSurveys') || '[]');
      const hasParticipated = participatedSurveys.includes(mockSurvey.id);
      setAlreadyParticipated(hasParticipated);
      
      setSurvey(mockSurvey);
      
      // Initialize answers object
      const initialAnswers = {};
      mockSurvey.questions.forEach(q => {
        initialAnswers[q.id] = q.type === "multiple_choice" ? "" : 
                              q.type === "true_false" ? "" : "";
      });
      
      setAnswers(initialAnswers);
      setLoading(false);
    }, 1000);
  }, []);

  const handleAnswerChange = (questionId, value) => {
    setAnswers({
      ...answers,
      [questionId]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Check if all questions are answered
    const unansweredQuestions = survey.questions.filter(q => {
      if (q.type === "open_ended") {
        return !answers[q.id] || answers[q.id].trim() === "";
      }
      return !answers[q.id];
    });
    
    if (unansweredQuestions.length > 0) {
      alert("Please answer all questions before submitting.");
      return;
    }
    
    setIsSubmitting(true);
    
    // Prepare submission data
    const submissionData = {
      surveyId: survey.id,
      answers: Object.entries(answers).map(([questionId, answer]) => ({
        questionId,
        answer
      })),
      submittedAt: new Date().toISOString()
    };
    
    console.log("Submitting survey answers:", submissionData);
    
    // Simulate API call - in a real app, you would update the survey responses in the database
    setTimeout(() => {
      // Increment the response count
      if (survey) {
        // In a real app, this would be an API call to update the response count
        console.log(`Incrementing response count for survey ${survey.id} from ${survey.responses} to ${survey.responses + 1}`);
        
        // Save participation to localStorage to prevent multiple submissions
        const participatedSurveys = JSON.parse(localStorage.getItem('participatedSurveys') || '[]');
        if (!participatedSurveys.includes(survey.id)) {
          participatedSurveys.push(survey.id);
          localStorage.setItem('participatedSurveys', JSON.stringify(participatedSurveys));
        }
      }
      
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  const renderQuestion = (question) => {
    switch (question.type) {
      case "true_false":
        return (
          <div className="flex space-x-4">
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name={`question_${question.id}`}
                value="true"
                checked={answers[question.id] === "true"}
                onChange={() => handleAnswerChange(question.id, "true")}
                className="w-4 h-4 text-alumni-blue"
              />
              <span>True</span>
            </label>
            
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name={`question_${question.id}`}
                value="false"
                checked={answers[question.id] === "false"}
                onChange={() => handleAnswerChange(question.id, "false")}
                className="w-4 h-4 text-alumni-blue"
              />
              <span>False</span>
            </label>
          </div>
        );
        
      case "multiple_choice":
        return (
          <div className="space-y-2">
            {question.options.map((option, index) => (
              <label key={index} className="flex items-center space-x-2">
                <input
                  type="radio"
                  name={`question_${question.id}`}
                  value={option}
                  checked={answers[question.id] === option}
                  onChange={() => handleAnswerChange(question.id, option)}
                  className="w-4 h-4 text-alumni-blue"
                />
                <span>{option}</span>
              </label>
            ))}
          </div>
        );
        
      case "open_ended":
        return (
          <textarea
            value={answers[question.id] || ""}
            onChange={(e) => handleAnswerChange(question.id, e.target.value)}
            rows={4}
            className="w-full border border-gray-200 rounded-lg bg-gray-100 p-3 focus:outline-none focus:ring-1 focus:ring-alumni-blue resize-none"
            placeholder="Type your answer here..."
          ></textarea>
        );
        
      default:
        return null;
    }
  };

  if (loading) {
    return (
      <DashboardLayout>
        <div className="bg-white rounded-3xl shadow-sm p-6 border border-gray-200 flex justify-center items-center h-64">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-alumni-blue mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading survey...</p>
          </div>
        </div>
      </DashboardLayout>
    );
  }
  
  if (expired) {
    return (
      <DashboardLayout>
        <div className="bg-white rounded-3xl shadow-sm p-6 border border-gray-200">
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <AlertCircle className="h-8 w-8 text-red-600" />
            </div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Survey Closed</h2>
            <p className="text-gray-600 mb-6">This survey is no longer accepting responses as it has passed its deadline.</p>
            <button
              onClick={() => navigate('/dashboard/list')}
              className="flex items-center space-x-2 bg-alumni-blue text-white px-6 py-2 rounded-md hover:bg-alumni-blue/90 transition-colors mx-auto"
            >
              <ArrowLeft size={18} />
              <span>Back to Surveys</span>
            </button>
          </div>
        </div>
      </DashboardLayout>
    );
  }
  
  if (alreadyParticipated) {
    return (
      <DashboardLayout>
        <div className="bg-white rounded-3xl shadow-sm p-6 border border-gray-200">
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <AlertCircle className="h-8 w-8 text-yellow-600" />
            </div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Already Participated</h2>
            <p className="text-gray-600 mb-6">You have already submitted your responses for this survey.</p>
            <button
              onClick={() => navigate('/dashboard/list')}
              className="flex items-center space-x-2 bg-alumni-blue text-white px-6 py-2 rounded-md hover:bg-alumni-blue/90 transition-colors mx-auto"
            >
              <ArrowLeft size={18} />
              <span>Back to Surveys</span>
            </button>
          </div>
        </div>
      </DashboardLayout>
    );
  }

  if (submitted) {
    return (
      <DashboardLayout>
        <div className="bg-white rounded-3xl shadow-sm p-6 border border-gray-200">
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Thank You!</h2>
            <p className="text-gray-600 mb-6">Your survey responses have been submitted successfully.</p>
            <button
              onClick={() => window.history.back()}
              className="flex items-center space-x-2 bg-alumni-blue text-white px-6 py-2 rounded-md hover:bg-alumni-blue/90 transition-colors mx-auto"
            >
              <ArrowLeft size={18} />
              <span>Back to Surveys</span>
            </button>
          </div>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="bg-white rounded-3xl shadow-sm p-6 border border-gray-200">
        <h2 className="text-2xl font-semibold mb-2">{survey.title}</h2>
        <p className="text-gray-600 mb-6">{survey.description}</p>
        
        <form onSubmit={handleSubmit} className="space-y-8">
          {survey.questions.map((question, index) => (
            <div key={question.id} className="border border-gray-200 rounded-lg p-4">
              <div className="mb-3">
                <span className="text-sm font-medium text-gray-500">Question {index + 1}</span>
                <h3 className="text-lg font-medium">{question.text}</h3>
              </div>
              
              {renderQuestion(question)}
            </div>
          ))}
          
          <div className="flex justify-end">
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex items-center space-x-2 bg-alumni-blue text-white px-6 py-2 rounded-md hover:bg-alumni-blue/90 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
            >
              <Send size={18} />
              <span>{isSubmitting ? "Submitting..." : "Submit Answers"}</span>
            </button>
          </div>
        </form>
      </div>
    </DashboardLayout>
  );
};

export default AnswerSurvey;
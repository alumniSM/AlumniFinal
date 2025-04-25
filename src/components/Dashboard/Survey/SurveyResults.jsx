import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, BarChart2, Users, Calendar, Clock } from "lucide-react";
import DashboardLayout from "../Layout";

const SurveyResults = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [survey, setSurvey] = useState(null);
  const [loading, setLoading] = useState(true);
  const [results, setResults] = useState({});

  useEffect(() => {
    // Simulate fetching survey data and results
    setTimeout(() => {
      // In a real app, you would fetch the survey with the given ID
      const mockSurvey = {
        id: "survey123",
        title: "Alumni Feedback Survey",
        description: "Help us improve our alumni network by providing your feedback.",
        deadline: "2025-12-31T23:59:59Z",
        createdAt: "2023-08-15T10:30:00Z",
        responses: 24,
        isActive: new Date("2025-12-31T23:59:59Z") > new Date(),
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

      // Mock results data
      const mockResults = {
        1: { true: 18, false: 6 },
        2: { Excellent: 8, Good: 10, Average: 5, Poor: 1 },
        3: [
          "More networking events",
          "Better job posting platform",
          "Regular newsletters",
          "Mentorship programs",
          "More online webinars"
        ]
      };

      setSurvey(mockSurvey);
      setResults(mockResults);
      setLoading(false);
    }, 1000);
  }, [id]);

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const renderQuestionResults = (question) => {
    switch (question.type) {
      case "true_false":
        const trueCount = results[question.id]?.true || 0;
        const falseCount = results[question.id]?.false || 0;
        const totalTF = trueCount + falseCount;
        
        return (
          <div className="mt-3">
            <div className="flex items-center justify-between mb-2">
              <span>True</span>
              <span>{trueCount} ({totalTF > 0 ? Math.round((trueCount / totalTF) * 100) : 0}%)</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div 
                className="bg-green-500 h-2.5 rounded-full" 
                style={{ width: `${totalTF > 0 ? (trueCount / totalTF) * 100 : 0}%` }}
              ></div>
            </div>
            
            <div className="flex items-center justify-between mb-2 mt-3">
              <span>False</span>
              <span>{falseCount} ({totalTF > 0 ? Math.round((falseCount / totalTF) * 100) : 0}%)</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div 
                className="bg-red-500 h-2.5 rounded-full" 
                style={{ width: `${totalTF > 0 ? (falseCount / totalTF) * 100 : 0}%` }}
              ></div>
            </div>
          </div>
        );
        
      case "multiple_choice":
        const optionResults = results[question.id] || {};
        const totalResponses = Object.values(optionResults).reduce((sum, count) => sum + count, 0);
        
        return (
          <div className="mt-3 space-y-3">
            {question.options.map((option, index) => {
              const count = optionResults[option] || 0;
              const percentage = totalResponses > 0 ? Math.round((count / totalResponses) * 100) : 0;
              
              return (
                <div key={index}>
                  <div className="flex items-center justify-between mb-1">
                    <span>{option}</span>
                    <span>{count} ({percentage}%)</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div 
                      className="bg-alumni-blue h-2.5 rounded-full" 
                      style={{ width: `${percentage}%` }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        );
        
      case "open_ended":
        const responses = results[question.id] || [];
        
        return (
          <div className="mt-3 space-y-2">
            {responses.length > 0 ? (
              responses.map((response, index) => (
                <div key={index} className="p-3 bg-gray-50 rounded-lg">
                  <p className="text-gray-700">"{response}"</p>
                </div>
              ))
            ) : (
              <p className="text-gray-500 italic">No responses yet</p>
            )}
          </div>
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
            <p className="mt-4 text-gray-600">Loading survey results...</p>
          </div>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="bg-white rounded-3xl shadow-sm p-6 border border-gray-200">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-semibold mb-1">{survey.title}</h2>
            <p className="text-gray-600">{survey.description}</p>
          </div>
          
          <button
            onClick={() => navigate('/dashboard/list')}
            className="mt-4 md:mt-0 flex items-center space-x-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-200 transition-colors"
          >
            <ArrowLeft size={18} />
            <span>Back to Surveys</span>
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-blue-50 p-4 rounded-lg flex items-center space-x-3">
            <div className="bg-blue-100 p-2 rounded-full">
              <Users className="text-blue-600" size={20} />
            </div>
            <div>
              <p className="text-sm text-gray-500">Total Responses</p>
              <p className="text-xl font-semibold">{survey.responses}</p>
            </div>
          </div>
          
          <div className="bg-green-50 p-4 rounded-lg flex items-center space-x-3">
            <div className="bg-green-100 p-2 rounded-full">
              <Calendar className="text-green-600" size={20} />
            </div>
            <div>
              <p className="text-sm text-gray-500">Created On</p>
              <p className="text-xl font-semibold">{formatDate(survey.createdAt)}</p>
            </div>
          </div>
          
          <div className="bg-purple-50 p-4 rounded-lg flex items-center space-x-3">
            <div className="bg-purple-100 p-2 rounded-full">
              <Clock className="text-purple-600" size={20} />
            </div>
            <div>
              <p className="text-sm text-gray-500">Status</p>
              <p className="text-xl font-semibold flex items-center">
                <span className={`inline-block w-2 h-2 rounded-full mr-2 ${survey.isActive ? 'bg-green-500' : 'bg-red-500'}`}></span>
                {survey.isActive ? 'Active' : 'Closed'}
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-6">
          <div className="flex items-center space-x-2 mb-4">
            <BarChart2 size={20} className="text-alumni-blue" />
            <h3 className="text-xl font-semibold">Results</h3>
          </div>
          
          <div className="space-y-6">
            {survey.questions.map((question, index) => (
              <div key={question.id} className="border border-gray-200 rounded-lg p-4">
                <div className="mb-3">
                  <span className="text-sm font-medium text-gray-500">Question {index + 1}</span>
                  <h3 className="text-lg font-medium">{question.text}</h3>
                </div>
                
                {renderQuestionResults(question)}
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default SurveyResults;
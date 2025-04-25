import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Search, Plus, FileText, Users, Calendar } from "lucide-react";
import DashboardLayout from "../Layout";

const SurveyList = () => {
  const [surveys, setSurveys] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    // Simulate fetching surveys from an API
    setTimeout(() => {
      const mockSurveys = [
        {
          id: "survey123",
          title: "Alumni Feedback Survey",
          description: "Help us improve our alumni network by providing your feedback.",
          createdAt: "2024-08-15T10:30:00Z",
          deadline: "2025-12-31T23:59:59Z",
          responses: 24,
          isActive: new Date("2023-12-31T23:59:59Z") > new Date()
        },
        {
          id: "survey456",
          title: "Career Development Needs",
          description: "Tell us about your career development needs and how we can support you.",
          createdAt: "2023-08-10T14:15:00Z",
          deadline: "2023-11-30T23:59:59Z",
          responses: 18,
          isActive: new Date("2023-11-30T23:59:59Z") > new Date()
        },
        {
          id: "survey789",
          title: "Event Satisfaction",
          description: "Rate your experience with our recent alumni events.",
          createdAt: "2023-07-28T09:45:00Z",
          deadline: "2023-08-28T23:59:59Z",
          responses: 42,
          isActive: new Date("2023-08-28T23:59:59Z") > new Date()
        }
      ];
      
      // Check if any surveys have passed their deadline and update isActive
      const updatedSurveys = mockSurveys.map(survey => ({
        ...survey,
        isActive: new Date(survey.deadline) > new Date()
      }));
      
      setSurveys(updatedSurveys);
      setLoading(false);
    }, 1000);
  }, []);

  // Filter surveys based on search query
  const filteredSurveys = surveys.filter(survey => 
    survey.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    survey.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  if (loading) {
    return (
      <DashboardLayout>
        <div className="bg-white rounded-3xl shadow-sm p-6 border border-gray-200 flex justify-center items-center h-64">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-alumni-blue mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading surveys...</p>
          </div>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="bg-white rounded-3xl shadow-sm p-6 border border-gray-200">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold">Surveys</h2>
          
          <div className="mt-4 md:mt-0 flex flex-col sm:flex-row gap-3">
            <div className="relative">
              <input
                type="text"
                placeholder="Search surveys..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full sm:w-64 h-10 pl-10 pr-4 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-alumni-blue focus:border-transparent"
              />
              <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={16}
              />
            </div>
            
            <Link
              to="/dashboard/surveys/create"
              className="flex items-center justify-center space-x-2 bg-alumni-blue text-white px-4 py-2 rounded-md hover:bg-alumni-blue/90 transition-colors"
            >
              <Plus size={18} />
              <span>Create Survey</span>
            </Link>
          </div>
        </div>
        
        {filteredSurveys.length === 0 ? (
          <div className="text-center py-12 border border-dashed border-gray-300 rounded-lg">
            <FileText size={48} className="mx-auto text-gray-400 mb-4" />
            <h3 className="text-lg font-medium text-gray-700 mb-2">No surveys found</h3>
            <p className="text-gray-500 mb-4">Create your first survey to get started</p>
            <Link
              to="/dashboard/surveys/create"
              className="inline-flex items-center space-x-2 bg-alumni-blue text-white px-4 py-2 rounded-md hover:bg-alumni-blue/90 transition-colors"
            >
              <Plus size={18} />
              <span>Create Survey</span>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredSurveys.map(survey => (
              <div key={survey.id} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                <div className={`p-4 ${survey.isActive ? 'bg-green-50' : 'bg-gray-50'}`}>
                  <div className="flex justify-between items-start">
                    <h3 className="font-semibold text-lg truncate">{survey.title}</h3>
                    <span className={`text-xs px-2 py-1 rounded-full ${survey.isActive ? 'bg-green-100 text-green-800' : 'bg-gray-200 text-gray-700'}`}>
                      {survey.isActive ? 'Active' : 'Closed'}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mt-1 line-clamp-2">{survey.description}</p>
                </div>
                
                <div className="p-4 bg-white">
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                    <div className="flex items-center space-x-1">
                      <Calendar size={14} />
                      <span>{formatDate(survey.createdAt)}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users size={14} />
                      <span>{survey.responses} responses</span>
                    </div>
                  </div>
                  
                  <div className="flex space-x-2 flex-col sm:flex-row">
                    <Link
                      to={`/dashboard/surveys/${survey.id}`}
                      className="flex-1 text-center py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-md transition-colors text-sm font-medium mb-2 sm:mb-0"
                    >
                      View Results
                    </Link>
                    <Link
                      to={`/dashboard/surveys/answer/${survey.id}`}
                      className="flex-1 text-center py-2 bg-alumni-blue hover:bg-alumni-blue/90 text-white rounded-md transition-colors text-sm font-medium mb-2 sm:mb-0"
                    >
                      Take Survey (localStorage)
                    </Link>
                    <Link
                      to={`/dashboard/surveys/answer2/${survey.id}`}
                      className="flex-1 text-center py-2 bg-green-600 hover:bg-green-700 text-white rounded-md transition-colors text-sm font-medium"
                    >
                      Take Survey (API)
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default SurveyList;
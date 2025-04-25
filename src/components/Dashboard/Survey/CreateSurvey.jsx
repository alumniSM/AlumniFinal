import React, { useState } from "react";
import { Plus, Trash2, Save, Calendar } from "lucide-react";
import DashboardLayout from "../Layout";

const CreateSurvey = () => {
  const [surveyTitle, setSurveyTitle] = useState("");
  const [surveyDescription, setSurveyDescription] = useState("");
  const [surveyDeadline, setSurveyDeadline] = useState("");
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState("");
  const [currentQuestionType, setCurrentQuestionType] = useState("multiple_choice");
  const [options, setOptions] = useState([""]);  // For multiple choice questions
  const [isSubmitting, setIsSubmitting] = useState(false);

  const addQuestion = () => {
    if (!currentQuestion.trim()) return;
    
    const newQuestion = {
      id: Date.now(),
      text: currentQuestion,
      type: currentQuestionType,
      options: currentQuestionType === "multiple_choice" ? options.filter(opt => opt.trim()) : []
    };
    
    setQuestions([...questions, newQuestion]);
    setCurrentQuestion("");
    setCurrentQuestionType("multiple_choice");
    setOptions([""]);
  };

  const removeQuestion = (id) => {
    setQuestions(questions.filter(q => q.id !== id));
  };

  const addOption = () => {
    setOptions([...options, ""]);
  };

  const updateOption = (index, value) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };

  const removeOption = (index) => {
    if (options.length > 1) {
      const newOptions = [...options];
      newOptions.splice(index, 1);
      setOptions(newOptions);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!surveyTitle.trim() || questions.length === 0) return;
    
    setIsSubmitting(true);
    
    // Prepare survey data for submission
    const surveyData = {
      title: surveyTitle,
      description: surveyDescription,
      questions: questions,
      createdAt: new Date().toISOString(),
      deadline: surveyDeadline,
      responses: 0,
      isActive: new Date(surveyDeadline) > new Date()
    };
    
    console.log("Survey data to submit:", surveyData);
    
    // Here you would typically send the data to your backend
    // For now, we'll just simulate a successful submission
    setTimeout(() => {
      setIsSubmitting(false);
      // Reset form after successful submission
      setSurveyTitle("");
      setSurveyDescription("");
      setSurveyDeadline("");
      setQuestions([]);
      alert("Survey created successfully!");
    }, 1000);
  };

  const getQuestionTypeLabel = (type) => {
    switch (type) {
      case "multiple_choice": return "Multiple Choice";
      case "true_false": return "True/False";
      case "open_ended": return "Open-Ended";
      default: return type;
    }
  };

  return (
    <DashboardLayout>
      <div className="bg-white rounded-3xl shadow-sm p-6 border border-gray-200">
        <h2 className="text-2xl font-semibold mb-6">Create Survey</h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Survey Title and Description */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Survey Title
              </label>
              <input
                type="text"
                value={surveyTitle}
                onChange={(e) => setSurveyTitle(e.target.value)}
                className="w-full border border-gray-200 rounded-lg bg-gray-100 p-3 focus:outline-none focus:ring-1 focus:ring-alumni-blue"
                placeholder="Enter survey title"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Description
              </label>
              <textarea
                value={surveyDescription}
                onChange={(e) => setSurveyDescription(e.target.value)}
                rows={3}
                className="w-full border border-gray-200 rounded-lg bg-gray-100 p-3 focus:outline-none focus:ring-1 focus:ring-alumni-blue resize-none"
                placeholder="Enter survey description"
              ></textarea>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                <div className="flex items-center space-x-1">
                  <Calendar size={16} />
                  <span>Deadline</span>
                </div>
              </label>
              <input
                type="datetime-local"
                value={surveyDeadline}
                onChange={(e) => setSurveyDeadline(e.target.value)}
                className="w-full border border-gray-200 rounded-lg bg-gray-100 p-3 focus:outline-none focus:ring-1 focus:ring-alumni-blue"
                required
              />
              <p className="text-xs text-gray-500 mt-1">Survey will be automatically closed after this date</p>
            </div>
          </div>
          
          {/* Add Question Form */}
          <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
            <h3 className="text-lg font-medium mb-3">Add New Question</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Question Text
                </label>
                <input
                  type="text"
                  value={currentQuestion}
                  onChange={(e) => setCurrentQuestion(e.target.value)}
                  className="w-full border border-gray-200 rounded-lg bg-white p-3 focus:outline-none focus:ring-1 focus:ring-alumni-blue"
                  placeholder="Enter your question"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Question Type
                </label>
                <select
                  value={currentQuestionType}
                  onChange={(e) => setCurrentQuestionType(e.target.value)}
                  className="w-full border border-gray-200 rounded-lg bg-white p-3 focus:outline-none focus:ring-1 focus:ring-alumni-blue"
                >
                  <option value="multiple_choice">Multiple Choice</option>
                  <option value="true_false">True/False</option>
                  <option value="open_ended">Open-Ended</option>
                </select>
              </div>
              
              {currentQuestionType === "multiple_choice" && (
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Options
                  </label>
                  
                  {options.map((option, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <input
                        type="text"
                        value={option}
                        onChange={(e) => updateOption(index, e.target.value)}
                        className="flex-1 border border-gray-200 rounded-lg bg-white p-2 focus:outline-none focus:ring-1 focus:ring-alumni-blue"
                        placeholder={`Option ${index + 1}`}
                      />
                      <button
                        type="button"
                        onClick={() => removeOption(index)}
                        className="p-2 text-red-500 hover:bg-red-50 rounded-md"
                        disabled={options.length <= 1}
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  ))}
                  
                  <button
                    type="button"
                    onClick={addOption}
                    className="mt-2 flex items-center space-x-1 text-alumni-blue hover:text-alumni-blue/80"
                  >
                    <Plus size={16} />
                    <span>Add Option</span>
                  </button>
                </div>
              )}
              
              <button
                type="button"
                onClick={addQuestion}
                disabled={!currentQuestion.trim()}
                className="w-full bg-alumni-blue text-white py-2 rounded-md hover:bg-alumni-blue/90 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
              >
                Add Question
              </button>
            </div>
          </div>
          
          {/* Questions List */}
          {questions.length > 0 && (
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="text-lg font-medium mb-3">Survey Questions</h3>
              
              <div className="space-y-4">
                {questions.map((question, index) => (
                  <div key={question.id} className="bg-gray-50 p-4 rounded-lg relative">
                    <div className="flex justify-between items-start">
                      <div>
                        <span className="text-sm font-medium text-gray-500">Question {index + 1}</span>
                        <h4 className="text-md font-medium">{question.text}</h4>
                        <span className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded-full">
                          {getQuestionTypeLabel(question.type)}
                        </span>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeQuestion(question.id)}
                        className="text-red-500 hover:bg-red-50 p-1 rounded-md"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                    
                    {question.type === "multiple_choice" && question.options.length > 0 && (
                      <div className="mt-2 pl-4">
                        <span className="text-xs text-gray-500">Options:</span>
                        <ul className="list-disc pl-5 text-sm">
                          {question.options.map((opt, i) => (
                            <li key={i}>{opt}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {/* Submit Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              disabled={isSubmitting || !surveyTitle.trim() || questions.length === 0}
              className="flex items-center space-x-2 bg-alumni-blue text-white px-6 py-2 rounded-md hover:bg-alumni-blue/90 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
            >
              <Save size={18} />
              <span>{isSubmitting ? "Saving..." : "Save Survey"}</span>
            </button>
          </div>
        </form>
      </div>
    </DashboardLayout>
  );
};

export default CreateSurvey;
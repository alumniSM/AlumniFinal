import React, { useState, useEffect } from "react";
import DashboardLayout from "@/components/Dashboard/Layout";
import { Button } from "@/components/ui/button";
import { useParams, useNavigate } from "react-router-dom";

const UpdateInternship = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  
  const [formData, setFormData] = useState({
    title: "",
    type: "on-site",
    duration: "",
    startingDate: "",
    deadline: "",
    url: "",
    category: "paid",
    requirements: ""
  });

  // Fetch internship data based on ID
  useEffect(() => {
    // This would normally be an API call
    // Mock data for demonstration
    const internships = [
      {
        id: 1,
        title: "Software Development Intern",
        type: "remote",
        duration: "3 months",
        startingDate: "2024-06-01",
        deadline: "2024-05-01",
        url: "https://example.com/apply",
        category: "paid",
        requirements: "Currently pursuing a Bachelor's or Master's degree in Computer Science or related field\nStrong programming skills in one or more languages\nExperience with web development technologies"
      }
    ];

    const internshipId = parseInt(id);
    const internship = internships.find(i => i.id === internshipId);
    
    if (internship) {
      setFormData({
        title: internship.title,
        type: internship.type,
        duration: internship.duration,
        startingDate: internship.startingDate,
        deadline: internship.deadline,
        url: internship.url,
        category: internship.category,
        requirements: internship.requirements
      });
    }
    
    setIsLoading(false);
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically call an API to update the internship
    console.log('Updating internship with data:', formData);
    
    // Navigate back to internships page after successful update
    navigate('/dashboard/internships/my-posts');
  };

  if (isLoading) {
    return (
      <DashboardLayout>
        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          <p>Loading internship data...</p>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Update Internship</h2>
          <Button 
            variant="outline" 
            onClick={() => navigate('/dashboard/internships/my-posts')}
          >
            Cancel
          </Button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                Internship Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
                className="w-full h-10 px-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-alumni-blue focus:border-transparent"
              />
            </div>
            
            <div>
              <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-1">
                Type
              </label>
              <select
                id="type"
                name="type"
                value={formData.type}
                onChange={handleChange}
                required
                className="w-full h-10 px-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-alumni-blue focus:border-transparent"
              >
                <option value="on-site">On-site</option>
                <option value="remote">Remote</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="duration" className="block text-sm font-medium text-gray-700 mb-1">
                Duration
              </label>
              <input
                type="text"
                id="duration"
                name="duration"
                value={formData.duration}
                onChange={handleChange}
                required
                placeholder="e.g., 3 months"
                className="w-full h-10 px-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-alumni-blue focus:border-transparent"
              />
            </div>
            
            <div>
              <label htmlFor="startingDate" className="block text-sm font-medium text-gray-700 mb-1">
                Starting Date
              </label>
              <input
                type="date"
                id="startingDate"
                name="startingDate"
                value={formData.startingDate}
                onChange={handleChange}
                required
                className="w-full h-10 px-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-alumni-blue focus:border-transparent"
              />
            </div>
            
            <div>
              <label htmlFor="deadline" className="block text-sm font-medium text-gray-700 mb-1">
                Application Deadline
              </label>
              <input
                type="date"
                id="deadline"
                name="deadline"
                value={formData.deadline}
                onChange={handleChange}
                required
                className="w-full h-10 px-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-alumni-blue focus:border-transparent"
              />
            </div>
            
            <div>
              <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                Category
              </label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
                className="w-full h-10 px-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-alumni-blue focus:border-transparent"
              >
                <option value="paid">Paid</option>
                <option value="unpaid">Unpaid</option>
              </select>
            </div>

            <div>
              <label htmlFor="url" className="block text-sm font-medium text-gray-700 mb-1">
                Application URL
              </label>
              <input
                type="url"
                id="url"
                name="url"
                value={formData.url}
                onChange={handleChange}
                required
                placeholder="https://example.com/apply"
                className="w-full h-10 px-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-alumni-blue focus:border-transparent"
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="requirements" className="block text-sm font-medium text-gray-700 mb-1">
              Requirements
            </label>
            <textarea
              id="requirements"
              name="requirements"
              value={formData.requirements}
              onChange={handleChange}
              required
              rows={6}
              className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-alumni-blue focus:border-transparent"
              placeholder="List the requirements and qualifications for this internship..."
            />
          </div>
          
          <div className="flex justify-end">
            <Button 
              type="submit"
              className="bg-alumni-blue hover:bg-alumni-lightblue text-white"
            >
              Update Internship
            </Button>
          </div>
        </form>
      </div>
    </DashboardLayout>
  );
};

export default UpdateInternship;
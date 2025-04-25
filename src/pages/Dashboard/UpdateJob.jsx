import React, { useState } from "react";
import DashboardLayout from "@/components/Dashboard/Layout";
import { Button } from "@/components/ui/button";
import { useParams, useNavigate } from "react-router-dom";

const UpdateJob = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // In a real application, you would fetch the job details from an API
  // This is mock data for demonstration purposes
  const [formData, setFormData] = useState({
    company: "Google",
    title: "Product Designer",
    status: "Full - Time",
    salary: "45k",
    deadline: "2023-08-10", // Format for input type date
    description: "We are looking for a talented Product Designer to join our team. The ideal candidate will have experience in user interface design, user experience, and product development.",
    location: "San Francisco, CA (Remote Available)",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically call an API to update the job
    console.log('Updating job with data:', formData);
    
    // Navigate back to my jobs page after successful update
    navigate('/dashboard/jobs/my-posts');
  };

  return (
    <DashboardLayout>
      <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Update Job</h2>
          <Button 
            variant="outline" 
            onClick={() => navigate('/dashboard/jobs/my-posts')}
          >
            Cancel
          </Button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                Company Name
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                required
                className="w-full h-10 px-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-alumni-blue focus:border-transparent"
              />
            </div>
            
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                Job Title
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
              <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-1">
                Employment Status
              </label>
              <select
                id="status"
                name="status"
                value={formData.status}
                onChange={handleChange}
                required
                className="w-full h-10 px-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-alumni-blue focus:border-transparent"
              >
                <option value="Full - Time">Full - Time</option>
                <option value="Part - Time">Part - Time</option>
                <option value="Contract">Contract</option>
                <option value="Internship">Internship</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="salary" className="block text-sm font-medium text-gray-700 mb-1">
                Salary Range
              </label>
              <input
                type="text"
                id="salary"
                name="salary"
                value={formData.salary}
                onChange={handleChange}
                required
                className="w-full h-10 px-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-alumni-blue focus:border-transparent"
              />
            </div>
            
            <div>
              <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                Location
              </label>
              <input
                type="text"
                id="location"
                name="location"
                value={formData.location}
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
          </div>
          
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
              Job Description
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              rows={6}
              className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-alumni-blue focus:border-transparent"
            />
          </div>
          
          <div className="flex justify-end">
            <Button 
              type="submit"
              className="bg-alumni-blue hover:bg-alumni-lightblue text-white"
            >
              Update Job
            </Button>
          </div>
        </form>
      </div>
    </DashboardLayout>
  );
};

export default UpdateJob;
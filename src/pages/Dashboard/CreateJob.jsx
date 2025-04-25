import React, { useState, useRef } from "react";
import DashboardLayout from "@/components/Dashboard/Layout";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

const CreateJob = () => {
  const [formData, setFormData] = useState({
    title: "",
    employmentStatus: "Full Time",
    salary: "",
    location: "",
    applicationDeadline: "",
    url: "",
    responsibility: "",
    jobContext: "",
    education: "",
    additional: "",
  });
  
  const dateInputRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Here you would typically send the data to your backend
  };

  return (
    <DashboardLayout>
      <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
        <h2 className="text-xl font-bold mb-6">Create Job Post</h2>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Job Title
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Sr. UX Designer"
                className="w-full border rounded-md py-2 px-3"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Employee Status
              </label>
              <div className="relative">
                <select
                  name="employmentStatus"
                  value={formData.employmentStatus}
                  onChange={handleChange}
                  className="w-full border rounded-md py-2 px-3 appearance-none"
                >
                  <option value="Full Time">Full Time</option>
                  <option value="Part Time">Part Time</option>
                  <option value="Contract">Contract</option>
                  <option value="Freelance">Freelance</option>
                </select>
              </div>
            </div>

  

            <div>
              <label className="block text-sm text-gray-600 mb-1">Salary</label>
              <input
                type="text"
                name="salary"
                value={formData.salary}
                onChange={handleChange}
                placeholder="$45k"
                className="w-full border rounded-md py-2 px-3"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Location
              </label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="Gulsan 02, Dhaka"
                className="w-full border rounded-md py-2 px-3"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Application Deadline
              </label>
              <div className="relative">
                <input
                  type="date"
                  name="applicationDeadline"
                  value={formData.applicationDeadline}
                  onChange={handleChange}
                  ref={dateInputRef}
                  className="w-full border rounded-md py-2 px-3 pr-10"
                />
               
              </div>
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-1">URL</label>
              <input
                type="url"
                name="url"
                value={formData.url}
                onChange={handleChange}
                placeholder="http://www.zainiklab.com/dropyourcv"
                className="w-full border rounded-md py-2 px-3"
              />
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm text-gray-600 mb-1">
              Job Responsibility
            </label>
            <textarea
              name="responsibility"
              value={formData.responsibility}
              onChange={handleChange}
              rows={3}
              placeholder="Write description..."
              className="w-full border rounded-md p-3"
            ></textarea>
          </div>

          <div className="mb-6">
            <label className="block text-sm text-gray-600 mb-1">
              Job Context
            </label>
            <textarea
              name="jobContext"
              value={formData.jobContext}
              onChange={handleChange}
              rows={3}
              placeholder="Write description..."
              className="w-full border rounded-md p-3"
            ></textarea>
          </div>

          <div className="mb-6">
            <label className="block text-sm text-gray-600 mb-1">
              Educational Requirements
            </label>
            <textarea
              name="education"
              value={formData.education}
              onChange={handleChange}
              rows={3}
              placeholder="Write description..."
              className="w-full border rounded-md p-3"
            ></textarea>
          </div>

          <div className="mb-8">
            <label className="block text-sm text-gray-600 mb-1">
              Additional Requirements
            </label>
            <textarea
              name="additional"
              value={formData.additional}
              onChange={handleChange}
              rows={3}
              placeholder="Write description"
              className="w-full border rounded-md p-3"
            ></textarea>
          </div>

          <div className="flex space-x-4">
            <Button type="button" variant="outline">
              Draft
            </Button>
            <Button
              type="submit"
              className="bg-[#DBF2BD] hover:bg-[#c9e4a6] text-black"
            >
              Post
            </Button>
          </div>
        </form>
      </div>
    </DashboardLayout>
  );
};

export default CreateJob;

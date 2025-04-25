import React from "react";
import DashboardLayout from "@/components/Dashboard/Layout";
import { Button } from "@/components/ui/button";
import { useParams, useNavigate } from "react-router-dom";

const JobDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // In a real application, you would fetch the job details from an API
  // This is mock data for demonstration purposes
  const job = {
    id: parseInt(id),
    company: "Google",
    title: "Product Designer",
    status: "Full - Time",
    salary: "45k",
    deadline: "Sunday, August 10, 2023",
    applicationStatus: "Pending",
    description: "We are looking for a talented Product Designer to join our team. The ideal candidate will have experience in user interface design, user experience, and product development.",
    requirements: [
      "5+ years of experience in product design",
      "Strong portfolio demonstrating UI/UX skills",
      "Experience with design tools like Figma, Sketch, or Adobe XD",
      "Understanding of user-centered design principles",
      "Excellent communication and collaboration skills"
    ],
    location: "San Francisco, CA (Remote Available)",
    postedDate: "July 15, 2023"
  };

  return (
    <DashboardLayout>
      <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Job Details</h2>
          <div className="flex space-x-3">
            <Button 
              variant="outline" 
              onClick={() => navigate(`/dashboard/update-job/${id}`)}
              className="flex items-center space-x-2"
            >
              <span>Edit Job</span>
            </Button>
            <Button 
              onClick={() => navigate("/dashboard/jobs/my-posts")}
              className="flex items-center space-x-2"
            >
              <span>Back to My Jobs</span>
            </Button>
          </div>
        </div>

        <div className="mb-6">
          <div className="flex items-center mb-2">
            <div className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center text-lg font-bold mr-3">
              {job.company.charAt(0)}
            </div>
            <h3 className="text-xl font-semibold">{job.title}</h3>
          </div>
          <div className="text-gray-600 ml-13">{job.company} • {job.location}</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="text-sm text-gray-500 mb-1">Job Type</div>
            <div className="font-medium">{job.status}</div>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="text-sm text-gray-500 mb-1">Salary Range</div>
            <div className="font-medium">{job.salary}</div>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="text-sm text-gray-500 mb-1">Application Deadline</div>
            <div className="font-medium">{job.deadline}</div>
          </div>
        </div>

        <div className="mb-8">
          <h4 className="text-lg font-semibold mb-3">Job Description</h4>
          <p className="text-gray-700">{job.description}</p>
        </div>

        <div className="mb-8">
          <h4 className="text-lg font-semibold mb-3">Requirements</h4>
          <ul className="list-disc pl-5 space-y-2">
            {job.requirements.map((req, index) => (
              <li key={index} className="text-gray-700">{req}</li>
            ))}
          </ul>
        </div>

        <div className="border-t border-gray-200 pt-6">
          <div className="flex justify-between items-center">
            <div className="text-sm text-gray-500">Posted on: {job.postedDate}</div>
            <div>
              <Button className="bg-alumni-blue hover:bg-alumni-lightblue text-white">
                Apply Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default JobDetail;
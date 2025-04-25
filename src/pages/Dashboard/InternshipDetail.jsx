import React from "react";
import DashboardLayout from "@/components/Dashboard/Layout";
import { Button } from "@/components/ui/button";
import { useParams, useNavigate } from "react-router-dom";

const InternshipDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // Mock data for demonstration purposes
  const internship = {
    id: parseInt(id),
    company: "Google",
    title: "Software Development Intern",
    type: "Remote",
    duration: "3 months",
    startingDate: "2024-06-01",
    deadline: "2024-05-01",
    category: "Paid",
    url: "https://careers.google.com/jobs/results/",
    requirements: [
      "Currently pursuing a Bachelor's or Master's degree in Computer Science or related field",
      "Strong programming skills in one or more languages (e.g., Python, Java, JavaScript)",
      "Experience with web development technologies",
      "Excellent problem-solving and analytical skills",
      "Strong communication and teamwork abilities"
    ],
    description: "Join Google as a Software Development Intern and work on real-world projects that help create innovative technology solutions. You'll be part of a team that's passionate about making the web better for everyone."
  };

  return (
    <DashboardLayout>
      <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Internship Details</h2>
          <div className="flex space-x-3">
            <Button 
              variant="outline" 
              onClick={() => navigate(`/dashboard/update-internship/${id}`)}
              className="flex items-center space-x-2"
            >
              <span>Edit Internship</span>
            </Button>
            <Button 
              onClick={() => navigate("/dashboard/internships/my-posts")}
              className="flex items-center space-x-2"
            >
              <span>Back to My Internships</span>
            </Button>
          </div>
        </div>

        <div className="mb-6">
          <div className="flex items-center mb-2">
            <div className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center text-lg font-bold mr-3">
              {internship.company.charAt(0)}
            </div>
            <div>
              <h3 className="text-xl font-semibold">{internship.title}</h3>
              <div className="text-gray-600">{internship.company}</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="text-sm text-gray-500 mb-1">Type</div>
            <div className="font-medium">{internship.type}</div>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="text-sm text-gray-500 mb-1">Duration</div>
            <div className="font-medium">{internship.duration}</div>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="text-sm text-gray-500 mb-1">Category</div>
            <div className="font-medium">{internship.category}</div>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="text-sm text-gray-500 mb-1">Starting Date</div>
            <div className="font-medium">{new Date(internship.startingDate).toLocaleDateString()}</div>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="text-sm text-gray-500 mb-1">Application Deadline</div>
            <div className="font-medium">{new Date(internship.deadline).toLocaleDateString()}</div>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="text-sm text-gray-500 mb-1">Application URL</div>
            <a 
              href={internship.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-medium text-alumni-blue hover:underline"
            >
              Apply Here
            </a>
          </div>
        </div>

        <div className="mb-8">
          <h4 className="text-lg font-semibold mb-3">Description</h4>
          <p className="text-gray-700">{internship.description}</p>
        </div>

        <div className="mb-8">
          <h4 className="text-lg font-semibold mb-3">Requirements</h4>
          <ul className="list-disc pl-5 space-y-2">
            {internship.requirements.map((req, index) => (
              <li key={index} className="text-gray-700">{req}</li>
            ))}
          </ul>
        </div>

        <div className="border-t border-gray-200 pt-6">
          <div className="flex justify-between items-center">
            <div className="text-sm text-gray-500">
              Application Deadline: {new Date(internship.deadline).toLocaleDateString()}
            </div>
            <Button 
              className="bg-alumni-blue hover:bg-alumni-lightblue text-white"
              onClick={() => window.open(internship.url, '_blank')}
            >
              Apply Now
            </Button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default InternshipDetail;
import React from "react";
import { ArrowRight, MapPin, Clock } from "lucide-react";
import { Button } from "../../../components/ui/button";

const JobsComponent = () => {
  // Sample data based on CreateJob.jsx form structure
  const jobs = [
    {
      id: 1,
      title: "Product Designer",
      company: "Google",
      logo: "G",
      logoColor: "bg-blue-500",
      location: "Gulsan 02, Dhaka",
      employmentType: "Full Time",
      salary: "$45K/month",
      deadline: "Sunday, August 10, 2023",
      description: "The purpose of UX research is to correctly understand the user problem that you are trying to solve.",
      responsibility: "Lead the UX research team and conduct user interviews to gather insights for product development.",
      jobContext: "Working in a fast-paced environment with cross-functional teams to deliver user-centered designs.",
      education: "Bachelor's degree in Design, HCI, or related field.",
      additional: "3+ years of experience in UX research and design.",
      url: "http://www.google.com/careers/apply"
    },
    {
      id: 2,
      title: "Sr. UX Designer",
      company: "HubSpot",
      logo: "H",
      logoColor: "bg-orange-500",
      location: "Gulsan 02, Dhaka",
      employmentType: "Part Time",
      salary: "$60K/month",
      deadline: "Friday, September 15, 2023",
      responsibility: "Create wireframes, prototypes, and user flows for digital products.",
      jobContext: "Collaborating with product managers and engineers to implement design solutions.",
      education: "Master's degree in Interaction Design or equivalent experience.",
      additional: "Proficiency in Figma, Sketch, and Adobe Creative Suite.",
      url: "http://www.hubspot.com/careers/ux-designer"
    },
  ];

  return (
    <div className="bg-white rounded-3xl shadow-sm p-4 border border-gray-200">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Jobs</h2>
        <Button
          variant="link"
          className="text-alumni-blue hover:text-alumni-lightblue"
        >
          See All <ArrowRight size={14} className="ml-1" />
        </Button>
      </div>

      <div className="space-y-4">
        {jobs.map((job) => (
          <div key={job.id} className="border-b pb-4 last:border-0 last:pb-0">
            <div className="flex items-start">
              <div
                className={`w-10 h-10 ${job.logoColor} text-white rounded-md flex items-center justify-center text-lg font-bold mr-3`}
              >
                {job.logo}
              </div>

              <div className="flex-1">
                <h3 className="font-bold text-gray-800">{job.title}</h3>
                <div className="flex items-center text-gray-500 text-sm mt-1">
                  <span>{job.company}</span>
                </div>

                {job.description && (
                  <p className="text-sm text-gray-600 mt-2">
                    {job.description}
                  </p>
                )}

                <div className="flex flex-wrap gap-4 mt-2 text-sm text-gray-500">
                  <div className="flex items-center">
                    <Clock size={14} className="mr-1" />
                    {job.employmentType}
                  </div>
                  <div className="flex items-center">
                    <MapPin size={14} className="mr-1" />
                    {job.location}
                  </div>
                  <div>${job.salary}</div>
                </div>

                <div className="mt-3">
                  <Button size="sm" variant="outline" className="text-xs">
                    More Details
                  </Button>
                </div>
              </div>

              <div className="text-sm text-gray-400 text-right mt-1">
                <div>{job.deadline}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobsComponent;

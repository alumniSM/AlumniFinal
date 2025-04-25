import React, { useState } from "react";
import DashboardLayout from "@/components/Dashboard/Layout";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Edit, Trash, Eye, Search, ChevronLeft, ChevronRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const MyJobs = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const [searchQuery, setSearchQuery] = useState("");
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [jobToDelete, setJobToDelete] = useState(null);

  const jobs = [
    {
      id: 1,
      company: "Google",
      title: "Product Designer",
      status: "Full - Time",
      salary: "45k",
      deadline: "Sunday, August 10, 2023",
      applicationStatus: "Pending",
    },
    {
      id: 2,
      company: "HubSpot",
      title: "Product Designer",
      status: "Full - Time",
      salary: "45k",
      deadline: "Sunday, August 10, 2023",
      applicationStatus: "Approved",
    },
    {
      id: 3,
      company: "Flickr",
      title: "Product Designer",
      status: "Full - Time",
      salary: "45k",
      deadline: "Sunday, August 10, 2023",
      applicationStatus: "Canceled",
    },
    {
      id: 4,
      company: "Bubble",
      title: "Product Designer",
      status: "Full - Time",
      salary: "45k",
      deadline: "Sunday, August 10, 2023",
      applicationStatus: "Approved",
    },
    {
      id: 5,
      company: "Google",
      title: "Product Designer",
      status: "Full - Time",
      salary: "45k",
      deadline: "Sunday, August 10, 2023",
      applicationStatus: "Pending",
    },
  ];

  const getCompanyLogo = (company) => {
    switch (company) {
      case "Google":
        return (
          <div className="flex items-center">
            <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold mr-2">
              G
            </div>
            <span>{company}</span>
          </div>
        );
      case "HubSpot":
        return (
          <div className="flex items-center">
            <div className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-xs font-bold mr-2">
              H
            </div>
            <span>{company}</span>
          </div>
        );
      case "Flickr":
        return (
          <div className="flex items-center">
            <div className="w-6 h-6 bg-pink-500 text-white rounded-full flex items-center justify-center text-xs font-bold mr-2">
              F
            </div>
            <span>{company}</span>
          </div>
        );
      case "Bubble":
        return (
          <div className="flex items-center">
            <div className="w-6 h-6 bg-purple-500 text-white rounded-full flex items-center justify-center text-xs font-bold mr-2">
              B
            </div>
            <span>{company}</span>
          </div>
        );
      default:
        return company;
    }
  };

  const isJobExpired = (dateString) => {
    const jobDate = new Date(dateString);
    const today = new Date();
    return jobDate < today;
  };

  const getStatusBadge = (dateString) => {
    const isExpired = isJobExpired(dateString);
    if (isExpired) {
      return (
        <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-xs font-medium">
          Expired
        </span>
      );
    } else {
      return (
        <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
          Ongoing
        </span>
      );
    }
  };

  // Filter jobs based on search query
  const filteredJobs = jobs.filter((job) => {
    const searchLower = searchQuery.toLowerCase();
    return (
      job.company.toLowerCase().includes(searchLower) ||
      job.title.toLowerCase().includes(searchLower) ||
      job.status.toLowerCase().includes(searchLower)
    );
  });

  // Get current jobs
  const indexOfLastJob = currentPage * itemsPerPage;
  const indexOfFirstJob = indexOfLastJob - itemsPerPage;
  const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(filteredJobs.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <DashboardLayout>
      <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
        <h2 className="text-xl font-bold mb-6">My Post</h2>

        <div className="mb-6 relative">
          <input
            type="text"
            placeholder="Search jobs..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full h-10 pl-10 pr-4 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-alumni-blue focus:border-transparent"
          />
          <Search
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            size={16}
          />
        </div>

        <div className="min-h-[400px] flex flex-col">
          <div className="flex-grow overflow-auto">
            <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Company</TableHead>
              <TableHead>Job Title</TableHead>
              <TableHead>Employee Status</TableHead>
              <TableHead>Salary</TableHead>
              <TableHead>Application Deadline</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentJobs.map((job) => (
              <TableRow key={job.id}>
                <TableCell>{getCompanyLogo(job.company)}</TableCell>
                <TableCell>{job.title}</TableCell>
                <TableCell>{job.status}</TableCell>
                <TableCell>{job.salary}</TableCell>
                <TableCell>{job.deadline}</TableCell>
                <TableCell>{getStatusBadge(job.deadline)}</TableCell>
                <TableCell>
                  <div className="flex space-x-2">
                    <button 
                      className="p-1.5 text-blue-600 hover:bg-blue-50 rounded"
                      onClick={() => handleEdit(job.id)}
                    >
                      <Edit size={16} />
                    </button>
                    <button 
                      className="p-1.5 text-red-600 hover:bg-red-50 rounded"
                      onClick={() => openDeleteModal(job)}
                    >
                      <Trash size={16} />
                    </button>
                    <button 
                      className="p-1.5 text-gray-600 hover:bg-gray-50 rounded"
                      onClick={() => navigate(`/dashboard/job/${job.id}`)}
                    >
                      <Eye size={16} />
                    </button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
          </div>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between border-t border-gray-200 px-4 py-3 sm:px-6 mt-4">
          <div className="flex flex-1 justify-between sm:hidden">
            <Button
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
              variant="outline"
              size="sm"
              className="relative inline-flex items-center rounded-md border px-4 py-2 text-sm font-medium"
            >
              Previous
            </Button>
            <Button
              onClick={() => paginate(currentPage + 1)}
              disabled={currentPage === pageNumbers.length}
              variant="outline"
              size="sm"
              className="relative ml-3 inline-flex items-center rounded-md border px-4 py-2 text-sm font-medium"
            >
              Next
            </Button>
          </div>
          <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
            <div>
              <p className="text-sm text-gray-700">
                Showing <span className="font-medium">{indexOfFirstJob + 1}</span>{" "}
                to{" "}
                <span className="font-medium">
                  {Math.min(indexOfLastJob, filteredJobs.length)}
                </span>{" "}
                of <span className="font-medium">{filteredJobs.length}</span> results
              </p>
            </div>
            <div>
              <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
                <Button
                  onClick={() => paginate(currentPage - 1)}
                  disabled={currentPage === 1}
                  variant="outline"
                  size="icon"
                  className="relative inline-flex items-center rounded-l-md px-2 py-2"
                >
                  <ChevronLeft className="h-5 w-5" />
                </Button>
                {pageNumbers.map((number) => (
                  <Button
                    key={number}
                    onClick={() => paginate(number)}
                    variant={currentPage === number ? "default" : "outline"}
                    size="sm"
                    className="relative inline-flex items-center px-4 py-2"
                  >
                    {number}
                  </Button>
                ))}
                <Button
                  onClick={() => paginate(currentPage + 1)}
                  disabled={currentPage === pageNumbers.length}
                  variant="outline"
                  size="icon"
                  className="relative inline-flex items-center rounded-r-md px-2 py-2"
                >
                  <ChevronRight className="h-5 w-5" />
                </Button>
              </nav>
            </div>
          </div>
        </div>
        
        {/* Delete Confirmation Modal */}
        {showDeleteModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 max-w-md w-full">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-medium">Confirm Delete</h3>
                <button 
                  onClick={closeDeleteModal}
                  className="p-1 rounded-full hover:bg-gray-100"
                >
                  <X size={20} />
                </button>
              </div>
              <p className="mb-6">Are you sure you want to delete the job posting for "{jobToDelete?.title}" at {jobToDelete?.company}? This action cannot be undone.</p>
              <div className="flex justify-end space-x-3">
                <Button 
                  variant="outline" 
                  onClick={closeDeleteModal}
                >
                  Cancel
                </Button>
                <Button 
                  variant="destructive" 
                  onClick={handleDelete}
                  className="bg-red-600 hover:bg-red-700 text-white"
                >
                  Delete
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
  
  // Handler functions
  function handleEdit(jobId) {
    navigate(`/dashboard/update-job/${jobId}`);
  }
  
  function openDeleteModal(job) {
    setJobToDelete(job);
    setShowDeleteModal(true);
  }
  
  function closeDeleteModal() {
    setShowDeleteModal(false);
    setJobToDelete(null);
  }
  
  function handleDelete() {
    // Here you would typically call an API to delete the job
    console.log('Deleting job:', jobToDelete);
    
    // Filter out the deleted job from the jobs array
    // In a real application, you would update the state with the new jobs array
    // const updatedJobs = jobs.filter(job => job.id !== jobToDelete.id);
    // setJobs(updatedJobs);
    
    // Close the modal
    closeDeleteModal();
  }
};

export default MyJobs;

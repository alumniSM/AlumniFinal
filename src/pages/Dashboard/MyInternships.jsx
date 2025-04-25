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

const MyInternships = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const [searchQuery, setSearchQuery] = useState("");
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [internshipToDelete, setInternshipToDelete] = useState(null);

  const internships = [
    {
      id: 1,
      title: "Software Development Intern",
      type: "Remote",
      duration: "3 months",
      startingDate: "2024-06-01",
      deadline: "2024-05-01",
      category: "Paid",
      status: "Active",
    },
    {
      id: 2,
      title: "Marketing Intern",
      type: "On-site",
      duration: "6 months",
      startingDate: "2024-07-01",
      deadline: "2024-06-01",
      category: "Unpaid",
      status: "Active",
    },
  ];

  const isInternshipExpired = (dateString) => {
    const internshipDate = new Date(dateString);
    const today = new Date();
    return internshipDate < today;
  };

  const getStatusBadge = (dateString) => {
    const isExpired = isInternshipExpired(dateString);
    if (isExpired) {
      return (
        <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-xs font-medium">
          Expired
        </span>
      );
    } else {
      return (
        <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
          Active
        </span>
      );
    }
  };

  // Filter internships based on search query
  const filteredInternships = internships.filter((internship) => {
    const searchLower = searchQuery.toLowerCase();
    return (
      internship.title.toLowerCase().includes(searchLower) ||
      internship.type.toLowerCase().includes(searchLower) ||
      internship.category.toLowerCase().includes(searchLower)
    );
  });

  // Get current internships
  const indexOfLastInternship = currentPage * itemsPerPage;
  const indexOfFirstInternship = indexOfLastInternship - itemsPerPage;
  const currentInternships = filteredInternships.slice(
    indexOfFirstInternship,
    indexOfLastInternship
  );

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(filteredInternships.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <DashboardLayout>
      <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">My Internships</h2>
          <Button
            onClick={() => navigate("/dashboard/create-internship")}
            className="bg-alumni-blue hover:bg-alumni-lightblue text-white"
          >
            Create Internship
          </Button>
        </div>

        <div className="mb-6 relative">
          <input
            type="text"
            placeholder="Search internships..."
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
                  <TableHead>Title</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Duration</TableHead>
                  <TableHead>Starting Date</TableHead>
                  <TableHead>Deadline</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {currentInternships.map((internship) => (
                  <TableRow key={internship.id}>
                    <TableCell>{internship.title}</TableCell>
                    <TableCell>{internship.type}</TableCell>
                    <TableCell>{internship.duration}</TableCell>
                    <TableCell>{new Date(internship.startingDate).toLocaleDateString()}</TableCell>
                    <TableCell>{new Date(internship.deadline).toLocaleDateString()}</TableCell>
                    <TableCell>{internship.category}</TableCell>
                    <TableCell>{getStatusBadge(internship.deadline)}</TableCell>
                    <TableCell>
                      <div className="flex space-x-2">
                        <button
                          className="p-1.5 text-blue-600 hover:bg-blue-50 rounded"
                          onClick={() => navigate(`/dashboard/update-internship/${internship.id}`)}
                        >
                          <Edit size={16} />
                        </button>
                        <button
                          className="p-1.5 text-red-600 hover:bg-red-50 rounded"
                          onClick={() => {
                            setInternshipToDelete(internship);
                            setShowDeleteModal(true);
                          }}
                        >
                          <Trash size={16} />
                        </button>
                        <button
                          className="p-1.5 text-gray-600 hover:bg-gray-50 rounded"
                          onClick={() => navigate(`/dashboard/internship/${internship.id}`)}
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
                Showing <span className="font-medium">{indexOfFirstInternship + 1}</span>{" "}
                to{" "}
                <span className="font-medium">
                  {Math.min(indexOfLastInternship, filteredInternships.length)}
                </span>{" "}
                of <span className="font-medium">{filteredInternships.length}</span> results
              </p>
            </div>
            <div>
              <nav
                className="isolate inline-flex -space-x-px rounded-md shadow-sm"
                aria-label="Pagination"
              >
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
                  onClick={() => setShowDeleteModal(false)}
                  className="p-1 rounded-full hover:bg-gray-100"
                >
                  <X size={20} />
                </button>
              </div>
              <p className="mb-6">
                Are you sure you want to delete the internship posting for "{internshipToDelete?.title}"?
                This action cannot be undone.
              </p>
              <div className="flex justify-end space-x-3">
                <Button variant="outline" onClick={() => setShowDeleteModal(false)}>
                  Cancel
                </Button>
                <Button
                  variant="destructive"
                  onClick={() => {
                    // Here you would typically call an API to delete the internship
                    console.log('Deleting internship:', internshipToDelete);
                    setShowDeleteModal(false);
                  }}
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
};

export default MyInternships;
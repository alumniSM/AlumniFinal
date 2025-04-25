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
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";

const AllInternships = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const [searchQuery, setSearchQuery] = useState("");

  const internships = [
    {
      id: 1,
      title: "Software Development Intern",
      company: "Google",
      type: "Remote",
      duration: "3 months",
      startingDate: "2024-06-01",
      deadline: "2024-05-01",
      category: "Paid",
    },
    {
      id: 2,
      title: "Marketing Intern",
      company: "HubSpot",
      type: "On-site",
      duration: "6 months",
      startingDate: "2024-07-01",
      deadline: "2024-06-01",
      category: "Unpaid",
    },
    {
      id: 3,
      title: "UI/UX Design Intern",
      company: "Flickr",
      type: "Remote",
      duration: "4 months",
      startingDate: "2024-06-15",
      deadline: "2024-05-15",
      category: "Paid",
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
      default:
        return company;
    }
  };

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
      internship.company.toLowerCase().includes(searchLower) ||
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
        <h2 className="text-xl font-bold mb-6">All Internships</h2>

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
                  <TableHead>Company</TableHead>
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
                    <TableCell>{getCompanyLogo(internship.company)}</TableCell>
                    <TableCell>{internship.title}</TableCell>
                    <TableCell>{internship.type}</TableCell>
                    <TableCell>{internship.duration}</TableCell>
                    <TableCell>{new Date(internship.startingDate).toLocaleDateString()}</TableCell>
                    <TableCell>{new Date(internship.deadline).toLocaleDateString()}</TableCell>
                    <TableCell>{internship.category}</TableCell>
                    <TableCell>{getStatusBadge(internship.deadline)}</TableCell>
                    <TableCell>
                      <Button
                        variant="link"
                        className="text-alumni-blue"
                        onClick={() => navigate(`/dashboard/internship/${internship.id}`)}
                      >
                        View Details
                      </Button>
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
      </div>
    </DashboardLayout>
  );
};

export default AllInternships;
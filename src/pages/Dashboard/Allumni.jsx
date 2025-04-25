import React, { useState } from "react";
import DashboardLayout from "@/components/Dashboard/Layout";
import {
  Search,
  X,
  ChevronDown,
  Facebook,
  Linkedin,
  Eye,
  ChevronLeft,
  ChevronRight,
  Filter,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";


const Alumni = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const [filters, setFilters] = useState({
    department: "",
    entryYear: ""
  });

  const alumni = [
    {
      id: 1,
      name: "Adam Gulstar",
      avatar: "/lovable-uploads/7078fcd7-e342-4b76-bc43-5d2323481caa.png",
      batch: "08",
      entryYear: "1998",
      department: "Computer Science Engineering",
    },
    {
      id: 2,
      name: "Adam Gulstar",
      avatar: "/lovable-uploads/7078fcd7-e342-4b76-bc43-5d2323481caa.png",
      batch: "08",
      entryYear: "1998",
      department: "Computer Science Engineering",
    },
    {
      id: 3,
      name: "Adam Gulstar",
      avatar: "/lovable-uploads/a00e9b12-5918-4849-999f-9aea57ba767e.png",
      batch: "08",
      entryYear: "1998",
      department: "Computer Science Engineering",
    },
    {
      id: 4,
      name: "Adam Gulstar",
      avatar: "/lovable-uploads/7078fcd7-e342-4b76-bc43-5d2323481caa.png",
      batch: "08",
      entryYear: "1998",
      department: "Computer Science Engineering",
    },
    {
      id: 5,
      name: "Adam Gulstar",
      avatar: "/lovable-uploads/81658885-b0aa-4c4f-85b7-d2e30da85575.png",
      batch: "08",
      entryYear: "1998",
      department: "Computer Science Engineering",
    },
    {
      id: 6,
      name: "Adam Gulstar",
      avatar: "/lovable-uploads/a00e9b12-5918-4849-999f-9aea57ba767e.png",
      batch: "08",
      entryYear: "1998",
      department: "Computer Science Engineering",
    },
    {
      id: 7,
      name: "Adam Gulstar",
      avatar: "/lovable-uploads/81658885-b0aa-4c4f-85b7-d2e30da85575.png",
      batch: "08",
      entryYear: "1998",
      department: "Computer Science Engineering",
    },
    {
      id: 8,
      name: "Adam Gulstar",
      avatar: "/lovable-uploads/a00e9b12-5918-4849-999f-9aea57ba767e.png",
      batch: "08",
      entryYear: "1998",
      department: "Computer Science Engineering",
    },
  ];

  // Filter alumni based on search query and filters
  const filteredAlumni = alumni.filter((person) => {
    const matchesSearch = person.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDepartment = !filters.department || person.department === filters.department;
    const matchesEntryYear = !filters.entryYear || person.entryYear === filters.entryYear;
    
    return matchesSearch && matchesDepartment && matchesEntryYear;
  });

  // Get departments and entry years for filter dropdowns
  const departments = [...new Set(alumni.map(person => person.department))];
  const entryYears = [...new Set(alumni.map(person => person.entryYear))];

  // Get current alumni for pagination
  const indexOfLastAlumni = currentPage * itemsPerPage;
  const indexOfFirstAlumni = indexOfLastAlumni - itemsPerPage;
  const currentAlumni = filteredAlumni.slice(indexOfFirstAlumni, indexOfLastAlumni);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(filteredAlumni.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1); // Reset to first page when search changes
  };

  // Handle filter changes
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: value
    }));
    setCurrentPage(1); // Reset to first page when filters change
  };

  // Clear search
  const clearSearch = () => {
    setSearchQuery("");
  };

  // Toggle filters visibility
  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  // Apply filters
  const applyFilters = () => {
    // Filters are already applied on change, this is just for the button
    console.log("Applying filters:", filters);
  };

  return (
    <DashboardLayout>
      <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
        <h2 className="text-xl font-bold mb-6">Alumni List</h2>

        {/* Search Bar */}
        <div className="relative mb-6">
          <div className="bg-white border rounded-md shadow-sm flex items-center">
            <Search className="ml-3 mr-1 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Search Alumni..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="py-2 px-2 w-full outline-none"
            />
            {searchQuery && (
              <button className="px-2 text-gray-400" onClick={clearSearch}>
                <X size={18} />
              </button>
            )}
            <button 
              className="bg-gray-800 text-white p-2 rounded-r-md"
              onClick={toggleFilters}
            >
              <Filter size={18} />
            </button>
          </div>
        </div>

        {/* Collapsible Filters */}
        {showFilters && (
          <div className="mb-6 border border-gray-200 rounded-md p-4 bg-gray-50">
            <h3 className="text-sm font-medium mb-4">Filter your search</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-xs text-gray-500 mb-1">
                  Department
                </label>
                <div className="relative">
                  <select 
                    name="department"
                    value={filters.department}
                    onChange={handleFilterChange}
                    className="w-full border rounded-md py-2 px-3 pr-8 appearance-none"
                  >
                    <option value="">All Departments</option>
                    {departments.map((dept, index) => (
                      <option key={index} value={dept}>{dept}</option>
                    ))}
                  </select>
                  <ChevronDown
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                    size={16}
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs text-gray-500 mb-1">
                  Entry Year
                </label>
                <div className="relative">
                  <select 
                    name="entryYear"
                    value={filters.entryYear}
                    onChange={handleFilterChange}
                    className="w-full border rounded-md py-2 px-3 pr-8 appearance-none"
                  >
                    <option value="">All Years</option>
                    {entryYears.map((year, index) => (
                      <option key={index} value={year}>{year}</option>
                    ))}
                  </select>
                  <ChevronDown
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                    size={16}
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-end">
              <Button 
                className="bg-[#DBF2BD] hover:bg-[#c9e4a6] text-black"
                onClick={applyFilters}
              >
                Search Now
              </Button>
            </div>
          </div>
        )}

        {/* Alumni List Table */}
        <div className="min-h-[400px] flex flex-col">
          <div className="flex-grow overflow-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Full Name</TableHead>
                  <TableHead>Entry Year</TableHead>
                  <TableHead>Department</TableHead>
                  <TableHead>Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {currentAlumni.length > 0 ? (
                  currentAlumni.map((person) => (
                    <TableRow key={person.id}>
                      <TableCell>
                        <div className="flex items-center">
                          <img
                            src={person.avatar}
                            alt={person.name}
                            className="w-8 h-8 rounded-full mr-2"
                          />
                          {person.name}
                        </div>
                      </TableCell>
                      <TableCell>{person.entryYear}</TableCell>
                      <TableCell>{person.department}</TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <button className="p-1.5 bg-blue-100 text-blue-600 rounded-full hover:bg-blue-200">
                            <Facebook size={14} />
                          </button>
                          <button className="p-1.5 bg-purple-100 text-purple-600 rounded-full hover:bg-purple-200">
                            <Linkedin size={14} />
                          </button>
                          <button className="p-1.5 bg-gray-100 text-gray-600 rounded-full hover:bg-gray-200">
                            <Eye size={14} />
                          </button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={4} className="text-center py-8 text-gray-500">
                      No alumni found matching your search criteria
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </div>
        
        {/* Pagination */}
        {filteredAlumni.length > 0 && (
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
                  Showing <span className="font-medium">{indexOfFirstAlumni + 1}</span>{" "}
                  to{" "}
                  <span className="font-medium">
                    {Math.min(indexOfLastAlumni, filteredAlumni.length)}
                  </span>{" "}
                  of <span className="font-medium">{filteredAlumni.length}</span> results
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
        )}
      </div>
    </DashboardLayout>
  );
};

export default Alumni;

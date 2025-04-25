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
import { Edit, Trash, Eye, Search, ChevronLeft, ChevronRight, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

const MyEvent = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const [searchQuery, setSearchQuery] = useState("");
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [eventToDelete, setEventToDelete] = useState(null);
  const events = [
    {
      id: 1,
      title: "Annual Alumni Meetup",
      category: "in-person",
      date: "Sunday, August 10, 2025",
      location: "University Main Campus",
      status: "Upcoming",
      image: "https://picsum.photos/400/300?random=1",
    },
    {
      id: 2,
      title: "Career Development Workshop",
      category: "online",
      date: "Monday, August 15, 2023",
      url: "https://zoom.us/j/123456789",
      status: "Active",
      image: "https://picsum.photos/400/300?random=2",
    },
    {
      id: 3,
      title: "Networking Night",
      category: "in-person",
      date: "Friday, August 25, 2023",
      location: "Downtown Conference Center",
      status: "Upcoming",
      image: "https://picsum.photos/400/300?random=3",
    },
    {
      id: 4,
      title: "Industry Expert Panel",
      category: "online",
      date: "Tuesday, September 5, 2023",
      url: "https://teams.microsoft.com/l/meetup-join/123",
      status: "Draft",
      image: "https://picsum.photos/400/300?random=4",
    },
    {
      id: 5,
      title: "Alumni Sports Tournament",
      category: "in-person",
      date: "Saturday, September 16, 2023",
      location: "University Sports Complex",
      status: "Upcoming",
      image: "https://picsum.photos/400/300?random=5",
    },
  ];

  // Check if event is expired or upcoming based on date
  const isEventExpired = (dateString) => {
    const eventDate = new Date(dateString);
    const today = new Date();
    return eventDate < today;
  };

  // Filter events based on search query
  const filteredEvents = events.filter((event) => {
    const searchLower = searchQuery.toLowerCase();
    return (
      event.title.toLowerCase().includes(searchLower) ||
      event.category.toLowerCase().includes(searchLower) ||
      (event.location && event.location.toLowerCase().includes(searchLower)) ||
      (event.url && event.url.toLowerCase().includes(searchLower))
    );
  });

  // Get current events for pagination
  const indexOfLastEvent = currentPage * itemsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - itemsPerPage;
  const currentEvents = filteredEvents.slice(indexOfFirstEvent, indexOfLastEvent);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(filteredEvents.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  };

  const getStatusBadge = (dateString) => {
    const isExpired = isEventExpired(dateString);
    if (isExpired) {
      return (
        <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-xs font-medium">
          Expired
        </span>
      );
    } else {
      return (
        <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-medium">
          Upcoming
        </span>
      );
    }
  };

  const getLocationOrUrl = (event) => {
    if (event.category === "online") {
      return (
        <Button 
          variant="link" 
          className="text-alumni-blue p-0 h-auto" 
          onClick={() => window.open(event.url, '_blank', 'noopener,noreferrer')}
        >
          Visit Link
        </Button>
      );
    } else {
      return event.location;
    }
  };
  
  const handleEdit = (eventId) => {
    navigate(`/dashboard/update-event/${eventId}`);
  };
  
  const openDeleteModal = (event) => {
    setEventToDelete(event);
    setShowDeleteModal(true);
  };
  
  const closeDeleteModal = () => {
    setShowDeleteModal(false);
    setEventToDelete(null);
  };
  
  const handleDelete = () => {
    // Here you would typically call an API to delete the event
    console.log('Deleting event:', eventToDelete);
    
    // Filter out the deleted event from the events array
    const updatedEvents = events.filter(event => event.id !== eventToDelete.id);
    // In a real application, you would update the state with the new events array
    // setEvents(updatedEvents);
    
    // Close the modal
    closeDeleteModal();
  };

  return (
    <DashboardLayout>
      <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
        <h2 className="text-xl font-bold mb-6">My Events</h2>

        <div className="mb-6 relative">
          <input
            type="text"
            placeholder="Search events..."
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
              <TableHead>Event Title</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Event Date</TableHead>
              <TableHead>Location/URL</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentEvents.map((event) => (
              <TableRow key={event.id}>
                <TableCell className="font-medium">{event.title}</TableCell>
                <TableCell>
                  {event.category === "online" ? (
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                      Online
                    </span>
                  ) : (
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                      In-Person
                    </span>
                  )}
                </TableCell>
                <TableCell>{event.date}</TableCell>
                <TableCell>{getLocationOrUrl(event)}</TableCell>
                <TableCell>{getStatusBadge(event.date)}</TableCell>
                <TableCell>
                  <div className="flex space-x-2">
                    <button 
                      className="p-1.5 text-blue-600 hover:bg-blue-50 rounded"
                      onClick={() => handleEdit(event.id)}
                    >
                      <Edit size={16} />
                    </button>
                    <button 
                      className="p-1.5 text-red-600 hover:bg-red-50 rounded"
                      onClick={() => openDeleteModal(event)}
                    >
                      <Trash size={16} />
                    </button>
                    <button 
                      className="p-1.5 text-gray-600 hover:bg-gray-50 rounded"
                      onClick={() => navigate(`/dashboard/event/${event.id}`)}
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
                Showing <span className="font-medium">{indexOfFirstEvent + 1}</span>{" "}
                to{" "}
                <span className="font-medium">
                  {Math.min(indexOfLastEvent, filteredEvents.length)}
                </span>{" "}
                of <span className="font-medium">{filteredEvents.length}</span> results
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
              <p className="mb-6">Are you sure you want to delete the event "{eventToDelete?.title}"? This action cannot be undone.</p>
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
};

export default MyEvent;
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import DashboardLayout from '@/components/Dashboard/Layout';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar, MapPin, Globe } from 'lucide-react';

const EventDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // In a real application, you would fetch the event data based on the ID
  // For now, we'll use mock data similar to what's in MyEvent.jsx
  const events = [
    {
      id: 1,
      title: "Annual Alumni Meetup",
      category: "in-person",
      date: "Sunday, August 10, 2025",
      location: "University Main Campus",
      status: "Upcoming",
      image: "https://picsum.photos/400/300?random=1",
      description: "Join us for our annual alumni gathering where you can reconnect with old friends, make new connections, and hear about the latest developments at the university."
    },
    {
      id: 2,
      title: "Career Development Workshop",
      category: "online",
      date: "Monday, August 15, 2023",
      url: "https://zoom.us/j/123456789",
      status: "Active",
      image: "https://picsum.photos/400/300?random=2",
      description: "Enhance your career prospects with our interactive workshop featuring industry experts who will share insights on current job market trends and opportunities."
    },
    {
      id: 3,
      title: "Networking Night",
      category: "in-person",
      date: "Friday, August 25, 2023",
      location: "Downtown Conference Center",
      status: "Upcoming",
      image: "https://picsum.photos/400/300?random=3",
      description: "An evening dedicated to expanding your professional network with fellow alumni and industry professionals in a relaxed and friendly environment."
    },
    {
      id: 4,
      title: "Industry Expert Panel",
      category: "online",
      date: "Tuesday, September 5, 2023",
      url: "https://teams.microsoft.com/l/meetup-join/123",
      status: "Draft",
      image: "https://picsum.photos/400/300?random=4",
      description: "Listen to and engage with a panel of industry leaders as they discuss current trends, challenges, and opportunities in their respective fields."
    },
    {
      id: 5,
      title: "Alumni Sports Tournament",
      category: "in-person",
      date: "Saturday, September 16, 2023",
      location: "University Sports Complex",
      status: "Upcoming",
      image: "https://picsum.photos/400/300?random=5",
      description: "Participate in or cheer on your fellow alumni in various sporting events. A day of friendly competition and fun for all skill levels."
    },
  ];

  // Find the event with the matching ID
  const event = events.find(e => e.id === parseInt(id));

  // Check if event is expired or upcoming based on date
  const isEventExpired = (dateString) => {
    const eventDate = new Date(dateString);
    const today = new Date();
    return eventDate < today;
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

  if (!event) {
    return (
      <DashboardLayout>
        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          <div className="flex items-center mb-6">
            <Button 
              variant="outline" 
              size="sm" 
              className="mr-4"
              onClick={() => navigate('/dashboard/events/my-events')}
            >
              <ArrowLeft size={16} className="mr-2" /> Back
            </Button>
            <h2 className="text-xl font-bold">Event Not Found</h2>
          </div>
          <p>The event you're looking for doesn't exist or has been removed.</p>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
        <div className="flex items-center mb-6">
        
          <h2 className="text-xl font-bold">{event.title}</h2>
          <div className="ml-auto">
            {getStatusBadge(event.date)}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-6">
            <div className="rounded-lg overflow-hidden h-64 bg-gray-100">
              {event.image ? (
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  No image available
                </div>
              )}
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Description</h3>
              <p className="text-gray-700">{event.description}</p>
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-4">Event Details</h3>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <Calendar size={20} className="text-alumni-blue mr-3 mt-0.5" />
                <div>
                  <p className="font-medium">Date & Time</p>
                  <p className="text-gray-600">{event.date}</p>
                </div>
              </div>

              <div className="flex items-start">
                {event.category === 'online' ? (
                  <>
                    <Globe size={20} className="text-alumni-blue mr-3 mt-0.5" />
                    <div>
                      <p className="font-medium">Online Event</p>
                      <a 
                        href={event.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-alumni-blue hover:underline"
                      >
                        Join Meeting
                      </a>
                    </div>
                  </>
                ) : (
                  <>
                    <MapPin size={20} className="text-alumni-blue mr-3 mt-0.5" />
                    <div>
                      <p className="font-medium">Location</p>
                      <p className="text-gray-600">{event.location}</p>
                    </div>
                  </>
                )}
              </div>

              <div className="flex items-start">
                <div className="w-5 h-5 rounded-full bg-alumni-blue mr-3 mt-0.5 flex items-center justify-center text-white">
                  <span className="text-xs">C</span>
                </div>
                <div>
                  <p className="font-medium">Category</p>
                  <p className="text-gray-600">
                    {event.category === "online" ? (
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                        Online
                      </span>
                    ) : (
                      <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                        In-Person
                      </span>
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default EventDetail;
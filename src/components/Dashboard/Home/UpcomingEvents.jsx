import React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "../../../components/ui/button";

const EventCard = ({ event }) => {
  return (
    <div className="border-b pb-4 last:border-0 last:pb-0">
      <div className="flex items-start space-x-3">
        <div className="w-10 h-10 flex-shrink-0">
          <img
            src={event.image}
            alt={event.title}
            className="w-full h-full object-cover rounded-full"
          />
        </div>

        <div className="flex-1">
          <h3 className="font-bold text-gray-800">{event.title}</h3>
          <div className="flex items-center text-gray-500 text-sm mt-1">
            <span>{event.date}</span>
          </div>
          
          {event.category === 'online' ? (
            <div className="text-sm text-gray-500 mt-1">
              <a href={event.url} className="text-alumni-blue hover:underline" target="_blank" rel="noopener noreferrer">
                Join Online Meeting
              </a>
            </div>
          ) : (
            <div className="text-sm text-gray-500 mt-1">{event.location}</div>
          )}
          
          {event.description && (
            <div className="text-sm text-gray-600 mt-2 line-clamp-2">{event.description}</div>
          )}
          
          <div className="flex flex-wrap gap-2 mt-2">
            <span className="text-xs px-2 py-0.5 rounded bg-gray-100 text-gray-600">
              {event.category === 'online' ? 'Online' : 'In-Person'}
            </span>
           
          </div>

          <div className="mt-3">
            <Button size="sm" variant="outline" className="text-xs">
              {event.category === 'online' ? 'Join Meeting' : 'Reservation'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

const UpcomingEvents = () => {
  const events = [
    {
      id: 1,
      title: "Zaialumni yearly cricket fiesta 2023 for the first time.",
      date: "January 24, 10:00 AM",
      category: "in-person",
      location: "22",
      description: "Join us for the annual cricket fiesta with alumni from all batches. Food and refreshments will be provided.",
      image: "https://picsum.photos/400/300?random=1",
      
    },
    {
      id: 2,
      title: "Virtual Alumni Networking Session",
      date: "February 15, 6:00 PM",
      category: "online",
      url: "https://zoom.us/j/123456789",
      description: "Connect with fellow alumni in this virtual networking session. Share your experiences and build professional connections.",
      image: "https://picsum.photos/400/300?random=2",
     
    },
    {
      id: 3,
      title: "Career Development Workshop",
      date: "March 10, 2:00 PM",
      category: "in-person",
      location: "@ University Auditorium",
      description: "Learn essential skills for career advancement from industry experts. Certificate will be provided to all participants.",
      image: "https://picsum.photos/400/300?random=3",
   
    },
  ];

  return (
    <div className="bg-white rounded-3xl shadow-sm p-6 border border-gray-200">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Upcoming Events</h2>
        <Button
          variant="link"
          className="text-alumni-blue hover:text-alumni-lightblue"
        >
          See All <ArrowRight size={14} className="ml-1" />
        </Button>
      </div>

      <div className="space-y-3">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
};

export default UpcomingEvents;

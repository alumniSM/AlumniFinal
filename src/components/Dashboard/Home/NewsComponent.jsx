import React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "../../../components/ui/button";

const NewsComponent = () => {
  // Sample news data - in a real app, this would come from an API
  const newsItems = [
    {
      id: 1,
      title: "Alumni Association Annual Meeting",
      date: "June 15, 2023",
      description: "Join us for the annual meeting where we'll discuss achievements and future plans for our alumni community.",
      image: "https://picsum.photos/400/300?random=10",
      status: "Publish"
    },
    {
      id: 2,
      title: "New Scholarship Program Launched",
      date: "May 28, 2023",
      description: "We're excited to announce a new scholarship program for children of alumni members pursuing higher education.",
      image: "https://picsum.photos/400/300?random=11",
      status: "Publish"
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Latest News</h2>
        <Button variant="ghost" size="sm" className="text-green-600 hover:text-green-700 flex items-center">
          View All <ArrowRight size={16} className="ml-1" />
        </Button>
      </div>

      <div className="space-y-4">
        {newsItems.map((news) => (
          <div key={news.id} className="border-b pb-4 last:border-0 last:pb-0">
            <div className="flex items-start space-x-3">
              <div className="w-10 h-10 flex-shrink-0">
                <img
                  src={news.image}
                  alt={news.title}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>

              <div className="flex-1">
                <h3 className="font-bold text-gray-800">{news.title}</h3>
                <div className="flex items-center text-gray-500 text-sm mt-1">
                  <span>{news.date}</span>
                </div>
                
                {news.description && (
                  <div className="text-sm text-gray-600 mt-2 line-clamp-2">{news.description}</div>
                )}
                
                <div className="mt-3">
                  <Button size="sm" variant="outline" className="text-xs">
                    Read More
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsComponent;
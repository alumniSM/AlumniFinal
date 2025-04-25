import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import DashboardLayout from '@/components/Dashboard/Layout';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar } from 'lucide-react';

const NewsDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // Mock data for news items (in a real app, you would fetch this from an API)
  const newsItems = [
    {
      id: 1,
      title: 'Alumni Association Launches New Website',
      status: 'Published',
      date: '2023-05-15',
      image: 'https://picsum.photos/400/300?random=2',
      content: 'The Alumni Association is proud to announce the launch of our new website. This platform has been designed to better serve our alumni community with improved features and a more user-friendly interface. The new site includes an events calendar, job board, news section, and enhanced networking capabilities.'
    },
    {
      id: 2,
      title: 'Annual Alumni Reunion Scheduled for October',
      status: 'Published',
      date: '2023-05-10',
      image: 'https://picsum.photos/400/300?random=8',
      content: 'Mark your calendars! Our annual alumni reunion is scheduled for October 15-17, 2023. This year\'s event will feature networking sessions, campus tours, keynote speakers, and a gala dinner. Early bird registration is now open with special rates available until July 31.'
    },
    {
      id: 3,
      title: 'New Scholarship Program Announced',
      status: 'Deactivated',
      date: '2023-05-05',
      image: 'https://picsum.photos/400/300?random=5',
      content: 'The Alumni Association is launching a new scholarship program to support current students. The program will provide financial assistance to students demonstrating academic excellence and financial need. Alumni contributions to this fund are tax-deductible and will directly impact the educational journey of deserving students.'
    }
  ];

  // Find the news item with the matching ID
  const newsItem = newsItems.find(item => item.id === parseInt(id));

  if (!newsItem) {
    return (
      <DashboardLayout>
        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
          <div className="flex items-center mb-6">
            <Button 
              variant="outline" 
              size="sm" 
              className="mr-4"
              onClick={() => navigate('/dashboard/news')}
            >
              <ArrowLeft size={16} className="mr-2" /> Back
            </Button>
            <h2 className="text-xl font-bold">News Not Found</h2>
          </div>
          <p>The news article you're looking for doesn't exist or has been removed.</p>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
        <div className="flex items-center mb-6">
          <Button 
            variant="outline" 
            size="sm" 
            className="mr-4"
            onClick={() => navigate('/dashboard/news')}
          >
            <ArrowLeft size={16} className="mr-2" /> Back
          </Button>
          <h2 className="text-xl font-bold">{newsItem.title}</h2>
          <div className="ml-auto">
            <span className={`px-3 py-1 rounded-full text-xs font-medium ${newsItem.status === 'Published' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
              {newsItem.status}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-6">
            <div className="rounded-lg overflow-hidden h-64 bg-gray-100">
              {newsItem.image ? (
                <img 
                  src={newsItem.image} 
                  alt={newsItem.title} 
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  No image available
                </div>
              )}
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Content</h3>
              <p className="text-gray-700">{newsItem.content}</p>
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-4">News Details</h3>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <Calendar size={20} className="text-alumni-blue mr-3 mt-0.5" />
                <div>
                  <p className="font-medium">Published Date</p>
                  <p className="text-gray-600">{newsItem.date}</p>
                </div>
              </div>


            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default NewsDetail;
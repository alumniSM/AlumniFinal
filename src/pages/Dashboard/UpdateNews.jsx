import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import DashboardLayout from '@/components/Dashboard/Layout';
import { Button } from '@/components/ui/button';

const UpdateNews = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    content: '',
    status: 'Published',
    image: null
  });
  
  const [imagePreview, setImagePreview] = useState(null);

  // Mock data for news items (in a real app, you would fetch this from an API)
  const newsItems = [
    {
      id: 1,
      title: 'Alumni Association Launches New Website',
   
      status: 'Published',
      date: '2023-05-15',
      image: '/lovable-uploads/placeholder-news.jpg',
      content: 'The Alumni Association is proud to announce the launch of our new website. This platform has been designed to better serve our alumni community with improved features and a more user-friendly interface. The new site includes an events calendar, job board, news section, and enhanced networking capabilities.'
    },
    {
      id: 2,
      title: 'Annual Alumni Reunion Scheduled for October',

      status: 'Published',
      date: '2023-05-10',
      image: '/lovable-uploads/placeholder-news.jpg',
      content: 'Mark your calendars! Our annual alumni reunion is scheduled for October 15-17, 2023. This year\'s event will feature networking sessions, campus tours, keynote speakers, and a gala dinner. Early bird registration is now open with special rates available until July 31.'
    },
    {
      id: 3,
      title: 'New Scholarship Program Announced',
    
      status: 'Deactivated',
      date: '2023-05-05',
      image: '/lovable-uploads/placeholder-news.jpg',
      content: 'The Alumni Association is launching a new scholarship program to support current students. The program will provide financial assistance to students demonstrating academic excellence and financial need. Alumni contributions to this fund are tax-deductible and will directly impact the educational journey of deserving students.'
    }
  ];

  useEffect(() => {
    // In a real application, you would fetch the news data from an API
    const newsItem = newsItems.find(item => item.id === parseInt(id));
    if (newsItem) {
      setFormData({
        title: newsItem.title,
     
        content: newsItem.content,
        status: newsItem.status,
        image: null
      });
      
      // Set image preview from the URL
      if (newsItem.image) {
        setImagePreview(newsItem.image);
      }
    } else {
      // Handle case where news item is not found
      console.error('News item not found');
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleImageDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    handleImageFile(file);
  };

  const handleImageSelect = (e) => {
    const file = e.target.files[0];
    handleImageFile(file);
  };

  const handleImageFile = (file) => {
    if (file) {
      setFormData(prev => ({
        ...prev,
        image: file
      }));
      
      const reader = new FileReader();
      reader.onload = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // In a real application, you would send the updated data to an API
    console.log('Updating news with data:', formData);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      // Navigate back to news list after successful update
      navigate('/dashboard/news');
    }, 1000);
  };

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
          <h2 className="text-xl font-bold">Update News</h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 gap-6">
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-alumni-blue"
              />
            </div>

           

            <div>
              <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-1">
                Content
              </label>
              <textarea
                id="content"
                name="content"
                value={formData.content}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-alumni-blue"
              ></textarea>
            </div>

            <div>
              <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-1">
                Status
              </label>
              <select
                id="status"
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-alumni-blue"
              >
                <option value="Published">Published</option>
                <option value="Deactivated">Deactivated</option>
                
              </select>
            </div>

            <div>
              <label htmlFor="image" className="block text-sm font-medium text-gray-700 mb-1">
                Upload Image (jpg, jpeg, png)
              </label>
              <div 
                className="border-2 border-dashed border-gray-300 rounded-md p-6 flex flex-col items-center justify-center cursor-pointer"
                onDrop={handleImageDrop}
                onDragOver={handleDragOver}
                onClick={() => document.getElementById('image-upload').click()}
              >
                {imagePreview ? (
                  <div className="relative w-full flex justify-center">
                    <img src={imagePreview} alt="Preview" className="max-h-40 mb-4" />
                    <button 
                      type="button"
                      className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center shadow-md hover:bg-red-600 transition-colors"
                      onClick={(e) => {
                        e.stopPropagation(); // Prevent triggering the parent onClick
                        setImagePreview(null);
                        setFormData(prev => ({
                          ...prev,
                          image: null
                        }));
                      }}
                    >
                      ×
                    </button>
                  </div>
                ) : (
                  <>
                    <svg className="w-12 h-12 text-gray-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                    <p className="text-gray-500">Drag & drop files here</p>
                  </>
                )}
                <input 
                  id="image-upload"
                  type="file" 
                  accept="image/jpeg,image/png,image/jpg"
                  className="hidden"
                  onChange={handleImageSelect}
                />
              </div>
            </div>
          </div>

          <div className="flex justify-end space-x-3">
            <Button 
              type="button" 
              variant="outline"
              onClick={() => navigate('/dashboard/news')}
            >
              Cancel
            </Button>
            <Button 
              type="submit" 
              disabled={isLoading}
              className="bg-alumni-blue hover:bg-blue-700 text-white"
            >
              {isLoading ? 'Updating...' : 'Update News'}
            </Button>
          </div>
        </form>
      </div>
    </DashboardLayout>
  );
};

export default UpdateNews;
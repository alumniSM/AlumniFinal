import React, { useState, useRef } from 'react';
import { Upload } from 'lucide-react';
import DashboardLayout from '../../components/Dashboard/Layout';

const CreateEvent = () => {
  const [eventData, setEventData] = useState({
    title: '',
    date: new Date(),
    category: '',
    location: '',
    url: '',
    description: ''
  });
  const [locationError, setLocationError] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const fileInputRef = useRef(null);

  const validateUrl = (url) => {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEventData(prev => ({
      ...prev,
      [name]: value
    }));
    
    if (name === 'url' && value) {
      setLocationError(validateUrl(value) ? '' : 'Please enter a valid URL');
    }
  };

  const handleImageSelect = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  };

  const removeImage = () => {
    setSelectedImage(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Event Data:', eventData);
    console.log('Selected Image:', selectedImage);
  };

  return (
    <DashboardLayout>
      <div className="bg-white rounded-3xl shadow-sm p-6 border border-gray-200">
        <h2 className="text-2xl font-semibold mb-6">Create Event</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Event Title
              </label>
              <input
                type="text"
                name="title"
                value={eventData.title}
                onChange={handleInputChange}
                className="w-full border border-gray-200 rounded-lg bg-gray-100 p-3 focus:outline-none focus:ring-1 focus:ring-alumni-blue"
                placeholder="Enter event title"
                required
              />
            </div>
  
            <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Event Date
                </label>
                <input
                  type="datetime-local"
                  name="date"
                  value={eventData.date}
                  onChange={handleInputChange}
                  className="w-full border border-gray-200 rounded-lg bg-gray-100 p-3 focus:outline-none focus:ring-1 focus:ring-alumni-blue"
                  required
                />
              </div>
  
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Event Category
                </label>
                <select
                  name="category"
                  value={eventData.category}
                  onChange={handleInputChange}
                  className="w-full border border-gray-200 rounded-lg bg-gray-100 p-3 focus:outline-none focus:ring-1 focus:ring-alumni-blue"
                  required
                >
                  <option value="">Select Category</option>
                  <option value="online">Online</option>
                  <option value="in-person">In-Person</option>
                </select>
              </div>
            </div>
  
            {eventData.category === 'online' && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Meeting URL
                </label>
                <input
                  type="url"
                  name="url"
                  value={eventData.url}
                  onChange={handleInputChange}
                  className={`w-full border border-gray-200 rounded-lg bg-gray-100 p-3 focus:outline-none focus:ring-1 focus:ring-alumni-blue ${locationError ? 'border-red-500' : ''}`}
                  placeholder="Enter meeting URL (e.g., https://zoom.us/...)"
                  required
                />
                {locationError && <p className="text-red-500 text-sm mt-1">{locationError}</p>}
              </div>
            )}
            {eventData.category === 'in-person' && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Location
                </label>
                <input
                  type="text"
                  name="location"
                  value={eventData.location}
                  onChange={handleInputChange}
                  className="w-full border border-gray-200 rounded-lg bg-gray-100 p-3 focus:outline-none focus:ring-1 focus:ring-alumni-blue"
                  placeholder="Enter event location"
                  required
                />
              </div>
            )}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Description
              </label>
              <textarea
                name="description"
                value={eventData.description}
                onChange={handleInputChange}
                rows={4}
                className="w-full border border-gray-200 rounded-lg bg-gray-100 p-3 focus:outline-none focus:ring-1 focus:ring-alumni-blue resize-none"
                placeholder="Enter event description"
                required
              ></textarea>
            </div>
  
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Upload Images
              </label>
              <div
                onClick={() => fileInputRef.current.click()}
                className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center cursor-pointer hover:border-alumni-blue transition-colors"
              >
                {selectedImage ? (
                  <div className="relative">
                    <img
                      src={selectedImage}
                      alt="Event image"
                      className="w-full h-48 object-contain rounded-lg bg-gray-50"
                    />
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        removeImage();
                      }}
                      className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1"
                    >
                      ×
                    </button>
                  </div>
                ) : (
                  <div className="h-48 flex flex-col items-center justify-center">
                    <Upload size={24} className="text-gray-400 mb-2" />
                    <p className="text-sm text-gray-500">Drag & drop an image here</p>
                  </div>
                )}
              </div>
              <input
                type="file"
                hidden
                ref={fileInputRef}
                onChange={handleImageSelect}
                accept="image/*"
                
              />
            </div>
          </div>
  
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-alumni-blue text-white px-6 py-2 rounded-md hover:bg-alumni-blue/90 transition-colors"
            >
              Publish Now
            </button>
          </div>
        </form>
      </div>
    </DashboardLayout>
  );
};

export default CreateEvent;
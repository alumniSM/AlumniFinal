import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, Plus, Edit, Trash2, Eye, ChevronLeft, ChevronRight, X } from 'lucide-react';
import DashboardLayout from '../../components/Dashboard/Layout';

const AllNews = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [newsToDelete, setNewsToDelete] = useState(null);
  const itemsPerPage = 5;
  
  // Mock data for news items
  const [newsItems, setNewsItems] = useState([
    {
      id: 1,
      title: 'Alumni Association Launches New Website',
      status: 'Published',
      date: '2023-05-15',
      image: 'https://picsum.photos/400/300?random=2'
    },
    {
      id: 2,
      title: 'Annual Alumni Reunion Scheduled for October',
      status: 'Published',
      date: '2023-05-10',
      image: 'https://picsum.photos/400/300?random=7'
    },
    {
      id: 3,
      title: 'New Scholarship Program Announced',
      status: 'Deactivated',
      date: '2023-05-05',
      image: 'https://picsum.photos/400/300?random=3'
    }
  ]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredNews = newsItems.filter(news =>
    news.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Calculate pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredNews.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredNews.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleEdit = (id) => {
    // Navigate to edit page (you would create an UpdateNews component)
    navigate(`/dashboard/news/update/${id}`);
  };
  
  const openDeleteModal = (news) => {
    setNewsToDelete(news);
    setShowDeleteModal(true);
  };
  
  const closeDeleteModal = () => {
    setShowDeleteModal(false);
    setNewsToDelete(null);
  };
  
  const handleDelete = () => {
    // Here you would typically call an API to delete the news
    console.log('Deleting news:', newsToDelete);
    
    // Filter out the deleted news from the news array
    setNewsItems(newsItems.filter(item => item.id !== newsToDelete.id));
    
    // Close the modal
    closeDeleteModal();
  };
  
  const handleView = (id) => {
    navigate(`/dashboard/news/${id}`);
  };

  return (
    <DashboardLayout>
      <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">All News</h2>
          <Link 
            to="/dashboard/news/create" 
            className="flex items-center px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
          >
            <Plus size={18} className="mr-1" />
            Add News
          </Link>
        </div>
        
        <div className="mb-6 relative">
          <input
            type="text"
            placeholder="Search news..."
            className="w-full h-10 pl-10 pr-4 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-alumni-blue focus:border-transparent"
            value={searchTerm}
            onChange={handleSearch}
          />
          <Search
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            size={16}
          />
        </div>
      
      <div className="min-h-[400px] flex flex-col">
        <div className="flex-grow overflow-auto">
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr className="bg-gray-50">
                <th className="py-3 px-4 border-b text-left">Image</th>
                <th className="py-3 px-4 border-b text-left">Title</th>
                <th className="py-3 px-4 border-b text-left">Status</th>
                <th className="py-3 px-4 border-b text-left">Date</th>
                <th className="py-3 px-4 border-b text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentItems.length > 0 ? (
                currentItems.map(news => (
                  <tr key={news.id} className="hover:bg-gray-50">
                    <td className="py-3 px-4 border-b">
                      <img 
                        src={news.image || 'http://example.com/images/placeholder.png'} 
                        alt={news.title}
                        className="w-12 h-12 object-cover rounded"
                      />
                    </td>
                    <td className="py-3 px-4 border-b font-medium">{news.title}</td>
                    <td className="py-3 px-4 border-b">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${news.status === 'Published' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                        {news.status}
                      </span>
                    </td>
                    <td className="py-3 px-4 border-b">{news.date}</td>
                    <td className="py-3 px-4 border-b">
                      <div className="flex space-x-2">
                        <button 
                          className="p-1.5 text-blue-600 hover:bg-blue-50 rounded"
                          title="Edit"
                          onClick={() => handleEdit(news.id)}
                        >
                          <Edit size={16} />
                        </button>
                        <button 
                          className="p-1.5 text-red-600 hover:bg-red-50 rounded"
                          title="Delete"
                          onClick={() => openDeleteModal(news)}
                        >
                          <Trash2 size={16} />
                        </button>
                        <button 
                          className="p-1.5 text-gray-600 hover:bg-gray-50 rounded"
                          title="View"
                          onClick={() => handleView(news.id)}
                        >
                          <Eye size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="py-4 px-4 text-center text-gray-500">
                    No news items found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
        {/* Pagination */}
        {filteredNews.length > 0 && (
          <div className="flex items-center justify-between border-t border-gray-200 px-4 py-3 sm:px-6 mt-4">
            <div className="flex flex-1 justify-between sm:hidden">
              <button
                onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="relative inline-flex items-center rounded-md border px-4 py-2 text-sm font-medium"
              >
                Previous
              </button>
              <button
                onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
                className="relative ml-3 inline-flex items-center rounded-md border px-4 py-2 text-sm font-medium"
              >
                Next
              </button>
            </div>
            <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
              <div>
                <p className="text-sm text-gray-700">
                  Showing <span className="font-medium">{indexOfFirstItem + 1}</span>{" "}
                  to{" "}
                  <span className="font-medium">
                    {Math.min(indexOfLastItem, filteredNews.length)}
                  </span>{" "}
                  of <span className="font-medium">{filteredNews.length}</span> results
                </p>
              </div>
              <div>
                <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
                  <button
                    onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                    disabled={currentPage === 1}
                    className="relative inline-flex items-center rounded-l-md px-2 py-2"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  
                  {[...Array(totalPages)].map((_, index) => (
                    <button
                      key={index}
                      onClick={() => handlePageChange(index + 1)}
                      className={`relative inline-flex items-center px-4 py-2 ${currentPage === index + 1 ? 'bg-green-600 text-white' : 'text-gray-700 hover:bg-gray-100'}`}
                    >
                      {index + 1}
                    </button>
                  ))}
                  
                  <button
                    onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                    disabled={currentPage === totalPages}
                    className="relative inline-flex items-center rounded-r-md px-2 py-2"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </nav>
              </div>
            </div>
          </div>
        )}
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
            <p className="mb-6">Are you sure you want to delete the news "{newsToDelete?.title}"? This action cannot be undone.</p>
            <div className="flex justify-end space-x-3">
              <button 
                className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50"
                onClick={closeDeleteModal}
              >
                Cancel
              </button>
              <button 
                className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
                onClick={handleDelete}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    
    </DashboardLayout>
  );
};

export default AllNews;
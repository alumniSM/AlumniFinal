import React, { useState, useRef, useEffect } from "react";
import { Image, Video, MoreVertical, Heart, MessageSquare, Edit, Trash2, X } from "lucide-react";

const PostComponent = () => {
  const [postText, setPostText] = useState("");
  const [activeMenu, setActiveMenu] = useState(null); 
  const [editingPost, setEditingPost] = useState(null);
  const [editText, setEditText] = useState("");
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(null);
  const [selectedImages, setSelectedImages] = useState([]);
  const fileInputRef = useRef(null);
  const menuRef = useRef(null);
  const [posts, setPosts] = useState([
    {
      id: 1,
      author: {
        name: "David Gilmour",
        avatar: "https://picsum.photos/400/300?random=5",
        timestamp: "6 hours ago",
      },
      content:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using. It is a long established fact that a reader will be distracted by the readable content of a page try when looking at its layout. The point of using oy Lorem Ipsum is that it has a more-or-less. page try when looking at fact that a reader. 😊",
      likes: 12300,
      comments: 1200,
    },
    {
      id: 2,
      author: {
        name: "Jimmy Anderson",
        avatar: "https://picsum.photos/400/300?random=6",
        timestamp: "6 hours ago",
      },
      content:
        "It is a long established fact that a reader will be distracted by the readable content of a page try when looking, established fact that a reader will be distracted by the readable content. 😐",
      media: [
        "https://picsum.photos/400/300?random=7",
        "https://picsum.photos/400/300?random=8",
      ],
      likes: 500,
      comments: 120,
    },
  ]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setActiveMenu(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleCreatePost = () => {
    if (!postText.trim() && selectedImages.length === 0) return;

    const newPost = {
      id: posts.length + 1,
      author: {
        name: "Atik Shahriar Shanto",
        avatar: "/lovable-uploads/81658885-b0aa-4c4f-85b7-d2e30da85575.png",
        timestamp: "Just now",
      },
      content: postText,
      likes: 0,
      comments: 0,
    };
    
    if (selectedImages.length > 0) {
      newPost.media = selectedImages;
    }

    setPosts([newPost, ...posts]);
    setPostText("");
    setSelectedImages([]);
  };

  const toggleMenu = (postId) => {
    setActiveMenu(activeMenu === postId ? null : postId);
  };

  const handleEditPost = (post) => {
    setEditingPost(post.id);
    setEditText(post.content);
    setActiveMenu(null);
  };

  const saveEditedPost = () => {
    if (!editText.trim()) return;
    
    setPosts(posts.map(post => 
      post.id === editingPost 
        ? { ...post, content: editText } 
        : post
    ));
    
    setEditingPost(null);
    setEditText("");
  };

  const cancelEdit = () => {
    setEditingPost(null);
    setEditText("");
  };

  const confirmDeletePost = (postId) => {
    setShowDeleteConfirm(postId);
    setActiveMenu(null);
  };

  const deletePost = (postId) => {
    setPosts(posts.filter(post => post.id !== postId));
    setShowDeleteConfirm(null);
  };

  const cancelDelete = () => {
    setShowDeleteConfirm(null);
  };

  const handleImageSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImages([imageUrl]);
    }
  };

  const removeImage = (index) => {
    setSelectedImages(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="">
      {/* Create Post */}
      <div className="bg-white rounded-3xl shadow-sm p-5 border border-gray-200">
        <h2 className="text-lg font-semibold mb-4">Create Post</h2>
        <div className="flex-col  space-x-3 space-y-4">
          <div className="flex-col space-y-4">
            <div className="flex space-x-3">
              <img
                src="https://picsum.photos/400/300?random=9"
                alt="User Avatar"
                className="w-10 h-10 rounded-full"
              />
              <div>
                <h3 className="font-semibold">User name</h3>
          
              </div>
            </div>
            
            <div className="flex-1">
              <textarea
                className="w-full border border-gray-200 rounded-lg   bg-gray-100 p-3 focus:outline-none focus:ring-1 focus:ring-alumni-blue resize-none"
                placeholder="What's on your mind?"
                rows={5}
                value={postText}
                onChange={(e) => setPostText(e.target.value)}
              ></textarea>

              {selectedImages.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {selectedImages.map((img, index) => (
                    <div key={index} className="relative">
                      <img 
                        src={img} 
                        alt={`Selected ${index}`} 
                        className="w-1/2 max-h-60 object-contain rounded-md" 
                      />
                      <button 
                        onClick={() => removeImage(index)}
                        className="absolute -top-2 right bg-red-500 text-white rounded-full p-1"
                      >
                        <X size={14} />
                      </button>
                    </div>
                  ))}
                </div>
              )}
              <div className="flex justify-between items-center mt-3">
                <div className="flex space-x-2">
  
                  <p className=" font-semibold text-gray-500">Add to your Post:</p>
                  <button 
                    className="text-gray-500 hover:text-gray-700"
                    onClick={() => fileInputRef.current.click()}
                  >
                    <input 
                      type="file" 
                      hidden 
                      ref={fileInputRef}
                      onChange={handleImageSelect}
                      accept="image/*"
                    />
                    <Image size={20} /> 
                  </button>
                 
                </div>
  
                <button
                  onClick={handleCreatePost}
                  className="bg-alumni-blue text-white px-4 py-1 rounded-md hover:bg-alumni-blue/90 transition-colors"
                >
                  Post
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Delete Confirmation Modal */}
      {showDeleteConfirm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[9999] overflow-hidden">
          <div className="bg-white rounded-lg p-6 max-w-sm w-full">
            <h3 className="text-lg font-semibold mb-4">Delete Post</h3>
            <p className="text-gray-600 mb-6">Are you sure you want to delete this post? This action cannot be undone.</p>
            <div className="flex justify-end space-x-3">
              <button
                onClick={cancelDelete}
                className="px-4 py-2 border border-gray-300 rounded-md text-gray-600 hover:bg-gray-100"
              >
                Cancel
              </button>
              <button
                onClick={() => deletePost(showDeleteConfirm)}
                className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Posts List */}
      {posts.map((post) => (
        <div key={post.id} className="bg-white rounded-xl border border-gray-200 shadow-sm p-4 mt-6">
          <div className="flex justify-between items-start">
            <div className="flex space-x-3">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-10 h-10 rounded-full"
              />
              <div>
                <h3 className="font-semibold">{post.author.name}</h3>
                <p className="text-xs text-gray-500">{post.author.timestamp}</p>
              </div>
            </div>
            <div className="relative" ref={menuRef}>
              <button 
                className="text-gray-400 hover:text-gray-600"
                onClick={() => toggleMenu(post.id)}
              >
                <MoreVertical size={18} />
              </button>
              
              {activeMenu === post.id && (
                <div className="absolute right-0 mt-1 w-36 bg-white rounded-lg shadow-lg z-10 border border-gray-200">
                  <button 
                    className="flex items-center space-x-2 w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100 rounded-t-lg"
                    onClick={() => handleEditPost(post)}
                  >
                    <Edit size={16} />
                    <span>Edit</span>
                  </button>
                  <button 
                    className="flex items-center space-x-2 w-full px-4 py-2 text-left text-red-500 hover:bg-gray-100 rounded-b-lg"
                    onClick={() => confirmDeletePost(post.id)}
                  >
                    <Trash2 size={16} />
                    <span>Delete</span>
                  </button>
                </div>
              )}
            </div>
          </div>

          <div className="mt-3">
            {editingPost === post.id ? (
              <div className="space-y-3">
                <textarea
                  className="w-full border border-gray-200 rounded-lg bg-gray-100 p-3 focus:outline-none focus:ring-1 focus:ring-alumni-blue resize-none"
                  rows={4}
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                ></textarea>
                <div className="flex space-x-2 justify-end">
                  <button
                    onClick={cancelEdit}
                    className="px-3 py-1 border border-gray-300 rounded-md text-gray-600 hover:bg-gray-100"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={saveEditedPost}
                    className="px-3 py-1 bg-alumni-blue text-white rounded-md hover:bg-alumni-blue/90"
                  >
                    Save
                  </button>
                </div>
              </div>
            ) : (
              <p className="text-gray-700 whitespace-pre-wrap">{post.content}</p>
            )}

            {post.media && post.media.length > 0 && (
              <div className="mt-3">
                <img
                  src={post.media[0]}
                  alt="Post media"
                  className="rounded-md w-full max-h-96 object-contain"
                />
              </div>
            )}
          </div>

          {/* <div className="flex items-center justify-between mt-4 pt-3 border-t">
            <button className="flex items-center space-x-1 text-red-500 hover:text-red-600">
              <Heart size={18} />
              <span>{post.likes.toLocaleString()}</span>
            </button>

            <button className="flex items-center space-x-1 text-gray-500 hover:text-gray-600">
              <MessageSquare size={18} />
              <span>{post.comments.toLocaleString()}</span>
            </button>
          </div> */}
        </div>
      ))}
    </div>
  );
};

export default PostComponent;


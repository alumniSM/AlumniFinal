import React, { useState, useRef } from "react";
import DashboardLayout from "@/components/Dashboard/Layout";
import { Search, Send, Image, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Messages = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentMessage, setCurrentMessage] = useState("");
  const [activeContact, setActiveContact] = useState("Williams Jones");
  const [selectedImage, setSelectedImage] = useState(null);
  const fileInputRef = useRef(null);

  // Sample data for contacts
  const contacts = [
    {
      id: 1,
      name: "Williams Jones",
      status: "Offline",
      lastMessage: "Let me share the event link if you create the event ?",
      avatar: "https://picsum.photos/200?random=1",
      lastSeen: "1 year ago",
      messages: [
        {
          id: 1,
          text: "has flown since graduation.",
          sender: "contact",
          timestamp: "1 year ago"
        },
        {
          id: 2,
          text: "I know, right? It's been quite a journey. What have you been up to since then?",
          sender: "user",
          timestamp: "1 year ago"
        },
        {
          id: 3,
          text: "I actually started my own business, a small tech startup. It's been challenging but exciting.",
          sender: "contact",
          timestamp: "1 year ago"
        },
        {
          id: 4,
          text: "That's impressive! I've been working in marketing and recently moved to a new city. Life's full of surprises!",
          sender: "user",
          timestamp: "1 year ago"
        },
        {
          id: 5,
          text: "Absolutely! It's great to reconnect with old classmates. 😊",
          sender: "contact",
          timestamp: "1 year ago"
        },
        {
          id: 6,
          text: "Let me share the event link if you create the event ?",
          sender: "user",
          timestamp: "1 year ago"
        }
      ]
    },
    {
      id: 2,
      name: "Edward Y. Wimbley",
      status: "Online",
      lastMessage: "How is it going?",
      avatar: "https://picsum.photos/200?random=2",
      lastSeen: "1 year ago",
      messages: [
        {
          id: 1,
          text: "How is it going?",
          sender: "contact",
          timestamp: "1 year ago"
        }
      ]
    },
    {
      id: 3,
      name: "Michael K. Smith",
      status: "Online",
      lastMessage: "Looking forward to the alumni meetup!",
      avatar: "https://picsum.photos/200?random=3",
      lastSeen: "1 year ago",
      messages: [
        {
          id: 1,
          text: "Looking forward to the alumni meetup!",
          sender: "contact",
          timestamp: "1 year ago"
        }
      ]
    },
    {
      id: 4,
      name: "Robert D. Miller",
      status: "Offline",
      lastMessage: "Ki obostha?",
      avatar: "https://picsum.photos/200?random=4",
      lastSeen: "1 year ago",
      messages: [
        {
          id: 1,
          text: "Ki obostha?",
          sender: "contact",
          timestamp: "1 year ago"
        }
      ]
    },
    {
      id: 5,
      name: "George Jenks",
      status: "Offline",
      lastMessage: "See you at the reunion!",
      avatar: "https://picsum.photos/200?random=5",
      lastSeen: "1 year ago",
      messages: [
        {
          id: 1,
          text: "See you at the reunion!",
          sender: "contact",
          timestamp: "1 year ago"
        }
      ]
    },
    {
      id: 6,
      name: "Michael F. Reese",
      status: "Online",
      lastMessage: "Can you share your presentation from last week?",
      avatar: "https://picsum.photos/200?random=6",
      lastSeen: "1 year ago",
      messages: [
        {
          id: 1,
          text: "Can you share your presentation from last week?",
          sender: "contact",
          timestamp: "1 year ago"
        }
      ]
    },
    {
      id: 7,
      name: "Quinlan Pratt",
      status: "Online",
      lastMessage: "Thanks for the recommendation!",
      avatar: "https://picsum.photos/200?random=7",
      lastSeen: "1 year ago",
      messages: [
        {
          id: 1,
          text: "Thanks for the recommendation!",
          sender: "contact",
          timestamp: "1 year ago"
        }
      ]
    },
    {
      id: 8,
      name: "Chief Philip Asiodu",
      status: "Offline",
      lastMessage: "Let's catch up soon!",
      avatar: "https://picsum.photos/200?random=8",
      lastSeen: "1 year ago",
      messages: [
        {
          id: 1,
          text: "Let's catch up soon!",
          sender: "contact",
          timestamp: "1 year ago"
        }
      ]
    },
    {
      id: 8,
      name: "Chief Philip Asiodu",
      status: "Offline",
      lastMessage: "Let's catch up soon!",
      avatar: "https://picsum.photos/200?random=8",
      lastSeen: "1 year ago",
      messages: [
        {
          id: 1,
          text: "Let's catch up soon!",
          sender: "contact",
          timestamp: "1 year ago"
        }
      ]
    },
    {
      id: 8,
      name: "Chief Philip Asiodu",
      status: "Offline",
      lastMessage: "Let's catch up soon!",
      avatar: "https://picsum.photos/200?random=8",
      lastSeen: "1 year ago",
      messages: [
        {
          id: 1,
          text: "Let's catch up soon!",
          sender: "contact",
          timestamp: "1 year ago"
        }
      ]
    },
    {
      id: 8,
      name: "Chief Philip Asiodu",
      status: "Offline",
      lastMessage: "Let's catch up soon!",
      avatar: "https://picsum.photos/200?random=8",
      lastSeen: "1 year ago",
      messages: [
        {
          id: 1,
          text: "Let's catch up soon!",
          sender: "contact",
          timestamp: "1 year ago"
        }
      ]
    },
    {
      id: 8,
      name: "Chief Philip Asiodu",
      status: "Offline",
      lastMessage: "Let's catch up soon!",
      avatar: "https://picsum.photos/200?random=8",
      lastSeen: "1 year ago",
      messages: [
        {
          id: 1,
          text: "Let's catch up soon!",
          sender: "contact",
          timestamp: "1 year ago"
        }
      ]
    },
    {
      id: 8,
      name: "Chief Philip Asiodu",
      status: "Offline",
      lastMessage: "Let's catch up soon!",
      avatar: "https://picsum.photos/200?random=8",
      lastSeen: "1 year ago",
      messages: [
        {
          id: 1,
          text: "Let's catch up soon!",
          sender: "contact",
          timestamp: "1 year ago"
        }
      ]
    },
  ];

  // Filter contacts based on search query
  const filteredContacts = contacts.filter((contact) => {
    return contact.name.toLowerCase().includes(searchQuery.toLowerCase());
  });

  // Find the active contact
  const activeContactData = contacts.find(contact => contact.name === activeContact);

  // Handle sending a new message
  const handleSendMessage = () => {
    if (currentMessage.trim() === "" && !selectedImage) return;
    
    // In a real app, you would send this to an API
    console.log("Sending message:", currentMessage, selectedImage);
    
    // Clear the input field and selected image
    setCurrentMessage("");
    setSelectedImage(null);
  };
  
  // Handle image selection
  const handleImageSelect = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      
      reader.onload = (e) => {
        setSelectedImage(e.target.result);
      };
      
      reader.readAsDataURL(file);
    }
  };
  
  // Handle removing selected image
  const handleRemoveImage = () => {
    setSelectedImage(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  // Handle pressing Enter to send a message
  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <DashboardLayout>
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 h-[calc(100vh-130px)] flex overflow-hidden">
        {/* Contacts Sidebar */}
        <div className="w-full md:w-72 lg:w-80 border-r border-gray-200 flex flex-col">
          <div className="p-4 border-b border-gray-200">
            <h2 className="text-xl font-bold mb-4">Chat</h2>
            <div className="relative">
              <input
                type="text"
                placeholder="Search People"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-10 pl-10 pr-4 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-alumni-blue focus:border-transparent"
              />
              <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={16}
              />
            </div>
          </div>
          
          <div className="flex-1 overflow-y-auto">
            {filteredContacts.map((contact) => (
              <div 
                key={contact.id} 
                className={`flex items-center p-4 border-b border-gray-100 cursor-pointer hover:bg-gray-50 ${activeContact === contact.name ? 'bg-gray-100' : ''}`}
                onClick={() => setActiveContact(contact.name)}
              >
                <div className="relative">
                  <img 
                    src={contact.avatar} 
                    alt={contact.name} 
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <span className={`absolute bottom-0 right-0 w-3 h-3 rounded-full ${contact.status === 'Online' ? 'bg-green-500' : 'bg-gray-400'}`}></span>
                </div>
                <div className="ml-3 flex-1 overflow-hidden">
                  <div className="flex justify-between items-center">
                    <h3 className="font-medium text-sm">{contact.name}</h3>
                    <span className="text-xs text-gray-500">{contact.lastSeen}</span>
                  </div>
                  <p className="text-xs text-gray-500 truncate">{contact.lastMessage}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Gap between sidebar and chat */}
        <div className="hidden md:block  bg-[#fbf9f1] w-10"></div>
        
        {/* Chat Area */}
        {activeContactData ? (
          <div className="hidden md:flex flex-1   flex-col">
            {/* Chat Header */}
            <div className="p-4 border-b border-gray-200 flex items-center">
              <div className="relative">
                <img 
                  src={activeContactData.avatar} 
                  alt={activeContactData.name} 
                  className="w-10 h-10 rounded-full object-cover"
                />
                <span className={`absolute bottom-0 right-0 w-3 h-3 rounded-full ${activeContactData.status === 'Online' ? 'bg-green-500' : 'bg-gray-400'}`}></span>
              </div>
              <div className="ml-3">
                <h3 className="font-medium">{activeContactData.name}</h3>
                <p className="text-xs text-gray-500">{activeContactData.status}</p>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 overflow-y-auto ">
              {activeContactData.messages.map((message) => (
                <div 
                  key={message.id} 
                  className={`mb-4 flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div 
                    className={`max-w-[70%] rounded-lg p-3 ${message.sender === 'user' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-gray-100 text-gray-800'}`}
                  >
                    <p>{message.text}</p>
                    <div className="text-xs text-right mt-1 text-gray-500">{message.timestamp}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Message Input */}
            <div className="p-4 border-t border-gray-200">
              {selectedImage && (
                <div className="mb-2 relative inline-block">
                  <img 
                    src={selectedImage} 
                    alt="Selected attachment" 
                    className="h-20 rounded-md border border-gray-200" 
                  />
                  <button
                    onClick={handleRemoveImage}
                    className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1"
                  >
                    <X size={14} />
                  </button>
                </div>
              )}
              <div className="flex items-center">
                <textarea
                  value={currentMessage}
                  onChange={(e) => setCurrentMessage(e.target.value)}
                  onKeyDown={handleKeyPress}
                  placeholder="Type your message here..."
                  className="flex-1 border border-gray-200 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-alumni-blue focus:border-transparent resize-none"
                  rows="1"
                ></textarea>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageSelect}
                  className="hidden"
                  ref={fileInputRef}
                />
                <Button 
                  onClick={() => fileInputRef.current.click()}
                  className="ml-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full p-2 h-10 w-10 flex items-center justify-center"
                  type="button"
                >
                  <Image size={18} />
                </Button>
                <Button 
                  onClick={handleSendMessage} 
                  className="ml-2 bg-alumni-blue hover:bg-alumni-blue-dark text-white rounded-full p-2 h-10 w-10 flex items-center justify-center"
                >
                  <Send size={18} />
                </Button>
              </div>
              <div className="text-xs text-gray-400 mt-1 text-right">Press Enter to send</div>
            </div>
          </div>
        ) : (
          <div className="hidden md:flex flex-1 items-center justify-center">
            <p className="text-gray-500">Select a contact to start chatting</p>
          </div>
        )}

        {/* Mobile view - show only contacts list or chat based on selection */}
        <div className="md:hidden flex-1 flex flex-col">
          {!activeContactData ? (
            <div className="flex-1 flex items-center justify-center">
              <p className="text-gray-500">Select a contact to start chatting</p>
            </div>
          ) : (
            <>
              {/* Chat Header with back button for mobile */}
              <div className="p-4 border-b border-gray-200 flex items-center">
                <button 
                  className="mr-2 text-gray-500"
                  onClick={() => setActiveContact(null)}
                >
                  &larr;
                </button>
                <div className="relative">
                  <img 
                    src={activeContactData.avatar} 
                    alt={activeContactData.name} 
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <span className={`absolute bottom-0 right-0 w-3 h-3 rounded-full ${activeContactData.status === 'Online' ? 'bg-green-500' : 'bg-gray-400'}`}></span>
                </div>
                <div className="ml-3">
                  <h3 className="font-medium">{activeContactData.name}</h3>
                  <p className="text-xs text-gray-500">{activeContactData.status}</p>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 p-4 overflow-y-auto">
                {activeContactData.messages.map((message) => (
                  <div 
                    key={message.id} 
                    className={`mb-4 flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div 
                      className={`max-w-[70%] rounded-lg p-3 ${message.sender === 'user' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-gray-100 text-gray-800'}`}
                    >
                      <p>{message.text}</p>
                      <div className="text-xs text-right mt-1 text-gray-500">{message.timestamp}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Message Input */}
              <div className="p-4 border-t border-gray-200">
                {selectedImage && (
                  <div className="mb-2 relative inline-block">
                    <img 
                      src={selectedImage} 
                      alt="Selected attachment" 
                      className="h-20 rounded-md border border-gray-200" 
                    />
                    <button
                      onClick={handleRemoveImage}
                      className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1"
                    >
                      <X size={14} />
                    </button>
                  </div>
                )}
                <div className="flex items-center">
                  <textarea
                    value={currentMessage}
                    onChange={(e) => setCurrentMessage(e.target.value)}
                    onKeyDown={handleKeyPress}
                    placeholder="Type your message here..."
                    className="flex-1 border border-gray-200 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-alumni-blue focus:border-transparent resize-none"
                    rows="1"
                  ></textarea>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageSelect}
                    className="hidden"
                    ref={fileInputRef}
                  />
                  <Button 
                    onClick={() => fileInputRef.current.click()}
                    className="ml-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full p-2 h-10 w-10 flex items-center justify-center"
                    type="button"
                  >
                    <Image size={18} />
                  </Button>
                  <Button 
                    onClick={handleSendMessage} 
                    className="ml-2 bg-alumni-blue hover:bg-alumni-blue-dark text-white rounded-full p-2 h-10 w-10 flex items-center justify-center"
                  >
                    <Send size={18} />
                  </Button>
                </div>
                <div className="text-xs text-gray-400 mt-1 text-right">Press Enter to send</div>
              </div>
            </>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Messages;
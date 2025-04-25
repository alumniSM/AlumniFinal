import React, { useState } from "react";
import { Bell, MessageSquare, ChevronDown, Menu } from "lucide-react";
import { Button } from "../../components/ui/button";
import { useNavigate } from "react-router-dom";

const Header = ({
  onMenuClick,
  user = {
    name: "Ozzy Osbourne",
    avatar: "https://picsum.photos/400/300?random=4",
  },
}) => {
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="sticky top-0 z-30 h-20 border-b bg-white flex items-center px-6 md:px-8 shadow-sm w-full">
      {/* Mobile hamburger menu - hidden on md and up */}
      <div className="flex-none">
        <button
          onClick={onMenuClick}
          className="p-2 rounded-md text-alumni-blue hover:bg-gray-100 transition-colors md:hidden"
          aria-label="Toggle menu"
        >
          <Menu size={26} />
        </button>
      </div>

      <div className="flex-1 flex  justify-start">
        <Button 
          onClick={() => navigate('/')} 
          className="bg-[#DBF2BD] hover:bg-[#c9e4a6] text-black font-medium rounded-full px-3 md:px-6 py-2 md:py-2.5 text-xs md:text-sm hidden sm:block"
        >
          Find an Alumni
        </Button>
      </div>

      <div className="flex-none flex items-center space-x-2 md:space-x-4">
        <div className="relative">
          <button className="text-gray-500 hover:text-gray-700 transition-colors p-2 relative">
            <Bell size={22} className="md:w-6 md:h-6 w-5 h-5" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 md:w-5 md:h-5 flex items-center justify-center">
              0
            </span>
          </button>
        </div>

        <div className="relative">
          <button className="text-gray-500 hover:text-gray-700 transition-colors p-2 relative">
            <MessageSquare size={22} className="md:w-6 md:h-6 w-5 h-5" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 md:w-5 md:h-5 flex items-center justify-center">
              5
            </span>
          </button>
        </div>

        <div className="relative">
          <button
            className="flex items-center space-x-2"
            onClick={() => setShowProfileMenu(!showProfileMenu)}
          >
            <div className="text-right hidden sm:block">
              <div className="text-xs text-gray-500">Welcome</div>
              <div className="text-sm font-medium">{user.name}</div>
            </div>
            <img
              src={user.avatar}
              alt={user.name}
              className="w-10 h-10 rounded-full object-cover"
            />
            <ChevronDown size={14} className="hidden sm:block" />
          </button>

          {showProfileMenu && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg overflow-hidden z-10">
              <div className="py-2">
                <a
                  href="/dashboard/profile"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Profile
                </a>
                <a
                  href="/dashboard/settings"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Settings
                </a>
                <a
                  href="/logout"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Logout
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;

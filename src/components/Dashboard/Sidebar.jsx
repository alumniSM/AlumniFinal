import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Home,
  Calendar,
  Briefcase,
  Users,
  CreditCard,
  MessageSquare,
  Settings,
  LogOut,
  ChevronDown,
  ChevronRight,
  X,
  FileText,
  Newspaper,
} from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const Sidebar = ({ closeMobileSidebar }) => {
  const location = useLocation();
  const isMobile = useIsMobile();
  const [expandedMenus, setExpandedMenus] = useState({
    events: false,
    jobPost: false,
    internship: false,
    surveys: false,
    news: false,
  });

  const toggleMenu = (menu) => {
    setExpandedMenus((prev) => ({
      events: false,
      jobPost: false,
      internship: false,
      surveys: false,
      news: false,
      [menu]: !prev[menu]
    }));
  };

  const handleSubMenuClick = () => {
    // Do nothing, allowing the menu to stay expanded
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <div className="h-screen fixed md:fixed top-0 bg-[#1B3A21] text-white w-64 flex flex-col overflow-hidden">
      <div className="p-5 border-b border-[#2A4A30] flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-bold text-white">AlumniNetwork</span>
        </Link>
        {isMobile && (
          <button
            onClick={closeMobileSidebar}
            className="text-white hover:text-gray-300"
          >
            <X size={24} />
          </button>
        )}
      </div>

      <div className="py-2 px-2 text-gray-400 text-xs">MAIN</div>

      <nav className="flex-1 overflow-hidden">
        <ul className="space-y-1 px-2">
          <li>
            <Link
              to="/dashboard"
              className={`flex items-center py-2 px-3 rounded-md ${
                isActive("/dashboard")
                  ? "bg-[#2A4A30] text-white"
                  : "text-white hover:bg-[#2A4A30]"
              }`}
              onClick={isMobile ? closeMobileSidebar : undefined}
            >
              <Home size={18} className="mr-3" />
              <span>Home</span>
            </Link>
          </li>



          <li>
            <div
              className="flex items-center justify-between py-2 px-3 rounded-md cursor-pointer text-white hover:bg-[#2A4A30]"
              onClick={() => toggleMenu("events")}
            >
              <div className="flex items-center">
                <Calendar size={18} className="mr-3" />
                <span>Events</span>
              </div>
              {expandedMenus.events ? (
                <ChevronDown size={16} />
              ) : (
                <ChevronRight size={16} />
              )}
            </div>

            {expandedMenus.events && (
              <ul className="ml-7 mt-1 space-y-1">
                <li>
                  <Link
                    to="/dashboard/events/create"
                    className={`flex items-center py-1 px-3 text-sm text-white hover:bg-[#2A4A30] ${isActive("/dashboard/events/create") ? "bg-[#2A4A30]" : ""} rounded-md`}
                    onClick={isMobile ? closeMobileSidebar : undefined}
                  >
                    <span className="w-1 h-1 bg-green-400 rounded-full mr-2"></span>
                    Create Event
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dashboard/events/my-events"
                    className={`flex items-center py-1 px-3 text-sm text-white hover:bg-[#2A4A30] ${isActive("/dashboard/events/my-events") ? "bg-[#2A4A30]" : ""} rounded-md`}
                    onClick={isMobile ? closeMobileSidebar : undefined}
                  >
                    <span className="w-1 h-1 bg-green-400 rounded-full mr-2"></span>
                    My Event
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dashboard/events/all"
                    className={`flex items-center py-1 px-3 text-sm text-white hover:bg-[#2A4A30] ${isActive("/dashboard/events/all") ? "bg-[#2A4A30]" : ""} rounded-md`}
                    onClick={isMobile ? closeMobileSidebar : undefined}
                  >
                    <span className="w-1 h-1 bg-green-400 rounded-full mr-2"></span>
                    All Event
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dashboard/events/my-ticket"
                    className={`flex items-center py-1 px-3 text-sm text-white hover:bg-[#2A4A30] ${isActive("/dashboard/events/my-ticket") ? "bg-[#2A4A30]" : ""} rounded-md`}
                    onClick={isMobile ? closeMobileSidebar : undefined}
                  >
                    <span className="w-1 h-1 bg-green-400 rounded-full mr-2"></span>
                    My Ticket
                  </Link>
                </li>
              </ul>
            )}
          </li>



          <li>
            <div
              className="flex items-center justify-between py-2 px-3 rounded-md cursor-pointer text-white hover:bg-[#2A4A30]"
              onClick={() => toggleMenu("jobPost")}
            >
              <div className="flex items-center">
                <Briefcase size={18} className="mr-3" />
                <span>Job Post</span>
              </div>
              {expandedMenus.jobPost ? (
                <ChevronDown size={16} />
              ) : (
                <ChevronRight size={16} />
              )}
            </div>

            {expandedMenus.jobPost && (
              <ul className="ml-7 mt-1 space-y-1">
                <li>
                  <Link
                    to="/dashboard/jobs/create"
                    className={`flex items-center py-1 px-3 text-sm text-white hover:bg-[#2A4A30] ${isActive("/dashboard/jobs/create") ? "bg-[#2A4A30]" : ""} rounded-md`}
                    onClick={isMobile ? closeMobileSidebar : undefined}
                  >
                    <span className="w-1 h-1 bg-green-400 rounded-full mr-2"></span>
                    Create Post
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dashboard/jobs/my-posts"
                    className={`flex items-center py-1 px-3 text-sm text-white hover:bg-[#2A4A30] ${isActive("/dashboard/jobs/my-posts") ? "bg-[#2A4A30]" : ""} rounded-md`}
                    onClick={isMobile ? closeMobileSidebar : undefined}
                  >
                    <span className="w-1 h-1 bg-green-400 rounded-full mr-2"></span>
                    My Post
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dashboard/jobs/all"
                    className={`flex items-center py-1 px-3 text-sm text-white hover:bg-[#2A4A30] ${isActive("/dashboard/jobs/all") ? "bg-[#2A4A30]" : ""} rounded-md`}
                    onClick={isMobile ? closeMobileSidebar : undefined}
                  >
                    <span className="w-1 h-1 bg-green-400 rounded-full mr-2"></span>
                    All Post
                  </Link>
                </li>
              </ul>
            )}
          </li>

          <li>
            <div
              className="flex items-center justify-between py-2 px-3 rounded-md cursor-pointer text-white hover:bg-[#2A4A30]"
              onClick={() => toggleMenu("internship")}
            >
              <div className="flex items-center">
                <Briefcase size={18} className="mr-3" />
                <span>Internship</span>
              </div>
              {expandedMenus.internship ? (
                <ChevronDown size={16} />
              ) : (
                <ChevronRight size={16} />
              )}
            </div>

            {expandedMenus.internship && (
              <ul className="ml-7 mt-1 space-y-1">
                <li>
                  <Link
                    to="/dashboard/internship/create"
                    className={`flex items-center py-1 px-3 text-sm text-white hover:bg-[#2A4A30] ${isActive("/dashboard/internship/create") ? "bg-[#2A4A30]" : ""} rounded-md`}
                    onClick={isMobile ? closeMobileSidebar : undefined}
                  >
                    <span className="w-1 h-1 bg-green-400 rounded-full mr-2"></span>
                    Create Internship
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dashboard/internship/my-internships"
                    className={`flex items-center py-1 px-3 text-sm text-white hover:bg-[#2A4A30] ${isActive("/dashboard/internship/my-internships") ? "bg-[#2A4A30]" : ""} rounded-md`}
                    onClick={isMobile ? closeMobileSidebar : undefined}
                  >
                    <span className="w-1 h-1 bg-green-400 rounded-full mr-2"></span>
                    My Internships
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dashboard/internship/all"
                    className={`flex items-center py-1 px-3 text-sm text-white hover:bg-[#2A4A30] ${isActive("/dashboard/internship/all") ? "bg-[#2A4A30]" : ""} rounded-md`}
                    onClick={isMobile ? closeMobileSidebar : undefined}
                  >
                    <span className="w-1 h-1 bg-green-400 rounded-full mr-2"></span>
                    All Internships
                  </Link>
                </li>
              </ul>
            )}
          </li>



          <li>
            <div
              className="flex items-center justify-between py-2 px-3 rounded-md cursor-pointer text-white hover:bg-[#2A4A30]"
              onClick={() => toggleMenu("surveys")}
            >
              <div className="flex items-center">
                <FileText size={18} className="mr-3" />
                <span>Surveys</span>
              </div>
              {expandedMenus.surveys ? (
                <ChevronDown size={16} />
              ) : (
                <ChevronRight size={16} />
              )}
            </div>

            {expandedMenus.surveys && (
              <ul className="ml-7 mt-1 space-y-1">
                <li>
                  <Link
                    to="/dashboard/surveys"
                    className={`flex items-center py-1 px-3 text-sm text-white hover:bg-[#2A4A30] ${isActive("/dashboard/surveys") ? "bg-[#2A4A30]" : ""} rounded-md`}
                    onClick={isMobile ? closeMobileSidebar : undefined}
                  >
                    <span className="w-1 h-1 bg-green-400 rounded-full mr-2"></span>
                    All Surveys
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dashboard/surveys/create"
                    className={`flex items-center py-1 px-3 text-sm text-white hover:bg-[#2A4A30] ${isActive("/dashboard/surveys/create") ? "bg-[#2A4A30]" : ""} rounded-md`}
                    onClick={isMobile ? closeMobileSidebar : undefined}
                  >
                    <span className="w-1 h-1 bg-green-400 rounded-full mr-2"></span>
                    Create Survey
                  </Link>
                </li>
              </ul>
            )}
          </li>

          <li>
            <Link
              to="/dashboard/alumni"
              className={`flex items-center py-2 px-3 rounded-md ${
                isActive("/dashboard/alumni")
                  ? "bg-[#2A4A30] text-white"
                  : "text-white hover:bg-[#2A4A30]"
              }`}
            >
              <Users size={18} className="mr-3" />
              <span>Alumni</span>
            </Link>
          </li>

          <li>
            <Link
              to="/dashboard/student-alumni"
              className={`flex items-center py-2 px-3 rounded-md ${
                isActive("/dashboard/student-alumni")
                  ? "bg-[#2A4A30] text-white"
                  : "text-white hover:bg-[#2A4A30]"
              }`}
              onClick={isMobile ? closeMobileSidebar : undefined}
            >
              <Users size={18} className="mr-3" />
              <span>Alumni Directory</span>
            </Link>
          </li>

          <li>
            <Link
              to="/dashboard/membership"
              className={`flex items-center py-2 px-3 rounded-md ${
                isActive("/dashboard/membership")
                  ? "bg-[#2A4A30] text-white"
                  : "text-white hover:bg-[#2A4A30]"
              }`}
            >
              <CreditCard size={18} className="mr-3" />
              <span>Membership</span>
            </Link>
          </li>

          <li>
            <Link
              to="/dashboard/messages"
              className={`flex items-center py-2 px-3 rounded-md ${
                isActive("/dashboard/messages")
                  ? "bg-[#2A4A30] text-white"
                  : "text-white hover:bg-[#2A4A30]"
              }`}
            >
              <MessageSquare size={18} className="mr-3" />
              <span>Message</span>
            </Link>
          </li>

          <li>
            <Link
              to="/dashboard/transactions"
              className={`flex items-center py-2 px-3 rounded-md ${
                isActive("/dashboard/transactions")
                  ? "bg-[#2A4A30] text-white"
                  : "text-white hover:bg-[#2A4A30]"
              }`}
            >
              <CreditCard size={18} className="mr-3" />
              <span>Transaction List</span>
            </Link>
          </li>



          <li>
            <div
              className="flex items-center justify-between py-2 px-3 rounded-md cursor-pointer text-white hover:bg-[#2A4A30]"
              onClick={() => toggleMenu("news")}
            >
              <div className="flex items-center">
                <Newspaper size={18} className="mr-3" />
                <span>News</span>
              </div>
              {expandedMenus.news ? (
                <ChevronDown size={16} />
              ) : (
                <ChevronRight size={16} />
              )}
            </div>

            {expandedMenus.news && (
              <ul className="ml-7 mt-1 space-y-1">
                <li>
                  <Link
                    to="/dashboard/news/all"
                    className={`flex items-center py-1 px-3 text-sm text-white hover:bg-[#2A4A30] ${isActive("/dashboard/news/all") ? "bg-[#2A4A30]" : ""} rounded-md`}
                    onClick={isMobile ? closeMobileSidebar : undefined}
                  >
                    <span className="w-1 h-1 bg-green-400 rounded-full mr-2"></span>
                    All News
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dashboard/news/create"
                    className={`flex items-center py-1 px-3 text-sm text-white hover:bg-[#2A4A30] ${isActive("/dashboard/news/create") ? "bg-[#2A4A30]" : ""} rounded-md`}
                    onClick={isMobile ? closeMobileSidebar : undefined}
                  >
                    <span className="w-1 h-1 bg-green-400 rounded-full mr-2"></span>
                    Add News
                  </Link>
                </li>
              </ul>
            )}
          </li>

          <li>
            <Link
              to="/dashboard/profile"
              className={`flex items-center py-2 px-3 rounded-md ${
                isActive("/dashboard/profile")
                  ? "bg-[#2A4A30] text-white"
                  : "text-white hover:bg-[#2A4A30]"
              }`}
            >
              <Users size={18} className="mr-3" />
              <span>Profile</span>
            </Link>
          </li>

          <li>
            <Link
              to="/dashboard/settings"
              className={`flex items-center py-2 px-3 rounded-md ${
                isActive("/dashboard/settings")
                  ? "bg-[#2A4A30] text-white"
                  : "text-white hover:bg-[#2A4A30]"
              }`}
            >
              <Settings size={18} className="mr-3" />
              <span>Settings</span>
            </Link>
          </li>
        </ul>
      </nav>

      <div className="p-4 border-t border-[#2A4A30]">
        <Link
          to="/logout"
          className="flex items-center text-white hover:text-gray-200 transition-colors"
        >
          <LogOut size={18} className="mr-3" />
          <span>Log Out</span>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;

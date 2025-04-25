import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { useIsMobile } from "../../hooks/use-mobile";

const DashboardLayout = ({ children }) => {
  const isMobile = useIsMobile();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // Add an effect to prevent scrolling when mobile sidebar is open
  useEffect(() => {
    if (sidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [sidebarOpen]);

  return (
    <div className="flex min-h-screen bg-[#fbf9f1]">
      {/* Desktop sidebar - hidden on mobile, visible on md and up */}
      <div className="hidden md:block fixed z-10">
        <Sidebar />
      </div>

      {/* Mobile sidebar overlay - only visible when toggled */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div
            className="absolute inset-0 bg-black/30" 
            onClick={toggleSidebar}
            aria-hidden="true"
          ></div>
          <div className="relative h-screen w-64">
            <Sidebar closeMobileSidebar={toggleSidebar} />
          </div>
        </div>
      )}

      {/* Main content */}
      <div className="flex-1 flex flex-col w-full md:pl-64">
        <Header onMenuClick={toggleSidebar} />
        <main className="flex-1 p-4 md:p-6 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;

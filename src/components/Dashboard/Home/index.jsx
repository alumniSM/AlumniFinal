import React from "react";
import PostComponent from "./PostComponent";
import UpcomingEvents from "./UpcomingEvents";
import JobsComponent from "./JobsComponent";
import NewsComponent from "./NewsComponent";

const DashboardHome = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
      <div >
        <PostComponent />
      </div>
      <div className="space-y-4 md:space-y-6">
        <NewsComponent />
        <UpcomingEvents />
        <JobsComponent />
      </div>
    </div>
  );
};

export default DashboardHome;

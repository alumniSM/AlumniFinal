import React from "react";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-alumni-lightgray">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 text-alumni-blue">
          Welcome to Alumni Portal
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Connect with your fellow alumni and stay updated with the latest
          events.
        </p>
        <Link to="/dashboard">
          <Button>Go to Dashboard</Button>
        </Link>
      </div>
    </div>
  );
};

export default Index;

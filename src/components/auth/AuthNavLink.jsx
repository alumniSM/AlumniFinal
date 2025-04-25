import React from "react";
import { Link } from "react-router-dom";
import { UserPlus } from "lucide-react";
import { Button } from "../../components/ui/button";

const AuthNavLink = () => {
  return (
    <Link to="/create-account" className="no-underline">
      <Button 
        variant="outline" 
        className="flex items-center gap-2 text-alumni-blue hover:bg-alumni-blue hover:text-white transition-colors"
      >
        <UserPlus size={16} />
        <span>Create Account</span>
      </Button>
    </Link>
  );
};

export default AuthNavLink;
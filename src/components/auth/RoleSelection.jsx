import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "../../components/ui/button";

const RoleCard = ({ title, description, icon, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className="bg-white rounded-xl shadow-sm p-6 border border-gray-200 hover:shadow-md hover:border-alumni-blue transition-all cursor-pointer flex flex-col items-center text-center"
    >
      <div className="w-16 h-16 rounded-full bg-alumni-lightblue/20 flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <Button 
        variant="outline" 
        className="mt-auto text-alumni-blue hover:bg-alumni-blue hover:text-white"
      >
        Select <ArrowRight size={16} className="ml-1" />
      </Button>
    </div>
  );
};

const RoleSelection = () => {
  const navigate = useNavigate();

  const handleRoleSelect = (role) => {
    // Navigate to the appropriate registration form based on role
    navigate(`/create-account/${role}`);
  };

  return (
    <div className="min-h-screen bg-alumni-lightgray flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full space-y-8">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Create Your Account</h2>
          <p className="mt-2 text-sm text-gray-600">
            Please select your role to continue with the registration process
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          <RoleCard
            title="Student"
            description="Current students looking to connect with alumni and explore opportunities"
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-alumni-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
            </svg>}
            onClick={() => handleRoleSelect('student')}
          />
          
          <RoleCard
            title="Alumni"
            description="Former students looking to stay connected and give back to the community"
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-alumni-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>}
            onClick={() => handleRoleSelect('alumni')}
          />
          
          <RoleCard
            title="Company"
            description="Organizations looking to connect with talented students and alumni"
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-alumni-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>}
            onClick={() => handleRoleSelect('company')}
          />
        </div>

        <div className="text-center mt-8">
          <p className="text-sm text-gray-600">
            Already have an account?{" "}
            <a href="/login" className="font-medium text-alumni-blue hover:text-alumni-lightblue">
              Sign in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RoleSelection;
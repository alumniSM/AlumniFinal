import React, { useState } from "react";
import DashboardLayout from "@/components/Dashboard/Layout";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import EditProfile from "@/components/Dashboard/Profile/EditProfile";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("profile");
  
  // Mock user data
  const userData = {
    fullName: "Sophia Johnson",
    nickName: "Johnson",
    email: "alumni@gmail.com",
    phone: "+1844731809",
    batch: "2015-2020",
    department: "Department Of Faculty",
    passingYear: "2020",
    rollNumber: "990874",
    dateOfBirth: "1994-06-08",
    gender: "male",
    city: "Pineview",
    state: "Evergreen",
    country: "Verdant",
    zipCode: "67890",
    bio: "Hello, I am Sophia Johnson, a seasoned accountant with a wealth of experience in financial management and analysis. I specialize in tax accounting, helping individuals and businesses navigate complex tax codes while optimizing their financial positions.",
    profileImage: "https://picsum.photos/200",
    education: [],
    professional: {
      companyName: "",
      designation: "",
      officeAddress: ""
    }
  };

  return (
    <DashboardLayout>
      <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200 max-w-6xl mx-auto">
        {/* Tabs */}
        <div className="border-b border-gray-200 mb-6">
          <div className="flex space-x-8">
            <button
              className={`pb-4 text-sm font-medium ${activeTab === "profile" ? "text-alumni-blue border-b-2 border-alumni-blue" : "text-gray-500 hover:text-gray-700"}`}
              onClick={() => setActiveTab("profile")}
            >
              Profile
            </button>
            <button
              className={`pb-4 text-sm font-medium ${activeTab === "edit" ? "text-alumni-blue border-b-2 border-alumni-blue" : "text-gray-500 hover:text-gray-700"}`}
              onClick={() => setActiveTab("edit")}
            >
              Edit Profile
            </button>
          </div>
        </div>

        {/* Profile Content */}
        {activeTab === "profile" ? (
          <div className="space-y-8">
            {/* Profile Header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <img
                  src={userData.profileImage}
                  alt={userData.fullName}
                  className="w-16 h-16 rounded-full object-cover border-2 border-gray-200"
                />
                <div>
                  <h3 className="text-xl font-semibold">{userData.fullName}</h3>
                  <div className="flex space-x-3 mt-2">
                    <a href="#" className="text-gray-600 hover:text-blue-600">
                      <Facebook size={18} />
                    </a>
                    <a href="#" className="text-gray-600 hover:text-blue-400">
                      <Twitter size={18} />
                    </a>
                    <a href="#" className="text-gray-600 hover:text-blue-700">
                      <Linkedin size={18} />
                    </a>
                    <a href="#" className="text-gray-600 hover:text-pink-600">
                      <Instagram size={18} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Profile Bio */}
            <div>
              <h4 className="text-sm font-semibold mb-2">Profile Bio</h4>
              <div className="bg-gray-50 p-4 rounded-md">
                <p className="text-sm text-gray-700">{userData.bio}</p>
              </div>
            </div>

            {/* Personal Information */}
            <div>
              <h4 className="text-sm font-semibold mb-4">Personal Information</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-6">
                <div>
                  <p className="text-xs text-gray-500 mb-1">Full Name :</p>
                  <p className="text-sm">{userData.fullName}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">Nick Name :</p>
                  <p className="text-sm">{userData.nickName}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">Email :</p>
                  <p className="text-sm">{userData.email}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">Phone :</p>
                  <p className="text-sm">{userData.phone}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">Batch :</p>
                  <p className="text-sm">{userData.batch}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">Department :</p>
                  <p className="text-sm">{userData.department}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">Passing Year :</p>
                  <p className="text-sm">{userData.passingYear}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">Roll Number :</p>
                  <p className="text-sm">{userData.rollNumber}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">Date of Birth :</p>
                  <p className="text-sm">{userData.dateOfBirth}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">Gender :</p>
                  <p className="text-sm">{userData.gender}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">City :</p>
                  <p className="text-sm">{userData.city}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">State :</p>
                  <p className="text-sm">{userData.state}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">Country :</p>
                  <p className="text-sm">{userData.country}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">Zip Code :</p>
                  <p className="text-sm">{userData.zipCode}</p>
                </div>
              </div>
            </div>

            {/* Educational Information */}
            <div>
              <h4 className="text-sm font-semibold mb-4">Educational Info</h4>
              {userData.education && userData.education.length > 0 ? (
                <div>
                  {/* Education details would go here */}
                </div>
              ) : (
                <div className="bg-gray-50 p-4 rounded-md">
                  <p className="text-sm text-gray-500">No Educational Info Found</p>
                </div>
              )}
            </div>

            {/* Professional Information */}
            <div>
              <h4 className="text-sm font-semibold mb-4">Professional Info</h4>
              {userData.professional && (userData.professional.companyName || userData.professional.designation || userData.professional.officeAddress) ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-6">
                  {userData.professional.companyName && (
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Company Name :</p>
                      <p className="text-sm">{userData.professional.companyName}</p>
                    </div>
                  )}
                  {userData.professional.designation && (
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Designation :</p>
                      <p className="text-sm">{userData.professional.designation}</p>
                    </div>
                  )}
                  {userData.professional.officeAddress && (
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Office Address :</p>
                      <p className="text-sm">{userData.professional.officeAddress}</p>
                    </div>
                  )}
                </div>
              ) : (
                <div className="bg-gray-50 p-4 rounded-md">
                  <p className="text-sm text-gray-500">No Professional Info Found</p>
                </div>
              )}
            </div>
          </div>
        ) : (
          <EditProfile 
            userData={userData} 
            onSave={(updatedData) => {
              console.log('Profile updated:', updatedData);
              // Here you would typically make an API call to update the profile
              setActiveTab('profile');
            }} 
          />
        )}
      </div>
    </DashboardLayout>
  );
};

export default Profile;
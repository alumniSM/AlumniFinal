import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "../../components/ui/button";

const StudentForm = () => (
  <>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="col-span-2">
        <label htmlFor="fullName" className="block text-xs font-medium text-gray-700 mb-1">Full Name *</label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          placeholder="Full Name"
          className="block w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500"
          required
        />
      </div>
      
      <div>
        <label htmlFor="batch" className="block text-xs font-medium text-gray-700 mb-1">Batch Year *</label>
        <div className="relative">
          <select
            id="batch"
            name="batch"
            className="block w-full px-3 py-2 border border-gray-300 rounded-md text-sm appearance-none focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500"
            required
          >
            <option value="">Select Batch</option>
            <option value="2023">2023</option>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </div>
        </div>
      </div>
      
      <div>
        <label htmlFor="email" className="block text-xs font-medium text-gray-700 mb-1">Email Address *</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="example@example.com"
          className="block w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500"
          required
        />
      </div>
      
      <div>
        <label htmlFor="department" className="block text-xs font-medium text-gray-700 mb-1">Department *</label>
        <div className="relative">
          <select
            id="department"
            name="department"
            className="block w-full px-3 py-2 border border-gray-300 rounded-md text-sm appearance-none focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500"
            required
          >
            <option value="">Select Department</option>
            <option value="Computer Science">Computer Science</option>
            <option value="Engineering">Engineering</option>
            <option value="Business">Business</option>
            <option value="Arts">Arts</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </div>
        </div>
      </div>
      
      <div>
        <label htmlFor="phone" className="block text-xs font-medium text-gray-700 mb-1">Phone Number *</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          placeholder="e.g. (+123) 456-7890"
          className="block w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500"
          required
        />
      </div>
      
      <div>
        <label htmlFor="birthDate" className="block text-xs font-medium text-gray-700 mb-1">Birth Date *</label>
        <input
          type="date"
          id="birthDate"
          name="birthDate"
          className="block w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500"
          required
        />
      </div>
      
      <div>
        <label htmlFor="gender" className="block text-xs font-medium text-gray-700 mb-1">Gender *</label>
        <div className="relative">
          <select
            id="gender"
            name="gender"
            className="block w-full px-3 py-2 border border-gray-300 rounded-md text-sm appearance-none focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500"
            required
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </div>
        </div>
      </div>
      
      <div>
        <label htmlFor="password" className="block text-xs font-medium text-gray-700 mb-1">Password *</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="••••••••"
          className="block w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500"
          required
        />
      </div>
      
      <div>
        <label htmlFor="confirmPassword" className="block text-xs font-medium text-gray-700 mb-1">Confirm Password *</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          placeholder="••••••••"
          className="block w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500"
          required
        />
      </div>
      
      <div className="col-span-2">
        <label htmlFor="attachment" className="block text-xs font-medium text-gray-700 mb-1">Attachment (ID) *</label>
        <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
          <div className="space-y-1 text-center">
            <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
              <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <div className="flex text-sm text-gray-600">
              <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-green-500 hover:text-green-400 focus-within:outline-none">
                <span>Choose File</span>
                <input id="file-upload" name="file-upload" type="file" className="sr-only" />
              </label>
              <p className="pl-1">No file chosen</p>
            </div>
            <p className="text-xs text-gray-500">PNG, JPG, PDF up to 10MB</p>
          </div>
        </div>
      </div>
    </div>
  </>
);

const AlumniForm = () => (
  <>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="col-span-2">
        <label htmlFor="fullName" className="block text-xs font-medium text-gray-700 mb-1">Full Name *</label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          placeholder="Full Name"
          className="block w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500"
          required
        />
      </div>
      
      <div>
        <label htmlFor="email" className="block text-xs font-medium text-gray-700 mb-1">Email Address *</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="example@example.com"
          className="block w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500"
          required
        />
      </div>
      
      <div>
        <label htmlFor="graduationYear" className="block text-xs font-medium text-gray-700 mb-1">Graduation Year *</label>
        <div className="relative">
          <select
            id="graduationYear"
            name="graduationYear"
            className="block w-full px-3 py-2 border border-gray-300 rounded-md text-sm appearance-none focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500"
            required
          >
            <option value="">Select Year</option>
            {Array.from({ length: 30 }, (_, i) => new Date().getFullYear() - i).map(year => (
              <option key={year} value={year}>{year}</option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </div>
        </div>
      </div>
      
      <div>
        <label htmlFor="department" className="block text-xs font-medium text-gray-700 mb-1">Department *</label>
        <div className="relative">
          <select
            id="department"
            name="department"
            className="block w-full px-3 py-2 border border-gray-300 rounded-md text-sm appearance-none focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500"
            required
          >
            <option value="">Select Department</option>
            <option value="Computer Science">Computer Science</option>
            <option value="Engineering">Engineering</option>
            <option value="Business">Business</option>
            <option value="Arts">Arts</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </div>
        </div>
      </div>
      
      <div>
        <label htmlFor="currentPosition" className="block text-xs font-medium text-gray-700 mb-1">Current Position</label>
        <input
          type="text"
          id="currentPosition"
          name="currentPosition"
          placeholder="e.g. Software Engineer"
          className="block w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500"
        />
      </div>
      
      <div>
        <label htmlFor="company" className="block text-xs font-medium text-gray-700 mb-1">Company/Organization</label>
        <input
          type="text"
          id="company"
          name="company"
          placeholder="e.g. Tech Company Inc."
          className="block w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500"
        />
      </div>
      
      <div>
        <label htmlFor="phone" className="block text-xs font-medium text-gray-700 mb-1">Phone Number *</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          placeholder="e.g. (+123) 456-7890"
          className="block w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500"
          required
        />
      </div>
      
      <div>
        <label htmlFor="password" className="block text-xs font-medium text-gray-700 mb-1">Password *</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="••••••••"
          className="block w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500"
          required
        />
      </div>
      
      <div>
        <label htmlFor="confirmPassword" className="block text-xs font-medium text-gray-700 mb-1">Confirm Password *</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          placeholder="••••••••"
          className="block w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500"
          required
        />
      </div>
      
      <div className="col-span-2">
        <label htmlFor="attachment" className="block text-xs font-medium text-gray-700 mb-1">Attachment (Resume) *</label>
        <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
          <div className="space-y-1 text-center">
            <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
              <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <div className="flex text-sm text-gray-600">
              <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-green-500 hover:text-green-400 focus-within:outline-none">
                <span>Choose File</span>
                <input id="file-upload" name="file-upload" type="file" className="sr-only" />
              </label>
              <p className="pl-1">No file chosen</p>
            </div>
            <p className="text-xs text-gray-500">PDF, DOC, DOCX up to 10MB</p>
          </div>
        </div>
      </div>
    </div>
  </>
);

const CompanyForm = () => (
  <>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="col-span-2">
        <label htmlFor="companyName" className="block text-xs font-medium text-gray-700 mb-1">Company Name *</label>
        <input
          type="text"
          id="companyName"
          name="companyName"
          placeholder="Company Name"
          className="block w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500"
          required
        />
      </div>
      
      <div>
        <label htmlFor="industry" className="block text-xs font-medium text-gray-700 mb-1">Industry *</label>
        <div className="relative">
          <select
            id="industry"
            name="industry"
            className="block w-full px-3 py-2 border border-gray-300 rounded-md text-sm appearance-none focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500"
            required
          >
            <option value="">Select Industry</option>
            <option value="Technology">Technology</option>
            <option value="Finance">Finance</option>
            <option value="Healthcare">Healthcare</option>
            <option value="Education">Education</option>
            <option value="Manufacturing">Manufacturing</option>
            <option value="Retail">Retail</option>
            <option value="Other">Other</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </div>
        </div>
      </div>
      
      <div>
        <label htmlFor="contactPerson" className="block text-xs font-medium text-gray-700 mb-1">Contact Person Name *</label>
        <input
          type="text"
          id="contactPerson"
          name="contactPerson"
          placeholder="Contact Person Name"
          className="block w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500"
          required
        />
      </div>
      
      <div>
        <label htmlFor="email" className="block text-xs font-medium text-gray-700 mb-1">Business Email *</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="company@example.com"
          className="block w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500"
          required
        />
      </div>
      
      <div>
        <label htmlFor="phone" className="block text-xs font-medium text-gray-700 mb-1">Phone Number *</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          placeholder="e.g. (+123) 456-7890"
          className="block w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500"
          required
        />
      </div>
      
      <div>
        <label htmlFor="website" className="block text-xs font-medium text-gray-700 mb-1">Company Website</label>
        <input
          type="url"
          id="website"
          name="website"
          placeholder="https://example.com"
          className="block w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500"
        />
      </div>
      
      <div>
        <label htmlFor="password" className="block text-xs font-medium text-gray-700 mb-1">Password *</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="••••••••"
          className="block w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500"
          required
        />
      </div>
      
      <div>
        <label htmlFor="confirmPassword" className="block text-xs font-medium text-gray-700 mb-1">Confirm Password *</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          placeholder="••••••••"
          className="block w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500"
          required
        />
      </div>
      
      <div className="col-span-2">
        <label htmlFor="companyLogo" className="block text-xs font-medium text-gray-700 mb-1">Company Logo</label>
        <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
          <div className="space-y-1 text-center">
            <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
              <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <div className="flex text-sm text-gray-600">
              <label htmlFor="logo-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-green-500 hover:text-green-400 focus-within:outline-none">
                <span>Choose File</span>
                <input id="logo-upload" name="logo-upload" type="file" className="sr-only" />
              </label>
              <p className="pl-1">No file chosen</p>
            </div>
            <p className="text-xs text-gray-500">PNG, JPG, SVG up to 5MB</p>
          </div>
        </div>
      </div>
    </div>
  </>
)


const CreateAccount = () => {
  const { role } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend API
    console.log('Form submitted:', formData);
    // Redirect to login or dashboard after successful registration
    // navigate('/login');
  };
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleBack = () => {
    navigate('/create-account');
  };
  
  // Determine which form to render based on role
  const renderForm = () => {
    switch(role) {
      case 'student':
        return <StudentForm />;
      case 'alumni':
        return <AlumniForm />;
      case 'company':
        return <CompanyForm />;
      default:
        // Redirect back to role selection if invalid role
        navigate('/create-account');
        return null;
    }
  };
  
  // Get role-specific title
  const getTitle = () => {
    switch(role) {
      case 'student':
        return 'Student Registration';
      case 'alumni':
        return 'Alumni Registration';
      case 'company':
        return 'Company Registration';
      default:
        return 'Create Account';
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left side with background image and welcome message */}
      <div className="hidden md:flex md:w-1/2 bg-gray-800 text-white flex-col items-center justify-center p-12 relative">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="z-10 flex flex-col items-center text-center">
          <div className="mb-8">
            <svg width="180" height="40" viewBox="0 0 180 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
              <text x="50" y="30" fill="currentColor" fontSize="24" fontWeight="bold">ZaiAlumni</text>
              <path d="M30 5L40 20L30 35L20 20L30 5Z" fill="#9AE6B4" />
              <path d="M20 20L30 35L10 35L20 20Z" fill="#68D391" />
              <path d="M20 20L10 35L10 5L20 20Z" fill="#48BB78" />
              <path d="M20 20L10 5L30 5L20 20Z" fill="#38A169" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold mb-4">Welcome Back</h2>
          <p className="text-gray-300 mb-6 max-w-md">
            Register now to see people who have attended or graduated from a particular school, college or university.
          </p>
        </div>
      </div>
      
      {/* Right side with form */}
      <div className="w-full md:w-1/2 bg-white flex items-center justify-center p-4 md:p-12">
        <div className="w-full max-w-md">
          <div className="mb-8">
            <button 
              onClick={handleBack}
              className="flex items-center text-alumni-blue hover:text-alumni-lightblue mb-6"
            >
              <ArrowLeft size={16} className="mr-1" />
              Back to Role Selection
            </button>
            
            <h2 className="text-2xl font-bold text-gray-900">Create Account</h2>
            <p className="text-sm text-gray-600 mt-1">
              Already have an account? <a href="/login" className="font-medium text-alumni-blue hover:text-alumni-lightblue">Sign in</a>
            </p>
          </div>
          
          <form onSubmit={handleSubmit} onChange={handleChange} className="space-y-6">
            {renderForm()}
            
            <div>
              <Button
                type="submit"
                className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-md font-medium"
              >
                Sign Up
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
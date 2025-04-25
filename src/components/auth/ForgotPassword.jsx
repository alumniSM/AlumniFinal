import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { ArrowLeft } from "lucide-react";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic validation
    if (!email.trim()) {
      setError("Please enter your email address");
      return;
    }
    
    // Here you would typically call an API to send a password reset email
    console.log("Password reset requested for:", email);
    
    // Show success message
    setIsSubmitted(true);
    setError("");
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Side - Dark Background with Logo and Welcome Message */}
      <div className="bg-gray-900 text-white md:w-1/2 p-8 flex flex-col justify-center items-center">
        <div className="max-w-md mx-auto text-center">
          <div className="mb-8 flex items-center justify-center">
            <svg className="h-10 w-10 text-green-500 mr-2" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
            <span className="text-2xl font-bold">ZaiAlumni</span>
          </div>
          
          <h2 className="text-3xl font-bold mb-4">Reset Your Password</h2>
          <p className="text-gray-300 mb-6">
            Enter your email address and we'll send you instructions to reset your password.
          </p>
        </div>
      </div>

      {/* Right Side - Password Reset Form */}
      <div className="bg-white md:w-1/2 p-8 flex items-center justify-center">
        <div className="max-w-md w-full space-y-8">
          <div>
            <Link to="/login" className="flex items-center text-green-600 hover:text-green-500 mb-6">
              <ArrowLeft size={16} className="mr-2" />
              Back to Login
            </Link>
            <h2 className="mt-2 text-3xl font-extrabold text-gray-900">Forgot Password</h2>
            <p className="mt-2 text-sm text-gray-600">
              Enter your email address below and we'll send you a link to reset your password.
            </p>
          </div>

          {!isSubmitted ? (
            <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
              </div>

              <div>
                <Button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                >
                  Send Reset Link
                </Button>
              </div>
            </form>
          ) : (
            <div className="mt-8 space-y-6 text-center">
              <div className="rounded-md bg-green-50 p-4">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-green-800">
                      Password reset link sent! Please check your email.
                    </p>
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-600">
                Didn't receive the email? Check your spam folder or
                <button 
                  onClick={() => setIsSubmitted(false)} 
                  className="ml-1 font-medium text-green-600 hover:text-green-500"
                >
                  try again
                </button>
              </p>
              <div className="mt-6">
                <Link 
                  to="/login"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                >
                  Return to Login
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
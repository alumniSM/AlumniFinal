import React, { useState } from 'react';
import { Facebook, Twitter, Linkedin, Instagram, Upload } from 'lucide-react';

const EditProfile = ({ userData, onSave }) => {
  const [formData, setFormData] = useState({
    ...userData,
    socialLinks: {
      facebook: '',
      twitter: '',
      linkedin: '',
      instagram: ''
    }
  });

  const [previewImage, setPreviewImage] = useState(userData.profileImage);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
        setFormData(prev => ({
          ...prev,
          profileImage: reader.result
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Profile Picture */}
      <div className="flex items-center space-x-4">
        <div className="relative">
          <img
            src={previewImage}
            alt="Profile"
            className="w-24 h-24 rounded-full object-cover border-2 border-gray-200"
          />
          <label
            htmlFor="profile-image"
            className="absolute bottom-0 right-0 bg-alumni-blue text-white p-1.5 rounded-full cursor-pointer hover:bg-alumni-blue/90 transition-colors"
          >
            <Upload size={14} />
          </label>
          <input
            type="file"
            id="profile-image"
            accept="image/*"
            onChange={handleImageChange}
            className="hidden"
          />
        </div>
        <div>
          <h4 className="text-sm font-medium">Profile Picture</h4>
          <p className="text-xs text-gray-500">JPG, GIF or PNG. Max size of 800K</p>
        </div>
      </div>

      {/* Personal Information */}
      <div>
        <h4 className="text-sm font-semibold mb-4">Personal Information</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-alumni-blue"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Nick Name</label>
            <input
              type="text"
              name="nickName"
              value={formData.nickName}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-alumni-blue"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-alumni-blue"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-alumni-blue"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Date of Birth</label>
            <input
              type="date"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-alumni-blue"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Gender</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-alumni-blue"
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>
      </div>

      {/* Bio */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Profile Bio</label>
        <textarea
          name="bio"
          value={formData.bio}
          onChange={handleInputChange}
          rows="4"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-alumni-blue"
        ></textarea>
      </div>

      {/* Address Information */}
      <div>
        <h4 className="text-sm font-semibold mb-4">Address Information</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-alumni-blue"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">State</label>
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-alumni-blue"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Country</label>
            <input
              type="text"
              name="country"
              value={formData.country}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-alumni-blue"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Zip Code</label>
            <input
              type="text"
              name="zipCode"
              value={formData.zipCode}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-alumni-blue"
            />
          </div>
        </div>
      </div>

      {/* Social Links */}
      <div>
        <h4 className="text-sm font-semibold mb-4">Social Links</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center space-x-2">
            <Facebook size={20} className="text-gray-400" />
            <input
              type="url"
              name="facebook"
              placeholder="Facebook URL"
              value={formData.socialLinks.facebook}
              onChange={(e) => setFormData(prev => ({
                ...prev,
                socialLinks: {
                  ...prev.socialLinks,
                  facebook: e.target.value
                }
              }))}
              className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-alumni-blue"
            />
          </div>
          <div className="flex items-center space-x-2">
            <Twitter size={20} className="text-gray-400" />
            <input
              type="url"
              name="twitter"
              placeholder="Twitter URL"
              value={formData.socialLinks.twitter}
              onChange={(e) => setFormData(prev => ({
                ...prev,
                socialLinks: {
                  ...prev.socialLinks,
                  twitter: e.target.value
                }
              }))}
              className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-alumni-blue"
            />
          </div>
          <div className="flex items-center space-x-2">
            <Linkedin size={20} className="text-gray-400" />
            <input
              type="url"
              name="linkedin"
              placeholder="LinkedIn URL"
              value={formData.socialLinks.linkedin}
              onChange={(e) => setFormData(prev => ({
                ...prev,
                socialLinks: {
                  ...prev.socialLinks,
                  linkedin: e.target.value
                }
              }))}
              className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-alumni-blue"
            />
          </div>
          <div className="flex items-center space-x-2">
            <Instagram size={20} className="text-gray-400" />
            <input
              type="url"
              name="instagram"
              placeholder="Instagram URL"
              value={formData.socialLinks.instagram}
              onChange={(e) => setFormData(prev => ({
                ...prev,
                socialLinks: {
                  ...prev.socialLinks,
                  instagram: e.target.value
                }
              }))}
              className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-alumni-blue"
            />
          </div>
        </div>
      </div>

      {/* Submit Button */}
      <div className="flex justify-end">
        <button
          type="submit"
          className="px-6 py-2 bg-alumni-blue text-white rounded-md hover:bg-alumni-blue/90 transition-colors"
        >
          Save Changes
        </button>
      </div>
    </form>
  );
};

export default EditProfile;
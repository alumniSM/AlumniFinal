import React from "react";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  ArrowRight,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-alumni-blue pt-16 pb-6 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About */}
          <div>
            <div className="mb-4">
              <span className="text-2xl font-bold">
                ZAI<span className="text-alumni-orange">ALUMNI</span>
              </span>
            </div>
            <p className="text-gray-300 mb-4">
              Connecting graduates, fostering professional growth, and building
              a supportive community of alumni from around the world.
            </p>
            <div className="flex space-x-3">
              <a
                href="#"
                className="bg-white bg-opacity-10 hover:bg-alumni-lightblue w-9 h-9 rounded-full flex items-center justify-center transition-colors"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="bg-white bg-opacity-10 hover:bg-alumni-lightblue w-9 h-9 rounded-full flex items-center justify-center transition-colors"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="bg-white bg-opacity-10 hover:bg-alumni-lightblue w-9 h-9 rounded-full flex items-center justify-center transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="bg-white bg-opacity-10 hover:bg-alumni-lightblue w-9 h-9 rounded-full flex items-center justify-center transition-colors"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="#"
                className="bg-white bg-opacity-10 hover:bg-alumni-lightblue w-9 h-9 rounded-full flex items-center justify-center transition-colors"
              >
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {[
                "About Us",
                "Events",
                "News",
                "Alumni Directory",
                "Gallery",
                "Donations",
                "Contact",
              ].map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors flex items-center"
                  >
                    <ArrowRight size={14} className="mr-2" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Recent Posts */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Recent Posts</h3>
            <div className="space-y-4">
              {[
                {
                  title: "Alumni Success Story: From Graduate to CEO",
                  date: "Sep 15, 2023",
                },
                {
                  title: "New Scholarship Program Launched",
                  date: "Sep 10, 2023",
                },
                {
                  title: "Alumni Association Elects New Board",
                  date: "Sep 5, 2023",
                },
              ].map((post, index) => (
                <div key={index} className="flex items-start">
                  <ArrowRight size={14} className="mr-2 mt-1" />
                  <div>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-white transition-colors text-sm"
                    >
                      {post.title}
                    </a>
                    <p className="text-gray-400 text-xs mt-1">{post.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={18} className="mr-3 mt-1" />
                <span className="text-gray-300">
                  123 University Avenue, New York, NY 10012
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-3" />
                <a
                  href="tel:+12125551234"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  +1 (212) 555-1234
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-3" />
                <a
                  href="mailto:info@zaialumni.com"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  info@zaialumni.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-gray-700 pt-8 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2">
              <h3 className="text-xl font-semibold mb-2">
                Subscribe to Our Newsletter
              </h3>
              <p className="text-gray-300">
                Stay updated with the latest news, events, and opportunities.
              </p>
            </div>
            <div>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your Email Address"
                  className="flex-grow py-3 px-4 bg-white bg-opacity-10 text-white rounded-l-md focus:outline-none"
                />
                <button className="bg-alumni-orange hover:bg-opacity-90 transition-colors py-3 px-4 rounded-r-md">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} ZAI Alumni Association. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

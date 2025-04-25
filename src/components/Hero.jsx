import React from "react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 bg-gradient-to-r from-alumni-blue to-alumni-lightblue text-white overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')] bg-cover bg-center opacity-20"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 mb-12 lg:mb-0 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Connect With Your <br />
              Alumni Network
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-100 max-w-lg">
              Join our global community of graduates, share experiences, and
              expand your professional network with alumni from around the
              world.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="btn-outline">Discover Alumni</Button>
              <Button className="bg-white text-alumni-blue hover:bg-gray-100">
                Upcoming Events
              </Button>
            </div>
          </div>

          <div
            className="lg:w-2/5 relative animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="bg-white p-6 rounded-lg shadow-xl">
              <div className="text-alumni-blue font-bold text-2xl mb-4">
                Featured Alumni
              </div>
              <div className="flex items-center mb-4 border-b border-gray-100 pb-4">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                  alt="Alumni"
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-semibold text-gray-800">
                    Michael Johnson
                  </h3>
                  <p className="text-gray-600 text-sm">CEO, Tech Innovations</p>
                  <p className="text-alumni-orange text-sm">Class of 2010</p>
                </div>
              </div>
              <div className="flex items-center">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80"
                  alt="Alumni"
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-semibold text-gray-800">
                    Sarah Williams
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Marketing Director, Global Brands
                  </p>
                  <p className="text-alumni-orange text-sm">Class of 2015</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-alumni-orange rounded-full opacity-20 z-0"></div>
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-16 bg-white"
        style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 0)" }}
      ></div>
    </section>
  );
};

export default Hero;

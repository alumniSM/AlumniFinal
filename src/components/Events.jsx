import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="py-16 bg-alumni-lightgray">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-r from-alumni-blue to-alumni-lightblue rounded-xl shadow-xl overflow-hidden">
          <div className="flex flex-col md:flex-row items-center p-8 md:p-12">
            <div className="md:w-2/3 mb-8 md:mb-0">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Connect With Fellow Alumni?
              </h2>
              <p className="text-gray-100 text-lg mb-0">
                Join our thriving community today and unlock exclusive benefits,
                networking opportunities, and lifelong connections.
              </p>
            </div>
            <div className="md:w-1/3 md:text-right">
              <Button className="bg-white text-alumni-blue hover:bg-gray-100 transition-all shadow-lg">
                <span>Join Now</span>
                <ArrowRight size={16} className="ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;

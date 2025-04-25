import React from "react";
import { Users, Calendar, Globe, Award } from "lucide-react";

const StatCard = ({ icon, number, label }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 text-center transition-all hover:shadow-lg hover:-translate-y-1">
      <div className="bg-alumni-lightgray inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 text-alumni-blue">
        {icon}
      </div>
      <h3 className="text-3xl md:text-4xl font-bold text-alumni-blue mb-2">
        {number}
      </h3>
      <p className="text-gray-600">{label}</p>
    </div>
  );
};

const Stats = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <StatCard
            icon={<Users size={32} />}
            number="10,000+"
            label="Registered Alumni"
          />
          <StatCard
            icon={<Calendar size={32} />}
            number="120+"
            label="Annual Events"
          />
          <StatCard
            icon={<Globe size={32} />}
            number="45+"
            label="Countries Represented"
          />
          <StatCard
            icon={<Award size={32} />}
            number="250+"
            label="Distinguished Alumni"
          />
        </div>
      </div>
    </section>
  );
};

export default Stats;

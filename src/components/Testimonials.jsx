import React from "react";
import { Quote } from "lucide-react";

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 relative overflow-hidden transition-all hover:shadow-xl">
      <Quote className="absolute top-6 right-6 text-gray-200" size={48} />
      <div className="flex items-start mb-4">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-16 h-16 rounded-full object-cover mr-4"
        />
        <div>
          <h3 className="font-bold text-gray-800">{testimonial.name}</h3>
          <p className="text-gray-600 text-sm">{testimonial.role}</p>
          <p className="text-alumni-orange text-sm">
            Class of {testimonial.class}
          </p>
        </div>
      </div>
      <p className="text-gray-700 italic relative z-10">{testimonial.text}</p>
    </div>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Jennifer Parker",
      role: "Marketing Director, Global Tech",
      class: "2012",
      text: "Being part of this alumni network has been incredibly rewarding. I've connected with professionals across industries and even found my current job through an alumni referral!",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80",
    },
    {
      id: 2,
      name: "Robert Chen",
      role: "Startup Founder",
      class: "2015",
      text: "The skills and connections I gained during my time at the university were invaluable in launching my startup. The alumni events continue to be a source of inspiration and partnerships.",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
    {
      id: 3,
      name: "Sophia Rodriguez",
      role: "Senior Consultant, Deloitte",
      class: "2018",
      text: "The mentorship program through the alumni network helped me navigate the early years of my career. I'm now proud to give back by mentoring recent graduates myself.",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=761&q=80",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-alumni-blue to-alumni-lightblue text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our Alumni Say
          </h2>
          <p className="text-lg text-gray-100 mb-10 max-w-3xl mx-auto">
            Hear directly from our community members about their experiences and
            the value of being connected.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-16 bg-white"
        style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 0)" }}
      ></div>
    </section>
  );
};

export default Testimonials;

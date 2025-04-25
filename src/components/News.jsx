import React from "react";
import { Calendar, User, MessageSquare, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const NewsCard = ({ post }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1">
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-52 object-cover"
      />
      <div className="p-6">
        <div className="flex items-center text-gray-500 text-sm mb-3">
          <div className="flex items-center mr-4">
            <Calendar size={14} className="mr-1" />
            <span>{post.date}</span>
          </div>
          <div className="flex items-center">
            <User size={14} className="mr-1" />
            <span>{post.author}</span>
          </div>
        </div>
        <h3 className="text-xl font-bold text-gray-800 mb-3">{post.title}</h3>
        <p className="text-gray-600 mb-4">{post.excerpt}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center text-gray-500 text-sm">
            <MessageSquare size={14} className="mr-1" />
            <span>{post.comments} Comments</span>
          </div>
          <a
            href="#"
            className="text-alumni-blue font-medium hover:text-alumni-lightblue flex items-center"
          >
            Read More
            <ArrowRight size={16} className="ml-1" />
          </a>
        </div>
      </div>
    </div>
  );
};

const News = () => {
  const posts = [
    {
      id: 1,
      title: "Alumni Success Story: From Graduate to CEO",
      excerpt:
        "Learn how John Smith went from being a recent graduate to becoming the CEO of a Fortune 500 company in just 10 years.",
      date: "Sep 15, 2023",
      author: "Admin",
      comments: 8,
      image:
        "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
    {
      id: 2,
      title: "New Scholarship Program Launched for Alumni Children",
      excerpt:
        "The university has announced a new scholarship program exclusively for the children of alumni. Applications are now open.",
      date: "Sep 10, 2023",
      author: "Maria Rodriguez",
      comments: 12,
      image:
        "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
    {
      id: 3,
      title: "Alumni Association Elects New Board Members",
      excerpt:
        "The Alumni Association has elected a new board of directors for the 2023-2024 term. Meet the new team leading our community.",
      date: "Sep 5, 2023",
      author: "David Chen",
      comments: 5,
      image:
        "https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">Latest News & Updates</h2>
          <p className="section-subtitle">
            Stay informed with the latest news, stories, and updates from our
            alumni community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <NewsCard key={post.id} post={post} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="btn-primary">View All Articles</Button>
        </div>
      </div>
    </section>
  );
};

export default News;

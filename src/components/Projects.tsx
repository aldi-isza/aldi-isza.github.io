import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Project } from '../types';

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "E-Commerce Mobile App",
      description: "A full-featured e-commerce application with payment integration, user authentication, and real-time updates.",
      technologies: ["React Native", "Node.js", "MongoDB", "Stripe"],
      imageUrl: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
      demoUrl: "https://demo.example.com",
      githubUrl: "https://github.com/example"
    },
    {
      id: 2,
      title: "Food Delivery App",
      description: "Real-time food delivery application with GPS tracking, payment processing, and order management.",
      technologies: ["Flutter", "Firebase", "Google Maps", "PayPal"],
      imageUrl: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=800",
      demoUrl: "https://demo.example.com",
      githubUrl: "https://github.com/example"
    },
    {
      id: 3,
      title: "Fitness Tracking App",
      description: "Comprehensive fitness app with workout tracking, nutrition planning, and social features.",
      technologies: ["React Native", "GraphQL", "PostgreSQL", "AWS"],
      imageUrl: "https://images.pexels.com/photos/317157/pexels-photo-317157.jpeg?auto=compress&cs=tinysrgb&w=800",
      demoUrl: "https://demo.example.com",
      githubUrl: "https://github.com/example"
    },
    {
      id: 4,
      title: "Chat Application",
      description: "Real-time messaging app with end-to-end encryption, group chats, and media sharing.",
      technologies: ["Flutter", "Socket.io", "Redis", "Docker"],
      imageUrl: "https://images.pexels.com/photos/1482061/pexels-photo-1482061.jpeg?auto=compress&cs=tinysrgb&w=800",
      demoUrl: "https://demo.example.com",
      githubUrl: "https://github.com/example"
    },
    {
      id: 5,
      title: "Learning Management System",
      description: "Educational platform with video streaming, progress tracking, and interactive assessments.",
      technologies: ["React Native", "Django", "PostgreSQL", "AWS S3"],
      imageUrl: "https://images.pexels.com/photos/159844/cellular-education-classroom-159844.jpeg?auto=compress&cs=tinysrgb&w=800",
      demoUrl: "https://demo.example.com",
      githubUrl: "https://github.com/example"
    },
    {
      id: 6,
      title: "Travel Booking App",
      description: "Complete travel booking solution with hotel reservations, flight booking, and itinerary planning.",
      technologies: ["Flutter", "Node.js", "MySQL", "Stripe"],
      imageUrl: "https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg?auto=compress&cs=tinysrgb&w=800",
      demoUrl: "https://demo.example.com",
      githubUrl: "https://github.com/example"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills and expertise in mobile development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-slate-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                  <div className="flex space-x-2">
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-200"
                        aria-label="View demo"
                      >
                        <ExternalLink size={16} />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-gray-800 text-white rounded-full hover:bg-gray-900 transition-colors duration-200"
                        aria-label="View source code"
                      >
                        <Github size={16} />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
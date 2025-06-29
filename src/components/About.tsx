import React from 'react';
import { Code, Smartphone, Zap, Users } from 'lucide-react';

const About: React.FC = () => {
  const highlights = [
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile First",
      description: "Specialized in creating responsive, mobile-optimized applications"
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and well-documented code"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Performance",
      description: "Optimizing applications for speed and efficiency"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "User-Centric",
      description: "Focusing on exceptional user experience and interface design"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              I'm a passionate Mobile Developer with a keen eye for creating exceptional user experiences. 
              With years of experience in the field, I specialize in building high-performance mobile 
              applications that not only look great but also deliver outstanding functionality.
            </p>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              My approach combines technical expertise with creative problem-solving to deliver solutions 
              that exceed expectations. I stay current with the latest technologies and best practices 
              to ensure every project meets modern standards.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  5+ Years
                </h4>
                <p className="text-gray-600 dark:text-gray-400">Experience</p>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  50+ Projects
                </h4>
                <p className="text-gray-600 dark:text-gray-400">Completed</p>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  100% Client
                </h4>
                <p className="text-gray-600 dark:text-gray-400">Satisfaction</p>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  24/7 Support
                </h4>
                <p className="text-gray-600 dark:text-gray-400">Available</p>
              </div>
            </div>
          </div>

          {/* Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="p-6 bg-gray-50 dark:bg-slate-800 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="text-blue-600 dark:text-blue-400 mb-4">
                  {highlight.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {highlight.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
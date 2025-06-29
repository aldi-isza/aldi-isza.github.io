import React from 'react';
import { Calendar, MapPin, Award } from 'lucide-react';
import { Experience } from '../types';

const ExperienceSection: React.FC = () => {
  const experiences: Experience[] = [
    {
      year: "2023-Present",
      title: "Senior Mobile Developer",
      company: "TechCorp Solutions",
      description: "Leading mobile development team, architecting scalable solutions, and mentoring junior developers.",
      achievements: [
        "Increased app performance by 40% through optimization",
        "Led team of 5 developers on flagship mobile app",
        "Implemented CI/CD pipeline reducing deployment time by 60%"
      ]
    },
    {
      year: "2021-2023",
      title: "Mobile Application Developer",
      company: "Innovation Labs",
      description: "Developed cross-platform mobile applications using React Native and Flutter for various clients.",
      achievements: [
        "Built 15+ mobile applications from concept to deployment",
        "Achieved 4.8+ app store rating across all projects",
        "Reduced development time by 30% through reusable components"
      ]
    },
    {
      year: "2020-2021",
      title: "Junior Mobile Developer",
      company: "StartupHub",
      description: "Focused on iOS and Android native development, contributing to multiple startup projects.",
      achievements: [
        "Contributed to 8 successful app launches",
        "Learned and implemented modern development practices",
        "Collaborated with design team on UI/UX improvements"
      ]
    },
    {
      year: "2018-2020",
      title: "Frontend Developer",
      company: "Digital Agency Pro",
      description: "Started career building responsive web applications and learning mobile development fundamentals.",
      achievements: [
        "Built 20+ responsive websites",
        "Mastered modern JavaScript frameworks",
        "Transitioned from web to mobile development"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            My journey through the mobile development landscape, building expertise and delivering exceptional results
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-600"></div>

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline node */}
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-slate-800 z-10"></div>

                {/* Content */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'} ml-16 md:ml-0`}>
                  <div className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                    {/* Year badge */}
                    <div className="inline-flex items-center px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium mb-4">
                      <Calendar className="w-4 h-4 mr-2" />
                      {experience.year}
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {experience.title}
                    </h3>

                    <div className="flex items-center text-gray-600 dark:text-gray-300 mb-4">
                      <MapPin className="w-4 h-4 mr-2" />
                      {experience.company}
                    </div>

                    <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                      {experience.description}
                    </p>

                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white flex items-center">
                        <Award className="w-4 h-4 mr-2" />
                        Key Achievements:
                      </h4>
                      <ul className="space-y-1">
                        {experience.achievements.map((achievement, achievementIndex) => (
                          <li
                            key={achievementIndex}
                            className="text-sm text-gray-600 dark:text-gray-300 flex items-start"
                          >
                            <span className="text-blue-600 dark:text-blue-400 mr-2 mt-1">•</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block w-5/12"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
              5+
            </div>
            <div className="text-gray-600 dark:text-gray-300">Years Experience</div>
          </div>
          
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">
              50+
            </div>
            <div className="text-gray-600 dark:text-gray-300">Projects Completed</div>
          </div>
          
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-green-600 dark:text-green-400 mb-2">
              25+
            </div>
            <div className="text-gray-600 dark:text-gray-300">Happy Clients</div>
          </div>
          
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-orange-600 dark:text-orange-400 mb-2">
              4.9
            </div>
            <div className="text-gray-600 dark:text-gray-300">Avg Rating</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
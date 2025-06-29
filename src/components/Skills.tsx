import React from 'react';
import { Skill } from '../types';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Mobile Development",
      skills: [
        { name: "React Native", level: 95, icon: "⚛️" },
        { name: "Flutter", level: 90, icon: "💙" },
        { name: "iOS Development", level: 85, icon: "🍎" },
        { name: "Android Development", level: 88, icon: "🤖" }
      ]
    },
    {
      title: "Frontend Technologies",
      skills: [
        { name: "JavaScript", level: 95, icon: "🟨" },
        { name: "TypeScript", level: 90, icon: "🔷" },
        { name: "React", level: 92, icon: "⚛️" },
        { name: "Vue.js", level: 80, icon: "💚" }
      ]
    },
    {
      title: "Backend & Database",
      skills: [
        { name: "Node.js", level: 88, icon: "💚" },
        { name: "Python", level: 82, icon: "🐍" },
        { name: "MongoDB", level: 85, icon: "🍃" },
        { name: "PostgreSQL", level: 80, icon: "🐘" }
      ]
    },
    {
      title: "Tools & Services",
      skills: [
        { name: "Git", level: 95, icon: "📝" },
        { name: "Docker", level: 78, icon: "🐳" },
        { name: "AWS", level: 75, icon: "☁️" },
        { name: "Firebase", level: 90, icon: "🔥" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Here's a comprehensive overview of my technical skills and the technologies I work with
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                {category.title}
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex} 
                    className="flex items-center space-x-3 p-4 bg-gray-50 dark:bg-slate-800 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <span className="text-2xl">{skill.icon}</span>
                    <span className="text-lg font-medium text-gray-900 dark:text-white">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional certifications or achievements */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            Certifications & Achievements
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-gray-50 dark:bg-slate-800 rounded-xl">
              <div className="text-3xl mb-3">🏆</div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Google Mobile Web Specialist
              </h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Certified in mobile web development best practices
              </p>
            </div>
            
            <div className="p-6 bg-gray-50 dark:bg-slate-800 rounded-xl">
              <div className="text-3xl mb-3">📱</div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                React Native Expert
              </h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Advanced certification in React Native development
              </p>
            </div>
            
            <div className="p-6 bg-gray-50 dark:bg-slate-800 rounded-xl">
              <div className="text-3xl mb-3">☁️</div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                AWS Solutions Architect
              </h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Certified in cloud architecture and deployment
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
import React from 'react';
import Section from './Section';
import SectionTitle from './SectionTitle';

interface AboutSectionProps {
  title: string;
  subtitle?: string;
  founderName: string;
  founderImage?: string;
  description: string[];
  stats?: {
    label: string;
    value: string;
  }[];
}

const AboutSection: React.FC<AboutSectionProps> = ({
  title,
  subtitle,
  founderName,
  founderImage,
  description,
  stats,
}) => {
  return (
    <Section bgColor="bg-white" animation="slide-up">
      <SectionTitle 
        title={title} 
        subtitle={subtitle}
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {founderImage && (
          <div className="relative">
            <div className="absolute inset-0 bg-primary-200 rounded-lg transform translate-x-4 translate-y-4 -z-10"></div>
            <img 
              src={founderImage}
              alt={founderName}
              className="rounded-lg shadow-lg w-full object-cover"
            />
          </div>
        )}
        
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-primary-600">{founderName}</h3>
          
          <div className="space-y-4">
            {description.map((paragraph, index) => (
              <p key={index} className="text-gray-700">{paragraph}</p>
            ))}
          </div>
          
          {stats && stats.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
                  <p className="text-2xl font-bold text-primary-500">{stat.value}</p>
                  <p className="text-sm text-gray-600">{stat.label}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </Section>
  );
};

export default AboutSection;
import React from 'react';
import Section from './Section';
import SectionTitle from './SectionTitle';

interface DescriptionItemText { type: 'text'; content: string; }
interface DescriptionItemImage { type: 'image'; url: string; alt?: string; }

type DescriptionItem = DescriptionItemText | DescriptionItemImage;

interface AboutSectionProps {
  title: string;
  subtitle?: string;
  founderName: string;
  founderImages?: string[];
  description: DescriptionItem[];
  stats?: {
    label: string;
    value: string;
  }[];
}

const AboutSection: React.FC<AboutSectionProps> = ({
  title,
  subtitle,
  founderName,
  founderImages,
  description,
  stats,
}) => {
  return (
    <Section bgColor="bg-white" animation="slide-up">
      <SectionTitle 
        title={title} 
        subtitle={subtitle}
      />
      
      <div className="grid grid-cols-1 gap-12 items-center mx-auto max-w-4xl">
        {/* Removed separate image display */}
        {/* {founderImages && founderImages.length > 0 && (
          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-4">
             {founderImages.map((imageUrl, index) => (
               <div key={index} className="relative">
                 <div className="absolute inset-0 bg-primary-200 rounded-lg transform translate-x-4 translate-y-4 -z-10"></div>
                 <img 
                   src={imageUrl}
                   alt={`${founderName} ${index + 1}`}
                   className="rounded-lg shadow-lg w-full object-cover"
                 />
               </div>
             ))}
          </div>
        )} */}
        
        <div className="mx-auto max-w-prose">
          <h3 className="text-2xl font-semibold mb-4 text-primary-600">{founderName}</h3>
          
          <div className="space-y-4">
            {/* Updated to map over DescriptionItem */}
            {description.map((item, index) => (
              <React.Fragment key={index}>
                {item.type === 'text' && (
                  <p className="text-gray-700">{item.content}</p>
                )}
                {item.type === 'image' && (
                  <div className="my-8">
                    <div className="relative">
                       <div className="absolute inset-0 bg-primary-200 rounded-lg transform translate-x-4 translate-y-4 -z-10"></div>
                       <img 
                         src={item.url}
                         alt={item.alt || `Image related to ${founderName}`}
                         className="rounded-lg shadow-lg w-full object-cover"
                       />
                    </div>
                  </div>
                )}
              </React.Fragment>
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
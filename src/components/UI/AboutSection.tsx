import React from 'react';

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
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold mb-8 text-primary-600 text-center">{founderName}</h3>
          
          <div className="space-y-6">
            {description.map((item, index) => (
              <React.Fragment key={index}>
                {item.type === 'text' && (
                  <p className="text-gray-700 leading-relaxed text-lg">{item.content}</p>
                )}
                {item.type === 'image' && (
                  <div className="my-12">
                    <div className="max-w-2xl mx-auto">
                       <img 
                         src={item.url}
                         alt={item.alt || `Image related to ${founderName}`}
                         className="rounded-lg shadow-xl w-full object-cover"
                         loading="lazy"
                       />
                    </div>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
          
          {stats && stats.length > 0 && (
            <div className="mt-16 pt-12 border-t-2 border-primary-100">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center p-6 bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl border border-primary-200 shadow-md">
                    <p className="text-3xl font-bold text-primary-600 mb-2">{stat.value}</p>
                    <p className="text-sm text-gray-700 font-semibold uppercase tracking-wide">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
import React from 'react';
import Section from './Section';
import SectionTitle from './SectionTitle';

interface Benefit {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface BenefitsSectionProps {
  title: string;
  subtitle?: string;
  benefits: Benefit[];
}

const BenefitsSection: React.FC<BenefitsSectionProps> = ({
  title,
  subtitle,
  benefits,
}) => {
  return (
    <Section bgColor="bg-gray-50" animation="slide-up">
      <SectionTitle 
        title={title} 
        subtitle={subtitle}
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {benefits.map((benefit, index) => (
          <div 
            key={index}
            className="card hover:bg-gradient-to-br hover:from-primary-50 hover:to-white transition duration-300"
          >
            <div className="text-primary-500 mb-4">
              {benefit.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
            <p className="text-gray-600">{benefit.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default BenefitsSection;
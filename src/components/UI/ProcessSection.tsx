import React from 'react';
import Section from './Section';
import SectionTitle from './SectionTitle';

interface ProcessStep {
  number: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface ProcessSectionProps {
  title: string;
  subtitle?: string;
  steps: ProcessStep[];
}

const ProcessSection: React.FC<ProcessSectionProps> = ({
  title,
  subtitle,
  steps,
}) => {
  return (
    <Section bgColor="bg-white" animation="fade-in">
      <SectionTitle 
        title={title} 
        subtitle={subtitle}
      />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((step, index) => (
          <div 
            key={index}
            className="card flex flex-col items-center text-center p-8 border-t-4 border-primary-500"
          >
            <div className="bg-primary-100 p-4 rounded-full text-primary-500 mb-6">
              {step.icon}
            </div>
            <div className="bg-primary-500 text-white font-bold rounded-full w-10 h-10 flex items-center justify-center mb-4">
              {step.number}
            </div>
            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
            <p className="text-gray-600">{step.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default ProcessSection;
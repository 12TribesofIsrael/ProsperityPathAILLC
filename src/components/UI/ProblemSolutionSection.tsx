import React from 'react';
import { Check, X } from 'lucide-react';
import Section from './Section';
import SectionTitle from './SectionTitle';

interface Problem {
  text: string;
}

interface SolutionPoint {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface ProblemSolutionSectionProps {
  title: string;
  problems: Problem[];
  solutionTitle: string;
  solutionDescription: string;
  solutionPoints: SolutionPoint[];
}

const ProblemSolutionSection: React.FC<ProblemSolutionSectionProps> = ({
  title,
  problems,
  solutionTitle,
  solutionDescription,
  solutionPoints,
}) => {
  return (
    <Section bgColor="bg-gray-50" animation="slide-up">
      <SectionTitle title={title} />
      
      {/* Problems */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-6 text-gray-800">Common Challenges</h3>
          <ul className="space-y-4">
            {problems.map((problem, index) => (
              <li key={index} className="flex items-start">
                <span className="flex-shrink-0 p-1 rounded-full bg-red-100 mr-3 mt-1">
                  <X size={16} className="text-red-500" />
                </span>
                <span>{problem.text}</span>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Solution */}
        <div className="bg-gradient-to-br from-primary-500 to-primary-700 p-8 rounded-lg shadow-md text-white">
          <h3 className="text-xl font-semibold mb-4">{solutionTitle}</h3>
          <p className="mb-6">{solutionDescription}</p>
          <ul className="space-y-4">
            {solutionPoints.map((point, index) => (
              <li key={index} className="flex items-start">
                <span className="flex-shrink-0 p-1 rounded-full bg-white mr-3 mt-1">
                  <Check size={16} className="text-primary-500" />
                </span>
                <div>
                  <span className="font-semibold">{point.title}</span>
                  <p className="text-sm text-gray-100">{point.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
};

export default ProblemSolutionSection;
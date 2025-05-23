import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import Section from './Section';
import SectionTitle from './SectionTitle';

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqSectionProps {
  title: string;
  subtitle?: string;
  faqs: FaqItem[];
}

const FaqSection: React.FC<FaqSectionProps> = ({
  title,
  subtitle,
  faqs,
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Section bgColor="bg-white" animation="fade-in">
      <SectionTitle 
        title={title} 
        subtitle={subtitle}
      />
      
      <div className="max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <div 
            key={index}
            className="border-b border-gray-200 last:border-b-0"
          >
            <button
              className="w-full py-6 text-left flex justify-between items-center focus:outline-none"
              onClick={() => toggleFaq(index)}
              aria-expanded={openIndex === index}
            >
              <span className="text-lg font-medium text-gray-900">{faq.question}</span>
              {openIndex === index ? (
                <ChevronUp className="flex-shrink-0 text-primary-500" />
              ) : (
                <ChevronDown className="flex-shrink-0 text-gray-400" />
              )}
            </button>
            
            <div 
              className={`overflow-hidden transition-all duration-300 ${
                openIndex === index ? 'max-h-96 pb-6' : 'max-h-0'
              }`}
            >
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default FaqSection;
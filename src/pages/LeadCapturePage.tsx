import React from 'react';
import Section from '../components/UI/Section';
import SectionTitle from '../components/UI/SectionTitle';
import LeadCaptureForm from '../components/UI/LeadCaptureForm';
import { formSteps } from '../data/testimonials';

const LeadCapturePage = () => {
  const handleFormSubmit = (formData: Record<string, string>) => {
    console.log('Form submitted:', formData);
    // Here you would normally send the data to your backend or API
  };

  return (
    <div className="pt-24 pb-16">
      <Section bgColor="bg-gray-50">
        <SectionTitle 
          title="Get Started with Prosperity Path AI™"
          subtitle="Complete the form below to begin your journey to financial freedom"
        />
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-1 bg-primary-900 text-white p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">What You'll Get:</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="mr-2 mt-1 bg-secondary-500 rounded-full p-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>Free credit assessment & analysis</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 bg-secondary-500 rounded-full p-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>Custom funding opportunity report</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 bg-secondary-500 rounded-full p-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>1-on-1 strategy session with an expert</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 bg-secondary-500 rounded-full p-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>Access to our AI credit repair tools</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 bg-secondary-500 rounded-full p-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>Special bonuses (limited time only)</span>
                </li>
              </ul>
              
              <div className="mt-8 p-4 bg-white/10 rounded-lg">
                <p className="text-sm italic">
                  "The best investment I ever made was in my financial education and taking action with Born Made Bosses."
                </p>
                <p className="text-xs mt-2 font-semibold">
                  — Dwayne T., 720+ Credit Score
                </p>
              </div>
            </div>
            
            <div className="md:col-span-2">
              <LeadCaptureForm steps={formSteps} onSubmit={handleFormSubmit} />
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default LeadCapturePage;
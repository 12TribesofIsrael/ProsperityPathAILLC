import React from 'react';
import { Link } from 'react-router-dom';
import { Check, Calendar, ArrowRight } from 'lucide-react';
import Section from '../components/UI/Section';

const ThankYouPage = () => {
  return (
    <div className="pt-24 pb-16">
      <Section bgColor="bg-gray-50">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 mb-6 bg-green-100 rounded-full">
            <Check size={32} className="text-green-600" />
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Thank You for Taking the First Step!</h1>
          
          <p className="text-lg text-gray-600 mb-8">
            Your journey to financial freedom starts here. We've received your information and will be in touch shortly.
          </p>
          
          <div className="bg-white p-8 rounded-lg shadow-md mb-8">
            <h2 className="text-2xl font-semibold mb-4">What Happens Next?</h2>
            
            <ol className="space-y-6 text-left">
              <li className="flex">
                <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-primary-100 text-primary-600 mr-4">
                  1
                </div>
                <div>
                  <h3 className="font-medium">Check Your Email</h3>
                  <p className="text-gray-600">
                    We've sent you a confirmation email with important details. Please check your inbox (and spam folder, just in case).
                  </p>
                </div>
              </li>
              
              <li className="flex">
                <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-primary-100 text-primary-600 mr-4">
                  2
                </div>
                <div>
                  <h3 className="font-medium">Book Your Strategy Call</h3>
                  <p className="text-gray-600">
                    Select a time below to speak with one of our financial experts who will analyze your situation and create a custom plan.
                  </p>
                </div>
              </li>
              
              <li className="flex">
                <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-primary-100 text-primary-600 mr-4">
                  3
                </div>
                <div>
                  <h3 className="font-medium">Receive Your Custom Roadmap</h3>
                  <p className="text-gray-600">
                    After your call, we'll create a personalized plan to repair your credit, access funding, and build wealth.
                  </p>
                </div>
              </li>
            </ol>
          </div>
          
          <div className="bg-primary-50 p-8 rounded-lg border border-primary-100 mb-12">
            <h2 className="text-xl font-semibold mb-4 flex items-center justify-center">
              <Calendar size={24} className="mr-2 text-primary-500" />
              Schedule Your Free Strategy Call
            </h2>
            
            <p className="text-gray-600 mb-6">
              Select a convenient time to speak with one of our financial experts:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-lg mx-auto">
              <a 
                href="#" 
                className="block p-3 bg-white border border-gray-200 rounded hover:border-primary-300 hover:shadow transition-all text-center"
              >
                Tomorrow<br />
                <span className="font-medium">10:00 AM - 11:00 AM</span>
              </a>
              
              <a 
                href="#" 
                className="block p-3 bg-white border border-gray-200 rounded hover:border-primary-300 hover:shadow transition-all text-center"
              >
                Tomorrow<br />
                <span className="font-medium">2:00 PM - 3:00 PM</span>
              </a>
              
              <a 
                href="#" 
                className="block p-3 bg-white border border-gray-200 rounded hover:border-primary-300 hover:shadow transition-all text-center"
              >
                Wednesday<br />
                <span className="font-medium">11:00 AM - 12:00 PM</span>
              </a>
              
              <a 
                href="#" 
                className="block p-3 bg-white border border-gray-200 rounded hover:border-primary-300 hover:shadow transition-all text-center"
              >
                Wednesday<br />
                <span className="font-medium">4:00 PM - 5:00 PM</span>
              </a>
            </div>
            
            <p className="text-sm text-gray-500 mt-4">
              Can't find a suitable time? <a href="#" className="text-primary-600 hover:underline">Click here</a> to see more options.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/" className="btn-outline flex items-center gap-2">
              Return to Homepage
            </Link>
            <a href="#" className="btn-primary flex items-center gap-2">
              Join Our Facebook Community
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default ThankYouPage;
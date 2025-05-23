import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

import Section from '../components/UI/Section';
import SectionTitle from '../components/UI/SectionTitle';
import AboutSection from '../components/UI/AboutSection';
import TestimonialsSection from '../components/UI/TestimonialsSection';
import CtaSection from '../components/UI/CtaSection';

import { testimonials } from '../data/testimonials';

const AboutPage = () => {
  return (
    <div className="pt-24">
      <Section bgColor="bg-gray-50">
        <SectionTitle 
          title="About the Founder – Tommy Lee | Prosperity Path AI LLC"
          subtitle="Transforming lives through faith-aligned financial empowerment"
        />
        
        <AboutSection
          title=""
          founderName="Tommy Lee, Founder & Chief Visionary"
          founderImage="https://images.pexels.com/photos/5989925/pexels-photo-5989925.jpeg"
          description={[
            "Tommy Lee, Founder and Chief Visionary of Prosperity Path AI LLC, is a covenant-bound brother with over two decades of mastery in Information Technology, Network Engineering, and AI-driven innovation. Rooted in the law, statutes, and commandments of the Most High, Tommy walks with fringes and foresight—fusing the ancient paths with modern power.",
            "As a Cisco-certified technician with plans to attain advanced CCNP and Cybersecurity credentials, he has guided enterprise-level projects in LAN/WAN architecture, infrastructure fortification, and intelligent automation. But more than just technical prowess, Tommy's calling is prophetic—transforming the economic mindset of his people through credit restoration, business funding strategies, and AI systems that break generational curses.",
            "From digital commerce and e-learning to advanced automation, Tommy equips clients with practical tools rooted in truth. His leadership is hands-on, solution-oriented, and fueled by a kingdom mindset: to build our communities, heal our credit, and return to the royal priesthood we were always meant to be (1 Peter 2:9)."
          ]}
          stats={[
            { label: "Years of Experience", value: "20+" },
            { label: "Families Helped", value: "500+" },
            { label: "Success Rate", value: "98%" }
          ]}
        />
      </Section>
      
      <Section bgColor="bg-white">
        <div className="max-w-4xl mx-auto">
          <SectionTitle 
            title="Our Vision & Mission"
            subtitle="Prosperity Path AI LLC is more than a business—it's a movement"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="card">
              <h3 className="text-xl font-semibold mb-4 text-primary-600">Our Vision</h3>
              <p className="text-gray-700">
                A pathway back to righteous dominion, where financial literacy meets spiritual alignment. As it is written, "Thou shalt remember the Lord thy God: for it is he that giveth thee power to get wealth" (Deuteronomy 8:18).
              </p>
            </div>
            
            <div className="card">
              <h3 className="text-xl font-semibold mb-4 text-primary-600">Our Mission</h3>
              <p className="text-gray-700">
                To empower our community through faith-aligned financial strategies, cutting-edge technology, and proven systems that create generational wealth and restore our divine inheritance.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card">
              <h3 className="text-lg font-semibold mb-3 text-primary-600">Faith-Centered</h3>
              <p className="text-gray-700">
                Operating on Biblical principles and divine wisdom in all financial matters.
              </p>
            </div>
            
            <div className="card">
              <h3 className="text-lg font-semibold mb-3 text-primary-600">Technical Excellence</h3>
              <p className="text-gray-700">
                Leveraging advanced AI and automation to deliver superior results.
              </p>
            </div>
            
            <div className="card">
              <h3 className="text-lg font-semibold mb-3 text-primary-600">Kingdom Impact</h3>
              <p className="text-gray-700">
                Building generational wealth and restoring our community's divine inheritance.
              </p>
            </div>
          </div>
        </div>
      </Section>
      
      <TestimonialsSection
        title="Success Stories"
        subtitle="See how we've helped transform lives through faith-aligned financial empowerment"
        testimonials={testimonials}
      />
      
      <CtaSection
        headline="Ready to Begin Your Journey?"
        subtext="Take the first step towards financial freedom and divine prosperity"
        ctaText="Get Started Free"
        ctaLink="/opt-in"
      />
    </div>
  );
};

export default AboutPage;
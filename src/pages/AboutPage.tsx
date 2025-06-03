import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

import Section from '../components/UI/Section';
import SectionTitle from '../components/UI/SectionTitle';
import AboutSection from '../components/UI/AboutSection';
import TestimonialsSection from '../components/UI/TestimonialsSection';
import CtaSection from '../components/UI/CtaSection';

import { testimonials } from '../data/testimonials';

const AboutPage = () => {
  const basePath = import.meta.env.BASE_URL;

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
          description={[
            { type: 'text', content: `Tommy Lee, Founder and Chief Visionary of Prosperity Path AI LLC, is a covenant-bound servant of the Most High, walking in truth, fringes, and faith. With over two decades of mastery in Information Technology, Network Engineering, and AI innovation, Tommy blends ancient wisdom with cutting-edge systems to build a platform rooted in righteousness, resilience, and elevation.` },
            { type: 'text', content: `He keeps the Most High first in all things—acknowledging that without the Creator, there is no prosperity. At Prosperity Path, everything flows through the laws, statutes, and commandments. We live by the divine principle: love the Most High with all your heart, mind, and soul—and treat your brother as yourself (Matthew 22:37–40).` },
            { type: 'image', url: `${basePath}images/Family.jpg`, alt: 'Tommy Lee Family' },
            { type: 'text', content: `Blessed with a beautiful family, Tommy has been married for over 15 years and is the proud father of three wonderful children, all gifts from the Most High. This family foundation serves as both his inspiration and his greatest motivation to build lasting generational wealth and wisdom.` },
            { type: 'text', content: `Raised in the struggle on Lehigh Avenue in North Philly, Tommy knows what it means to go without. From boiling water on a kerosene heater to being teased for hand-me-down clothes, he lived the hardship firsthand. "Bro, you smell like kerosene—I hope your kids never have to live like this," a friend once told him. That memory still fuels his mission.` },
            { type: 'text', content: `Surrounded by poverty, Tommy once turned to street life to survive, hustling not to glorify crime—but to stay afloat. Yet even then, he rejected the destructive mindset that so many adopted. A tragic loss of a close associate marked the beginning of his transformation. He chose a different path.` },
            { type: 'image', url: `${basePath}images/family 2.jpg`, alt: 'Tommy Lee with family and team' },
            { type: 'text', content: `Tommy rose to become a Level 3 Engineer—often the only Israelite in the room. After facing unjust termination and being paid to stay silent, he realized: we can't win playing someone else's game. That revelation sparked his deep dive into economics, credit systems, and the world of automation. He invested over six figures into financial education, uncovering how the wealthy truly build and preserve wealth.` },
            { type: 'text', content: `And the results? Life-changing. Through this wisdom, Tommy restored his own credit, rebuilt his wife's and daughters' scores, and together they secured their dream home. That moment proved: once you learn this, no one can ever take it from you.` },
            { type: 'text', content: `Today, he leads Prosperity Path AI LLC with the same fire—to equip others with the blueprint. From AI-driven business automation to funding strategies and credit mastery, his mission is simple: awaken, build, and empower.` },
            { type: 'text', content: `As it is written: "And the Lord shall make thee the head, and not the tail" (Deuteronomy 28:13). Tommy walks that out daily, helping others do the same—one strategy, one breakthrough, one soul at a time.` }
          ]}
          stats={[
            { label: "Years of Experience", value: "20+" },
            { label: "Families Helped", value: "500+" },
            { label: "Success Rate", value: "98%" }
          ]}
        />
      </Section>
      
      <Section bgColor="bg-white">
        <div className="max-w-6xl mx-auto">
          <SectionTitle 
            title="Our Vision & Mission"
            subtitle="Prosperity Path AI LLC is more than a business—it's a movement"
          />
          
          {/* Inheritance Quote Image */}
          <div className="mb-12 text-center">
            <img 
              src={`${basePath}images/inheritance-quote.png`}
              alt="A good man leaveth an inheritance to his children's children - Proverbs 13:22"
              className="max-w-full h-auto mx-auto rounded-lg shadow-lg"
              loading="lazy"
            />
          </div>
          
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
                Our mission is to empower God-fearing individuals and families to overcome financial limitations, including poor credit and lack of financial knowledge. We guide them to achieve a 700+ credit score and leverage it for significant funding and asset building, enabling true economic freedom, empowerment, and the creation of lasting generational wealth. This is accomplished through our faith-aligned Prosperity Path AI™ system, designed for proven results and backed by a 100% refund guarantee if credit score improvement is not seen within 6 months upon completion of the program steps.
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
        ctaLink="#get-started"
      />
    </div>
  );
};

export default AboutPage;
import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Sparkles, Zap, Shield, ThumbsUp, Users, BookOpen } from 'lucide-react';

// Components
import HeroSection from '../components/UI/HeroSection';
import ProblemSolutionSection from '../components/UI/ProblemSolutionSection';
import ProcessSection from '../components/UI/ProcessSection';
import BenefitsSection from '../components/UI/BenefitsSection';
import TestimonialsSection from '../components/UI/TestimonialsSection';
import FaqSection from '../components/UI/FaqSection';
import CtaSection from '../components/UI/CtaSection';

// Data
import { testimonials } from '../data/testimonials';
import { faqs } from '../data/faqs';

const LandingPage = () => {
  const basePath = import.meta.env.BASE_URL;
  
  const problems = [
    { text: "Living paycheck-to-paycheck with no clear path to prosperity" },
    { text: "Bad credit keeping you from fulfilling your divine purpose" },
    { text: "Financial jargon and worldly solutions that lack spiritual alignment" },
    { text: "Past failed attempts to fix credit or build wealth" },
    { text: "Wanting to honor God with your finances but not knowing where to start" }
  ];

  const solutionPoints = [
    { 
      icon: <BookOpen size={16} />, 
      title: "Biblical Principles", 
      description: "Built on timeless spiritual wisdom" 
    },
    { 
      icon: <Sparkles size={16} />, 
      title: "AI-Powered", 
      description: "Advanced tools for Kingdom results" 
    },
    { 
      icon: <Shield size={16} />, 
      title: "100% Guaranteed", 
      description: "Full refund if your credit doesn't improve" 
    },
    { 
      icon: <Users size={16} />, 
      title: "Faith-Focused", 
      description: "Supporting God-fearing families" 
    }
  ];

  const processSteps = [
    {
      number: 1,
      title: "Assess & Align",
      description: "AI-powered audit of your credit, goals, and divine purpose.",
      icon: <Search size={32} />
    },
    {
      number: 2,
      title: "Repair & Rebuild",
      description: "Follow the blueprint to fix credit, achieve excellence, and prepare for blessing.",
      icon: <Sparkles size={32} />
    },
    {
      number: 3,
      title: "Fund & Flourish",
      description: "Access funding, build your legacy, and automate with Prosperity Path AI™.",
      icon: <Zap size={32} />
    }
  ];

  const benefits = [
    {
      title: "Biblical Financial Wisdom",
      description: "Our approach aligns with scripture and godly principles for creating lasting wealth and impact.",
      icon: <BookOpen size={40} />
    },
    {
      title: "Results Guaranteed",
      description: "We offer a 100% refund if your credit doesn't rise in 6 months. Our system works with faith and diligence.",
      icon: <Shield size={40} />
    },
    {
      title: "AI Automation = Fast, Simple",
      description: "Our AI-powered tools handle the complex work, so you can focus on your calling and purpose.",
      icon: <Zap size={40} />
    },
    {
      title: "Expert Support & Community",
      description: "Join a community of believers on the same journey, with expert guidance every step of the way.",
      icon: <Users size={40} />
    },
    {
      title: "Proven System, Real Results",
      description: "Follow the exact blueprint that's helped hundreds achieve 700+ credit scores and unlock $50K+ in funding.",
      icon: <ThumbsUp size={40} />
    },
    {
      title: "Build Generational Legacy",
      description: "We don't just fix credit—we provide a complete system to build lasting prosperity for your family.",
      icon: <Sparkles size={40} />
    }
  ];

  return (
    <>
      <HeroSection 
        headline="Unlock Financial Freedom Through Faith-Aligned Principles and Modern Technology"
        subheadline="The only AI-powered system designed to help God-fearing individuals and families repair credit, access funding, and build generational wealth—with Biblical principles, real results, and zero risk."
        ctaText="Get Started Free"
        ctaLink="#get-started"
        imageSrc={`${basePath}images/family-1.png`}
        secondaryCtaText="Learn More"
        secondaryCtaLink="/about"
      />

      <ProblemSolutionSection
        title="Are You Facing These Challenges?"
        problems={problems}
        solutionTitle="Our Solution: Prosperity Path AI™—Where Faith Meets Financial Freedom"
        solutionDescription="Prosperity Path AI™ is the only system that combines Biblical principles with cutting-edge technology. Get step-by-step guidance, AI-powered tools, and a community of believers you can trust."
        solutionPoints={solutionPoints}
        imageUrls={[`${basePath}images/Are You Facing These Challenges3.png`]}
        solutionImageUrl={`${basePath}images/we can help.png`}
      />

      <ProcessSection
        title="Our Simple 3-Step Process"
        subtitle="Follow our proven system to transform your financial future"
        steps={processSteps}
      />

      <BenefitsSection
        title="Why Choose Prosperity Path AI™?"
        subtitle="We combine faith, community, and cutting-edge technology to deliver real results"
        benefits={benefits}
      />

      <TestimonialsSection
        title="What Our Clients Say"
        subtitle="Real stories from people who have transformed their financial future"
        testimonials={testimonials}
        youtubePlaylistUrl={'https://www.youtube.com/embed/videoseries?list=PLpCrgrQb5NWV8NiFLczaGwp4MDutjukcP'}
      />

      <FaqSection
        title="Frequently Asked Questions"
        subtitle="Get answers to common questions about our services"
        faqs={faqs}
      />

      <CtaSection
        headline="Ready to Transform Your Future?"
        subtext="Take the first step towards financial freedom—join Prosperity Path AI™ now."
        ctaText="Get Started Now"
        ctaLink="#get-started"
        secondaryCtaText="Speak with an Expert"
        secondaryCtaLink="/about"
      />
    </>
  );
};

export default LandingPage;
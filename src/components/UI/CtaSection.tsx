import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Section from './Section';

interface CtaSectionProps {
  headline: string;
  subtext: string;
  ctaText: string;
  ctaLink: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
}

const CtaSection: React.FC<CtaSectionProps> = ({
  headline,
  subtext,
  ctaText,
  ctaLink,
  secondaryCtaText,
  secondaryCtaLink,
}) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleCtaClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (ctaLink.startsWith('#')) {
      const sectionId = ctaLink.replace('#', '');
      if (location.pathname === '/') {
        setTimeout(() => {
          const el = document.getElementById(sectionId);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 50);
      } else {
        navigate('/');
        setTimeout(() => {
          const el = document.getElementById(sectionId);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 400);
      }
    } else {
      navigate(ctaLink);
    }
  };

  return (
    <Section bgColor="bg-gradient-to-r from-primary-500 to-royal-600" animation="fade-in">
      <div className="text-center text-white py-8 max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{headline}</h2>
        <p className="text-lg mb-8 text-white/80">{subtext}</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button
            className="btn-secondary flex items-center justify-center gap-2"
            onClick={handleCtaClick}
          >
            {ctaText}
            <ArrowRight size={18} />
          </button>
          {secondaryCtaText && secondaryCtaLink && (
            <Link 
              to={secondaryCtaLink}
              className="btn-outline border-white text-white hover:bg-white/10"
            >
              {secondaryCtaText}
            </Link>
          )}
        </div>
      </div>
    </Section>
  );
};

export default CtaSection;
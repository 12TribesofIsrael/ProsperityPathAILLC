import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface HeroSectionProps {
  headline: string;
  subheadline: string;
  ctaText: string;
  ctaLink: string;
  imageSrc: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  headline,
  subheadline,
  ctaText,
  ctaLink,
  imageSrc,
  secondaryCtaText,
  secondaryCtaLink,
}) => {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Check if the link is external (starts with http/https) or internal
  const isExternalLink = (url: string) => url.startsWith('http');
  
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
    } else if (isExternalLink(ctaLink)) {
      window.open(ctaLink, '_blank', 'noopener,noreferrer');
    } else {
      navigate(ctaLink);
    }
  };
  
  return (
    <section className="bg-gradient-to-r from-primary-900 to-royal-900 text-white pt-32 pb-20">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-white font-bold leading-tight">
              {headline}
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-lg">
              {subheadline}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 relative z-10">
              {/* Primary CTA Button */}
              <button
                className="btn-secondary flex items-center justify-center gap-2 cursor-pointer"
                onClick={handleCtaClick}
              >
                {ctaText}
                <ArrowRight size={18} />
              </button>
              
              {/* Secondary CTA Button */}
              {secondaryCtaText && secondaryCtaLink && (
                isExternalLink(secondaryCtaLink) ? (
                  <a 
                    href={secondaryCtaLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline border-white text-white hover:bg-white/10 cursor-pointer"
                  >
                    {secondaryCtaText}
                  </a>
                ) : (
                  <Link 
                    to={secondaryCtaLink}
                    className="btn-outline border-white text-white hover:bg-white/10 cursor-pointer"
                  >
                    {secondaryCtaText}
                  </Link>
                )
              )}
            </div>
          </div>
          <div className="hidden lg:block animate-fade-in">
            <img
              src={imageSrc}
              alt="Financial Freedom"
              className="rounded-lg shadow-2xl object-cover"
            />
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
};

export default HeroSection;
import React from 'react';
import { useInView } from 'react-intersection-observer';

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  bgColor?: string;
  animation?: 'fade-in' | 'slide-up' | 'slide-in-right' | 'none';
}

const Section: React.FC<SectionProps> = ({ 
  id, 
  className = '', 
  children, 
  bgColor = 'bg-white',
  animation = 'fade-in'
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const getAnimationClass = () => {
    if (animation === 'none') return '';
    return inView ? `animate-${animation}` : 'opacity-0';
  };

  return (
    <section
      id={id}
      ref={ref}
      className={`section ${bgColor} ${className} ${getAnimationClass()}`}
    >
      <div className="container">
        {children}
      </div>
    </section>
  );
};

export default Section;
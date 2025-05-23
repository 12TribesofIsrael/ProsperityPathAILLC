import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  center?: boolean;
  light?: boolean;
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  center = true,
  light = false,
  className = '',
}) => {
  const alignment = center ? 'text-center' : 'text-left';
  const textColor = light ? 'text-white' : 'text-gray-900';
  const subtitleColor = light ? 'text-gray-200' : 'text-gray-600';

  return (
    <div className={`mb-12 ${alignment} ${className}`}>
      <h2 className={`${textColor} mb-4`}>{title}</h2>
      {subtitle && <p className={`text-lg ${subtitleColor} max-w-3xl mx-auto`}>{subtitle}</p>}
    </div>
  );
};

export default SectionTitle;
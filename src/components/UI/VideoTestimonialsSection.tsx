import React from 'react';
import Section from './Section';
import SectionTitle from './SectionTitle';

interface VideoTestimonialsSectionProps {
  title: string;
  subtitle?: string;
  playlistId: string;
}

const VideoTestimonialsSection: React.FC<VideoTestimonialsSectionProps> = ({
  title,
  subtitle,
  playlistId,
}) => {
  return (
    <Section bgColor="bg-gray-50" animation="fade-in">
      <SectionTitle 
        title={title} 
        subtitle={subtitle}
      />
      
      <div className="max-w-4xl mx-auto">
        <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg shadow-lg">
          <iframe
            src={`https://www.youtube.com/embed/videoseries?list=${playlistId}`}
            title="Video Testimonials"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full"
          />
        </div>
      </div>
    </Section>
  );
};

export default VideoTestimonialsSection;
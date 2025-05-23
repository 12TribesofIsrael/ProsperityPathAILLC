import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import Section from './Section';
import SectionTitle from './SectionTitle';

interface Testimonial {
  name: string;
  location: string;
  text: string;
  image?: string;
  rating: number;
}

interface TestimonialsSectionProps {
  title: string;
  subtitle?: string;
  testimonials: Testimonial[];
  youtubePlaylistUrl?: string;
}

const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({
  title,
  subtitle,
  testimonials,
  youtubePlaylistUrl,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <Section id="testimonials" bgColor="bg-primary-900" animation="fade-in">
      <SectionTitle 
        title={title} 
        subtitle={subtitle}
        light={true}
      />
      
      <div className="max-w-4xl mx-auto">
        <div className="relative bg-white rounded-lg shadow-xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            {testimonials[activeIndex].image && (
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden flex-shrink-0">
                <img 
                  src={testimonials[activeIndex].image} 
                  alt={testimonials[activeIndex].name}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            <div className="flex-grow">
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i}
                    size={16} 
                    className={`${i < testimonials[activeIndex].rating ? 'text-secondary-500 fill-secondary-500' : 'text-gray-300'}`}
                  />
                ))}
              </div>
              <blockquote className="text-lg italic mb-4 text-gray-700">"{testimonials[activeIndex].text}"</blockquote>
              <div>
                <p className="font-semibold text-primary-600">{testimonials[activeIndex].name}</p>
                <p className="text-sm text-gray-600">{testimonials[activeIndex].location}</p>
              </div>
            </div>
          </div>
          
          {testimonials.length > 1 && (
            <div className="flex justify-between mt-8">
              <button 
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={20} />
              </button>
              <div className="flex items-center">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-2 h-2 mx-1 rounded-full ${
                      index === activeIndex ? 'bg-primary-500' : 'bg-gray-300'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              <button 
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition"
                aria-label="Next testimonial"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          )}
        </div>
      </div>

      {youtubePlaylistUrl && (
        <div className="mt-16 max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold mb-6 text-center text-white">Watch Testimonials</h3>
          <div className="relative aspect-video w-full rounded-lg shadow-xl overflow-hidden">
            <iframe
              src={youtubePlaylistUrl.replace('https://www.youtube.com/watch?v=', 'https://www.youtube.com/embed/videoseries?list=')}
              title="YouTube Testimonial Playlist"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full"
            ></iframe>
          </div>
        </div>
      )}
    </Section>
  );
};

export default TestimonialsSection;
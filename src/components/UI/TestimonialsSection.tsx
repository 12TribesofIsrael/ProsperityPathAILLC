import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, X, Eye } from 'lucide-react';
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
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const basePath = import.meta.env.BASE_URL;

  // Client approval images
  const approvalImages = [
    'AMHFCU.PNG',
    'Testimony.JPG', 
    'IMG_3558.PNG',
    'IMG_3559.PNG',
    'IMG_3555.PNG',
    'IMG_3550.PNG',
    'IMG_3548.PNG',
    'IMG_3551.PNG',
    'IMG_3549.PNG',
    'IMG_3547.PNG',
    '2.jpg',
    '37.JPG',
    '42.JPG',
    '16.JPG',
    '35.JPG',
    '15.JPG',
    'IMG_4063.PNG',
    'IMG_4058.PNG'
  ];

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

  const openImageModal = (imagePath: string) => {
    setSelectedImage(imagePath);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
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

      {/* Client Approval Gallery */}
      <div className="mt-16 max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-white">
            Real Client Results & Approvals
          </h3>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            See the actual credit improvements, funding approvals, and success stories from our clients. 
            These are real documents from real people who transformed their financial future.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
          {approvalImages.map((imageName, index) => {
            const imagePath = `${basePath}images/approvals/${imageName}`;
            return (
              <div 
                key={index}
                className="group relative aspect-square bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                onClick={() => openImageModal(imagePath)}
              >
                <img 
                  src={imagePath}
                  alt={`Client approval ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Eye size={24} className="text-white" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-2">
                  <p className="text-white text-xs font-medium">
                    {imageName.includes('IMG_') ? 'Credit Approval' : 
                     imageName.includes('Testimony') ? 'Client Testimony' : 
                     'Success Document'}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="text-center mt-8">
          <p className="text-sm text-gray-400 italic">
            * Results may vary. These are actual client documents shared with permission.
          </p>
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={closeImageModal}
        >
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={closeImageModal}
              className="absolute -top-10 right-0 text-white hover:text-gray-300 transition-colors"
              aria-label="Close image"
            >
              <X size={32} />
            </button>
            <img 
              src={selectedImage}
              alt="Client approval document"
              className="max-w-full max-h-full object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </Section>
  );
};

export default TestimonialsSection;
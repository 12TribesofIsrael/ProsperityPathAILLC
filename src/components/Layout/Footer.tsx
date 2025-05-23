import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, MapPin, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  const basePath = import.meta.env.BASE_URL;
  
  return (
    <footer className="bg-primary-900 text-white pt-16 pb-8">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10" 
        style={{ 
          backgroundImage: 'url(https://images.pexels.com/photos/1707820/pexels-photo-1707820.jpeg)'
        }}
      />
      <div className="container relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <img 
              src={`${basePath}images/logo.png`} 
              alt="Prosperity Path AI Logo" 
              className="h-16 w-auto object-contain rounded-full bg-white/10 p-1"
            />
            <p className="text-gray-300">
              Empowering God-fearing individuals and families to break free from financial struggle and build generational wealth through faith-aligned principles.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <a 
                  href="https://docs.google.com/forms/d/e/1FAIpQLSfX8sIUZH4pMfA_IqGxMe1y1LeV_YOst7g5BaUZsyqmq2Bnsg/viewform?usp=sharing&ouid=101930591436574080353"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Get Started
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-300 hover:text-white transition-colors">
                  Testimonials
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Our Services</h4>
            <ul className="space-y-2">
              <li className="text-gray-300">Credit Restoration</li>
              <li className="text-gray-300">Business Funding</li>
              <li className="text-gray-300">AI Automation</li>
              <li className="text-gray-300">Wealth Building</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Contact Us</h4>
            <ul className="space-y-2">
              <li className="flex items-center space-x-3 text-gray-300">
                <Mail size={16} />
                <span>info@prosperitypathai.com</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-300">
                <Phone size={16} />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-start space-x-3 text-gray-300">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>123 Faith Road, Suite 100<br />Atlanta, GA 30303</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col space-y-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">
                ©2025 Prosperity Path AI LLC
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0 text-sm text-gray-400">
                <a href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-gray-300 transition-colors">Terms of Service</a>
              </div>
            </div>
            <div className="text-xs text-gray-500 mt-4">
              <p className="mb-2">Results may vary and testimonials are not claimed to represent typical results. All testimonials are real. These results are meant as a showcase of what the best clients have done and should not be taken as average or typical results.</p>
              <p>You should assume that products, programs or personal recommendations made, may result in compensation paid to me by those I recommend. You should perform your own due diligence and use your own best judgment prior to making any investment decision pertaining to your business. By virtue of visiting this site or interacting with any portion of this site, you agree that you're fully responsible for the investments you make and any outcomes that may result.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
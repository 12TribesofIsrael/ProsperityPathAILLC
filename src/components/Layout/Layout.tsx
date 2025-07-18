import React from 'react';
import Header from './Header';
import Footer from './Footer';
import LeadCaptureSection from '../LeadCaptureSection';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <LeadCaptureSection />
      <Footer />
    </div>
  );
};

export default Layout;
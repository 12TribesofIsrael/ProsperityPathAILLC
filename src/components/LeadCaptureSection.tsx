import React from 'react';

const LeadCaptureSection: React.FC = () => (
  <section id="get-started" className="w-full bg-gray-50 py-12 px-2 flex flex-col items-center">
    <h2 className="text-2xl md:text-3xl font-bold text-primary-700 mb-8 text-center">
      Get Started: Book Your Free Consultation & Submit Your Info
    </h2>
    <div className="w-full max-w-4xl mx-auto mb-8 bg-white rounded-lg shadow-lg p-4 md:p-8">
      <iframe 
        className="webform-frame w-full" 
        name="frame_webform" 
        id="frame_webform" 
        src="https://www.secureclientaccess.com//weblead/postcrc/NGU3YTU1MzA0ZjQ0NmIzMzRlNTQ1NTMx/RmlsbCBvdXQgdGhpcyBmb3JtIGZvciBhIGZyZWUgY29uc3VsdGF0aW9u/en" 
        height="700" 
        width="100%" 
        style={{ background: 'transparent', minWidth: '300px', maxWidth: '100%' }} 
        frameBorder={0}
        title="Lead Capture Form"
      ></iframe>
    </div>
    <div className="text-center text-lg font-semibold text-primary-700 mb-4">Schedule your call with us today!</div>
    <div className="w-full max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-4 md:p-8">
      <iframe 
        src="https://api.leadconnectorhq.com/widget/booking/hH557530DhMfXC5WOVU2" 
        style={{ width: '100%', border: 'none', overflow: 'hidden', minHeight: '500px' }} 
        scrolling="no" 
        id="msgsndr-calendar"
        title="Schedule a Call"
      ></iframe>
      <script src="https://link.msgsndr.com/js/embed.js" type="text/javascript"></script>
    </div>
  </section>
);

export default LeadCaptureSection; 
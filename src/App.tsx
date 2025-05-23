import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages
import LandingPage from './pages/LandingPage';
import LeadCapturePage from './pages/LeadCapturePage';
import ThankYouPage from './pages/ThankYouPage';
import AboutPage from './pages/AboutPage';
import NotFoundPage from './pages/NotFoundPage';

// Components
import Layout from './components/Layout/Layout';

function App() {
  return (
    <Router basename="/ProsperityPathAILLC">
      <Routes>
        <Route path="/" element={<Layout><LandingPage /></Layout>} />
        <Route path="/opt-in" element={<Layout><LeadCapturePage /></Layout>} />
        <Route path="/thank-you" element={<Layout><ThankYouPage /></Layout>} />
        <Route path="/about" element={<Layout><AboutPage /></Layout>} />
        <Route path="*" element={<Layout><NotFoundPage /></Layout>} />
      </Routes>
    </Router>
  );
}

export default App;
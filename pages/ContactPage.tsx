
import React from 'react';
import ContactSection from '../components/ContactSection';
import { SHORT_COMPANY_NAME } from '../constants';

const ContactPage: React.FC = () => {
  // You can access query parameters here if needed, e.g., for pre-filling service info
  // const location = useLocation();
  // const queryParams = new URLSearchParams(location.search);
  // const serviceId = queryParams.get('service');

  return (
    <div className="py-12 md:py-16 bg-neutral-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-10 md:mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-secondary mb-4">
            Contact {SHORT_COMPANY_NAME}
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
            We're here to help you with your cloud journey. Reach out to us with any questions or project inquiries.
          </p>
        </header>
        <ContactSection />
      </div>
    </div>
  );
};

export default ContactPage;
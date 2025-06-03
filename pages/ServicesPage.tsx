
import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES_DATA, SHORT_COMPANY_NAME } from '../constants';
import ServiceCard from '../components/ServiceCard';
import { useAuth } from '../hooks/useAuth';

const ServicesPage: React.FC = () => {
  const { isAuthenticated } = useAuth();

  return (
    <div className="bg-neutral py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-secondary mb-4">
            Our Cloud Solutions & Services
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
            {SHORT_COMPANY_NAME} offers a comprehensive range of services across AWS, Google Cloud, and Microsoft Azure, plus custom cloud development to accelerate your business transformation.
          </p>
        </header>

        {!isAuthenticated && (
          <div className="bg-primary-light border-l-4 border-primary text-primary-dark p-6 rounded-md shadow-md mb-12 text-center">
            <p className="font-medium">
              You are viewing general information. 
              <Link to="/auth" className="font-bold underline hover:text-primary-darker ml-1">
                Login or Sign Up
              </Link>
              &nbsp;to see personalized details and options.
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-1 gap-8 md:gap-10">
          {SERVICES_DATA.map((service, index) => (
            <ServiceCard 
                key={service.id} 
                service={service} 
                showDetailsInitially={index === 0} // Optionally expand the first service
            />
          ))}
        </div>

        <section className="mt-16 md:mt-20 text-center bg-white p-8 md:p-12 rounded-xl shadow-xl">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-4">Ready to Elevate Your Cloud Strategy?</h2>
            <p className="text-slate-600 mb-8 max-w-xl mx-auto">
                Our experts are ready to discuss your unique challenges and how our cloud solutions can drive your success.
            </p>
            <Link
                to="/contact" 
                className="bg-accent hover:bg-accent-hover text-white font-semibold py-3 px-10 rounded-lg shadow-lg text-lg transition-transform transform hover:scale-105"
            >
                Contact Us Today
            </Link>
        </section>
      </div>
    </div>
  );
};

export default ServicesPage;

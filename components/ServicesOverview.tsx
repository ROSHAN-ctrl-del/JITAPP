
import React from 'react';
import { Link } from 'react-router-dom';
import { CORE_SERVICES_OVERVIEW } from '../constants';
import { ArrowRightIcon } from './icons';

const ServicesOverview: React.FC = () => {
  return (
    <section className="py-16 bg-neutral">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Our Core Cloud Services</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            We offer a comprehensive suite of services to meet your cloud computing needs, from migration and management to development and analytics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {CORE_SERVICES_OVERVIEW.map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center text-center"
            >
              <div className="bg-primary-light p-4 rounded-full mb-6 inline-block">
                {React.cloneElement(service.icon, { className: "w-10 h-10 text-primary-dark"})}
              </div>
              <h3 className="text-xl font-semibold text-secondary mb-3">{service.title}</h3>
              <p className="text-slate-600 text-sm mb-6 flex-grow">{service.description}</p>
              <Link 
                to="/services" 
                className="text-primary hover:text-primary-dark font-medium group inline-flex items-center"
              >
                Learn More <ArrowRightIcon className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/services"
            className="bg-accent hover:bg-accent-hover text-white font-semibold py-3 px-8 rounded-lg shadow-md text-lg transition-transform transform hover:scale-105"
          >
            Discover All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;


import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from './icons';

const HeroSection: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-br from-primary-dark via-primary to-primary-light text-white py-20 md:py-32">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10" 
        style={{ backgroundImage: "url('https://picsum.photos/seed/cloudinfra/1600/900')" }}
      ></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6">
            Empowering Your Business with <span className="block md:inline">Next-Gen Cloud Solutions</span>
          </h1>
          <p className="text-lg sm:text-xl text-neutral-light mb-10">
            JIT Global Infosystem partners with AWS, Google Cloud, and Microsoft Azure to deliver cutting-edge cloud services tailored to your success.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link
              to="/services"
              className="bg-accent hover:bg-accent-hover text-white font-semibold py-3 px-8 rounded-lg shadow-lg text-lg transition-transform transform hover:scale-105 flex items-center justify-center"
            >
              Explore Our Services <ArrowRightIcon className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/auth" // Or a contact page if available
              className="bg-white text-primary font-semibold py-3 px-8 rounded-lg shadow-lg text-lg transition-transform transform hover:scale-105 flex items-center justify-center"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

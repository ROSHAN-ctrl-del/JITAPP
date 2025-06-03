
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Service } from '../types';
import { ChevronDownIcon, ExternalLinkIcon, IconProps } from './icons'; // Imported IconProps

interface ServiceCardProps {
  service: Service;
  showDetailsInitially?: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, showDetailsInitially = false }) => {
  const [isExpanded, setIsExpanded] = useState(showDetailsInitially);

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl">
      <div className="p-6 md:p-8">
        <div className="flex items-start space-x-4 mb-4">
          {service.icon && React.isValidElement(service.icon) && (
            <div className="flex-shrink-0 p-3 bg-primary-light rounded-full">
              {React.cloneElement(service.icon as React.ReactElement<IconProps>, { className: "w-10 h-10 text-primary-dark" })}
            </div>
          )}
          <div>
            <h3 className="text-2xl font-bold text-secondary">{service.name}</h3>
            <p className="text-primary font-medium">{service.tagline}</p>
          </div>
        </div>
        
        <p className="text-slate-600 mb-4 leading-relaxed">{service.description}</p>

        {service.partnerLogoUrl && (
            <div className="my-4">
                <img src={service.partnerLogoUrl} alt={`${service.name} Partner Logo`} className="h-8 object-contain" />
            </div>
        )}

        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-primary hover:text-primary-dark font-medium inline-flex items-center mb-4"
          aria-expanded={isExpanded}
          aria-controls={`service-details-${service.id}`}
        >
          {isExpanded ? 'Hide Details' : 'Show Details'}
          <ChevronDownIcon className={`w-5 h-5 ml-1 transform transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
        </button>

        {isExpanded && (
          <div id={`service-details-${service.id}`} className="mt-4 space-y-4 animate-fadeIn">
            <p className="text-slate-700 leading-relaxed whitespace-pre-line">{service.longDescription}</p>
            
            <div>
              <h4 className="font-semibold text-secondary mb-2">Key Features:</h4>
              <ul className="list-disc list-inside space-y-1 text-slate-600 text-sm">
                {service.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>

            {service.caseStudies && service.caseStudies.length > 0 && (
              <div className="mt-6">
                <h4 className="font-semibold text-secondary mb-3">Success Stories:</h4>
                <div className="space-y-3">
                {service.caseStudies.map((study, index) => (
                  <div key={index} className="bg-neutral-light p-3 rounded-md">
                    <h5 className="font-medium text-primary-dark">{study.title}</h5>
                    <p className="text-xs text-slate-500">{study.summary}</p>
                  </div>
                ))}
                </div>
              </div>
            )}
            
            <div className="mt-6 pt-4 border-t border-neutral-dark">
              <Link
                to={`/contact?service=${service.id}`} // Example query param for contact form
                className="bg-accent hover:bg-accent-hover text-white font-semibold py-2 px-5 rounded-lg shadow-md text-sm transition-colors inline-flex items-center"
              >
                Inquire About {service.name}
                <ExternalLinkIcon className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ServiceCard;

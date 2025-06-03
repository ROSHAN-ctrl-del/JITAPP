import React from 'react';
import { Link } from 'react-router-dom';
import { INSIGHTS_CATEGORIES } from '../constants';
import { ArrowRightIcon, IconProps } from './icons';

const InsightsSection: React.FC = () => {
  return (
    <section className="py-16 bg-neutral-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Explore Our Insights</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Delve into our expertise in Case Studies, Data Analytics, Application Development, and Project Management as a Service.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {INSIGHTS_CATEGORIES.map((category, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col"
            >
              <div className="flex-shrink-0 mb-4">
                {React.isValidElement(category.icon) && 
                  React.cloneElement(category.icon as React.ReactElement<IconProps>, { className: "w-12 h-12 text-primary mx-auto md:mx-0" })
                }
              </div>
              <h3 className="text-xl font-semibold text-secondary mb-2">{category.title}</h3>
              <p className="text-slate-600 text-sm mb-4 flex-grow">{category.description}</p>
              <Link 
                to={category.link || '/contact'} 
                className="mt-auto text-primary hover:text-primary-dark font-medium group inline-flex items-center self-start"
                aria-label={`Learn more about ${category.title}`}
              >
                Learn More 
                <ArrowRightIcon className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;
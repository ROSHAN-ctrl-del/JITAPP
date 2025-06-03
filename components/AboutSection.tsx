import React from 'react';
import { CLOUD_PARTNERS, SHORT_COMPANY_NAME, COMPANY_DETAILED_DESCRIPTION } from '../constants';
import { ShieldCheckIcon, CpuChipIcon, UsersIcon } from './icons';

const AboutSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
            About {SHORT_COMPANY_NAME}
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            We are a team of passionate cloud experts dedicated to helping businesses innovate and scale with the world's leading cloud platforms.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://picsum.photos/seed/teamwork/600/400" 
              alt="JIT Global Team" 
              className="rounded-lg shadow-xl w-full"
            />
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-secondary mb-4">Our Commitment</h3>
            <p className="text-slate-600 mb-6 leading-relaxed">
              {COMPANY_DETAILED_DESCRIPTION}
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <ShieldCheckIcon className="w-8 h-8 text-primary mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-secondary">Expert Guidance</h4>
                  <p className="text-sm text-slate-500">12+ years of expertise and certified professionals.</p>
                </div>
              </div>
              <div className="flex items-start">
                <CpuChipIcon className="w-8 h-8 text-primary mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-secondary">Innovative Solutions</h4>
                  <p className="text-sm text-slate-500">Driving scalable, cost-effective technology.</p>
                </div>
              </div>
              <div className="flex items-start">
                <UsersIcon className="w-8 h-8 text-primary mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-secondary">Customer-Centric Growth</h4>
                  <p className="text-sm text-slate-500">Committed to modernizing IT and ensuring long-term growth.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-secondary text-center mb-8">Our Cloud Partners</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {CLOUD_PARTNERS.map((partner) => (
              <div key={partner.name} className="bg-neutral-light p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow">
                <img src={partner.logoUrl} alt={`${partner.name} logo`} className="h-12 mx-auto mb-4 object-contain" />
                <h4 className="text-xl font-semibold text-secondary-dark mb-2">{partner.name}</h4>
                {/* <p className="text-sm text-slate-500">{partner.description}</p> */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
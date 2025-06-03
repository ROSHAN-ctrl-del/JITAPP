import React from 'react';
import { Link } from 'react-router-dom';
import { COMPANY_NAME, SHORT_COMPANY_NAME, COMPANY_FOOTER_DESCRIPTION } from '../constants';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-dark text-neutral-light py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">{SHORT_COMPANY_NAME}</h3>
            <p className="text-sm leading-relaxed">
              {COMPANY_FOOTER_DESCRIPTION}
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-primary-light transition-colors">Home</Link></li>
              <li><Link to="/services" className="hover:text-primary-light transition-colors">Services</Link></li>
               <li><Link to="/contact" className="hover:text-primary-light transition-colors">Contact</Link></li>
              <li><Link to="/auth" className="hover:text-primary-light transition-colors">Login/Signup</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact Us</h4>
            <address className="text-sm not-italic">
              <p>2/181, AGS Colony, Phase – 3, 1st floor</p>
              <p>4th Avenue (St. Thomas Health Care Campus),</p>
              <p>Mugalivakkam,</p>
              <p>Chennai - 600125</p>
              <p className="mt-2">
                Email: <a href="mailto:sales@jitglobalinfosystems.com" className="hover:text-primary-light transition-colors">sales@jitglobalinfosystems.com</a>
              </p>
              <p>
                Phone: <a href="tel:+917810099942" className="hover:text-primary-light transition-colors">+91 78100 99942</a>
              </p>
              <p className="mt-2">
                Website: <a href="https://jitglobalinfosystems.com/" target="_blank" rel="noopener noreferrer" className="hover:text-primary-light transition-colors">jitglobalinfosystems.com</a>
              </p>
            </address>
          </div>
        </div>
        <div className="mt-10 pt-8 border-t border-primary text-center text-sm">
          <p>&copy; {currentYear} {COMPANY_NAME}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
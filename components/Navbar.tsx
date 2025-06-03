
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { NAV_LINKS, SHORT_COMPANY_NAME, COMPANY_LOGO_URL, SERVICES_DATA } from '../constants';
import { MenuIcon, XMarkIcon, UserCircleIcon, LogoutIcon, CogIcon, PlusCircleIcon, ChevronDownIcon } from './icons';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { isAuthenticated, user, logout } = useAuth();
  const navigate = useNavigate();

  // Mock active services for demo - e.g., first 2 services
  const MOCKED_USER_SERVICES = SERVICES_DATA.slice(0, 2);
  // const MOCKED_USER_SERVICES: typeof SERVICES_DATA = []; // Use this to test "no services" state

  const handleLogout = () => {
    logout();
    navigate('/');
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const visibleLinks = NAV_LINKS.filter(link => {
    if (link.requiresAuth && !isAuthenticated) return false;
    if (link.hideWhenAuth && isAuthenticated) return false;
    return true;
  });

  const navClasses = `bg-white sticky top-0 z-50 transition-shadow duration-300 ${isScrolled ? "shadow-lg" : "shadow-md"}`;
  
  const linkClasses = "text-primary hover:bg-neutral-light hover:text-primary-dark";
  const userButtonClasses = "text-primary hover:bg-neutral-light";
  const userIconColor = "text-primary";
  const mobileMenuButtonClasses = "text-primary hover:bg-neutral-light focus:ring-primary";
  const mobileMenuContainerClasses = "bg-white";
  const mobileLinkClasses = "text-primary hover:bg-neutral-light hover:text-primary-dark";
  const mobileSubheadingClasses = "text-slate-500";

  return (
    <nav className={`${navClasses}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <img 
                src={COMPANY_LOGO_URL} 
                alt={`${SHORT_COMPANY_NAME} Logo`} 
                className="h-10 w-auto"
              />
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-1">
            {visibleLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className={`${linkClasses} px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300`}
              >
                {link.label}
              </Link>
            ))}
            {isAuthenticated && user && (
              <div className="relative group">
                <button className={`flex items-center ${userButtonClasses} px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300`}>
                  <UserCircleIcon className={`w-5 h-5 mr-1 ${userIconColor} transition-colors duration-300`} />
                  {user.name}
                  <ChevronDownIcon className={`w-4 h-4 ml-1 ${userIconColor} transition-colors duration-300`} />
                </button>
                <div className="absolute right-0 mt-2 w-60 bg-white rounded-md shadow-lg py-1 z-20 hidden group-hover:block ring-1 ring-black ring-opacity-5">
                  <div className="px-4 py-3">
                    <p className="text-sm text-secondary-dark">Signed in as</p>
                    <p className="text-sm font-medium text-primary truncate">{user.email}</p>
                  </div>
                  <div className="border-t border-neutral-dark"></div>
                  <Link to="/dashboard" className="flex items-center px-4 py-2 text-sm text-secondary hover:bg-neutral-light hover:text-primary-dark">
                     <UserCircleIcon className="w-4 h-4 mr-2 text-primary" /> My Dashboard
                  </Link>
                  <div className="border-t border-neutral-dark"></div>
                  <p className="px-4 pt-3 pb-1 text-xs font-semibold text-slate-500 uppercase">My Services</p>
                  {MOCKED_USER_SERVICES.length > 0 ? (
                    MOCKED_USER_SERVICES.map(service => (
                      <Link
                        key={service.id}
                        to={`/services#${service.id}`}
                        className="block px-4 py-2 text-sm text-secondary hover:bg-neutral-light hover:text-primary-dark truncate"
                        title={service.name}
                      >
                        • {service.name}
                      </Link>
                    ))
                  ) : (
                    <Link 
                      to="/services"
                      className="flex items-center px-4 py-2 text-sm text-primary hover:bg-neutral-light hover:text-primary-dark"
                    >
                      <PlusCircleIcon className="w-4 h-4 mr-2" /> Add Your First Service!
                    </Link>
                  )}
                   <Link
                    to="/services"
                    className="flex items-center px-4 py-2 text-sm text-primary hover:bg-neutral-light hover:text-primary-dark mt-1"
                  >
                    <PlusCircleIcon className="w-4 h-4 mr-2" /> Add New Service
                  </Link>
                  <div className="border-t border-neutral-dark mt-2"></div>
                  <Link to="/dashboard" className="flex items-center px-4 py-2 text-sm text-secondary hover:bg-neutral-light hover:text-primary-dark">
                    <CogIcon className="w-4 h-4 mr-2 text-primary" /> Account Settings
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left flex items-center px-4 py-2 text-sm text-secondary hover:bg-neutral-light hover:text-red-600"
                  >
                    <LogoutIcon className="w-4 h-4 mr-2 text-primary" />
                    Logout
                  </button>
                </div>
              </div>
            )}
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset ${mobileMenuButtonClasses} transition-colors duration-300`}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <XMarkIcon className="block h-6 w-6" />
              ) : (
                <MenuIcon className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className={`md:hidden absolute top-16 inset-x-0 z-40 shadow-lg ${mobileMenuContainerClasses} transition-colors duration-300`} id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {visibleLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`${mobileLinkClasses} block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300`}
              >
                {link.label}
              </Link>
            ))}
            {isAuthenticated && user && (
              <>
                <div className="border-t border-neutral-dark my-2"></div>
                <Link
                  to="/dashboard"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center ${mobileLinkClasses} px-3 py-2 rounded-md text-base font-medium transition-colors duration-300`}
                >
                  <UserCircleIcon className="w-5 h-5 mr-2" />
                  My Dashboard
                </Link>
                <p className={`px-3 pt-3 pb-1 text-xs font-semibold ${mobileSubheadingClasses} uppercase transition-colors duration-300`}>My Services</p>
                {MOCKED_USER_SERVICES.length > 0 ? (
                    MOCKED_USER_SERVICES.map(service => (
                      <Link
                        key={`mobile-${service.id}`}
                        to={`/services#${service.id}`}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`block px-3 py-2 rounded-md text-base font-medium ${mobileLinkClasses} transition-colors duration-300`}
                        title={service.name}
                      >
                        • {service.name}
                      </Link>
                    ))
                  ) : (
                    <Link 
                      to="/services"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`flex items-center px-3 py-2 rounded-md text-base font-medium ${mobileLinkClasses} transition-colors duration-300`}
                    >
                      <PlusCircleIcon className="w-5 h-5 mr-2" /> Add Your First Service!
                    </Link>
                )}
                <Link
                  to="/services"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center ${mobileLinkClasses} px-3 py-2 rounded-md text-base font-medium mt-1 transition-colors duration-300`}
                >
                  <PlusCircleIcon className="w-5 h-5 mr-2" /> Add New Service
                </Link>
                <div className="border-t border-neutral-dark my-2"></div>
                <Link
                  to="/dashboard" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center ${mobileLinkClasses} px-3 py-2 rounded-md text-base font-medium transition-colors duration-300`}
                >
                  <CogIcon className="w-5 h-5 mr-2" /> Account Settings
                </Link>
                <button
                  onClick={handleLogout}
                  className={`w-full text-left flex items-center ${mobileLinkClasses} px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 hover:text-red-600`}
                >
                  <LogoutIcon className="w-5 h-5 mr-2" />
                  Logout
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

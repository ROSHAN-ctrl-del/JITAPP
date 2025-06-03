import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { UserCircleIcon, ServerStackIcon, IconProps, WrenchScrewdriverIcon, PlusCircleIcon } from '../components/icons';
import { SERVICES_DATA } from '../constants'; 

const DashboardPage: React.FC = () => {
  const { user } = useAuth();

  // Mock subscribed services for demo - e.g., first 2 services
  const MOCKED_SUBSCRIBED_SERVICES = SERVICES_DATA.slice(0, 2);
  // const MOCKED_SUBSCRIBED_SERVICES: typeof SERVICES_DATA = []; // Use this to test "no services" state

  if (!user) {
    // This should ideally be caught by ProtectedRoute, but as a fallback:
    return <p className="text-center py-10 text-lg text-secondary">Loading user data or not authenticated...</p>;
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 bg-neutral-light min-h-[calc(100vh-12rem)]">
      <header className="mb-10 md:mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-secondary mb-2">
          Welcome back, {user.name}! <span role="img" aria-label="sun behind cloud">⛅</span>
        </h1>
        <p className="text-lg text-slate-600">Here's a snapshot of your active services and quick insights.</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        {/* Profile Section & Quick Links (can be one column) */}
        <div className="lg:col-span-1 space-y-8">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="flex flex-col items-center text-center">
              <UserCircleIcon className="w-20 h-20 text-primary mb-3" />
              <h2 className="text-xl font-semibold text-secondary">{user.name}</h2>
              <p className="text-sm text-slate-500 mb-3">{user.email}</p>
              <button className="mt-2 bg-primary-light text-primary-dark font-medium py-2 px-4 rounded-lg hover:bg-primary hover:text-white transition-colors text-xs">
                Edit Profile (Placeholder)
              </button>
            </div>
          </div>
           {/* Quick Actions or other widgets can go here */}
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h2 className="text-xl font-semibold text-secondary mb-4">Quick Actions</h2>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="flex items-center text-primary hover:text-primary-dark text-sm font-medium">
                  <PlusCircleIcon className="w-5 h-5 mr-2" /> Explore All Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="flex items-center text-primary hover:text-primary-dark text-sm font-medium">
                  <UserCircleIcon className="w-5 h-5 mr-2" /> Contact Support
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Active Services Section */}
        <div className="lg:col-span-2 bg-white p-6 md:p-8 rounded-xl shadow-lg">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold text-secondary">Your Active Services</h2>
            {MOCKED_SUBSCRIBED_SERVICES.length > 0 && (
                 <Link
                    to="/services"
                    className="flex items-center bg-accent hover:bg-accent-hover text-white text-xs font-semibold py-2 px-3 rounded-lg transition-colors"
                >
                    <PlusCircleIcon className="w-4 h-4 mr-1" /> Add Service
                </Link>
            )}
          </div>

          {MOCKED_SUBSCRIBED_SERVICES.length > 0 ? (
            <div className="space-y-6">
              {MOCKED_SUBSCRIBED_SERVICES.map(service => (
                <div key={service.id} className="bg-neutral-light p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex items-center mb-3">
                    <div className="mr-3 p-2 bg-primary-light rounded-full">
                      {React.isValidElement(service.icon) 
                        ? React.cloneElement(service.icon as React.ReactElement<IconProps>, { className: "w-7 h-7 text-primary-dark" }) 
                        : <ServerStackIcon className="w-7 h-7 text-primary-dark" />
                      }
                    </div>
                    <h3 className="text-lg font-semibold text-secondary flex-grow">{service.name}</h3>
                    <Link 
                        to={`/services#${service.id}`} // Placeholder, ideally to specific service mgmt page
                        className="text-xs font-medium text-primary-dark hover:text-primary p-1 rounded-md hover:bg-primary-light transition-colors flex items-center"
                        title="Manage Service"
                    >
                        <WrenchScrewdriverIcon className="w-4 h-4 mr-1"/> Manage
                    </Link>
                  </div>
                  <p className="text-sm text-slate-500 mb-3 ml-12">{service.tagline}</p>
                  
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs ml-12 text-slate-600">
                      <p><strong className="text-secondary-dark">Status:</strong> <span className="text-green-600">Active</span></p>
                      <p><strong className="text-secondary-dark">Usage:</strong> N/A</p>
                      <p><Link to="#" className="text-primary hover:underline"><strong className="text-secondary-dark">Events:</strong> View Logs</Link></p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8 border-2 border-dashed border-neutral-dark rounded-lg">
              <ServerStackIcon className="w-16 h-16 text-slate-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-secondary mb-2">No Active Services Yet</h3>
              <p className="text-slate-500 mb-6">It looks like you haven't added any services to your dashboard.</p>
              <Link
                to="/services"
                className="inline-flex items-center bg-accent hover:bg-accent-hover text-white font-semibold py-2 px-6 rounded-lg shadow-md transition-colors"
              >
                <PlusCircleIcon className="w-5 h-5 mr-2" /> Add Your First Service
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;

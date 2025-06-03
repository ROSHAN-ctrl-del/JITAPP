
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon } from '../components/icons';

const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[calc(100vh-8rem)] flex flex-col items-center justify-center text-center py-12 px-4 sm:px-6 lg:px-8 bg-neutral-light">
      <img 
        src="https://picsum.photos/seed/404page/400/300" 
        alt="Lost in the clouds" 
        className="w-64 h-auto rounded-lg shadow-xl mb-8"
      />
      <h1 className="text-6xl font-extrabold text-primary mb-4">404</h1>
      <h2 className="text-3xl font-semibold text-secondary mb-6">Oops! Page Not Found.</h2>
      <p className="text-slate-600 mb-8 max-w-md">
        It seems you've wandered off the beaten path. The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        className="inline-flex items-center bg-accent hover:bg-accent-hover text-white font-semibold py-3 px-6 rounded-lg shadow-md text-lg transition-colors"
      >
        <ArrowLeftIcon className="mr-2 w-5 h-5" />
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFoundPage;

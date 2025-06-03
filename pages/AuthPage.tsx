
import React, { useState } from 'react';
import LoginForm from '../components/LoginForm';
import SignupForm from '../components/SignupForm';
import { SHORT_COMPANY_NAME } from '../constants';

const AuthPage: React.FC = () => {
  const [isLoginView, setIsLoginView] = useState(true);

  return (
    <div className="min-h-[calc(100vh-8rem)] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-neutral-light via-neutral to-neutral-dark">
      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-2xl">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-secondary">
            {isLoginView ? 'Sign in to your account' : `Create an account with ${SHORT_COMPANY_NAME}`}
          </h2>
        </div>
        
        {isLoginView ? <LoginForm /> : <SignupForm />}

        <p className="mt-8 text-center text-sm text-slate-600">
          {isLoginView ? "Don't have an account? " : "Already have an account? "}
          <button
            onClick={() => setIsLoginView(!isLoginView)}
            className="font-medium text-primary hover:text-primary-dark"
          >
            {isLoginView ? 'Sign up' : 'Sign in'}
          </button>
        </p>
      </div>
    </div>
  );
};

export default AuthPage;

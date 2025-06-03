
import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { User } from '../types';

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, pass: string) => Promise<void>; // Simplified login
  signup: (name: string, email: string, pass: string) => Promise<void>; // Simplified signup
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true); // Start with loading true to check local storage

  useEffect(() => {
    // Try to load user from local storage on initial load
    try {
      const storedUser = localStorage.getItem('jitUser');
      if (storedUser) {
        const parsedUser: User = JSON.parse(storedUser);
        setUser(parsedUser);
        setIsAuthenticated(true);
      }
    } catch (error) {
      console.error("Failed to parse user from localStorage", error);
      localStorage.removeItem('jitUser'); // Clear corrupted data
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, _: string): Promise<void> => {
    setIsLoading(true);
    // Simulate API call
    return new Promise((resolve) => {
      setTimeout(() => {
        const mockUser: User = { id: '1', name: 'Demo User', email: email };
        setUser(mockUser);
        setIsAuthenticated(true);
        localStorage.setItem('jitUser', JSON.stringify(mockUser));
        setIsLoading(false);
        resolve();
      }, 1000);
    });
  };

  const signup = async (name: string, email: string, _: string): Promise<void> => {
    setIsLoading(true);
    // Simulate API call
    return new Promise((resolve) => {
      setTimeout(() => {
        const mockUser: User = { id: '2', name: name, email: email };
        setUser(mockUser);
        setIsAuthenticated(true);
        localStorage.setItem('jitUser', JSON.stringify(mockUser));
        setIsLoading(false);
        resolve();
      }, 1000);
    });
  };

  const logout = (): void => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem('jitUser');
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, isLoading, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

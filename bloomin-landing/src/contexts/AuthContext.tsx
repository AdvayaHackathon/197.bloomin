import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { config } from '../config/api';

// Configure axios defaults
axios.defaults.baseURL = config.apiUrl;
axios.defaults.withCredentials = config.axiosConfig.withCredentials;
axios.defaults.headers.common = config.axiosConfig.headers;

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  error: string | null;
  login: (email: string, password: string) => Promise<void>;
  register: (username: string, email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await axios.get(config.endpoints.auth.me);
        setUser(response.data.user);
      } catch (err) {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  const login = async (email: string, password: string) => {
    try {
      setError(null);
      const response = await axios.post(config.endpoints.auth.login, { email, password });
      setUser(response.data.user);
    } catch (err: any) {
      const errorMessage = err.response?.data?.message || err.message || 'An error occurred during login';
      setError(errorMessage);
      throw new Error(errorMessage);
    }
  };

  const register = async (username: string, email: string, password: string) => {
    try {
      setError(null);
      const response = await axios.post(config.endpoints.auth.register, { 
        name: username,
        email, 
        password,
        role: 'patient' // Default role
      });
      setUser(response.data.user);
    } catch (err: any) {
      const errorMessage = err.response?.data?.message || err.message || 'An error occurred during registration';
      setError(errorMessage);
      throw new Error(errorMessage);
    }
  };

  const logout = async () => {
    try {
      setError(null);
      await axios.post(config.endpoints.auth.logout);
      setUser(null);
    } catch (err: any) {
      const errorMessage = err.response?.data?.message || err.message || 'An error occurred during logout';
      setError(errorMessage);
      throw new Error(errorMessage);
    }
  };

  const value = {
    user,
    loading,
    error,
    login,
    register,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}; 
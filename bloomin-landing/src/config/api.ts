const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

export const config = {
  apiUrl: API_URL,
  endpoints: {
    auth: {
      login: '/api/auth/login',
      register: '/api/auth/register',
      logout: '/api/auth/logout',
      me: '/api/auth/profile',
    },
  },
  axiosConfig: {
    withCredentials: true,
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
  },
}; 
import { useState, useEffect } from 'react';

export const useSpotifyAuth = () => {
  const [token, setToken] = useState(localStorage.getItem('spotify_token'));
  const [isAuthenticated, setIsAuthenticated] = useState(!!token);
  const [loading, setLoading] = useState(false);

  const login = async () => {
    try {
      setLoading(true);
      const response = await fetch('/.netlify/functions/auth-url');
      const data = await response.json();
      window.location.href = data.authUrl;
    } catch (error) {
      console.error('Login error:', error);
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem('spotify_token');
    setToken(null);
    setIsAuthenticated(false);
  };

  const getToken = () => token;

  useEffect(() => {
    // Check if we just got redirected back with a token
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
    
    if (code && !token) {
      // The token will be set by the backend
      window.location.href = '/.netlify/functions/auth-callback?code=' + code;
    }
  }, [token]);

  return {
    token,
    isAuthenticated,
    loading,
    login,
    logout,
    getToken
  };
};

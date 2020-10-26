import React, { createContext, useCallback, useState, useContext } from 'react';
import api from '../services/api';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [ data, setData ] = useState(() => {
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('user');

    if(token && user) {
      return { token, user: JSON.parse(user) };
    }

    return {};
  });

  const login = useCallback(async ({ email, password }) => {
    const response = await api.post('sessions', {
      email,
      password,
    });

    const { token, user } = response.data;

    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));

    setData({ token, user });
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');

    setData({});
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user , login, logout}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if(!context){
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

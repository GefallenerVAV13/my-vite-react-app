import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const Layout = ({ children }) => {
  const location = useLocation();
  const isAuthPage = ['/login'].includes(location.pathname);

  return (
    <div className="app">
      {!isAuthPage && <Header />}
      <main>{children}</main>
      {!isAuthPage && <Footer />}
    </div>
  );
};
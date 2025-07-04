// import React, { useState } from 'react';
import Header from './components/Header';
import Main from './pages/Main';
import CartWindow from './pages/CartWindow';
import { Login } from './pages/Login'; // Импортируем как именованный экспорт
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './layouts/Layout';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <Layout>
            <Main />
          </Layout>
        } />
        <Route path="/cart" element={
          <Layout>
            <CartWindow />
          </Layout>
        } />
        
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
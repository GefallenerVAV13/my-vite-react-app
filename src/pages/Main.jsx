import React from 'react';
import CartWindow from './CartWindow';
import Header from '../components/Header';
import { MainButton } from '../components/MainButton';
import { ProductItem } from '../components/ProductItem';
import { ProductList } from '../components/ProductList';
import { Placeholder } from '../components/Placeholder';
import { ProductListContainer } from '../context/ProductListContainer';

const Main = () => {

  return (
    <div className="body">
      <section className="hero-section">
        <div className="hero-container">
        </div>
      </section>
      <ProductListContainer/>
    </div>
  );
};

export default Main;
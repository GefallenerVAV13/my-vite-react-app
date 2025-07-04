import React from 'react';
import CartWindow from './CartWindow';
import Header from '../components/Header';
import { MainButton } from '../components/MainButton';
import { ProductItem } from '../components/ProductItem';
import { ProductList } from '../components/ProductList';
import { Placeholder } from '../components/Placeholder';
import { ProductListContainer } from '../components/ProductListContainer';

const Main = () => {
  // const products = [
  //   'Product 1',
  //   'Product 2',
  //   'Product 3',
  //   'Product 4',
  //   'Product 5',
  //   'Product 6',
  //   'Product 7',
  //   'Product 8',
  //   'Product 9',
  //   'Product 10'
  // ];

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
import React, { useState } from 'react';
import { ProductItem } from './ProductItem';
import { MainButton } from './MainButton';

const ITEMS_PER_LOAD = 4;

export const ProductList = ({ products }) => {
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_LOAD);

  const visibleProducts = products.slice(0, visibleCount);
  const hasMore = visibleCount < products.length;

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + ITEMS_PER_LOAD);
  };

  return (
    <>
      <div className="container">
        <div className='product-list'>
          <section className="products-grid">
            {visibleProducts.map((product) => (
              <ProductItem key={product.id} item={product} />
            ))}
          </section>
        </div>

        {hasMore && (
          <div className="load-more-container">
            <MainButton
              className="btnAccent"
              onClick={handleLoadMore}
              title="Загрузить еще"
            />
          </div>
        )}
      </div>
    </>
  );
};
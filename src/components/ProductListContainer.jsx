import React, { useEffect, useState } from 'react';
import { ProductList } from './ProductList';

export const ProductListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://dummyjson.com/products ')
      .then(res => res.json())
      .then(data => {
        if (data && data.products) {
          setProducts(data.products);
        } else {
          throw new Error('Неверная структура данных');
        }
        setLoading(false);
      })
      .catch(err => {
        console.error('Ошибка загрузки', err);
        setError('Не удалось загрузить товары');
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Загрузка...</p>;
  if (error) return <p>{error}</p>;

  return <ProductList products={products} />;
};
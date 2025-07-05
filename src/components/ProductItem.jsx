import React, { useContext } from 'react';
import { MainButton } from './MainButton';
import MoreIco from '../assets/more.svg?react';
import { CartContext } from '../context/CartContext';
import Counter from './Counter';

export const ProductItem = ({ item }) => {

  const { cart, addToCart, updateQuantity } = useContext(CartContext);

  const inCart = cart.find(product => product.id === item.id);

  const handleAddToCart = () => {
    addToCart(item);
  };

  const increment = () => {
    updateQuantity(item.id, inCart.quantity + 1);
  };

  const decrement = () => {
    updateQuantity(item.id, inCart.quantity - 1);
  };

  return (
    <div className='Product-block'>
      <div className='Item-card'>
        <div className='Item-img'>
            <img src={item.thumbnail} alt={item.title} />
          </div>
        <div className='Item-title'>
          <h4>{item.title}</h4>
        </div>
      </div>
      <div className='Item-info'>
  <p><strong>{item.price}$</strong></p>
      <div className='Item-Btn'>
        {inCart ? (
          <Counter value={inCart.quantity} onIncrement={increment} onDecrement={decrement} />
        ) : (
          <>
            <MainButton title={<MoreIco className="icon-more" />} className={'btnNeutral-more'} />
            <MainButton title={"Добавить"} className={'btnNeutral'} onClick={handleAddToCart} />
          </>
        )}
      </div>
    </div>
    </div>
  );
};
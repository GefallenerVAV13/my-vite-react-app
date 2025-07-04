import React, { useState, useEffect } from 'react';
import Counter from '../components/Counter';
import { NavigateButton } from '../components/NavigateButton';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  //const [totalQuantity, setTotalQuantity] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://dummyjson.com/carts/2 ')
      .then(res => res.json())
      .then(data => {
        setCartItems(data.products);
        //setTotalQuantity(data.total);
        setTotalPrice(data.discountedTotal);
        setLoading(false);
      });
  }, []);

  return (
    <div className="cart-page">
      {loading ? (
        <p>Загрузка...</p>
      ) : (
        <div className="cart-container">
          <div className='cart'>
          <div className="cart-items">
            {cartItems.map(item => (
              <div key={item.id} className="cart-item">
                <img src={item.thumbnail} alt={item.title} className="cart-item-image" />
                <div className="cart-item-details">
                  <h4>{item.title}</h4>
                  <p>Цена: {item.price}$</p>
                  <p>Скидка: {item.discountPercentage}%</p>
                  <button className="remove-button">Удалить</button>
                </div>
                <div className="cart-item-actions">
                  <Counter count={item.quantity} readOnly={false} />
                  <span className="cart-item-total">{item.discountedTotal}$</span>
                </div>
              </div>
            ))}
            </div>
          </div>

          <div className="cart-summary">
            <div className="summary-row">
              <span>Товары</span>
              <span>{totalPrice + totalPrice * 0.05}$</span>
            </div>
            <div className="summary-row">
              <span>Скидка</span>
              <span>- {totalPrice * 0.05}$</span>
            </div>
            <div className="summary-row">
              <span>Доставка</span>
              <span>10$</span>
            </div>
            <hr />
            <h2>
              <div className="summary-row total">
                <strong>Итого</strong>
                <strong>{totalPrice + 10}$</strong>
              </div>
            </h2>
            <div className='btnn'> 
              <NavigateButton link="/" icon={"Оплатить"} className={"btnAccentLarge"} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
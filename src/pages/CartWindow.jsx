import React, {useContext } from 'react';
import Counter from '../components/Counter';
import { NavigateButton } from '../components/NavigateButton';
import { CartContext } from '../context/CartContext';
import { SecondaryButton } from '../components/SecondaryButton';

const Cart = () => {
    const { cart, updateQuantity } = useContext(CartContext);

    const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const discount = subtotal * 0.05;
    const delivery = 10;
    const total = subtotal - discount + delivery;

  return (
    <div className="cart-page">
      <div className="cart-container">
        <div className="cart-items">
          {cart.length === 0 ? (
            <p>Корзина пуста</p>
          ) : (
            cart.map(item => (
              <div key={item.id} className="cart-item" >
                <img src={item.thumbnail} alt={item.title} className="cart-item-image" />
                <div className="cart-item-details">
                  <h4>{item.title}</h4>
                  <p>Цена: {item.price}$</p>
                  <p>Скидка: {item.discountPercentage}%</p>
                  <SecondaryButton
                  title="Удалить"
                  onClick={() => updateQuantity(item.id, 0)}
                  className="remove-button"
                />
                </div>
                <div className="cart-item-actions">
                  <Counter
                    value={item.quantity}
                    onIncrement={() => updateQuantity(item.id, item.quantity + 1)}
                    onDecrement={() => updateQuantity(item.id, item.quantity - 1)}
                  />
                  <span className="cart-item-total">{item.discountedTotal}</span>
                </div>
              </div>
            ))
          )}
        </div>

          <div className="cart-summary">
          <div className="summary-row">
            <span>Товары</span>
            <span>{subtotal.toFixed(2)}$</span>
          </div>

          <div className="summary-row">
            <span>Скидка</span>
            <span>- {discount.toFixed(2)}$</span>
          </div>

          <div className="summary-row">
            <span>Доставка</span>
            <span>+ {delivery}$</span>
          </div>

          <hr />

          <div className="summary-row total">
            <strong>Итого</strong>
            <strong>{total.toFixed(2)}$</strong>
          </div>

          <div className="checkout-button-container">
            <button className="btnAccentLarge" onClick={() => alert('Оплата пока недоступна')}>
              Оплатить
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
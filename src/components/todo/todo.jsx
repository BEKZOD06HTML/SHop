import React from 'react';
import useProductStore from '../../utils/store';
import './todo.css';

const Todo = () => {
  const { cart, addToLike, removeProduct, addToCart } = useProductStore();

  const getTotalPrice = () => {
    return cart.reduce((total, product) => total + Number(product.price) * product.quantity, 0);
  };

  return (
    <div className="todo-container">
      <div className="cart-content">
        <div className="cart-items">
          {cart.map((product) => (
            <div key={product.id} className="todo-item">
              <img src="/trash-icon.png" alt="Delete" className="trash-icon" onClick={() => removeProduct(product.id)} />
              <div className="product-info">
                <p><strong>Name:</strong> {product.name}</p>
                <p><strong>Price:</strong> ${Number(product.price).toFixed(2)}</p>
                <p><strong>Category:</strong> {product.category}</p>
              </div>
              <div className="quantity-controls">
                <button onClick={() => addToCart({ ...product, quantity: -1 })}>-</button>
                <span>{product.quantity}</span>
                <button onClick={() => addToCart(product)}>+</button>
              </div>
              <div><button className="like-button" onClick={() => addToLike(product)}>❤️</button>
              <button className="remove-button" onClick={() => removeProduct(product.id)}>🗑️</button></div>
            </div>
          ))}
        </div>
        <div className="cart-summary">
          <p><strong>Total Price:</strong> ${getTotalPrice().toFixed(2)}</p>
          <button className="buy-button">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Todo;
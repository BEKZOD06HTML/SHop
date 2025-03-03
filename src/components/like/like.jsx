import React from 'react';
import useProductStore from '../../utils/store';
import './like.css';

const Like = () => {
  const { likes, addToCart, removeProduct } = useProductStore();

  return (
    <div className="like-container">
      <div className="like-items">
        {likes.map((product) => (
          <div key={product.id} className="like-card">
            <img src="/trash-icon.png" alt="Product" className="product-image" />
            <div className="product-info">
              <p><strong>Name:</strong> {product.name}</p>
              <p><strong>Price:</strong> ${Number(product.price) ? Number(product.price).toFixed(2) : '0.00'}</p>
              <p><strong>Category:</strong> {product.category}</p>
            </div>
            <button className="buy-button" onClick={() => addToCart(product)}>🛒 Buy</button>
            <button className="remove-button" onClick={() => removeProduct(product.id)}>🗑️</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Like;
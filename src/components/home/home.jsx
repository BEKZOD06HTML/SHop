import React from 'react';
import useProductStore from '../../utils/store';
import './home.css';

const Home = () => {
  const { products, addToLike, addToCart, likes, cart } = useProductStore();

  const isLiked = (id) => likes.some((item) => item.id === id);
  const isInCart = (id) => cart.some((item) => item.id === id);

  return (
    <div className="container">
      {products.map((product) => (
        <div key={product.id} className="card">
          <img src={product.image} alt={product.name} />
          <h3><b>Name:</b>{product.name}</h3>
          <p> <b>Price:</b>{product.price} $</p>
          
          <button onClick={() => addToLike(product)}>
            {isLiked(product.id) ? '💔 Unlike' : '❤️ Like'}
          </button>

      
          <button onClick={() => addToCart(product)}>
            {isInCart(product.id) ? '✔️ In Cart' : '🛒 Add to Cart'}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Home;
import React from 'react';
import useProductStore from '../../utils/store';
import './home.css';

const Home = () => {
  const { products, addToLike, addToCart, likes, cart } = useProductStore();

  const isLiked = (id) => id && likes.some((item) => item.id === id);
  const isInCart = (id) => id && cart.some((item) => item.id === id);

  return (
    <div className="container">
      {/* Qo'shimcha kartani qo'shish */}
      <div className='card'>
        <img src="./assets/icon/like.png" alt="" />
        <h3><b>Name:</b> like</h3>
        <p><b>Price:</b> 0$</p>
        <button onClick={() => addToLike({ id: 'custom-like', name: 'like', price: 0 })}>
          {isLiked('custom-like') ? <img src="./assets/icon/like.png" alt="" /> : <img src="./assets/icon/unlike.png" alt="" />}
        </button>
        <button onClick={() => addToCart({ id: 'custom-like', name: 'like', price: 0 })}>
          {isInCart('custom-like') ? '+' : <img src="./assets/icon/delete.png" alt="" />}
        </button>
      </div>

      {products.map((product) => (
        <div key={product.id} className="card">
          <img src={product.image} alt={product.name} />
          <h3><b>Name:</b> {product.name}</h3>
          <p><b>Price:</b> {product.price} $</p>
          <button onClick={() => addToLike(product)}>
            {isLiked(product.id) ? <img src="./assets/icon/like.png" alt="" /> : <img src="./assets/icon/unlike.png" alt="" />}
          </button>
          <button onClick={() => addToCart(product)}>
            {isInCart(product.id) ? '+' : <img src="./assets/icon/delete.png" alt="" />}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Home;

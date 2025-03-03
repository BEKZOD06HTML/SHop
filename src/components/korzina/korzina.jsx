import React, { useState } from 'react';
import useProductStore from '../../utils/store';
import './korzina.css';

const Korzina = () => {
  const { addProduct, editProduct, removeProduct, products } = useProductStore();
  const [form, setForm] = useState({ name: '', price: '', image: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAdd = () => {
    if (form.name && form.price && form.image) {
      addProduct({ id: Date.now(), ...form });
      setForm({ name: '', price: '', image: '' });
    }
  };

  return (
    <div className="form-container">
      <div className="inputs"><h2>Add Product</h2>
      <input name="name" value={form.name} onChange={handleChange} placeholder="Product Name" />
      <input name="price" value={form.price} onChange={handleChange} placeholder="Price" type="number" />
      <input name="image" value={form.image} onChange={handleChange} placeholder="Image URL" />
      <button onClick={handleAdd}>Add Product</button></div>
      {products.map((product) => (
        <div key={product.id} className="card">
          <p><b>Name:</b> {product.name}</p>
          <p><b>Price:</b>  {product.price}$</p>
          <button onClick={() => editProduct(product.id, form)}>Edit</button>
          <button onClick={() => removeProduct(product.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default Korzina;

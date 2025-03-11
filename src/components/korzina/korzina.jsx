import React, { useState } from 'react';
import useProductStore from '../../utils/store';
import './korzina.css';

const Korzina = () => {
  const { addProduct, editProduct, removeProduct, products } = useProductStore();
  const [form, setForm] = useState({ name: '', price: '', image: '' });
  const [editId, setEditId] = useState(null);

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === 'image' && files) {
      const file = files[0];
      const reader = new FileReader();

      reader.onloadend = () => {
        setForm((prevForm) => ({ ...prevForm, image: reader.result }));
      };
      reader.readAsDataURL(file);
    } else {
      setForm((prevForm) => ({ ...prevForm, [name]: value }));
    }
  };

  const handleAdd = () => {
    if (form.name && form.price && form.image) {
      addProduct({ id: Date.now(), ...form });
      setForm({ name: '', price: '', image: '' });
    }
  };

  const handleEdit = (id) => {
    const productToEdit = products.find((product) => product.id === id);
    if (productToEdit) {
      setForm(productToEdit);
      setEditId(id);
    }
  };

  const handleUpdate = () => {
    if (editId !== null) {
      editProduct(editId, { ...form });
      setForm({ name: '', price: '', image: '' });
      setEditId(null);
    }
  };

  return (
    <div className="form-container">
      <div className="inputs">
        <h2>{editId ? 'Edit Product' : 'Add Product'}</h2>
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Product Name"
        />
        <input
          name="price"
          value={form.price}
          onChange={handleChange}
          placeholder="Price"
          type="number"
        />
        <input
          name="image"
          type="file"
          onChange={handleChange}
          accept="image/*"
        />
        {form.image && <img src={form.image} alt="Preview" className="preview-image" />}
        {editId ? (
          <button onClick={handleUpdate}>Update Product</button>
        ) : (
          <button onClick={handleAdd}>Add Product</button>
        )}
      </div>
      {products.map((product) => (
        <div key={product.id} className="card">
          {product.image && <img src={product.image} alt={product.name} className="product-image" />}
          {editId === product.id ? (
            <div className="editable-fields">
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Product Name"
              />
              <input
                name="price"
                value={form.price}
                onChange={handleChange}
                placeholder="Price"
                type="number"
              />
              <button onClick={handleUpdate}>Save</button>
            </div>
          ) : (
            <>
              <p><b>Name:</b> {product.name}</p>
              <p><b>Price:</b> {product.price}$</p>
              <button onClick={() => handleEdit(product.id)}>Edit</button>
              <button onClick={() => removeProduct(product.id)}>Delete</button>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default Korzina;

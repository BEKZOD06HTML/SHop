import React, { useState } from 'react';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { Pagination } from 'antd';

const API = axios.create({
  baseURL: 'https://dummyjson.com/products',
});

const Products = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  // API dan ma'lumot olish funksiyasi
  const getData = async () => {
    try {
      const res = await API.get(`?limit=${pageSize}&skip=${(currentPage - 1) * pageSize}`);
      return res.data.products;
    } catch (error) {
      console.error('Error ', error);
    
    }
  };

  const { data: products = [], isLoading, error } = useQuery({
    queryKey: ['products', currentPage, pageSize],
    queryFn: getData,
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading products!</p>;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <h1>Products</h1>
      {products.map((product) => (
        <div key={product.id} style={{ width: '300px', border: '1px solid #ddd', padding: '10px', borderRadius: '8px' }}>
          <img src={product.thumbnail} alt={product.title} style={{ width: '150px', borderRadius: '8px' }} />
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <p><strong>Price:</strong> ${product.price}</p>
        </div>
      ))}

      <Pagination
        current={currentPage}
        pageSize={pageSize}
        total={100}
        onChange={(page, size) => {
          setCurrentPage(page);
          setPageSize(size);
        }}
        defaultCurrent={1}
      />
    </div>
  );
};

export default Products;

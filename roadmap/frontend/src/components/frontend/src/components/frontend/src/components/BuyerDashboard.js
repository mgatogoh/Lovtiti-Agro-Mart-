import React, { useEffect, useState } from 'react';

function BuyerDashboard() {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch('/api/products');
      const data = await response.json();
      setProducts(data);
    }
    fetchProducts();
  }, []);

  const filteredProducts = products.filter(product =>
    product.category.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h2>Available Products</h2>
      <select onChange={(e) => setFilter(e.target.value)}>
        <option value="">All Categories</option>
        <option value="crops">Crops</option>
        <option value="livestock">Livestock</option>
        <option value="aquaculture">Aquaculture</option>
      </select>

      <ul>
        {filteredProducts.map((product, index) => (
          <li key={index}>
            <h3>{product.name}</h3>
            <p>Category: {product.category}</p>
            <p>Price: {product.price}</p>
            <p>{product.description}</p>
            {product.image && <img src={product.image} alt={product.name} width="200" />}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BuyerDashboard;

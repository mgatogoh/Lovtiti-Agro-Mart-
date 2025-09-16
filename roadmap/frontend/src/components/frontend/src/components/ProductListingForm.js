import React, { useState } from 'react';

function ProductListingForm() {
  const [product, setProduct] = useState({
    name: '',
    category: '',
    price: '',
    description: '',
    image: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleImageUpload = (e) => {
    setProduct({ ...product, image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    for (let key in product) {
      formData.append(key, product[key]);
    }

    const response = await fetch('/api/products', {
      method: 'POST',
      body: formData
    });

    const result = await response.json();
    alert(result.message);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Product Name" onChange={handleChange} />
      <select name="category" onChange={handleChange}>
        <option value="">Select Category</option>
        <option value="crops">Crops</option>
        <option value="livestock">Livestock</option>
        <option value="aquaculture">Aquaculture</option>
      </select>
      <input name="price" placeholder="Price" onChange={handleChange} />
      <textarea name="description" placeholder="Description" onChange={handleChange} />
      <input type="file" onChange={handleImageUpload} />
      <button type="submit">List Product</button>
    </form>
  );
}

export default ProductListingForm;

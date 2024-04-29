import React, { useState, useEffect } from 'react';
import Axios from 'axios'; // Import Axios library

const ItemsReview = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await Axios.get('/api/selected-items'); // Replace '/api/selected-items' with your actual API endpoint
        setItems(response.data); // Assuming the response contains an array of selected items
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchItems();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>Items Review</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <div>{item.name}</div>
            <div>Price: {item.price}</div>
            {/* Add more item details here */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemsReview;

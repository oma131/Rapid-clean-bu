// Container Component
import React, { useState } from 'react';
import Services from '../component/bookingSteps/Services';
import ItemsReview from '../pages/userDashboard/ItemsReview';

const ServicesComp = () => {
  const [selectedProducts, setSelectedProducts] = useState([]);

  const updateSelectedProducts = (product) => {
    setSelectedProducts(prevSelectedProducts => [...prevSelectedProducts, product]);
  };

  return (
    <div>
      <Services updateSelectedProducts={updateSelectedProducts} />
      <ItemsReview selectedProducts={selectedProducts} />
    </div>
  );
};

export default ServicesComp;

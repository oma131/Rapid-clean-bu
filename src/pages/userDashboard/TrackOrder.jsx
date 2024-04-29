import React from 'react';
import { useParams } from 'react-router-dom';

const TrackOrderPage = () => {
  const { orderId } = useParams();

  // Dummy data for demonstration
  const orders = [
    {
      id: 1,
      status: 'Processing',
      items: [
        { id: 1, name: 'Product A', quantity: 2 },
        { id: 2, name: 'Product B', quantity: 1 },
      ],
      deliveryDate: 'April 30, 2024',
      trackingNumber: '1234567890',
    },
    {
      id: 2,
      status: 'Delivered',
      items: [
        { id: 1, name: 'Product A', quantity: 2 },
        { id: 2, name: 'Product B', quantity: 1 },
      ],
      deliveryDate: 'April 30, 2024',
      trackingNumber: '1234567890',
    },
    {
      id: 3,
      status: 'Pending',
      items: [
        { id: 1, name: 'Product A', quantity: 2 },
        { id: 2, name: 'Product B', quantity: 1 },
      ],
      deliveryDate: 'April 30, 2024',
      trackingNumber: '1234567890',
    },
  ];

  const order = orders.find((order) => order.id.toString() === orderId);

  return (
    <div>
      <h1>Track Order</h1>
      {order ? (
        <>
          <p>Order ID: {order.id}</p>
          <p>Status: {order.status}</p>
          <h2>Items:</h2>
          <ul>
            {order.items.map((item) => (
              <li key={item.id}>
                {item.name} - Quantity: {item.quantity}
              </li>
            ))}
          </ul>
          <p>Estimated Delivery Date: {order.deliveryDate}</p>
          <p>Tracking Number: {order.trackingNumber}</p>
          {/* Additional tracking information and status update can be added here */}
        </>
      ) : (
        <p>Order not found</p>
      )}
    </div>
  );
};

export default TrackOrderPage;

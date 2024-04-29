import React from 'react';
import { Link } from 'react-router-dom';
import Topbar from '../../component/Topbar';

const MyOrders = () => {
  // Dummy data for demonstration
  const orders = [
    {
      id: 1,
      status: 'Processing',
      amount: 100,
      paymentMethod: 'Credit Card',
      deliveryAddress: '123 Main St, Cityville, CA',
    },
    {
      id: 2,
      status: 'Delivered',
      amount: 150,
      paymentMethod: 'PayPal',
      deliveryAddress: '456 Elm St, Townsville, NY',
    },
    {
      id: 3,
      status: 'Processing',
      amount: 200,
      paymentMethod: 'Bank Transfer',
      deliveryAddress: '789 Oak St, Villageton, TX',
    },
    {
      id: 4,
      status: 'Pending',
      amount: 120,
      paymentMethod: 'Credit Card',
      deliveryAddress: '987 Maple St, Hamletown, FL',
    },
  ];
  

  // Count different types of orders
  const totalOrders = orders.length;
  const receivedOrders = orders.filter(order => order.status === 'Delivered').length;
  const pendingOrders = orders.filter(order => order.status === 'Pending').length;
  const processingOrders = orders.filter(order => order.status === 'Processing').length;

  return (
    <div className=''>
      <Topbar />

      <div className='p-16'>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
          <div className='bg-light w-full h-20 flex justify-center items-center px-3 py-2 rounded-lg shadow-xl'>
            <div className='flex flex-col justify-between'>
              <h2 className='text-3xl font-semibold'>{totalOrders}</h2>
              <p className='text-base font-semibold'>Total Orders</p>
            </div>
          </div>
          <div className='bg-light w-full h-20 flex justify-center items-center px-3 py-2 rounded-lg shadow-xl'>
            <div className='flex flex-col justify-between'>
              <h2 className='text-3xl font-semibold'>{receivedOrders}</h2>
              <p className='text-base font-semibold'>Recieved Orders</p>
            </div>
          </div>
          <div className='bg-light w-full h-20 flex justify-center items-center px-3 py-2 rounded-lg shadow-xl'>
            <div className='flex flex-col justify-between'>
              <h2 className='text-3xl font-semibold'>{pendingOrders}</h2>
              <p className='text-base font-semibold'>Pending Orders</p>
            </div>
          </div>
          <div className='bg-light w-full h-20 flex justify-center items-center px-3 py-2 rounded-lg shadow-xl'>
            <div className='flex flex-col justify-between'>
              <h2 className='text-3xl font-semibold'>{processingOrders}</h2>
              <p className='text-base font-semibold'>In Process</p>
            </div>
          </div>
        </div>
        <div className='bg-white rounded-lg shadow-xl p-10'>
          <div className='text-2xl font-bold'>My Orders</div>
          {orders.map((order, index) => {
            let color;
            if (order.status === 'Processing') {
              color = '#FFA500'; // Orange
            } else if (order.status === 'Pending') {
              color = '#FF0000'; // Red
            } else if (order.status === 'Delivered') {
              color = '#008000'; // Green
            } else {
              color = '#000000'; // Default color
            }

          return (
            <div key={order.id}>
              <div className='flex flex-col md:flex-row justify-between items-center py-3'>
                <div>
                  <p>Order Date: {order.date} | <span style={{ color }}>{order.status}</span></p>
                  <p>Amount: ${order.amount} </p>
                  <p>Order ID: {order.id}</p>
                  <p>Order Date: {order.paymentMethod} </p>
                </div>

                <div className='flex flex-col items-end'>
                  <Link to={`/track-order/${order.id}`} className='border p-2  rounded-lg border-midnight'>
                    <button>Track Order</button>
                  </Link>
                  <div className='flex flex-col items-end mt-2'>
                    <p>Delivery Address </p>
                    <p>{order.deliveryAddress} </p>
                    </div>
                </div>
              </div>
              {index !== orders.length - 1 && <hr />}
            </div>
            
          )})}
          
        </div>
      </div>
    </div>
  );
};

export default MyOrders;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import Skeleton from "react-loading-skeleton";


const Payment = () => {
  const [selectedOption, setSelectedOption] = useState('Bank Transfer');
  const [orderStatus, setOrderStatus] = useState('Pending');
  const [isLoading, setIsLoading] = useState(false);
  const [showOrderCompletedPopup, setShowOrderCompletedPopup] = useState(false);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleConfirmOrder = () => {
    setIsLoading(true);
    // Simulating admin updating order status
    setTimeout(() => {
      setOrderStatus('Order Completed');
      setIsLoading(false);
      setShowOrderCompletedPopup(true);
    }, 5000); // Simulating a 2-second delay for demonstration purposes
  };

  return (
    <div className="flex flex-col md:flex-row gap-16 w-full p-5 md:p-10">
      <div className=''>
        <h2 className="text-xl text-center font-semibold mb-4">Choose Payment Method</h2>
        <div className="flex flex-col items-center gap-4 mb-4">
          <div className='bg-grey w-48 py-1 px-4 rounded-full flex items-center'>
            <input
              type="radio"
              id="paypal"
              name="selectedOption"
              value="paypal"
              disabled={selectedOption !== 'paypal'}
              checked={selectedOption === "paypal"}
              onChange={handleOptionChange}
              className="mr-2"
            />
            <label htmlFor="paypal" className="relative mr-4 text-faded">
              PayPal
              <span className="absolute bg-white border border-darkgrey p-2 rounded-lg shadow-md opacity-0 transition-opacity duration-300 pointer-events-none invisible hover:opacity-100 hover:visible">
                Coming soon
              </span>
            </label>
          </div>
          <div className='bg-grey w-48 py-1 px-4 rounded-full flex items-center'>
            <input
              type="radio"
              id="credit-card"
              name="selectedOption"
              value="credit-card"
              disabled={selectedOption !== 'credit-card'}
              checked={selectedOption === "credit-card"}
              onChange={handleOptionChange}
              className="mr-2"
            />
            <label htmlFor="credit-card" className="mr-4 text-faded">
              Credit Card
              <span className="absolute bg-white border border-darkgrey p-2 rounded-lg shadow-md opacity-0 transition-opacity duration-300 pointer-events-none invisible hover:opacity-100 hover:visible">
                Coming soon
              </span>
            </label>
          </div>
          <div className='bg-faded text-white w-48 py-1 px-4 rounded-full flex items-center'>
            <input
              type="radio"
              id="bank-transfer"
              name="selectedOption"
              value="bank-transfer"
              checked={selectedOption === "bank-transfer"}
              onChange={handleOptionChange}
              className="mr-2"
            />
            <label htmlFor="bank-transfer" className="text-gray-800">Bank Transfer</label>
          </div>
        </div>
      </div>
      {selectedOption === 'bank-transfer' && (
        <div className='w-full p-4 bg-light rounded-md shadow-xl'>
          <div>
            <h1 className='text-xl font-bold'>Bank Details</h1>
            <p className='mt-3'>Please transfer the total amount due to the following bank:</p>
            <p className='mt-1'><span className='font-bold'>Bank Name:</span> ABC Bank</p>
            <p className='mt-1'><span className='font-bold'>Account Number:</span> 0123456789</p>
            <p className='mt-1'><span className='font-bold'>Account Name:</span> Rapid Clean Laundry & Drycleaners</p>
          </div>
          <div className='mt-6'>
            <h1 className='text-xl font-bold'>Payment Confirmation</h1>
            <p className='mt-3'>
            Use your name or email as reference and email us at rapidcleanlaundry.abuja@gmail.com with the transfer receipt
            </p>
          </div>
          <div className='mt-6'>
            <h1 className='text-xl font-bold'>Contact Information</h1>
            <p className='mt-3'>
              Ebiye Ekong <br/>
              2, Sunnyside Street, Sunnyvale. Lekki Eti Osa, Lagos State <br/>
              ebiekong@email.com <br/>
              08012345678
            </p>
          </div>
          <button
            onClick={handleConfirmOrder}
            className="mt-4 bg-midnight hover:bg-faded text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Confirm Order
          </button>
        </div>
      )}
      
      {isLoading && (
        <div className="fixed inset-0 top-0 left-0 w-full h-full flex items-center justify-center bg-[#00001E] bg-opacity-50 backdrop-blur-lg">
          <div className='bg-white rounded text-center flex flex-col justify-center items-center p-8'>
            <motion.div
              className="rounded-full h-10 w-10 border-t-4 border-darkgrey"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
            <p>Loading...</p>
            
            <p className='mt-8 text-midnight'>Please wait while we confirn your order</p>
          
          </div>
          
        </div>
      )}
      {showOrderCompletedPopup && (
        <div className="fixed inset-0 top-0 left-0 w-full h-full flex items-center justify-center bg-[#00001E] bg-opacity-50 backdrop-blur-lg">
          <div className="bg-white z-10 p-4 rounded-lg flex flex-col justify-center items-center">
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              height="60"
              viewBox="0 0 24 24"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ stroke: '#2ecc71', fill: 'none' }}
              // animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
            >
              <motion.g
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1, duration: 1 }}
              >
                <circle cx="12" cy="12" r="10" />
              </motion.g>
              <motion.g
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1, duration: 1 }}
              >
                <motion.path
                  d="M7 13l3 3 7-7"
                  strokeDasharray="24"
                  strokeDashoffset="24"
                  animate={{ strokeDashoffset: 0 }}
                  transition={{ duration: 2, repeat: 1, ease: 'linear' }} 
                />
              </motion.g>
            </motion.svg>
            <p className='mt-6 text-xs text-center w-64'>
              Your have successfully
              booked your order. Further information
              will be sent to the email provided.
            </p>
            <Link to='/orders'
              onClick={() => setShowOrderCompletedPopup(false)}
              className="mt-10 bg-green hover:bg-faded text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Continue
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Payment;

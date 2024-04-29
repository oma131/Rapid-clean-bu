import React, { useState } from 'react';

const TimeComponent = ({ onSelectTime }) => {
  const [selectedTime, setSelectedTime] = useState(null);

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
    onSelectTime && onSelectTime(time);
  };

  return (
    <div className="w-full max-w-md ">
      {/* <h2 className="text-lg font-semibold mb-2">Available Time Slots</h2> */}
      <div className="grid grid-cols-2 gap-4 text-xs">
        <div
          className={`border border-midnight flex items-center justify-between px-4 py-2  rounded-md cursor-pointer ${selectedTime === '9am - 11pm' ? 'bg-faded text-white' : 'bg-transparent'}`}
          onClick={() => handleTimeSelect('9am - 11pm')}
        >
          <span className="text-midnight">9AM - 11PM</span>
        </div>
        <div
          className={`flex border border-midnight items-center justify-between px-4 py-2 rounded-md cursor-pointer ${selectedTime === '12pm - 2pm' ? 'bg-faded text-white' : 'bg-gray-100'}`}
          onClick={() => handleTimeSelect('12pm - 2pm')}
        >
          <span className="text-midnight">12PM - 2PM</span>
        </div>
        <div
          className={`border border-midnight flex items-center justify-between px-4 py-2 rounded-md cursor-pointer ${selectedTime === '3pm - 4pm' ? 'bg-faded text-white' : 'bg-gray-100'}`}
          onClick={() => handleTimeSelect('3pm - 4pm')}
        >
          <span className="text-midnight">3PM - 4PM</span>
        </div>
        <div
          className={`border border-midnight flex items-center justify-between px-4 py-2 rounded-md cursor-pointer ${selectedTime === '5pm - 6pm' ? 'bg-faded text-white' : 'bg-gray-100'}`}
          onClick={() => handleTimeSelect('5pm - 6pm')}
        >
          <span className="text-midnight">5PM - 6PM</span>
        </div>
      </div>
    </div>
  );
};

export default TimeComponent;

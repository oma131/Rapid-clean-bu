import React, { useState } from 'react';
import Calendar from '../../component/Calendar'
import TimeComponent from '../../component/TimeComponent'
// import TimeComponent from './TimeComponent';

const CalendarTimeComponent = ({ onDateTimeSelect }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const handleDateSelect = (date) => {
    setSelectedDate(`${date.toLocaleDateString('en-US')}`);
    onDateTimeSelect && onDateTimeSelect(date, selectedTime);
  };

  const handleTimeSelect = (time) => {
    setSelectedTime(`${time}`);
    onDateTimeSelect && onDateTimeSelect(selectedDate, time);
  };


  return (
    <div className=" flex flex-col md:flex-row gap-10 w-full">
      <div className="w-full max-w-md  bg-light rounded-lg">
        <h3 className='py-4 px-10 text-center bg-grey rounded-t-lg'>Select your most preferred date and time</h3>
        <div className='p-10 '>
          <div>
            <div className="mb-4">
              <h2 className="text-lg font-semibold mb-2">Select Pickup Date</h2>
              <Calendar onSelect={handleDateSelect} />
            </div>
            <div className='mt-10'>
              <h2 className="text-lg font-semibold mb-4">Select Pickup Time</h2>
              <TimeComponent onSelectTime={handleTimeSelect} />
            </div>
          </div>
          
        </div>
      </div>
      <div className='flex flex-col gap-4 md:mt-44'>
        {selectedDate && (
          <div className='flex items-center gap-2'>
            <h2 className='text-2xl font-semibold text-midnight'>Date:</h2>
            <p className="text-base mt-1"> {selectedDate}</p>
          </div>
        )}
        {selectedTime && (
          <div className='flex items-center gap-2'>
            <h2 className='text-2xl font-semibold text-midnight'>Time:</h2>
            <p className="text-base mt-1"> {selectedTime}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CalendarTimeComponent;


// const App = () => {
//   const [selectedDateTime, setSelectedDateTime] = useState(null);

//   const handleDateTimeSelect = (date, time) => {
//     setSelectedDateTime(`${date.toLocaleDateString('en-US')} ${time}`);
//   };

//   return (
//     <div className="container mx-auto mt-5">
//       <CalendarTimeComponent onDateTimeSelect={handleDateTimeSelect} />
//       {selectedDateTime && (
//         <p className="mt-4">Selected date and time: {selectedDateTime}</p>
//       )}
//     </div>
//   );
// };

// export default App;

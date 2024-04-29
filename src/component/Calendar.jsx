import React, { useState } from 'react';
import { FaAngleLeft, FaAngleRight, } from 'react-icons/fa';

const Calendar = ({ onSelect }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const prevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    return new Date(year, month + 1, 0).getDate();
  };

  const handleDateClick = (day) => {
    const clickedDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
    setSelectedDate(clickedDate);
    onSelect && onSelect(clickedDate);
  };

  const renderCalendar = () => {
    const daysInMonth = getDaysInMonth(currentDate);
    const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
    const calendar = [];

    for (let i = 0; i < firstDayOfMonth; i++) {
      calendar.push(<div key={`empty-${i}`} className="text-midnight"></div>);
    }

    for (let i = 1; i <= daysInMonth; i++) {
      const isLastDay = i === daysInMonth;
      const isSelected = selectedDate && i === selectedDate.getDate() && currentDate.getMonth() === selectedDate.getMonth() && currentDate.getFullYear() === selectedDate.getFullYear();
      calendar.push(
        <div key={i} onClick={() => handleDateClick(i)} className={`text-center text-xs border p-2 cursor-pointer ${isLastDay ? '' : ''} ${isSelected ? 'bg-midnight text-white' : 'hover:bg-faded hover:text-white'}`}>
          {i}
        </div>
      );
    }

    return calendar;
  };

  return (
    <div className="w-full max-w-md  bg-white rounded-lg p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">{currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</h2>
        <div className=' flex w-16 justify-between'>
          <button onClick={prevMonth}>
            <FaAngleLeft className="w-4 text-darkgrey" />
          </button>
          <button onClick={nextMonth}>
            <FaAngleRight className="w-4 text-darkgrey" />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-7 gap-2 text-xs mt-6">
        <div className="text-center font-semibold ">Su</div>
        <div className="text-center font-semibold">Mo</div>
        <div className="text-center font-semibold">Tu</div>
        <div className="text-center font-semibold">We</div>
        <div className="text-center font-semibold">Th</div>
        <div className="text-center font-semibold">Fr</div>
        <div className="text-center font-semibold">Sa</div>
        
      </div>
      <div className='grid grid-cols-7 gap-2 mt-2'>
      {renderCalendar()}
      </div>
    </div>
  );
};


export default Calendar;

import React from 'react';

const FigureCard = ({ data }) => {
  return (
  <div className='flex justify-center'>
     <div className='flex flex-col bg-[#ECF0F5] px-[1rem] rounded-[0.5rem] pt-[1rem] pb-[6rem] my-[3rem] w-[60rem] items-center'>
    <h1 className='text-[#0100BB] text-[1.5rem] px-[2rem] py-[1rem] w-[60rem] font-medium   '> Pricing</h1>
     <div className="grid  grid-cols-3  gap-4">
      {data.map((item) => (
        <div className=" p-4 rounded-t-[0.5rem] w-[19rem] h-[24rem] " key={item.id}>
          <img src={item.image} alt={item.alt} className="w-[19rem] h-[19rem] mb-2" />
          <div className='flex flex-col py-[1rem] -mt-[1rem] items-center bg-white rounded-b-[0.5rem]'>
            <h2 className="text-lg font-bold">{item.title}</h2>
            <p className="text-sm">{item.description}</p>
            
          </div>
        </div>
      ))}
      
    </div>
    <div className='w-[60rem] px-[2rem] pt-[3rem] flex justify-end '>
    <button className="text-white bg-[#0100BB] hover:text-white px-14 py-2 rounded-md text-sm text-lg font-medium">See Full Price List</button>
    </div>
   </div>
  </div>
  );
};

export default FigureCard;

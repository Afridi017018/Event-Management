import React from 'react';

const OrderCard = ({element}) => {
    return (
        <div className='my-10 px-20'>
            <div className='rounded-lg lg:flex gap-10 shadow-lg border'>
             <div>
             <img className=' h-56 w-full lg:w-96 flex-1 rounded-l-lg' src={element.image} alt="" />
             </div>
             <div className='flex-1 flex flex-col justify-center my-3 lg:my-0 px-3 lg:px-0'>
                <h2 className='text-2xl font-bold'>{element.name}</h2>
                <hr  className='w-2/3 my-3'/>
                <p className='text-gray-500'>{element.short_description}</p>
                <hr  className='w-2/3 my-3'/>
                <h4 className='text-gray-600 text-xl font-medium'>${element.price}</h4>
             </div>
            </div>
        </div>
    );
};

export default OrderCard;
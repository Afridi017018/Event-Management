import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from '../Card/Card';

const Cards = () => {
    const data = useLoaderData();
    
    return (
        <div>
            <div>
                <h2 className='text-4xl font-bold text-gray-700 mt-10 text-center'>Our Services</h2>
            </div>
            <div className='container lg:mx-auto my-10 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-14 justify-center items-center place-items-center'>
           
           {
            data.length > 0 &&
            data.map((element)=>(
                <div data-aos="zoom-in-up" key={element.id}>
                    <Card element={element} />
                </div>
            ))
           }
           
        </div>
        </div>
    );
};

export default Cards;
import React from 'react';
import Card from '../Card/Card';

const Cards = () => {
    return (
        <div>
            <div>
                <h2 className='text-4xl font-bold text-gray-700 mt-10 text-center'>Our Services</h2>
            </div>
            <div className='container lg:mx-auto my-10 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-14 justify-center items-center place-items-center'>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
        </div>
    );
};

export default Cards;
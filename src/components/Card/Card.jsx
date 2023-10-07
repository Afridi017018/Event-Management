import React from 'react';
import { useNavigate } from 'react-router-dom';

const Card = ({element}) => {

    const navigate = useNavigate();

    return (
        <div>
            <div className="card rounded-md card-compact w-80 lg:w-96 drop-shadow-2xl bg-base-100">
                <figure><img className='w-full h-72' src={element.image} alt="" /></figure>
                <div className="card-body">
                    <h2 className="text-2xl font-bold">{element.name}</h2>
                    <p className='text-gray-500'>{element.short_description}</p>
                    <hr className='w-2/3' />
                    <h5 className='text-lg font-medium text-gray-500'>${element.price}</h5>
                    <div className="card-actions justify-center">
                        <button onClick={()=> navigate(`/details/${element.id}`)} className="bg-blue-600 hover:bg-blue-900 text-white px-2 py-1 rounded font-medium">See Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
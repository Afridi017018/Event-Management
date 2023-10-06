import React from 'react';

const Card = () => {
    return (
        <div>
            <div className="card rounded-md card-compact w-80 lg:w-96 drop-shadow-2xl bg-base-100">
                <figure><img className='w-full h-72' src="https://img.freepik.com/free-vector/bride-groom-getting-married_23-2148403210.jpg?w=740&t=st=1696608677~exp=1696609277~hmac=a05de84efe0ec9dd1b5ab53557d14b5d8fba80a0419da62de39bbe6c56754b1a" alt="" /></figure>
                <div className="card-body">
                    <h2 className="text-2xl font-bold">Shoes!</h2>
                    <p className='text-gray-500'>Rekindle your love and cherish the years together with an anniversary celebration.</p>
                    <hr className='w-2/3' />
                    <h5 className='text-lg font-medium text-gray-500'>$80</h5>
                    <div className="card-actions justify-center">
                        <button className="bg-blue-600 hover:bg-blue-900 text-white px-2 py-1 rounded font-medium">See Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
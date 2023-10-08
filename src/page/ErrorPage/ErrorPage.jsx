import React from 'react';

const ErrorPage = () => {
    return (
        <div className='relative flex flex-col justify-center items-center h-screen'>
            <div>
                <img className='h-screen w-screen' src="https://cdn.dribbble.com/users/718859/screenshots/3267029/jisunpark_404-error.gif" alt="" />
            </div>
            <div className='absolute bottom-12'>
               <button className='text-lg font-bold bg-red-700 px-2 py-1 rounded-md text-white w-32'>Go Home</button>
            </div>
        </div>
    );
};

export default ErrorPage;
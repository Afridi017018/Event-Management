import React from 'react';

const ChooseUs = () => {
    return (
        <div className='bg-base-100 h-[500px] my-10'>
            <div className="flex flex-col lg:flex-row items-center">

                <div className='lg:w-1/2 text-center px-24'>
                   <h2 className='text-4xl font-bold mb-10'>Why Choose Us</h2>
                   <p className='text-gray-500'>we are your trusted partner in creating unforgettable events. With our innovative event management platform, you'll experience seamless planning, efficient coordination, and exceptional results. Our commitment to excellence, attention to detail, and dedication to your vision ensure that your social events shine with success, leaving lasting memories for you and your guests.</p>
                </div>

                <div className='lg:w-1/2'>
                    <img className='h-[500px] w-full' src="https://img.freepik.com/free-vector/colleagues-preparing-corporate-party-time-management-deadline-brand-event-event-brand-management-sponsored-event-organization-concept_335657-120.jpg?size=626&ext=jpg" alt="" />
                </div>


            </div>
        </div>
    );
};

export default ChooseUs;
import React from 'react';

const ChooseUs = () => {
    return (
        <div className='px-5 bg-base-100 lg:h-[500px] my-10 lg:shadow-[0_35px_80px_8px_rgba(0,0,0,0.1)]'>
            <div className="flex flex-col lg:flex-row items-center">

                <div data-aos="zoom-in-up" className='lg:w-1/2 text-center px-24'>
                   <h2 className='text-5xl font-bold mb-10 text-red-600'>Why Choose Us</h2>
                   <p className='text-gray-500'>we are your trusted partner in creating unforgettable events. With our innovative event management platform, you'll experience seamless planning, efficient coordination, and exceptional results. Our commitment to excellence, attention to detail, and dedication to your vision ensure that your social events shine with success, leaving lasting memories for you and your guests.</p>
                </div>

                <div className='lg:w-1/2'>
                    <img data-aos="zoom-in-up"  className='h-[500px] w-full' src="https://img.freepik.com/free-vector/colleagues-preparing-corporate-party-time-management-deadline-brand-event-event-brand-management-sponsored-event-organization-concept_335657-120.jpg?size=626&ext=jpg" alt="" />
                </div>


            </div>
        </div>
    );
};

export default ChooseUs;
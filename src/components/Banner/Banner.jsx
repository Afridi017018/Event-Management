import React from 'react';

const Banner = () => {
  return (
    <div>
      <div className="hero h-[558px]" style={{ backgroundImage: 'url(https://img.freepik.com/free-photo/decorative-heart_8353-44.jpg?w=740&t=st=1696799660~exp=1696800260~hmac=b6fa5cb382a6223c69247c01546b33a80efc578a77bca05c7ef05bed12d39181)' }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div data-aos="zoom-in" className="max-w-md opacity-100">
            <h1 className="mb-5 text-4xl font-bold">Your Event, Our Expertise</h1>
            <p className="mb-5">Simplify event planning and enhance social gatherings effortlessly with our comprehensive all-in-one event management platform, designed to streamline every aspect of your events</p>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
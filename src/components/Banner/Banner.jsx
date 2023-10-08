import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className="hero h-[558px]" style={{backgroundImage: 'url(https://img.freepik.com/free-vector/couple-romantic-dinner-outdoors-illustration_1262-16276.jpg?w=826&t=st=1696699124~exp=1696699724~hmac=47ba3c2b839d7e68e7cf3e0274ba63a079b80712271ef08adb6abc380c4242b0)'}}>
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
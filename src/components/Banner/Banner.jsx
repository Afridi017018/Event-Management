import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className="hero h-[558px]" style={{backgroundImage: 'url(https://img.freepik.com/free-photo/wedding-archway-backyard-happy-wedding-couple-outdoors-before-wedding-ceremony_8353-11057.jpg?w=740&t=st=1696607349~exp=1696607949~hmac=f83e1aa35cd1d70432c4626e1a0ca9262a742a6c7359908153cf09eb196e2f45)'}}>
  <div className="hero-overlay bg-opacity-70"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md opacity-100">
      <h1 className="mb-5 text-4xl font-bold">Your Event, Our Expertise</h1>
      <p className="mb-5">Simplify event planning and enhance social gatherings effortlessly with our comprehensive all-in-one event management platform, designed to streamline every aspect of your events</p>

    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;
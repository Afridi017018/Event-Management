import React from 'react';
import Banner from '../../components/Banner/Banner';
import Cards from '../../components/Cards/Cards';
import ChooseUs from '../../components/ChooseUs/ChooseUs';
import ContactUs from '../../components/ContactUs/ContactUs';


const Home = () => {
    return (
        <div>
          <Banner />
          <Cards />
          <ChooseUs />
          <ContactUs />
        </div>
    );
};

export default Home;
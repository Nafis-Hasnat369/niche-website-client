import React from 'react';
import Footer from '../../Footer/Footer';
import Products from '../../Shared/Products/Products';
import Banner from '../Banner/Banner';
import ExtraSection from '../ExtraSection/ExtraSection';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <Banner />
            <Products />
            <Reviews />
            <ExtraSection />
            <Footer />
        </div>
    );
};

export default Home;
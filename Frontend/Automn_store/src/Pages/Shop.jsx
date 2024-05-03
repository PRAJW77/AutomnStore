import React from 'react';
import Hero from '../component/Hero/Hero';
import Popular from '../component/Popular/Popular';
import Offers from '../component/Offers/Offers';
import NewCollection from '../component/NewCollections/NewCollection';
import NewsLetter from '../component/NewsLetter/NewsLetter';
const Shop = () => {
    return (
        <div>
            <Hero/>
            <Popular/>
            <Offers/>
            <NewCollection/>
            <NewsLetter/>
        </div>
    );
};

export default Shop;

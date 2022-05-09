import React, { useEffect} from 'react'

import HomeCarousel from '../../utils/HomeCarousel'
import Footer from '../../utils/Footer'

//Components
import Description from './Description';
import PartnersComponent from '../../utils/PartnersComponent';
import FeaturedProducts from './FeaturedProducts'
import PartnersSlider from '../../utils/PartnersSlider'

import Navbar from '../../navs/Navbar';
import HomeSlider from '../../utils/HomeSlider';

export default function HomePage(){
    return(
        <>
            <Navbar/>
            <HomeSlider/>
            <Description/>
            <FeaturedProducts/>
            <PartnersSlider/>
            <Footer/>
        </>
    );
}
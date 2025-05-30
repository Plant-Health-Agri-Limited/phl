import React from 'react'
import { 
    Box, 
    Grid, 
    Typography, 
    Container, 

 } from '@mui/material'

 import AboutDescription from './AboutDescription'
 import AboutDescriptionSmallScreens from './AboutDescriptionSmallScreens'
 import OurBrand from './OurBrand'
 import Footer from '../../utils/Footer'
 import Navbar from '../../navs/Navbar'

 const field = '/images/women_farming_garden.jpg'

 export default function AboutPage(){
     return(
         <>
            <Navbar/>
            <Box 
            sx={{ 
                border:'solid',
                borderWidth: 1,
                borderColor:'white',
                height: 350,
                backgroundImage: `url(${field})`,
                backgroundRepeat:'no-repeat',  
                backgroundSize: 'cover',
                backgroundPosition:{
                    lg:'0 0',
                    md:'0 0',
                    sm:'0 0',
                    xs:'-240px 0px'
                },
                textAlign: 'center'
            }}>
                <Typography
                component="div" 
                sx={{ paddingTop: 17}}>
                    <Box sx={{
                        color: 'white',
                        fontWeight:'bold',
                        fontSize: 48,
                        textAlign: 'center',
                        fontFamily:'Poppins Bold',
                    }}>
                        About us
                    </Box>
                </Typography>
            </Box>
            <AboutDescription/>
            <AboutDescriptionSmallScreens/>
            <OurBrand/>
            <Footer/>
         </>
     );
 }
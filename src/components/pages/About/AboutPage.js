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

 const field = '/images/lady_field.png'

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
                textAlign: 'center'
            }}>
                <Typography
                component="div" 
                sx={{ paddingTop: 12}}>
                    <Box 
                        sx={{
                            width:'100%',
                            color: 'white',
                            fontFamily:'Poppins Medium',
                            fontSize:20,
                            textAlign: 'center',
                            // borderBottom:'5px solid white'
                        }}>
                        PHL
                    </Box>
                    <Box sx={{
                        color: 'white',
                        fontWeight:'bold',
                        fontSize: 48,
                        textAlign: 'center',
                        fontFamily:'Poppins Bold',
                    }}>
                        About us
                    </Box>
                    <Box sx={{
                        color: 'white',
                        fontSize: 18,
                        textAlign: 'center',
                        fontFamily:'Poppins Regular',
                    }}>
                        Plant Health Agri Limited
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
import React, { useState } from 'react'
import { 
    Box, 
    Typography, 
 } from '@mui/material'

import Footer from '../../utils/Footer'

import ProductView from './ProductView'
import Navbar from '../../navs/Navbar'
const tact = '/images/field_tractor.png'

 export default function ProductsPage(){
     return(
         <>
             <Navbar/>
            <Box sx={{ 
                height: 350,
                backgroundImage: `url(${tact})`,
                backgroundRepeat:'no-repeat',  
                backgroundSize: 'cover',
                marginBottom: 5
                }}>
                    <Typography
                    component="div" 
                    sx={{ paddingTop: 17}}>
                        {/* <Box 
                            sx={{
                                width:'100%',
                                color: 'white',
                                fontFamily:'Poppins Medium',
                                fontSize:20,
                                textAlign: 'center',
                                // borderBottom:'5px solid white'
                            }}>
                            PHL
                        </Box> */}
                        <Box sx={{
                            color: 'white',
                            fontFamily:'Poppins Bold',
                            fontSize: 48,
                            textAlign: 'center',
                        }}>
                            Products
                        </Box>
                    </Typography>
            </Box>
            <Box sx={{ marginBottom: 10 }}>
                <ProductView/>
            </Box>
            <Footer/>
         </>
     );
 }
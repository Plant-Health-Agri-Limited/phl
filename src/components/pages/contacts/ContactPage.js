import React from 'react'
import { 
    Box, 
    Grid, 
    Typography, 
    Container
 } from '@mui/material'
 import Footer from '../../utils/Footer'

 import Navbar from '../../navs/Navbar';
 import EmailForm from './EmailForm';
 import Location from './Location'
 import ContactDetails from './ContactDetails'



 const us = '/images/spraying_tractor.png'

 function ConctactAndLocation(){
    return(
         <>
            <Box sx={{ 
                marginBottom: 3,
                display: 'flex',
                justifyContent: 'center',
                paddingTop: 10
            }}>
                <Typography component="div">
                    <Box 
                        sx={{
                            textAlign:'center',
                            fontSize: 24,
                            fontFamily:'Poppins Medium',
                            // color:'#DD9933',
                        }}>
                            Contacts and Location
                    </Box>
                </Typography>
            </Box>
            <Grid container sx={{ padding: 1,  }}>
                <Grid item lg={6} md={6} sm={12} xs={12}>
                    <EmailForm/>
                </Grid>
                <Grid item lg={6} md={6} sm={12} xs={12}>
                    <Location/>
                </Grid>
            </Grid>
     </>
     );
 }

 


 export default function ContactPage(){
     return(
         <>
            <Navbar/>
            <Box sx={{ 
                height: 350,
                backgroundImage: `url(${us})`,
                backgroundRepeat:'no-repeat',  
                backgroundSize: 'cover'
                }}>
                <Typography component="div" sx={{ paddingTop: 12}}>
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
                        fontFamily:'Poppins Bold',
                        fontSize: 48,
                        textAlign: 'center',
                    }}>
                        Contact us
                    </Box>
                    <Box sx={{
                        color: 'white',
                        fontWeight:'bold',
                        fontSize: 20,
                        textAlign: 'center',
                    }}>
                        Plant Health Agri Limited
                    </Box>
                </Typography>
            </Box>
            <Container>
                <ConctactAndLocation/>
                <ContactDetails/>
            </Container>
            <Footer/>
         </>
     );
 }
import React from 'react'
import { 
    Box, 
    Grid, 
    Typography, 
    Container
 } from '@mui/material'
 import Footer from '../../utils/Footer'
 
//  import { Map, GoogleApiWrapper } from 'google-maps-react';
 import SendButton from '../../utils/SendButton';

 import SendIcon from '@mui/icons-material/Send';
 import LocationOnIcon from '@mui/icons-material/LocationOn';
 import MailIcon from '@mui/icons-material/Mail';
 import Navbar from '../../navs/Navbar';
 
 const mail = '/images/mail.png'
 const mobile = '/images/mobile-phone.png'
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
                    <Box
                    sx={{
                        display:'flex',
                    }}>
                        <MailIcon
                        sx={{
                            marginRight:1
                        }}/>
                        <Typography 
                        component="div"
                        sx={{
                            marginBottom:2,
                            fontSize:18
                        }}>
                            Get in touch with us
                        </Typography>
                    </Box>
                    <Box 
                    sx={{ 
                        position:'relatve',
                        width: {
                            lg:400,
                            md:400,
                            sm:'100%',
                            xs:'100%'
                        },
                        marginBottom:{
                            lg:0,
                            md:0,
                            sm:5,
                            xs:3
                        }
                    }}>
                        <Box sx={{width:'100%', marginBottom:1}}>
                            <label className="label-form">Email</label>
                            <input  
                                className="input" 
                                type="text" 
                                placeholder="Enter valid e-mail" />
                        </Box>
                        <Box sx={{width:'100%', marginBottom:1}}>
                            <label className="label-form">Subject</label>
                            <input
                                className="input" 
                                type="text" 
                                placeholder="Enter subject" />
                        </Box>
                        <Box sx={{width:'100%', marginBottom:1}}>
                            <label className="label-form">Message</label>
                            <textarea 
                                className="input" 
                                style={{ 
                                        borderRadius: 5, 
                                        width: '100%', 
                                        height:200,
                                        // backgroundColor: 'rgba(220, 220, 220, 0.4)' 
                                    }}  
                                name="description"
                                placeholder="Enter your message">
                            </textarea>
                        </Box>
                        <Box
                        sx={{ 
                            width:'100%',
                            border:'0px solid red',
                            display:'flex',
                            justifyContent:'flex-start'
                        }}>
                            <SendButton startIcon={<SendIcon />}>
                                SEND EMAIL
                            </SendButton>
                        </Box>
                    </Box>
                </Grid>
                <Grid item lg={6} md={6} sm={12} xs={12}>
                    <Box
                    sx={{
                        width:'100%',
                        display:'flex',
                    }}>
                        <LocationOnIcon
                        sx={{
                            marginRight:1
                        }}/>
                        <Typography 
                        component="div"
                        sx={{
                            marginBottom:2,
                            fontSize:18
                        }}>
                            Location
                        </Typography>
                    </Box>
                    <div className="google-map-code">
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7692.87528313256!2d28.26304630694516!3d-15.406913040759664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf45a4bd9695d8d79!2zMTXCsDI0JzI2LjgiUyAyOMKwMTUnNTguMyJF!5e0!3m2!1sen!2szm!4v1643701862555!5m2!1sen!2szm" 
                        style={{ width:'100%', height:450 }} allowfullscreen="" loading="lazy"></iframe>
                    </div>
                    {/* <img style={{ width:'100%'}} src={steward}/> */}
                </Grid>
            </Grid>
     </>
     );
 }

 
 function ContactDetails(){
    return(
        <Box sx={{ width: '100%' }}>
            <Box
            sx={{
                display:'flex',
                justifyContent:'center',
                // backgroundColor:'#F5F8F2',
                paddingTop:3,
                paddingBottom:8
            }}>
                
                <Grid container >
                    <Grid item xs={12} md={6} 
                        sx={{
                            border:'0px solid #dbdbdb',
                            display:'flex',
                            // justifyContent:'center',
                            marginBottom:{
                                lg: 0,
                                md: 0,
                                sm: 5,
                                xs: 5
                            }}}>
                        <Box 
                            sx={{ 
                                maxWidth:'100%',
                            }}>
                            <Box
                                sx={{
                                    width:'100%', 
                                    display:'flex',
                                    marginBottom:2
                                }}>
                                <Box 
                                    sx={{ 
                                            width:'60px', 
                                            height:'60px', 
                                            display:'flex',
                                            justifyContent:'center',
                                            marginBottom:1,
                                            marginRight:3,
                                            borderRadius:'50px',
                                            padding:1,
                                            backgroundColor:'#4B9359'
                                        }}>
                                    <img style={{ width:'40px', height:'40px',  }} src={mail}/>
                                </Box>
                                <Typography component="div">
                                    <Box
                                        sx={{
                                            textAlign: 'start',
                                            fontFamily:"Poppins Regular",
                                            fontSize:16
                                        }} >
                                        planthealth.ltd@gmail.com
                                    </Box>
                                    <Box
                                        sx={{
                                            textAlign: 'start',
                                            fontFamily:"Poppins Regular",
                                            fontSize:16
                                        }} >
                                        info@planthealthagri.com
                                    </Box>
                                </Typography>
                            </Box>        
                        </Box>
                    </Grid>

                    <Grid item xs={12} md={6} 
                        sx={{
                            border:'0px solid #dbdbdb',
                            display:'flex',
                            // justifyContent:'center',
                            marginBottom:{
                                lg: 0,
                                md: 0,
                                sm: 5,
                                xs: 5
                            }}}>
                        <Box 
                            sx={{ maxWidth:'100%', }}>
                            <Box
                                sx={{
                                    width:'100%', 
                                    display:'flex',
                                    marginBottom:1,
                                    
                                }}>
                                <Box 
                                    sx={{ 
                                        width:'60px', 
                                        height:'60px', 
                                        display:'flex',
                                        justifyContent:'center',
                                        marginBottom:1,
                                        marginRight:3,
                                        borderRadius:'50px',
                                        padding:1,
                                        backgroundColor:'#4B9359'
                                    }}>
                                    <img style={{ width:'40px', height:'40px' }} src={mobile}/>
                                </Box>
                                <Typography component="div">
                                    <Box
                                        sx={{
                                            textAlign: 'start',
                                            fontFamily:"Poppins Regular",
                                            fontSize:16
                                        }}>
                                        +260 977505031<br/>
                                    </Box>
                                </Typography>
                            </Box>        
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box>
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
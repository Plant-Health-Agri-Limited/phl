import React from 'react'
import { Box, Grid, Typography, Container } from '@mui/material'
import MailIcon from '@mui/icons-material/Mail';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import Image from 'next/image';
import { useRouter } from 'next/router'
import routes from '../../constants/routes';
import SocialButtons from './SocialButtons';
const logo = '/images/phl_logo_bw.png'

const grid_style = {
    marginBottom:5,
}
export default function Footer(){
    const router = useRouter()
    return(
        <Box className="background-footer">
            <Container
            sx={{
                // backgroundImage: `url(${logo})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: '200px'
            }}>
                <Grid container >
                    <Grid item xs={12}>
                        <SocialButtons/>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} lg={3} sx={grid_style}>
                       <Typography 
                       component="div"
                       sx={{
                            fontFamily:"Poppins Regular"
                       }}>
                            <Box
                            sx={{
                                fontSize:14,
                                marginBottom:1.5,
                                textTransform:'uppercase',
                                fontFamily:"Poppins Bold"
                            }}>
                               Contact Us
                            </Box>
                            <Box
                            sx={{
                                display:'flex',
                                marginBottom:1
                            }}>
                                <MailIcon 
                                fontSize="small"
                                sx={{
                                    marginRight:1
                                }}/>
                                <Box
                                sx={{ fontSize:14 }}>
                                    planthealth.ltd@gmail.com
                                </Box>
                            </Box>
                            <Box
                            sx={{
                                display:'flex',
                                marginBottom:1
                            }}>
                                <MailIcon 
                                fontSize="small"
                                sx={{
                                    marginRight:1
                                }}/>
                                <Box
                                sx={{ fontSize:14 }}>
                                    info@planthealthagri.com
                                </Box>
                            </Box>
                            <Box
                            sx={{
                                display:'flex'
                            }}>
                                <LocalPhoneIcon 
                                fontSize="small"
                                sx={{
                                    marginRight:1
                                }}/>
                                <Box
                                sx={{ fontSize:14 }}>
                                    +26 0977 505 031
                                </Box>
                            </Box>
                           
                       </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} lg={3} sx={grid_style}>
                        <Typography 
                        component="div"
                        sx={{
                            fontFamily:"Poppins Regular"
                        }}>
                            <Box
                           sx={{
                                fontSize:14,
                                marginBottom:1,
                                textTransform:'uppercase',
                                fontFamily:"Poppins Bold"
                           }}>
                               Our Partners
                           </Box>
                            <Box>
                                <button
                                className="partner-button"
                                type="button"
                                onClick={
                                    ()=>{
                                        window.open("https://www.corteva.com/");
                                    }
                                }>
                                    www.corteva.com
                                </button>
                            </Box>
                            <Box>
                                <button
                                className="partner-button"
                                type="button"
                                onClick={
                                    ()=>{
                                        window.open("https://tradecorp.com.es/en/");
                                    }
                                }>
                                    tradecorp.com.es
                                </button>
                            </Box>
                            <Box>
                                <button
                                className="partner-button"
                                type="button"
                                onClick={
                                    ()=>{
                                        window.open("https://agriculture.basf.com/global/en.html");
                                    }
                                }>
                                    agriculture.basf.com
                                </button>
                            </Box>
                       </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} lg={3} sx={grid_style}>
                        <Typography 
                        component="div"
                        sx={{
                            fontFamily:"Poppins Regular"
                        }}>
                            <Box
                           sx={{
                                fontSize:14,
                                marginBottom:1,
                                textTransform:'uppercase',
                                fontFamily:"Poppins Bold"
                           }}>
                               The Company
                           </Box>
                           <Box>
                                <button
                                className="partner-button"
                                type="button"
                                onClick={
                                    ()=>{
                                        router.push(routes.home)
                                    }
                                }>
                                    Home
                                </button>
                            </Box>
                            <Box>
                                <button
                                className="partner-button"
                                type="button"
                                onClick={
                                    ()=>{
                                        router.push(routes.about)
                                    }
                                }>
                                    About
                                </button>
                            </Box>
                            <Box>
                                <button
                                className="partner-button"
                                type="button"
                                onClick={
                                    ()=>{
                                        router.push(routes.products)
                                    }
                                }>
                                    Products
                                </button>
                            </Box>
                       </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} lg={3} sx={grid_style} >
                        <Image
                            src={logo}
                            width={"140"}
                            height={"50"}
                            objectFit="contain"
                            alt=''
                        />
                    </Grid>
                    <Grid item xs={12}  sx={grid_style} >
                       <Typography 
                       component="div"
                       sx={{
                           fontSize:14
                       }}>
                            @2018 planthealthagri.com
                       </Typography>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

import React from 'react';
import Slider from "react-slick";

import { 
    Box, 
    Typography,
    Container,
    Button 
 } from '@mui/material'



import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import CustomButton from './CustomButton';

import { useRouter } from 'next/router'
import routes from '../../constants/routes';
const corteva = '/images/corteva.jpg'
const tradecorp_logo = '/images/tradecorp_logo_2.png';
const basf_logo = '/images/basf_logo.png'

const settings = {
    autoplay:true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow/>,
    prevArrow: <PrevArrow/>,
    arrows:true
  };

export default function HomeSlider()  {
    const router = useRouter()
    
    return (
            <Box
            sx={{ 
                paddingBottom:1,
            }}>
                <Slider
                className="slider"
                {...settings}>
                    <Box 
                    sx={{  
                        position:'relative',
                        width:'100%',
                        height:460,
                        overflow:'hidden'
                    }}>
                        <Box className="backgroud-1"></Box>
                            <Typography 
                            component="div"
                            sx={{ 
                                paddingTop:{
                                    lg: 18,
                                    md: 15,
                                    sm: 15,
                                    xs: 10
                                }
                            }}>
                                <Box sx={{
                                    width:'100%'
                                }}>
                                    {/* <Box sx={{
                                            width:'100%',
                                            color: 'white',
                                            fontFamily:'Poppins Medium',
                                            fontSize:20,
                                            textAlign: 'center',
                                            // borderBottom:'5px solid white'
                                        }}>
                                        PHL
                                    </Box> */}
                                </Box>
                                <Box sx={{
                                        width:'100%',
                                        color: 'white',
                                        fontFamily:'Poppins Bold',
                                        fontSize: {
                                            lg:56,
                                            md:48,
                                            sm:42,
                                            xs:28
                                        },
                                        padding:1,
                                        textAlign: 'center',
                                        wordWrap:'break-word'
                                    }}>
                                    Leaders in Agrotechinnovations
                                </Box>
                                
                                <Box sx={{
                                            color: 'white',
                                            fontWeight:'bold',
                                            fontSize: {
                                                lg:18,
                                                md:18,
                                                sm:18,
                                                xs:16
                                            },
                                            textAlign: 'center',
                                            wordWrap:'break-word',
                                            fontFamily:'Poppins Medium',
                                            marginBottom:3
                                        }}>
                                        A company from your soil <br/>
                                    </Box>
                                <Box
                                sx={{
                                    display:'flex',
                                    justifyContent:'cenTer',
                                    width:'100%'
                                }}>
                                    <CustomButton
                                    onClick={()=>{
                                        router.push(routes.products)
                                    }}>
                                        see our prodructs
                                    </CustomButton>
                                </Box>
                                
                            </Typography>
                    </Box>
                    <Box 
                    sx={{ 
                        position:'relative',
                        width:'100%',
                        height:460,
                        overflow:'hidden'
                    }}>
                        <Box className="backgroud-2"></Box>
                            <Typography 
                            component="div"
                                sx={{ 
                                    paddingTop:{
                                        lg: 18,
                                        md: 15,
                                        sm: 15,
                                        xs: 10
                                    }
                                }}>
                                    <Box sx={{
                                        width:'100%'
                                    }}>
                                    {/* <Box sx={{
                                            width:'100%',
                                            color: 'white',
                                            fontFamily:'Poppins Medium',
                                            fontSize:20,
                                            textAlign: 'center',
                                            // borderBottom:'5px solid white'
                                        }}>
                                        PHL
                                    </Box> */}
                                </Box>
                                    
                                <Box 
                                    sx={{
                                        width:'100%',
                                        color: 'white',
                                        fontFamily:'Poppins Bold',
                                        fontWeight: 900,
                                        fontSize: {
                                            lg:56,
                                            md:48,
                                            sm:42,
                                            xs:28
                                        },
                                        padding:1,
                                        textAlign: 'center',
                                        wordWrap:'break-word'
                                    }}>
                                    Leaders in Agrotechinnovations
                                </Box>
                                    
                                <Box 
                                    sx={{
                                        color: 'white',
                                        fontWeight:'bold',
                                        fontSize: {
                                            lg:22,
                                            md:22,
                                            sm:18,
                                            xs:18
                                        },
                                        textAlign: 'center',
                                        wordWrap:'break-word',
                                        fontFamily:'Poppins Regular',
                                        marginBottom:2
                                    }}>
                                    A company from your soil <br/>
                                </Box>
                                <Box
                                sx={{
                                    width:'100%',
                                    display:'flex',
                                    justifyContent:'center'
                                }}>
                                    <CustomButton
                                    onClick={()=>{
                                        router.push(routes.about)
                                    }}>
                                        find out more...
                                    </CustomButton>
                                </Box>
                            </Typography>
                    </Box>
                </Slider>
            </Box>
    );
}

function PrevArrow(props:any) {
    const { className, style, onClick } = props;
    return (
        <Box
            sx={{
                position:'absolute',
                left:10,
                top:'40%',
                width:'50px',
                height:'50px',
                borderRadius:50,
                backgroundColor:{
                    lg:'#ee7623',
                    md:'#ee7623',
                    sm:'#ee7623',
                    xs:'none'
                },
                boxShadow:'1px 1px 15px 1px rgba(0,0,0,0.2)',
                zIndex:1,
            }}
            onClick={onClick}>
                <KeyboardArrowLeftIcon
                sx={[
                    {
                        position:'absolute',
                        left:'25%',
                        top:'25%',
                        color:'white'
                    },
                ]}/>
        </Box>
    );
  }

  function NextArrow(props:any) {
    const { className, style, onClick } = props;
    return (
        <Box
            sx={{
                position:'absolute',
                right:10,
                top:'40%',
                width:'50px',
                height:'50px',
                borderRadius:50,
                backgroundColor:{
                    lg:'#ee7623',
                    md:'#ee7623',
                    sm:'#ee7623',
                    xs:'none'
                },
                boxShadow:'1px 1px 15px 1px rgba(0,0,0,0.2)',
                zIndex:1,
            }}
            onClick={onClick}>
                <KeyboardArrowRightIcon
                sx={[
                    {
                        position:'absolute',
                        left:'25%',
                        top:'25%',
                        color:'white'
                    },
                ]}/>
        </Box>
    );
  }

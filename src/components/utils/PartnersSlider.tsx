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

import PartnersCard from './PartnerCard';

const corteva = '/images/corteva.jpg'
const tradecorp_logo = '/images/tradecorp_logo_2.png';
const basf_logo = '/images/basf_logo.png'

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow/>,
    prevArrow: <PrevArrow/>,
    arrows:true,
    autoplay:true
  };

export default function PartnersSlider()  {

    
    return (
        <Box>
            <Typography component="div">
                <Box 
                sx={{ 
                    fontSize: 24,
                    textAlign: 'center',
                    color:'#DD9933',
                    fontFamily:"Poppins Bold, Arial",
                    marginBottom:2
                }}> Our Partners</Box>
            </Typography>
            <Box
            sx={{ 
                paddingBottom:10,
            }}>
                <Slider
                className="slider"
                {...settings}>
                    <PartnersCard
                        url="https://www.corteva.com/"
                        image={corteva}
                        description=" Protecting and preserving the source of our food and helping our agricultural communities thrive..."

                    />
                    <PartnersCard
                        url="https://tradecorp.com.es/en/"
                        image={tradecorp_logo}
                        description=" Tradecorp are experts in micronutrients and speciality fertilisers. Founded in 1985 in Spain..."

                    />
                     <PartnersCard
                        url="https://agriculture.basf.com/global/en.html"
                        image={basf_logo}
                        description=" We create chemistry for a sustainable future..."

                    />
                </Slider>
            </Box>
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
                backgroundColor:'white',
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
                        color:'black'
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
                backgroundColor:'white',
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
                        color:'black'
                    },
                ]}/>
        </Box>
    );
  }

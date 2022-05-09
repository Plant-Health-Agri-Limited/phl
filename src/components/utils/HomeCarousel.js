import { Box, Container, Typography, Button } from '@mui/material'

import Fade from 'react-reveal/Fade';
import makeCarousel from 'react-reveal/makeCarousel';

import Slide from 'react-reveal/Slide';
import styled, { css } from 'styled-components';
import LeftArrow, { LeftArrowStyle } from './Arrows/LeftArrow';
import RightArrow from './Arrows/RightArrow';
import CustomButton from './CustomButton';


const width = '300px', height='150px';

const CarouselContainer = styled.div`
    border: 0px solid red;
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 460px;
`;

const Dot = styled.span`
  font-size: 1.5em;
  cursor: pointer;
  text-shadow: 1px 1px 1px #fff;
  user-select: none;
`;

const Dots = styled.span`
  text-align: center;
  width: ${width};
  z-index: 300;
`;

const CarouselUI = ({ position, total, handleClick, children   }) => {
    return(
        <CarouselContainer>
            {children}
            <LeftArrow 
            position={position} clickFunc={handleClick}/>
            <RightArrow 
            position={position} clickFunc={handleClick}/>
        </CarouselContainer>
    );
};
const Carousel = makeCarousel(CarouselUI);


export default function HomeCarousel(props){
   return(
       
    <Carousel defaultWait={10000}>
        <Slide right duration={3000}>
            <Box className="backgroud-1"></Box>
                <Typography 
                component="div"
                sx={{ 
                    paddingTop:{
                        lg: 18,
                        md: 15,
                        sm: 15,
                        xs: 5
                    }
                }}>
                    <Box sx={{
                        width:'100%'
                    }}>
                        <Box sx={{
                                width:'100%',
                                color: 'white',
                                fontFamily:'Poppins Medium',
                                fontSize:20,
                                textAlign: 'center',
                                // borderBottom:'5px solid white'
                            }}>
                            PHL
                        </Box>
                    </Box>
                    <Fade bottom delay={2000}>
                        <Box sx={{
                                width:'100%',
                                color: 'white',
                                fontFamily:'Poppins Bold',
                                fontSize: {
                                    lg:56,
                                    md:48,
                                    sm:42,
                                    xs:40
                                },
                                padding:1,
                                textAlign: 'center',
                                wordWrap:'break-word'
                            }}>
                            Leaders in Agrotechinnovations
                        </Box>
                    </Fade>
                    
                    <Fade bottom delay={2500}>
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
                    </Fade>
                    <Fade bottom delay={3000}>
                        <Box
                        sx={{
                            display:'flex',
                            justifyContent:'cenTer',
                            width:'100%'
                        }}>
                            <CustomButton>
                                see our prodructs
                            </CustomButton>
                        </Box>
                    </Fade>
                    
                </Typography>
        </Slide>
        <Slide right duration={3000}>
            <Box className="backgroud-2"></Box>
                <Typography 
                component="div"
                    sx={{ 
                        paddingTop:{
                            lg: 18,
                            md: 15,
                            sm: 15,
                            xs: 5
                        }
                    }}>
                        <Box sx={{
                            width:'100%'
                        }}>
                        <Box sx={{
                                width:'100%',
                                color: 'white',
                                fontFamily:'Poppins Medium',
                                fontSize:20,
                                textAlign: 'center',
                                // borderBottom:'5px solid white'
                            }}>
                            PHL
                        </Box>
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
                                xs:40
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
                        <CustomButton>
                            find out more...
                        </CustomButton>
                    </Box>
                </Typography>
        </Slide>
    </Carousel>
   );
}


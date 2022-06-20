import React from 'react'
import { 
    Box, 
    Grid, 
    Typography, 
    Container, 

 } from '@mui/material'

import Avatar from '@mui/material/Avatar';
import SectionDescription from './SectionDescription'
import { useRouter } from 'next/router'
import routes from '../../../constants/routes'

const farmer = '/images/steward_image.jpg'
const sure_start_image = '/images/sure_start_image.jpeg'

const WideRangeProductSection = () =>{
    const router = useRouter()
    return(
        <Grid container sx={{marginBottom:5}}>
            <Grid item xs={12}>
                <Box
                    sx={{
                        width:'100%',
                        padding:1,
                        marginBottom:2
                    }}>
                    <Typography
                    component="div"
                        sx={{
                            width:'100%',
                            marginBottom:5,
                            paddingTop:7
                        }}>

                        <Box
                            sx={{
                                fontWeight:200,
                                fontSize: 20,
                                textAlign: 'start',
                                color:'#DD9933',
                                marginBottom: 1,
                                fontFamily:'Poppins Medium',
                            }}>
                            Wide Product Range
                        </Box>
                        
                        <Box
                            sx={{
                                fontWeight: 500,
                                fontSize: 16,
                                padding:0,
                                // textAlign: 'justify',
                            }}>
                            Our portfolio is unique as we endeavor to source from the best suppliers. These includes multination like BASF and Corteva. We are the sole distributor of the Tradecorp, the experts in micronutrients and speciality fertilisers. We source our nanotechnology environmentally friendly pesticides from South America. We have a complete range of pesticides including herbicides, insecticides and fungicides. We also have adjuvants and fertilisers. We have more than 50 registered pesticides.  We supply sweet beans seeds to our small holder farmers and provide a readily available market for their produce.
                            
                        </Box>
                    </Typography>
                    <button
                        className='contact-button' 
                        onClick={()=>{
                            router.push(routes.products)
                        }}
                        type="button">
                            Read More
                    </button>
                </Box>
            </Grid>
            <Grid item xs={12}>
                <Box
                    sx={{
                        width:'100%',
                        display:'flex',
                        justifyContent:'center',
                        padding:1,
                        
                    }}>
                        <Avatar
                            sx={{ 
                                position:'relative',
                                width:{
                                    lg:400,
                                    md:400,
                                    sm:400,
                                    xs:300
                                }, 
                                height:{
                                    lg:400,
                                    md:400,
                                    sm:400,
                                    xs:300
                                },
                            }} 
                            variant="rounded"
                            alt="Steward Image" 
                            src={sure_start_image} />
                    </Box>
            </Grid>
        </Grid>  
    );
}

const CorporateSection = () => {
    return(
        <Grid container>       
            <Grid item xs={12}>
                <Box
                    sx={{
                        width:'100%',
                        padding:1,
                        marginBottom:2
                    }}>
                    <Typography
                    component="div"
                        sx={{
                            width:'100%',
                            marginBottom:5
                        }}>

                        <Box
                            sx={{
                                fontSize: 20,
                                textAlign: 'start',
                                marginBottom: 1,
                                fontFamily:'Poppins Medium',
                                color:'#DD9933',
                            }}>
                            The Best in PLant Health
                        </Box>
                        
                        <Box
                            sx={{
                                fontWeight: 500,
                                fontSize: 16,
                                textAlign: 'start',
                                fontFamily:'Poppins Regular',
                            }}>
                            Our product range has expanded and we are positioning ourselves as a leading distributor of crop protection solution by acquiring distribution rights from major global company which includes Corteva, Tradecorp, Interagro UK and Bancella among others.
                        </Box>
                    </Typography>
                </Box>
            </Grid>
            <Grid item xs={12}>
                <Box
                    sx={{
                        width:'100%',
                        display:'flex',
                        justifyContent:'center',
                        
                    }}>
                        <Avatar
                            sx={{ 
                                position:'relative',
                                width:{
                                    lg:400,
                                    md:400,
                                    sm:400,
                                    xs:300
                                }, 
                                height:{
                                    lg:400,
                                    md:400,
                                    sm:400,
                                    xs:300
                                },
                            }} 
                            variant="rounded"
                            alt="Steward Image" 
                            src={farmer} />
                    </Box>
            </Grid>
        </Grid>  
    );
}

function AboutDescriptionSmallScreens(){
    
    return(
        <Container 
        sx={{
            display:{
                lg:'none',
                md:'none',
                sm:'block',
                xs:'block'
            },
            backgroundColor: 'white',
            marginTop: 10,
            marginBottom: 15,
        }}>
           <SectionDescription/> 
           <WideRangeProductSection/>
           <CorporateSection/>
        </Container>
    );
}

export default AboutDescriptionSmallScreens
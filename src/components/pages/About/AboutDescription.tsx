import React from 'react'
import { 
    Box, 
    Grid, 
    Typography, 
    Container, 
} from '@mui/material'
import SectionDescription from './SectionDescription'
import Avatar from '@mui/material/Avatar';
import Link from 'next/link';
import routes from '../../../constants/routes'
import { useRouter } from 'next/router'


const farmer = '/images/steward_image.png'
const sure_start_image = '/images/sure_start_image.jpeg'


const ProductRangeStatement = ()=>{
    const router = useRouter()
    return(
        <Grid container sx={{marginBottom:10}}>
            <Grid item xs={12} md={6}>
                <Box
                    sx={{
                        width:'100%',
                        // paddingLeft:5,
                        borderRadius:2,
                        height:400,
                        display:'flex',
                        alignItems:'center'
                    }}>
                    <Box>
                        <Typography
                        component="div"
                            sx={{
                                width:'100%',
                                marginBottom:3
                            }}>

                            <Box
                                sx={{
                                    fontSize: 24,
                                    textAlign: 'start',
                                    color:'#DD9933',
                                    marginBottom:1,
                                    fontFamily:'Poppins Bold',
                                }}>
                                Wide Product Range
                            </Box>
                            
                            <Box
                                sx={{
                                    fontWeight: 500,
                                    fontSize: 16,
                                    padding:0,
                                    textAlign: 'justify',
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
                            Learn More
                        </button>
                    </Box>
                </Box>
            </Grid>
            <Grid item xs={12} md={6}>
                <Box
                sx={{
                    width:'100%',
                    display:'flex',
                    justifyContent:'center',
                    paddingLeft:7
                }}>
                    <Avatar
                        variant="rounded"
                        sx={{ width:'400px', height:'400px'}} 
                        alt="Steward Image" 
                        src={sure_start_image} />
                </Box>   
            </Grid>
        </Grid>
    );
}

const CorporateStatement = ()=>{
    return(
        <Grid container>
            <Grid item xs={12} md={6}>
                <Box
                    sx={{
                        width:'100%',
                        display:'flex',
                        justifyContent:'center',
                        
                    }}>
                        <Avatar
                            variant="rounded"
                            sx={{ width:'400px', height:'400px'}} 
                            alt="Steward Image" 
                            src={farmer} />
                    </Box>
            </Grid>
            <Grid item xs={12} md={6}>
                <Box
                    sx={{
                        width:'100%',
                        // paddingLeft:5,
                        borderRadius:2,
                        height:400,
                        display:'flex',
                        alignItems:'center'
                    }}>
                    <Box>
                        <Typography
                        component="div"
                            sx={{
                                width:'100%',
                                marginBottom:5
                            }}>

                            <Box
                                sx={{
                                    fontSize: 24,
                                    textAlign: 'start',
                                    marginBottom: 1,
                                    fontFamily:'Poppins Bold',
                                    color:'#DD9933',
                                }}>
                                Corporate Statement
                            </Box>
                            
                            <Box
                                sx={{
                                    fontSize: 16,
                                    textAlign: 'justify',
                                }}>
                                    Plant Health Agri Limited must benefit society, not just our interest. We believe that the Almighty God has deliberately partnered with us to make resources available for the furtherance of the gospel in accordance to Mark 13:10.<br/><br/>

                                    Looking into the future, we will go beyond crop protection, to protect the users of our products and the environment, addressing the issues of inadequate of health food.<br/><br/>

                                    We will endeavor, to create a work environment where our employees can hope for tomorrow. We shall seek to build trust and bring joy to people we across paths with. A company beyond our life time. A company beyond crop protection.
                            </Box>
                        </Typography>
                        {/* <button
                        className='contact-button' 
                        type="button">
                            Learn More
                        </button> */}
                    </Box>
                    
                </Box>
            </Grid>
            
        </Grid>
    );
}


function AboutDescription(){
    const router = useRouter()
    return(
        <Container 
        sx={{
            display:{
                lg:'block',
                md:'block',
                sm:'none',
                xs:'none'
            }, 
            backgroundColor: 'white',
            marginBottom: 15,
            marginTop: 10
        }}>     
            <Box
            sx={{
                marginBottom: 15,
            }}>
                <SectionDescription/>
            </Box>
            <Box
            sx={{
                marginBottom: 15,
            }}>
                <ProductRangeStatement/>
            </Box>
            <CorporateStatement/>
        </Container>
    );
}

export default AboutDescription

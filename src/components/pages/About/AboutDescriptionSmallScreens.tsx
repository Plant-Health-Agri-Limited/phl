import React from 'react'
import { 
    Box, 
    Grid, 
    Typography, 
    Container, 

 } from '@mui/material'

 import Avatar from '@mui/material/Avatar';
 const farmer = '/images/test-min.png'
 const steward = '/images/steward.png'

function AboutDescriptionSmallScreens(){
    return(
        <Container 
        sx={{
            marginBottom: 15,
            display:{
                lg:'none',
                md:'none',
                sm:'block',
                xs:'block'
            }
        }}>
           <Box sx={{        
                   backgroundColor: 'white',
                   marginBottom: 5,
                   paddingTop: 10
               }}>
                   <Typography
                       component="div">
                       <Box
                           sx={{
                               fontSize: 24,
                               textAlign: 'center',
                               color:'#DD9933',
                               marginBottom: 1,
                               fontFamily:'Poppins Medium',
                           }}>
                           OUR BRAND
                       </Box>
                       <Box
                           sx={{
                               fontSize: 20,
                               textAlign: 'center',
                               color:'black',
                               marginBottom: 4,
                               fontFamily:'Poppins Medium Italic',
                               fontStyle:'italic'
                           }}>
                           Who we are and What we do
                       </Box>
               </Typography>
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
                                       fontSize: 18,
                                       textAlign: 'start',
                                       color:'black',
                                       marginBottom: 1,
                                       fontFamily:'Poppins Medium',
                                   }}>
                                   Wide Product Range
                               </Box>
                               
                               <Box
                                   sx={{
                                       fontWeight: 500,
                                       fontSize: 18,
                                       textAlign: 'start',
                                       padding:0
                                   }}>
                                   We continually seeking cost-effective crop protection solution to help the farmer to produce high quality and high yielding crops. 
                                   
                               </Box>
                           </Typography>
                           <button
                           className='contact-button' 
                           type="button">
                               Learn More
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
                                   alt="Steward Image" 
                                   src={farmer} />
                           </Box>
                   </Grid>
               </Grid>  
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
                                       fontSize: 24,
                                       textAlign: 'start',
                                       color:'black',
                                       marginBottom: 1,
                                       fontFamily:'Poppins Medium',
                                   }}>
                                   The Best in PLant Health
                               </Box>
                               
                               <Box
                                   sx={{
                                       fontWeight: 500,
                                       fontSize: 18,
                                       textAlign: 'start',
                                       padding:0
                                   }}>
                                   <br/>Our product range has expanded and we are positioning ourselves as a leading distributor of crop protection solution by acquiring distribution rights from major global company which includes Corteva, Tradecorp, Interagro UK and Bancella among others.
                               </Box>
                           </Typography>
                           <button
                           className='contact-button' 
                           type="button">
                               Learn More
                           </button>
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
                                   alt="Steward Image" 
                                   src={steward} />
                           </Box>
                   </Grid>
               </Grid>  
           </Box>  
        </Container>
    );
}

export default AboutDescriptionSmallScreens
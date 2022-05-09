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

 

function AboutDescription(){
    return(
        <Container 
        sx={{
            marginBottom: 15,
            display:{
                lg:'block',
                md:'block',
                sm:'none',
                xs:'none'
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
                               fontWeight:200,
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
                               fontSize: 18,
                               textAlign: 'center',
                               color:'black',
                               marginBottom: 4,
                               fontFamily:'Poppins Medium Italic',
                               fontStyle:'italic'
                           }}
                       >
                           Who we are and What we do
                       </Box>
               </Typography>
               <Grid container sx={{marginBottom:5}}>
                   <Grid item xs={12} md={6}>
                       <Box
                           sx={{
                               width:'100%',
                               paddingLeft:5
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
                                       fontSize: 24,
                                       textAlign: 'start',
                                       color:'black',
                                       marginBottom:1,
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
                   <Grid item xs={12} md={6}>
                       <Box
                           sx={{
                               width:'100%',
                               display:'flex',
                               justifyContent:'center',
                               paddingLeft:7
                           }}>
                               <Avatar
                                   sx={{ width:'400px', height:'400px'}} 
                                   alt="Steward Image" 
                                   src={farmer} />
                           </Box>
                   </Grid>
               </Grid>  
               <Grid container>
                   <Grid item xs={12} md={6}>
                       <Box
                           sx={{
                               width:'100%',
                               display:'flex',
                               justifyContent:'center',
                               
                           }}>
                               <Avatar
                                   sx={{ width:'400px', height:'400px'}} 
                                   alt="Steward Image" 
                                   src={steward} />
                           </Box>
                   </Grid>
                   <Grid item xs={12} md={6}>
                       <Box
                           sx={{
                               width:'100%',
                               paddingLeft:7
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
                                       marginBottom: 1,
                                       fontFamily:'Poppins Medium',
                                   }}>
                                   The Best in PLant Health
                               </Box>
                               
                               <Box
                                   sx={{
                                       fontSize: 18,
                                       textAlign: 'start',
                                   }}>
                                    Our product range has expanded and we are positioning ourselves as a leading distributor of crop protection solution by acquiring distribution rights from major global company which includes Corteva, Tradecorp, Interagro UK and Bancella among others.
                               </Box>
                           </Typography>
                           <button
                           className='contact-button' 
                           type="button">
                               Learn More
                           </button>
                       </Box>
                   </Grid>
                   
               </Grid>  
           </Box>  
        </Container>
    );
}

export default AboutDescription

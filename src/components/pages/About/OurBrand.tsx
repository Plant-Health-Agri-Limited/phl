import React from 'react'
import { 
    Box, 
    Grid, 
    Typography, 
    Container, 

 } from '@mui/material'

 
 import Avatar from '@mui/material/Avatar';

 const leaf ='/images/leaf.png'

const center_grid_content={
    display:'flex',
    justifyContent:'center'
}
function OurBrand(){
    return(
       <Box sx={{
           width:'100%',
           backgroundColor:'#f9f9fa',
           display: 'flex',
           justifyContent: 'center'
       }}>
           <Box 
               sx={{
                   paddingTop:3,
                   paddingBottom:1,
                   paddingLeft:1,
                   paddingRight:1,
                   maxWidth:'1200px'
               }}>
           <Typography
               component="div"
               sx={{
                   marginBottom:5
               }}>
               <Box
                   sx={{
                       fontSize: 24,
                       textAlign: 'center',
                       color:'#DD9933',
                       fontFamily:'Poppins Bold',
                   }}>
                   OUR BRAND
               </Box>
               <Box
                   sx={{
                        fontSize: 18,
                        textAlign: 'center',
                        color:'black',
                        fontFamily:'Poppins Medium',
                   }}>
                   What We Believe In
               </Box>
           </Typography>
           <Grid container sx={{ marginTop: 0, marginBottom: 10 }}>
               <Grid item lg={6} md={6} sm={12} xs={12} sx={center_grid_content}>
                   <Box sx={{
                       display: 'flex',
                       justifyContent: 'center',
                       marginBottom:5
                   }}> 
                       <Typography
                       component="div"
                       sx={{ 
                           width:{
                               lg:500,
                               md:500,
                               sm:500,
                               xs:'100%'
                           }
                       }}>
                           <Box 
                               sx={{
                                   display: 'flex',
                                   justifyContent: 'center'
                               }}>
                               <Avatar
                                   alt=""
                                   src={leaf}
                                   sx={{
                                       width:"60px",
                                       height:"60px"
                                   }}
                               />
                           </Box>
                           <Box
                               sx={{
                                    fontFamily:'Poppins Medium',
                                   fontSize: 20,
                                   textAlign: 'center',
                               }}>
                                   Our Company
                           </Box>
                           <Box
                               sx={{
                                   fontSize: 16,
                                   textAlign: 'center',
                               }}
                           >
                                   Wholly locally owned with strong African roots, we pride ourselves to be strategically located in Zambia, in the centre of Southern, Eastern and Central Africa. 
                           </Box>
                       </Typography>
                   </Box>
               </Grid>
               <Grid item lg={6} md={6} sm={12} xs={12} sx={center_grid_content}>
                   <Box sx={{
                           display: 'flex',
                           justifyContent: 'center',
                           marginBottom:5
                       }}>
                           <Typography
                           component="div"
                           sx={{ 
                                width:{
                                    lg:500,
                                    md:500,
                                    sm:500,
                                    xs:'100%'
                                }
                           }}>
                               <Box 
                                   sx={{
                                       display: 'flex',
                                       justifyContent: 'center'
                                   }}>
                                   <Avatar
                                       alt=""
                                       src={leaf}
                                       sx={{
                                           width:"60px",
                                           height:"60px"
                                       }}
                                   />
                               </Box>
                               <Box
                                   sx={{
                                        fontFamily:'Poppins Medium',
                                        fontSize: 20,
                                        textAlign: 'center',
                                   }}
                               >
                                       Environment & Sustainability
                               </Box>
                               <Box
                                   sx={{
                                       fontSize: 16,
                                       textAlign: 'center',
                                   }}
                               >
                                       Organisations across the board are becoming increasingly focused on achieving and demonstrating sound environmental performance. 

                                        Plant Health Agri Ltd adheres to environmental responsibility of restoring farmland back to the original healthy condition, to eliminate pollution, renovate environment, back to nature and ensure human&apos;s health.
                               </Box>
                           </Typography>
                       </Box>
               
                   </Grid>
                   <Grid item lg={6} md={6} sm={12} xs={12} sx={center_grid_content}>
                       <Box sx={{
                           display: 'flex',
                           justifyContent: 'center',
                           marginBottom:5
                       }}>
                           <Typography
                           component="div"
                           sx={{ 
                                width:{
                                    lg:500,
                                    md:500,
                                    sm:500,
                                    xs:'100%'
                                }
                           }}>
                               <Box 
                                   sx={{
                                       display: 'flex',
                                       justifyContent: 'center'
                                   }}>
                                   <Avatar
                                       alt=""
                                       src={leaf}
                                       sx={{
                                           width:"60px",
                                           height:"60px"
                                       }}
                                   />
                               </Box>
                               <Box
                                   sx={{
                                        fontFamily:'Poppins Medium',
                                        fontSize: 20,
                                        textAlign: 'center',
                                   }}
                               >
                                       Safety
                               </Box>
                               <Box
                                   sx={{
                                       fontSize: 16,
                                       textAlign: 'center',
                                   }}
                               >
                                      Whenever pesticides are transported, stored, mixed, loaded or applied, several things need to be kept in mind. Keep unauthorized people away, especially children, when handling pesticides. Be safety conscious, and always read pesticide labels.
                               </Box>
                           </Typography>
                       </Box>
                   </Grid>
                   <Grid item lg={6} md={6} sm={12} xs={12} sx={center_grid_content}>
                           <Box sx={{
                               display: 'flex',
                               justifyContent: 'center',
                               marginBottom:5
                           }}>
                               <Typography
                               component="div"
                               sx={{ 
                                    width:{
                                        lg:500,
                                        md:500,
                                        sm:500,
                                        xs:'100%'
                                    }
                               }}>
                                   <Box 
                                       sx={{
                                           display: 'flex',
                                           justifyContent: 'center'
                                       }}>
                                       <Avatar
                                           alt=""
                                           src={leaf}
                                           sx={{
                                               width:"60px",
                                               height:"60px"
                                           }}
                                       />
                                   </Box>
                                   <Box
                                       sx={{
                                            fontFamily:'Poppins Medium',
                                            fontSize: 20,
                                            textAlign: 'center',
                                       }}
                                   >
                                           Strategy
                                   </Box>
                                   <Box
                                       sx={{
                                           fontSize: 16,
                                           textAlign: 'center',
                                       }}
                                   >
                                           With a notable national footprint and local presence where farmers need us, Plant Health Agri Ltd has extensive industry knowledge and expertise across crops and regions. With outlets in strategic farming block we are a call away from the farmer
                                   </Box>
                               </Typography>
                           </Box>

                       </Grid>
           </Grid>
       </Box>
       </Box>
    );
}

export default OurBrand
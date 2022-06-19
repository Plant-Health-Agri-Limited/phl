import React from 'react'
import { 
    Box, 
    Grid, 
    Typography, 
    Container, 

 } from '@mui/material'

 
 import Avatar from '@mui/material/Avatar';

 const leaf ='/images/leaf.png'

const font_size='16px'

function OurVision(){
    return(
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom:5
        }}> 
            <CustomTypography>
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
                        Our Visions
                </Box>
                <Box
                    sx={{
                        fontSize: font_size,
                        textAlign: 'justify',
                    }}>
                     To become a leading supplier of crop protection products in the region and help farmers to utilize and maximise resource efficiency, eliminate or minimize product hazards to create durable solutions for farmers.
                </Box>
            </CustomTypography>
        </Box>
    )
}


function EnvironmentAndSus(){
    return(
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom:5
        }}>
            <CustomTypography>
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
                        fontSize: font_size,
                        textAlign: 'justify',
                    }}
                >
                     We work with small holder and commercial farmers to conserve the environment and protect lives. We focus on strengthening and feeding the crops, making the crops able to defend and fight for themselves. <br/><br/>With our nanotechnology, farmers are applying 35% to 50% less pesticides to their farm land. With our suspension technology, farmers are applying less quantities of fertilisers per hectar but achieving even better results.<br/><br/>  We train small holder farmers in Good Agriculture Practices (GAP), safe use of pesticides and other sustainable farming methods like intergrated paste management and organic farming.
                </Box>
            </CustomTypography>
        </Box>
    )
}

function OurValues(){
    return(
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom:5
        }}>
            <CustomTypography>
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
                        Our Values
                </Box>
                <Box
                    sx={{
                        fontSize: font_size,
                        textAlign: 'justify',
                    }}
                >
                    We put our farmers at the center of what we do.
                    <br/>We value, challenge and reward excellence in our team. 
                    <br/>We care for our environment. 
                    <br/>We drive sustainable financial performance.
                </Box>
            </CustomTypography>
        </Box>
    );
}

function Strategy(){
    return(
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom:5
        }}>
            <CustomTypography>
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
                        fontSize: font_size,
                        textAlign: 'justify',
                    }}>
                        With a notable national footprint and local presence where farmers need us, Plant Health Agri Ltd has extensive industry knowledge and expertise across crops and regions. With stockists in strategic farming blocks, we are a call away from the farmer
                </Box>
            </CustomTypography>
        </Box>
    )
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
           <Grid container spacing={3} sx={{ marginTop: 0, marginBottom: 10 }}>
                <CustomGrid>
                    <OurVision/>
                </CustomGrid>
                <CustomGrid>
                    <OurValues/>
                </CustomGrid>
                <CustomGrid>
                    <EnvironmentAndSus/>
                </CustomGrid>
                <CustomGrid>
                    <Strategy/>
                </CustomGrid>
                
           </Grid>
       </Box>
       </Box>
    );
}

const CustomGrid = ({children}:any)=>{
    return(
        <Grid item lg={6} md={6} sm={6} xs={12} >
            <Box
            sx={{
                width:'100%',
                paddingLeft:1,
                paddingRight:1
            }}>
                {children}
            </Box>
        </Grid>
    );
}

const CustomTypography = ({children}:any)=>{
    return(
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
            {children}
        </Typography>
    );
}

export default OurBrand
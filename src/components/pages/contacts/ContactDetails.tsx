
import { 
    Box, 
    Grid, 
    Typography, 
    Container
 } from '@mui/material'

import Image from 'next/image';

const mail = '/images/email.png'
const mobile = '/images/phone-call.png'

export default function ContactDetails(){
    return(
        <Box sx={{ width: '100%' }}>
            <Box
            sx={{
                display:'flex',
                justifyContent:'center',
                // backgroundColor:'#F5F8F2',
                paddingTop:3,
                paddingBottom:8
            }}>
                
                <Grid container >
                    <Grid item xs={12} md={6} 
                        sx={{
                            border:'0px solid #dbdbdb',
                            display:'flex',
                            // justifyContent:'center',
                            marginBottom:{
                                lg: 0,
                                md: 0,
                                sm: 3,
                                xs: 3
                            }}}>
                        <Box 
                            sx={{ 
                                maxWidth:'100%',
                            }}>
                            <Box
                                sx={{
                                    width:'100%', 
                                    display:'block',
                                    marginBottom:2
                                }}>
                                <Box 
                                    sx={{ 
                                            display:'flex',
                                            marginRight:2,
                                        }}>
                                    <Image 
                                        width={30} 
                                        height={30} 
                                        src={mail} 
                                        objectFit="contain" 
                                        alt=""/>
                                </Box>
                                <Typography component="div">
                                    <Box
                                        sx={{
                                            textAlign: 'start',
                                            fontFamily:"Arial",
                                            fontSize:16
                                        }} >
                                        planthealth.ltd@gmail.com
                                    </Box>
                                    <Box
                                        sx={{
                                            textAlign: 'start',
                                            fontFamily:"Arial",
                                            fontSize:16
                                        }} >
                                        info@planthealthagri.com
                                    </Box>
                                </Typography>
                            </Box>        
                        </Box>
                    </Grid>

                    <Grid item xs={12} md={6} 
                        sx={{
                            border:'0px solid #dbdbdb',
                            display:'flex',
                            // justifyContent:'center',
                            marginBottom:{
                                lg: 0,
                                md: 0,
                                sm: 5,
                                xs: 5
                            }}}>
                        <Box 
                            sx={{ maxWidth:'100%', }}>
                            <Box
                                sx={{
                                    width:'100%', 
                                    // display:'flex',
                                    marginBottom:1,
                                    
                                }}>
                                <Box 
                                    sx={{ 
                                        display:'block',
                                        justifyContent:'center',
                                        marginRight:2,
                                    }}>
                                    <Image 
                                        width={30} 
                                        height={30} 
                                        src={mobile} 
                                        objectFit="contain" 
                                        alt="phone icon"/>
                                </Box>
                                <Typography 
                                component="div"
                                sx={{
                                    display:'flex',
                                    alignItems:'center'
                                }}>
                                    <Box
                                        sx={{
                                            textAlign: 'start',
                                            fontFamily:"Arial",
                                            fontSize:16
                                        }}>
                                        +260 977505031<br/>
                                    </Box>
                                </Typography>
                            </Box>        
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
}
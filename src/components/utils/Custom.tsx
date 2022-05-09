import Ract from 'react'
import { 
    Box, 
    Grid, 
    Typography, 
    Container, 
    Button,
    Card,
    CardMedia,
    CardContent,
    CardActions

 } from '@mui/material'
 import test from '../assets/images/test.png'

export default function Custom(){
    return(
        <Box sx={{ 
            opacity: '1',
            border:'solid',
            borderWidth: 1,
            borderColor:'white',
            height: 500,
            boxShadow:'0 4px 8px 0 rgba(0, 0, 0, 0.2)',
            backgroundImage: `url(${test})`,
            backgroundRepeat:'no-repeat',  
            backgroundSize: 'cover',
            textAlign: 'center'
        }}>
            <Grid container sx={{ marginTop: 25, marginBottom: 10 }}>
                <Grid item xs={12} sx={{  marginBottom: 1 }}>
                   <Typography>
                       <Box
                           sx={{
                               fontWeight:'bold',
                               fontSize: 32,
                               textAlign: 'center',
                               color:'white'
                           }}
                       >
                            Plant Health Agri Limited
                       </Box>
                      
                   </Typography>
                </Grid>
                <Grid item xs={12} >
                       <Box
                           sx={{
                               display:'flex',
                               justifyContent:'center'
                           }}
                       >
                           <button
                               style={{
                                   backgroundColor: '#fc8f00',
                                   width: 200,
                                   height: 50,
                                   textTransform:'none',
                                   border:'solid',
                                   borderColor: '#fc8f00',
                                   borderWidth: 1,
                                   borderRadius:5,
                                   color: 'white',
                                   fontSize: 18,
                                   paddingLeft: 3,
                                   paddingRight: 3
                               }}
                           >Get in touch</button>
                       </Box>
                </Grid>
           </Grid>
        </Box>
    );
}

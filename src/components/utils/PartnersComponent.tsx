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

 import { useHistory } from 'react-router-dom'
 import CardView from './CardView';

 //images
import corteva from '../assets/images/corteva.jpg'
import Slider from "react-slick"
import centron from '../assets/images/centron.jpg'
import final_k from '../assets/images/final_k.jpg'
import gramini_elite from '../../assets/images/gramini_elite.jpg'
import wakanda from '../assets/images/wakanda.jpeg'
import tradecorp_logo from '../assets/images/tradecorp_logo_2.png'
import basf_logo from '../assets/images/basf_logo.png'
import zoran from '../assets/images/zoran_elite.jpeg'

const wd="300px"
const dc={
    border: 'none', 
    borderWidth:1, 
    width: '300px', 
    // boxShadow:'0px 3px 15px 1px rgba(0,0,0,0.18)',
    padding:1,
    borderRadius:2
}

const centerContent={
    display:'flex', 
    justifyContent: 'center',
}
function PartnersComponent(){
     return(
         <Container sx={{backgroundColor: '', marginBottom: 10, marginTop: 10}}>
             <Grid container>
                 <Grid item xs={12} >
                     <Typography>
                         <Box 
                            sx={{ 
                                fontSize: 28,
                                textAlign: 'center',
                                color:'#DD9933',
                                fontFamily:"Poppins Bold, Arial"

                            }}> Partners</Box>
                     </Typography>
                 </Grid>
                 <Grid item xs={12} md={4} lg={4} sx={centerContent}>
                    <Box sx={[
                        dc,
                        {
                            '&:hover':{
                                cursor: 'pointer'
                            }
                        }
                        ]}
                            onClick={
                                ()=>{
                                    window.open("https://www.corteva.com/");
                                }
                            }
                        >
                        <img 
                            style={{ 
                                height:200,
                                objectFit:'contain'
                            }} alt="corteva" src={corteva}/>
                    </Box>
                 </Grid>
                 <Grid item xs={12} md={4} lg={4} sx={centerContent}>
                    <Box sx={[
                       dc,
                        {
                            '&:hover':{
                                cursor: 'pointer'
                            }
                        }
                        ]}
                        onClick={
                            ()=>{
                                window.open("https://tradecorp.com.es/en/");
                            }
                        }
                        >
                        <img 
                            style={{ 
                                height:200,
                                objectFit:'contain'
                            }} alt="corteva" src={tradecorp_logo}/>
                    </Box>
                 </Grid>
                 <Grid item xs={12} md={4} lg={4} sx={centerContent}>
                    <Box sx={[
                        dc,
                        {
                            '&:hover':{
                                cursor: 'pointer'
                            }
                        }
                        ]}
                        onClick={
                            ()=>{
                                window.open("https://agriculture.basf.com/global/en.html");
                            }
                        }
                        >
                        <img 
                            style={{ 
                                height:200,
                                objectFit:'contain'
                            }} alt="corteva" src={basf_logo}/>
                    </Box>
                 </Grid>
             </Grid>
         </Container>
     );
 }

 export default PartnersComponent
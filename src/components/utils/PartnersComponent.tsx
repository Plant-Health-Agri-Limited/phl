import { 
    Box, 
    Grid, 
    Typography, 
    Container, 

 } from '@mui/material'


 //images
import Image from 'next/image';
const corteva = '/images/corteva.jpg'
const tradecorp_logo = '/images/tradecorp_logo_2.png'
const basf_logo = '/images/basf_logo.png'

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
                        <Image 
                            width={200}
                            height={200}
                            objectFit='contain' 
                            alt="corteva" src={corteva}/>
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
                        <Image
                        width={200}
                        height={200}
                        objectFit='contain'  
                        alt="corteva" src={tradecorp_logo}/>
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
                        <Image
                            width={200}
                            height={200}
                            objectFit='contain'  
                            alt="corteva" src={basf_logo}/>
                    </Box>
                 </Grid>
             </Grid>
         </Container>
     );
 }

 export default PartnersComponent
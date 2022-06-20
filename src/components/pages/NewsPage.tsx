import Ract from 'react'

import { 
    Box, 
    Grid, 
    Typography, 
    Container, 

 } from '@mui/material';


 import Footer from '../utils/Footer'
 import NewsItem from '../utils/NewsItem'
 import PartnersSlider from '../utils/PartnersSlider';
 import Navbar from '../navs/Navbar';
 const news_image = '/images/us_min.jpg'
 
 function NewsItems(){
     return(
         <Container>
             <Grid container>
                 <Grid item xs={12} sm={12} md={12}>
                    <Typography component="div" sx={{ width:'100%' }}>
                        <Box
                            sx={{
                                fontWeight:'bold',
                                marginBottom: 1,
                                fontSize: 26,
                                marginLeft:4.5
                            }}>
                                Latest News
                        </Box>

                    </Typography>
                 </Grid>
                 <Grid item xs={12} sm={12} md={6}>
                    <NewsItem
                        header="Corteva Agriscience Launches Solutions to Improve Wheat Productivity in South Africa"
                        text="Corteva Agriscience announced today that it is launching two new post emergence wheat herbicides, Quelex™ 200 WG and Tarzec™ 320 WG, that will help wheat farmers effectively manage broadleaf weeds and grasses. The herbicides will be available to wheat farmers in South Africa for winter 2020.The two new herbicides contain a leading active ingredient, Arylex™ active, a new solution to control broadleaf weeds and grasses. The company launched the products through online presentations to farmers and the market."
                    />
                 </Grid>
                 <Grid item xs={12} sm={12} md={6}>
                    <NewsItem
                        header="Plant Health Agri Ltd Introduces Corteva Fungicide; Acanto Plus "
                        text="Acanto Plus is a systemic, wide-acting, preventative, curative, and eradicating product with shock action on pathogens. This fungicide provides good preventive protection against diseases for new growth and redistribution in the vapor phase. Protects the part of the leaf that has not been sprayed by building a uniform protection zone around the treated plant. Ensures a uniform distribution to the leaf surface (sucking effect) and reactivation of the product through dew or rain."
                    />
                 </Grid>
                 <Grid item xs={12} sm={12} md={6}>
                    <NewsItem
                        header="Innovative Adjuvants Introduced In Zambia"
                        text="Plant Health agri ltd has introduced a new technology of adjuvants through its cooperating partners Interagro, UK’s leading adjuvant supplier and with a strong presence in Europe."
                    />
                 </Grid>
             </Grid>
         </Container>
     );
 }

 export default function NewsPage(){
     return(
         <>
            <Navbar/>
            <Box sx={{ 
                marginBottom:10,
                height: 350,
                backgroundImage: `url(${news_image})`,
                backgroundRepeat:'no-repeat',  
                backgroundSize: 'cover'
                }}>
                <Typography component="div" sx={{ paddingTop: 15}}>
                    
                    <Box sx={{
                        color: 'white',
                        fontFamily:'Poppins Bold',
                        fontSize: {
                            lg: 48,
                            md: 32,
                            sm: 32,
                            xs: 24

                        },
                        textAlign: 'center',
                    }}>
                        News, Announcements and Partners
                    </Box>
                    <Box sx={{
                        color: 'white',
                        fontWeight:'bold',
                        fontSize: 20,
                        textAlign: 'center',
                    }}>
                        Leaders in Agro Tech innovations
                    </Box>
                </Typography>
            </Box>
            <NewsItems/>
            <PartnersSlider/>
            <Footer/>
         </>
     );
 }
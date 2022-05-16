import React, { useEffect} from 'react'
import { 
    Box, 
    Grid, 
    Typography, 
    Container, 

 } from '@mui/material'

const centron = '/images/centron.png'
const final_k = '/images/final_k.png'
const wakanda = '/images/wakanda.jpeg'
const zoran = '/images/zoran_elite.jpeg'

import CardView from '../../utils/CardView';

const boxStyle={
    width: '100%', 
    display: 'flex',
    justifyContent: 'center', 
    border: 'none'
}

const centerCard={
    // border:'1px solid red',
    display:'flex',
    justifyContent:'center',
    padding:1
}
function FeaturedProducts(){
    
  
    return(
        <Box 
            sx={{
                backgroundColor:'#f9f9fa',
                paddingTop:2,
                paddingBottom:5,
                paddingLeft:1,
                paddingRight:1,
                marginBottom: 10,
            }}>
            <Container>
            <Box
            sx={{
                marginBottom:4
            }}>
                <Typography component="div">
                    <Box 
                        sx={{
                            textAlign:'center',
                            fontSize: 24,
                            color:'#DD9933',
                            fontFamily:"Poppins Bold, Arial",
                            marginBottom:2
                        }}>
                            Featured Products
                    </Box>
                    <Box 
                        sx={{
                            textAlign:'center',
                            fontSize: 22,
                            fontFamily:"Poppins Medium, Arial"
                        }}>
                            We have what you need.
                    </Box>
                    <Box 
                        sx={{
                            textAlign:'center',
                            fontSize: 16,
                            fontFamily:"Poppins Regular, Arial"
                        }}>
                            We continually seek cost-effective crop protection solutions to help farmers produce high quality and high yielding crops.
                    </Box>
                        
                </Typography>
            </Box>
            <Grid container>
                <Grid item lg={3} md={3} sm={6} xs={12} sx={centerCard}>
                    <CardView image={zoran} categoryname="Herbicide Elite" productname="Zoran Elite"/>
                </Grid>
                <Grid item lg={3} md={3} sm={6} xs={12} sx={centerCard}>
                    <CardView image={centron} categoryname="Insecticide" productname="Centron"/>
                </Grid>

                <Grid item lg={3} md={3} sm={6} xs={12} sx={centerCard}>
                    <CardView image={final_k} categoryname="Fertiliser" productname="Final K"/>
                </Grid>

                <Grid item lg={3} md={3} sm={6} xs={12}  sx={centerCard}>
                    <CardView image={wakanda} categoryname="Herbicide Elite" productname="Wakanda Elite"/>
                </Grid>
            </Grid>
                
        </Container>
        </Box>
    );
}

export default FeaturedProducts
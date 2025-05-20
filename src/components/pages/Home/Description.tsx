import React, { useEffect} from 'react'
import { 
    Box, 
    Grid, 
    Typography, 
    Button,

 } from '@mui/material'
 
import { useRouter } from 'next/router';
import routes from '../../../constants/routes';

import CustomButton from '../../utils/CustomButton';

const DescriptionText = ({children}:any)=>{
    return(
        <Typography component="div" 
        sx={{ 
            marginBottom: {
                lg:0,
                md:0,
                sm:0,
                xs:2
            },
            fontSize: {
                lg:18,
                md:18,
                sm:18,
                xs:16
            },
            textAlign:{
                lg:'center',
                md:'center',
                sm:'center',
                xs:'start'
            },
            fontFamily:"Poppins Regular, Arial" 
        }}>
            {children}
        </Typography>
    );
}

function Description(){
    const router = useRouter()
    return(
        <Box sx={{ 
                marginBottom: 10, 
                backgroundColor: 'white',
                display: 'flex',
                justifyContent: 'center',
                marginTop: {
                    md: 15,
                    sm: 10,
                    xs: 10
                }
            }}>
            
            <Grid container 
            sx={{
                width: '90%',
                // border:{
                //     lg:'1px solid #d9d9d9',
                //     md:'1px solid #d9d9d9',
                //     sm:'1px solid #d9d9d9',
                //     xs:'0px solid #d9d9d9'
                // },
                padding:{
                    lg:3,
                    md:3,
                    sm:2,
                    xs:1
                },
                borderRadius:5 
            }}>
                <Grid item xs={12} >
                    <Typography 
                    component="div"
                        sx={{
                            fontSize: {
                                lg:28,
                                md:28,
                                sm:28,
                                xs:24
                            },
                            marginBottom: 1,
                            textAlign:{
                                lg:'center',
                                md:'center',
                                sm:'center',
                                xs:'start'
                            },
                            fontFamily:"Poppins Medium, Arial"
                        }} >
                        Plant Health Agri Limited
                    </Typography>
                    <DescriptionText>
                        Plant Health Agri Ltd is a wholly owned Zambian Company that is specialised in agrucultural inputs distribution.
                    </DescriptionText>
                    <DescriptionText>
                        We work with both small scale and commecial farmers customising crop protection and crop nutrition solutions.
                    </DescriptionText>
                    <DescriptionText>
                        We pride ourselves as leaders in bio&ndash;nutrition and bio&ndash;pesticides in central and southern Africa.
                    </DescriptionText>
                    <DescriptionText>
                        We help farmers reduce environmental impact and improve efficiency on fertilisers and perticides.
                    </DescriptionText>
                    <Box 
                        sx={{ 
                            display:'flex', 
                            justifyContent:{
                                lg:'center',
                                md:'center',
                                sm:'center',
                                xs:'center'
                            },
                            marginTop:2 
                        }}>
                        <CustomButton
                        onClick={()=>{
                            router.push(routes.about)
                        }}>
                            more...
                        </CustomButton>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Description
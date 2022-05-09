import React, { useEffect} from 'react'
import { 
    Box, 
    Grid, 
    Typography, 
    Button,

 } from '@mui/material'
import Image from 'next/image';

import { useRouter } from 'next/router';
import routes from '../../../constants/routes';

import CustomButton from '../../utils/CustomButton';

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
                width: '80%',
                border:'1px solid #d9d9d9',
                padding:3,
                borderRadius:5 
            }}>
                <Grid item xs={12} >
                    <Typography component="div" sx={{ marginBottom: 2 }}>
                        <Box
                            sx={{
                                fontSize: 28,
                                marginBottom: 2,
                                textAlign:'center',
                                fontFamily:"Poppins Regular, Arial"
                            }}
                        >
                            Plant Health Agri Limited
                        </Box>
                        <Box
                            sx={{
                                fontSize: 18,
                                textAlign:'center',
                            }}>
                            Plant Health Agri Ltd is a wholly owned Zambian Company that is specialised in phytosanitary distribution. <br/>
                            We work with both small scale and commecial farmers customising crop protection solutions. <br/>We pride ourselves as leaders in nanopesticides in central and southern Africa.<br/>
                            We help farmers reduce environmental impact and improve efficiency on fertilisers and perticides.
                            
                        </Box>
                    </Typography>
                    <Box sx={{ display:'flex', justifyContent:'center' }}>
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
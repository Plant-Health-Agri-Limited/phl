import React from 'react';

import { 
    Box, 
    Grid, 
    Typography, 
    InputLabel,
    MenuItem,
    FormControl,
    Select,
    Divider
} from '@mui/material'

import Image from 'next/image';

const bgcolor = '#F9F9F9'
const bg2= "#F9F9F9"

export default function ProductDescription(props:any){
    return(
        <Typography 
        component="div"
        sx={{ 
            // border:'1px solid #e8e8e8',
            borderRadius:3,
            padding:3,
            marginBottom:3,
            backgroundColor:bg2
        }} >
        <Box 
        sx={{ 
            width:'100%',
            display:'flex',
            marginBottom:2
        }}>
            <Box
            sx={{
                marginRight:2
            }}>
                <Image
                width={80}
                height={80}
                alt=""
                src={props.image}/>
            </Box>
            <Box>
                <Box
                    sx={{
                        fontSize:16,
                        fontFamily:'Arial',
                        paddingTop:0.5,
                        color:'#c53739'
                    }}>
                        { props.productCategory }
                </Box>
                <Box
                sx={{
                    fontSize:34,
                    fontWeight:900,
                    fontFamily:'Arial'
                }}>
                    { props.name }
                </Box>
            </Box>
            
        </Box>
        <Box 
        sx={{ 
            width:1,
            fontSize:16,
        }}>
            { props.children }
        </Box>
    </Typography>
    );
}
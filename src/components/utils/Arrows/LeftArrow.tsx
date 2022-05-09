import React from 'react';

import { 
    Box, 
    Grid, 
    Typography, 
    Container, 
    Button,
    Card,
    CardMedia,
    CardContent,
    CardActions,
    Divider
} from '@mui/material'

import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
export default function LeftArrow(props:any){
    
    return(
        <Box
        style={{
            position:'absolute',
            left:10,
            top:'40%',
            width:'50px',
            height:'50px',
            borderRadius:50,
            backgroundColor:'orange',
            zIndex:5,
        }}
        onClick={props.clickFunc} data-position={props.position - 1}
        >
            <Box
            sx={{
                position:'relative',
                width:'100%',
                height:'100%'
            }}>
                <KeyboardArrowLeftIcon
                sx={[
                    {
                        position:'absolute',
                        left:'25%',
                        top:'25%',
                        color:'white'
                    },
                ]}/>
            </Box>
        </Box>
    );
}
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
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
export default function RightArrow(props:any){
    
    return(
        <Box
        style={{
            position:'absolute',
            right:10,
            top:'40%',
            width:'50px',
            height:'50px',
            borderRadius:50,
            backgroundColor:'orange',
            zIndex:5,
        }}
        onClick={props.clickFunc} data-position={props.position + 1}
        >
            <Box
            sx={{
                position:'relative',
                width:'100%',
                height:'100%'
            }}>
                <KeyboardArrowRightIcon
                sx={[
                    {
                        position:'absolute',
                        right:'25%',
                        top:'25%',
                        color:'white'
                    },
                ]}/>
            </Box>
        </Box>
    );
}

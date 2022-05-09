import React from 'react';
import { Box } from '@mui/material'

export default function Wrapper(props:any){
    return(
        <Box
        sx={{

        }}>
            {props.children}
        </Box>
    );
}
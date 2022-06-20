import React from 'react';
import { Box } from "@mui/material";

const link_wrapper_css={
    width:90,
    display:{
        md: 'block',
        sm: 'none',
        xs: 'none'
    },
}

export default function LinkWrapper({children}:any){
    return(
        <Box sx={link_wrapper_css} >
            {children}
        </Box>
    );
}
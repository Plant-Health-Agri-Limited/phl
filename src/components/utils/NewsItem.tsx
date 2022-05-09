import React from 'react';
import { 
    Box, 
    AppBar, 
    Toolbar, 
    Button,
    Typography,
    Card 
} from '@mui/material'

export default function NewsItem(props:any){
    return(
        <Box sx={{
            marginBottom: 5,
            display:'flex',
            justifyContent:'center',
        }}>
       
            <Box sx={{
                    paddingTop: 3,
                    width: 500,
                    objectFit:'contain',
                    borderTop: 'solid',
                    borderWidth: 1
                }}>
                <Typography component="div">
                    <Box
                        sx={{
                            fontWeight:'bold',
                            fontSize: 24
                        }}>
                        {props.header}
                        
                    </Box>

                </Typography>
                <Typography component="div">
                    <Box
                        sx={{
                            fontWeight:'bold',
                            fontSize: 24
                        }}>
                        {/* News Heading */}
                    </Box>
                    <Box>
                    {props.text}
                    
                    </Box>
                </Typography>
                <button
                    style={{marginTop:10}}
                    className='read-more-button' 
                    type="button">
                    Read More
                </button>
            </Box>
        </Box>
    )
}
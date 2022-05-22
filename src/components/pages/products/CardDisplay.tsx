import React, { useState } from 'react'
import { 
    Box, 
    Typography, 
    Card,
    CardContent,
 } from '@mui/material'

 import DetailsDisplay from './DetailsDisplay'
 import Image from 'next/image'
 import MoreDetailsButton from '../../utils/MoreDetailsButton'

 export default function CardDisplay(props:any){
    const [openDialog, setOpenDailog] = useState(false)
    return(
        <Card 
            elevation={0} 
            sx={{ 
                border:'1px solid #e8e8e8',
                width:{
                    sm:270,
                    xs:300
                }, 
                marginBottom: 2, 
            }} >
            <Box 
                className="card-class"
                sx={{
                    backgroundImage: `url(${props.productimage})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    backgroundSize: 'contain',
                    width: '100%',
                    height: 170,
                }}>
                {
                    (openDialog)?
                    <DetailsDisplay details={props.details_log} close={setOpenDailog}/>
                    :null
                }
                <Box
                    sx={{
                        display:{
                            lg:'block',
                            md:'block',
                            sm:'none',
                            xs:'none'
                        }
                    }} 
                    className='card-details'>
                        
                    <Typography component="div">
                        <Box
                            sx={{
                                fontSize: 14,
                                color:'white',
                                paddingTop: 1.5,
                                // fontWeight: 'bold'
                            }}

                            onClick={()=>{ setOpenDailog(true) }}>
                            Features
                        </Box>
                    </Typography>
                </Box>

                
            </Box>
            <CardContent>
                <Typography
                component="div"
                    sx={{
                        fontWeight: 600,
                        fontSize: 16,
                        color: '#ed7e00',
                        borderBottom: '1px solid #e8e8e8'
                        // color: '#7d7d7d'
                    }} >
                    <Box>
                    {props.productname}
                    </Box>
                </Typography>
                <Typography
                component="div"
                    sx={{
                        fontSize: 12,
                        color: '#7d7d7d'
                    }}  
                    >
                    <Box>
                    {props.productdetails}
                    </Box>
                </Typography>
                <Box
                sx={{
                    marginTop:1,
                    display:{
                        lg:'none',
                        md:'block',
                        sm:'block',
                        xs:'block'
                    }
                }}>
                    <MoreDetailsButton
                        // sx={{
                        //     textTransform:'none'
                        // }}
                        variant="outlined"
                        size="small"
                        fullWidth
                        onClick={()=>{ setOpenDailog(true) }}>
                        More details
                    </MoreDetailsButton>
                </Box>
            </CardContent>
            
        </Card>
    );
}
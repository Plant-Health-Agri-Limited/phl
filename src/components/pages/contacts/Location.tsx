import { 
    Box, 
    Grid, 
    Typography, 
    Container
 } from '@mui/material'
import Footer from '../../utils/Footer'

import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function Location(){
    return(
        <Box sx={{ width:'100%' }}>
            <Box
            sx={{
                width:'100%',
                display:'flex',
            }}>
                <LocationOnIcon
                sx={{
                    marginRight:1
                }}/>
                <Typography 
                component="div"
                sx={{
                    marginBottom:2,
                    fontSize:18
                }}>
                    Location
                </Typography>
            </Box>
            <div className="google-map-code">
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7692.87528313256!2d28.26304630694516!3d-15.406913040759664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf45a4bd9695d8d79!2zMTXCsDI0JzI2LjgiUyAyOMKwMTUnNTguMyJF!5e0!3m2!1sen!2szm!4v1643701862555!5m2!1sen!2szm" 
                style={{ width:'100%', height:450 }}  loading="lazy"></iframe>
            </div>
            {/* <img style={{ width:'100%'}} src={steward}/> */}
        </Box>
    );
}
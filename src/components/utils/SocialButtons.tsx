import {
    Box, IconButton
} from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function SocialButtons(){
    return(
        <Box
        sx={{
            display:'flex',
            justifyContent:'center'
        }}
        >
            <IconButton 
            size="large" 
            onClick={
                ()=>{
                    window.open("https://www.facebook.com/planthealthagriltd");
                }
            }>
                <FacebookIcon fontSize="inherit" />
            </IconButton>
            <IconButton 
            size="large"
            onClick={
                ()=>{
                    window.open("https://www.linkedin.com/in/plant-health-agri-ltd-55a341182?originalSubdomain=zm");
                }
            }>
                <LinkedInIcon fontSize="inherit" />
            </IconButton>
        </Box>
    );
}
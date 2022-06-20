import {
    Box, IconButton, Button
} from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function SocialButtons(){
    return(
        <Box
        sx={{
            display:'flex',
            alignItems:'center',
            marginBottom:3,
            height:60
        }}>
              
            <FacebookIcon 
            sx={[
                { fontSize: 40, color:'white'},
                {
                    '&:hover':{
                        cursor:'pointer',
                        color:'orange',
                        fontSize: 50,
                        
                    }
                }
            ]}
            onClick={
                ()=>{
                    window.open("https://www.facebook.com/planthealthagriltd");
                }
            }/>
            
            <LinkedInIcon 
            sx={[
                { fontSize: 40, color:'white'},
                {
                    '&:hover':{
                        cursor:'pointer',
                        color:'orange',
                        fontSize: 50,
                        
                    }
                }
            ]} 
            onClick={
                ()=>{
                    window.open("https://www.linkedin.com/in/plant-health-agri-ltd-55a341182?originalSubdomain=zm");
                }
            }/>

        </Box>
    );
}
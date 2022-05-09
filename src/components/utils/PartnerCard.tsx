import { 
    Box, 
    Typography,
    Container,
    Button,
    Avatar 
 } from '@mui/material'
import VistWebsiteButton from './VistWebsiteButton';
import { useRouter } from 'next/router'

export default function PartnersCard(props:any){
    const router = useRouter()
    return(
        <Box
            sx={{
                width:'100%',
                height:{
                    lg:220,
                    md:220,
                    sm:220,
                    xs:350
                },
                paddingTop:1
            }}>
                <Container
                sx={{
                    borderRadius:3,
                    width:{
                        lg:900,
                        md:700,
                        sm:500,
                        xs:300
                    },
                    paddingTop:3,
                    paddingBottom:3,
                    border:'1px solid #e0e0e0',
                    // backgroundColor:'#f9f9fa',
                    // boxShadow:'1px 5px 10px 1px rgba(0,0,0,0.22)'
                }}>
                    
                    <Box
                    sx={{
                        width:'100%',
                        display:{
                            lg:'flex',
                            md:'flex',
                            sm:'flex',
                            sx:'block'
                        },
                        justifyContent:'center',
                        marginBottom:1,
                        
                    }}>
                        <Avatar 
                        src={props.image}
                        variant="rounded"
                        style={{ 
                            width: 250, 
                            height: 100,
                            objectFit:'cover'
                        }}/>
                        <Box
                        sx={{
                            paddingLeft:{
                                lg:2,
                                md:2,
                                sm:2,
                                xs:0
                            }
                        }}>
                            <Typography 
                                component="div" 
                                sx={{
                                    marginBottom:1
                                }}>
                                {props.description}
                            </Typography>
                            <Box
                            sx={{
                                display:'flex',
                                justifyContent:'flex-start'
                            }}>
                                <VistWebsiteButton
                                onClick={
                                    ()=>{
                                        window.open(props.url)
                                    }
                                }>
                                    visit website
                                </VistWebsiteButton>
                            </Box>
                        </Box>
                    </Box>
                    
                </Container>
            </Box>
    );
}
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

 import Image from 'next/image';

function CardView(props:any){
    return(
        <Card 
            elevation={0} 
            sx={{ 
                // boxShadow:'0px 3px 15px 1px rgba(0,0,0,0.18)',
                borderRadius: 2, 
                border:'solid', 
                borderColor:'#ebebeb', 
                borderWidth:1, 
                width: {
                    lg: 250,
                    md: 250,
                    sm: '100%',
                    xs: '100%'
                    },
                marginBottom:{
                    lg: 0,
                    md: 0,
                    sm: 5,
                    xs: 5
                } 

                }}>
            <Box sx={{
                width: '100%',
                height:200,
                position:'relative'
            }}>
                <Image 
                alt=""
                src={props.image} 
                layout="fill" objectFit="cover"
                // layout="fill"
                />
            </Box>
            <CardContent>
                <Typography component="div" >
                    <Box 
                    sx={{
                        fontWeight:'bold',
                        color:'#ef7b2b',
                        fontSize:18,
                        marginBottom:3
                    }}>
                    {props.productname}
                    </Box>
                </Typography>
                <Typography 
                gutterBottom 
                variant="body2" 
                component="div"
                >
                    <Box
                    sx={{
                        fontSize:16
                    }}>
                        {props.productDescription}
                    </Box>
                </Typography>
                <Divider
                sx={{
                    marginTop:3,
                    marginBottom:1,
                }}/>
                <Typography gutterBottom variant="body2" component="div">
                    <Box>
                        {props.categoryname}
                    </Box>
                </Typography>
            </CardContent>
        </Card>
    );
}

export default CardView
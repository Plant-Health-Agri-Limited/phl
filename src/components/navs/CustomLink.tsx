import Link from "next/link";
import { Box } from '@mui/material'
export default function CustomLink(props:any){
    const { routePath, routeName} = props
    return(
        <Box
        sx={{
            display:'flex'
        }} 
        className='custom-btn '>
            <Link href={routePath} >
                <a 
                style={{
                    width:'100%',
                    textDecoration:'none',
                    color:'black',
                    fontSize:14,
                    textAlign:'center',
                    fontFamily:'Poppins Medium',
                    textTransform:'capitalize'
                }}>
                    {routeName}
                </a>
            </Link>
        </Box>
    );
}
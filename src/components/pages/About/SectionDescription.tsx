import React from 'react'
import { 
    Box, 
    Grid, 
    Typography, 
    Container, 

 } from '@mui/material'

import Avatar from '@mui/material/Avatar';
import Link from 'next/link';
import routes from '../../../constants/routes'
import { useRouter } from 'next/router'

const ToProductsLink = ()=>{
    return (<span><Link href={routes.products}><a className='custom-link'>products</a></Link></span>)
}

export default function SectionDescription(){
    return(
        <Typography
            component="div"
            sx={{
                padding:{
                    lg:1,
                    md:1,
                    sm:1,
                    xs:0
                },
                marginBottom:{
                    lg:10,
                    md:10,
                    sm:10,
                    xs:0
                }
            }}>
            <Box 
            sx={{
                textAlign:'center',
                fontSize: {
                    lg:24,
                    md:24,
                    sm:24,
                    xs:20
                },
                fontFamily:'Poppins Medium',
                color:'#DD9933',
                marginBottom:1
            }}>
                Who we are and What we do
            </Box>
            <Box 
            sx={{
                fontSize: 16,
                fontFamily:'Poppins Regular',
                color:'back',
                textAlign: 'justify',
            }}>
                Plant Health Agri Limited (PHAL) is a wholly owned Zambian company focusing on agriculture. PHAL services both the small holder and commercial famers.  We service a substantial share market of the sector with innovative solutions and quality <ToProductsLink/>. <br/><br/>Our <ToProductsLink/> help grow the nation&rsquo;s food, improve soil health and contribute to more sustainable agriculture practice. We help farmers take care of their environment. 
                <br/><br/>We have partnered with the world&rsquo;s leading suppliers of agricultural inputs and pesticides around the globe to solve unique problems, tackle anticipated changing needs, and protect crops from the ravages of pests, weeds and diseases. Customer intimacy and collaboration remain our hallmark of our portfolio as we keep on growing with the registration of nanotechnology pesticides
            </Box>
        </Typography>
    )
}
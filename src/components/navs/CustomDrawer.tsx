import React, { useState, useEffect, useRef } from 'react'
import { 
    Box, 
    AppBar, 
    Toolbar, 
    Button,
    Typography,
    Card 
} from '@mui/material'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import Collapse from '@mui/material/Collapse';
import routes from '../../constants/routes';
import Image from 'next/image';

import { useRouter } from 'next/router'

const logo_bw = '/images/phl_logo_bw.png'

const mobile_drawer_text = {
    backgroundColor:'transparent',
    color:'white',
    width: '100%',
    fontSize: 14,
    paddingTop: 1.5,
    paddingBottom: 1.5,
    fontFamily:'Poppins Medium'
}

const CustomDrawer = React.forwardRef((props:any, ref) => {
    const router = useRouter()
    const [dropDownOpen, setDropDownOpen] = useState(false)
    const {openDrawer, setOpenDrawer} = props
    
    return(
        <Box
        ref={ref} {...props} 
        sx={{
            position:'fixed',
            top:0,
            left:0,
            width:250,
            height:'100vh',
            background:'linear-gradient(90deg, rgba(75,147,89,1) 1%, rgba(75,147,89,0.9108018207282913) 89%, rgba(75,147,89,0.8575805322128851) 100%)',
            zIndex:100
        }}>
            <Box
            sx={{
                paddingLeft: 2,
                paddingTop:2
            }}>
                <Image
                    src={logo_bw}
                    width={"120"}
                    height={"70"}
                    objectFit="contain"
                    alt=''
                />
                <Typography 
                component="div"
                        sx={{
                        ...mobile_drawer_text
                        }}>
                    <Box 
                        
                        onClick={()=>{
                            setOpenDrawer(false)
                            router.push(routes.home)
                        }}
                        >Home</Box>
                </Typography>
                <Typography
                component="div"
                    sx={{
                        display:'flex',
                        justifyContent:'space-between',
                        paddingRight:3,
                        backgroundColor:'transparent',
                        color:'white',
                        width: '100%',
                        fontSize: 14,
                        paddingTop: 1.5,
                        fontFamily:'Poppins Medium'
                    }}>
                    <Box
                    sx={{
                        width:100
                    }}
                    onClick={()=>{
                        setOpenDrawer(false)
                        router.push(routes.products)
                    }}>
                        Products
                    </Box>
                    <Box
                    onClick={()=>{
                        if(dropDownOpen){
                            setDropDownOpen(false)
                        }
                        else{
                            setDropDownOpen(true)
                        }
                    }}>
                        {
                            (dropDownOpen)?
                                <ArrowDropUpIcon/>
                            :   <ArrowDropDownIcon/>
                        }
                    </Box>
                </Typography>
                <Collapse in={dropDownOpen}>
                <Typography
                    component="div"
                    sx={{
                        paddingLeft:3,
                        color:'#ebebeb',
                        fontFamily:'Poppins Regular',
                        fontSize:14,
                        marginBottom:2,
                        marginTop:2
                    }}>
                        <Box
                        sx={{
                            marginBottom:2
                        }}
                        onClick={()=>{
                            setOpenDrawer(false)
                            router.push({
                                pathname:routes.products,
                                query:{
                                    productId:1
                                }
                            })
                        }}>
                            Liquid Fertilzer
                        </Box>
                        <Box
                        sx={{
                            marginBottom:2
                        }}
                        onClick={()=>{
                            setOpenDrawer(false)
                            router.push({
                                pathname:routes.products,
                                query:{
                                    productId:2
                                }
                            })
                        }}>
                            Herbicide Elite
                        </Box>
                        <Box
                        sx={{
                            marginBottom:2
                        }}
                        onClick={()=>{
                            setOpenDrawer(false)
                            router.push({
                                pathname:routes.products,
                                query:{
                                    productId:9
                                }
                            })
                        }}>
                            Herbicide
                        </Box>
                        <Box
                        sx={{
                            marginBottom:2
                        }}
                        onClick={()=>{
                            setOpenDrawer(false)
                            router.push({
                                pathname:routes.products,
                                query:{
                                    productId:3
                                }
                            })
                        }}>
                            Fungicide
                        </Box>
                        <Box
                        sx={{
                            marginBottom:2
                        }}
                        onClick={()=>{
                            setOpenDrawer(false)
                            router.push({
                                pathname:routes.products,
                                query:{
                                    productId:4
                                }
                            })
                        }}>
                            Insecticide
                        </Box>
                        <Box
                        sx={{
                            marginBottom:2
                        }}
                        onClick={()=>{
                            setOpenDrawer(false)
                            router.push({
                                pathname:routes.products,
                                query:{
                                    productId:5
                                }
                            })
                        }}>
                            Biologicals
                        </Box>
                        <Box
                        sx={{
                            marginBottom:2
                        }}
                        onClick={()=>{
                            setOpenDrawer(false)
                            router.push({
                                pathname:routes.products,
                                query:{
                                    productId:6
                                }
                            })
                        }}>
                            Adjuvants
                        </Box>
                        <Box
                        sx={{
                            marginBottom:2
                        }}
                        onClick={()=>{
                            setOpenDrawer(false)
                            router.push({
                                pathname:routes.products,
                                query:{
                                    productId:7
                                }
                            })
                        }}>
                            Inauculants
                        </Box>
                    </Typography>
                </Collapse>
                    
                <Typography
                component="div"
                sx={{
                    ...mobile_drawer_text
                }}>
                    <Box 
                        
                        onClick={()=>{
                            setOpenDrawer(false)
                            router.push(routes.about)
                        }}
                        >About</Box>
                </Typography>
                <Typography
                component="div"
                sx={{
                    ...mobile_drawer_text
                }}>
                    <Box 
                        
                        onClick={()=>{
                            setOpenDrawer(false)
                            router.push(routes.contact)
                        }}
                        >Contacts</Box>
                </Typography>
                <Typography
                component="div"
                sx={{
                    ...mobile_drawer_text
                }}>
                    <Box 
                        
                        onClick={()=>{
                            setOpenDrawer(false)
                            router.push(routes.news)
                        }}
                        >News</Box>
                </Typography> 
            </Box>
        </Box>
    );
});

CustomDrawer.displayName = 'CustomDrawer';
export default CustomDrawer
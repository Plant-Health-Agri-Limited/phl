import React, { useState, useEffect, useRef } from 'react'
import HomeIcon from '@mui/icons-material/Home';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import CloseIcon from '@mui/icons-material/Close';
import { 
    Box, 
    AppBar, 
    Toolbar, 
    Button,
    Typography,
    Card 
} from '@mui/material'

import Image from 'next/image';
import routes from '../../constants/routes';
import { useRouter } from 'next/router'

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

import Collapse from '@mui/material/Collapse';

const logo = '/images/phl_logo_color.png'
const logo_bw = '/images/phl_logo_bw.png'

var classNames = require('classnames');

const mobile_drawer_text = {
    backgroundColor:'transparent',
    color:'white',
    width: '100%',
    fontSize: 14,
    paddingTop: 1.5,
    paddingBottom: 1.5,
    fontFamily:'Poppins Medium'
}

const buttonStyleMd={
    display:{
        md: 'block',
        sm: 'none',
        xs: 'none'
    }
}

const buttonStyleSm={
    color:'gray',
    display:{
        md: 'none',
        sm: 'block',
        xs: 'block'
    },
}

const custbtn = {
  width: 150,
  display:{
    md: 'block',
    sm: 'none',
    xs: 'none'
    }
}


export default function Navbar(){
    const router = useRouter()
    const [routepath, setRoutePath] = useState("")

    const [openDrawer, setOpenDrawer] = useState(false)

    const drawerStyled = classNames({
        'drawer':!openDrawer,
        'drawer-open':openDrawer
    })

    const [dropDownOpen, setDropDownOpen] = useState(false)

    useEffect(()=>{
        const mediaQuery = window.matchMedia('(min-width: 900px)');
        if (mediaQuery.matches) {
            // setOpenDrawer(true)
          } else {
          }
    },[]);

    const [appbar, setAppbar] = useState(false)

    const listenScrollEvent = (event:any) => {
        if (window.scrollY < 73) {
            setAppbar(false)
        } else if (window.scrollY > 100 ) {
            setAppbar(true)
        } 
    }

    useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);

    return () =>
        window.removeEventListener('scroll', listenScrollEvent);
    }, [appbar]);

    const appbarStyle= classNames({
        'before-scroll': !appbar,
        'after-scroll' : appbar
    })

    useEffect(()=>{
        setRoutePath(router.route)
    },[router.route])


    return(
            <Box className={appbarStyle}>
                <Box >
                    <Box sx={{height: 30, width: '100%', backgroundColor: '#4B9359'}}></Box>
                    <Toolbar >
                        <Box >
                            <Box sx={{...buttonStyleMd }}>
                                <Typography component="div">
                                    <Box sx={{
                                        ...custbtn
                                    }}>
                                        <Image 
                                        width={130}
                                        height={100} 
                                        alt="logo" 
                                        objectFit='contain'
                                        src={logo} />
                                    </Box>
                                </Typography>
                            </Box>
                            <Box sx={{
                                 display:{
                                    lg: 'none',
                                    md: 'none',
                                    sm: 'block',
                                    xs: 'block'
                                }
                            }}>
                                <Image 
                                width={70} 
                                height={70} 
                                alt="log" 
                                objectFit="contain"
                                src={logo} />
                            </Box>
                        </Box>

                        <Box sx={{ flexGrow: 1 }}></Box>
                        
                        <Box sx={{...buttonStyleMd}} className="box-pad">
                            <button 
                                className='custom-btn'
                                onClick={()=>{ 
                                    router.push(routes.home)
                                }}
                                >Home</button>
                            <div className={classNames({
                                    'btn-line-clicked': (routepath === routes.home)? true : false,
                                    'btn-line': true
                                })}></div>
                        </Box>   
                        <Box sx={{...buttonStyleMd}} className="box-pad">
                            <button
                                className='custom-btn'
                                onClick={()=>{
                                    router.push(routes.about)
                                }}
                                >About</button>
                            <div className={classNames({
                                    'btn-line-clicked': (routepath === routes.about)? true : false,
                                    'btn-line': true
                                })}></div>
                        </Box>
                        <Box sx={{...buttonStyleMd}} className="show-dialog">
                            <button 
                                className='custom-btn'
                                onClick={()=>{
                                    router.push(routes.products)
                                }}
                                >Products</button>
                                <div className={classNames({
                                    'btn-line-clicked': (routepath === routes.products)? true : false,
                                    'btn-line': true
                                })}></div>
                                <Box className="dialog">
                                    <Typography component="div">
                                        <Box 
                                        className="dialog-text"
                                        onClick={()=>{
                                            router.push({
                                                pathname:routes.products,
                                                query:{
                                                    productId:1
                                                }
                                            })
                                        }} >
                                            Liquid Fertiliser
                                        </Box>
                                        <Box 
                                        className="dialog-text"
                                        onClick={()=>{
                                            router.push({
                                                pathname:routes.products,
                                                query:{
                                                    productId:2
                                                }
                                            })
                                        }} >
                                            Herbicide Elite
                                        </Box>
                                        <Box 
                                        className="dialog-text"
                                        onClick={()=>{
                                            router.push({
                                                pathname:routes.products,
                                                query:{
                                                    productId:9
                                                }
                                            })
                                        }} >
                                            Herbicide
                                        </Box>
                                        
                                        <Box 
                                        className="dialog-text"
                                        onClick={()=>{
                                            router.push({
                                                pathname:routes.products,
                                                query:{
                                                    productId:3
                                                }
                                            })
                                        }} >
                                            Fungicide
                                        </Box>
                                        <Box 
                                        className="dialog-text"
                                        onClick={()=>{
                                            router.push({
                                                pathname:routes.products,
                                                query:{
                                                    productId:4
                                                }
                                            })
                                        }} >
                                            Insecticide
                                        </Box>
                                        <Box className="dialog-text"
                                        onClick={()=>{
                                            router.push({
                                                pathname:routes.products,
                                                query:{
                                                    productId:5
                                                }
                                            })
                                        }} >
                                            Biologicals
                                        </Box>
                                        <Box className="dialog-text"
                                        onClick={()=>{
                                            router.push({
                                                pathname:routes.products,
                                                query:{
                                                    productId:6
                                                }
                                            })
                                        }} >
                                            Adjuvants
                                        </Box>
                                        <Box className="dialog-text"
                                        onClick={()=>{
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
                                </Box>
                        </Box>
                        <Box sx={{...buttonStyleMd}} className="box-pad">
                            <button  
                                className='custom-btn'
                                onClick={()=>{
                                    router.push(routes.contact)
                                    
                                }}
                                >Contact</button>
                                <div className={classNames({
                                    'btn-line-clicked': (routepath === routes.contact)? true : false,
                                    'btn-line': true
                                })}></div>
                        </Box>
                        <Box sx={{...buttonStyleMd}} className="box-pad">
                            <button 
                                className='custom-btn'
                                onClick={()=>{
                                    router.push(routes.news)
                                }}
                                >News</button>
                                <div className={classNames({
                                    'btn-line-clicked': (routepath === routes.news)? true : false,
                                    'btn-line': true
                                })}></div>
                        </Box>
                       
                        <Box>
                            <Button 
                                sx={{...buttonStyleSm, textTransform: 'none'}} 
                                variant="text"
                                onClick={()=>{
                                    if(openDrawer){
                                        setOpenDrawer(false)
                                    }else{
                                        setOpenDrawer(true)
                                    }
                                }}>
                                    {
                                        (openDrawer)?
                                            <CloseIcon/>
                                        :   <DensityMediumIcon/>   
                                    }
                                
                            </Button>
                        </Box>
                        
                    </Toolbar>      
                </Box>

                    <Box className={drawerStyled}>
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
            </Box>
              
    );
}
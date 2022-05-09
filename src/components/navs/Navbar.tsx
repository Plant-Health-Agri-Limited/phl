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


const logo = '/images/phl_logo_color.png'

var classNames = require('classnames');

const mobile_drawer_text = {
    borderBottom:'1px solid #d9d9d9',
    backgroundColor:'transparent',
    color:'white',
    paddingLeft: 2,
    width: '100%',
    fontSize: 16,
    paddingTop: 1.5,
    paddingBottom: 1.5,
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
    const [openDrawer, setOpenDrawer] = useState(false)

    const drawerStyled = classNames({
        'drawer':!openDrawer,
        'drawer-open':openDrawer
    })

    const animatedSquaresRef = useRef(null)
    
    // @ts-ignore: Object is possibly 'null'.
    const play = () => animatedSquaresRef.current.play();
    // @ts-ignore: Object is possibly 'null'.
    const reverse = () => animatedSquaresRef.current.reverse();


    useEffect(()=>{
        const mediaQuery = window.matchMedia('(min-width: 900px)');
        if (mediaQuery.matches) {
            // setOpenDrawer(true)
            console.log("Does matches")
          } else {
            console.log("Doesnt match")
          }

    });

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
    
    const [ buttonActive, setButtonActive] = useState([false,false,false,false,false])

    const [drawerCss, setDrawerCss] = useState(false)

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
                                    // setButtonActive([true,false,false,false,false])
                                    router.push(routes.home)
                                }}
                                >Home</button>
                            <div className={classNames({
                                    'btn-line-clicked': buttonActive[0],
                                    'btn-line': true
                                })}></div>
                        </Box>   
                        <Box sx={{...buttonStyleMd}} className="box-pad">
                            <button
                                className='custom-btn'
                                onClick={()=>{
                                    // setButtonActive([false,true,false,false,false])
                                    router.push(routes.about)
                                   
                                }}
                                >About</button>
                            <div className={classNames({
                                    'btn-line-clicked': buttonActive[1],
                                    'btn-line': true
                                })}></div>
                        </Box>
                        <Box sx={{...buttonStyleMd}} className="show-dialog">
                            <button 
                                className='custom-btn'
                                onClick={()=>{
                                    // setButtonActive([false,false,true,false,false])
                                    router.push(routes.products)
                                }}
                                >Products</button>
                                <div className={classNames({
                                    'btn-line-clicked': buttonActive[2],
                                    'btn-line': true
                                })}></div>
                                <Box className="dialog">
                                    <Typography
                                    component="div"
                                        onClick={()=>{
                                            // setButtonActive([false,false,true,false,false])
                                            router.push(routes.products)
                                        }} 
                                    >
                                        <Box className="dialog-text">
                                            Liquid Fertiliser
                                        </Box>
                                        <Box className="dialog-text">
                                            Herbicide
                                        </Box>
                                        <Box className="dialog-text">
                                            Fungicide
                                        </Box>
                                        <Box className="dialog-text">
                                            Insecticide
                                        </Box>
                                        <Box className="dialog-text">
                                            Biologicals
                                        </Box>
                                        <Box className="dialog-text">
                                            Code Stock
                                        </Box>
                                        <Box className="dialog-text">
                                            Inauculants
                                        </Box>
                                        <Box className="dialog-text">
                                            Seed Dressing
                                        </Box>
                                    </Typography>
                                </Box>
                        </Box>
                        <Box sx={{...buttonStyleMd}} className="box-pad">
                            <button  
                                className='custom-btn'
                                onClick={()=>{
                                    //setButtonActive([false,false,false,true,false])
                                    router.push(routes.contact)
                                    
                                }}
                                >Contact</button>
                                <div className={classNames({
                                    'btn-line-clicked': buttonActive[3],
                                    'btn-line': true
                                })}></div>
                        </Box>
                        <Box sx={{...buttonStyleMd}} className="box-pad">
                            <button 
                                className='custom-btn'
                                onClick={()=>{
                                    //setButtonActive([false,false,false,false,true])
                                    router.push(routes.news)
                                }}
                                >News</button>
                                <div className={classNames({
                                    'btn-line-clicked': buttonActive[4],
                                    'btn-line': true
                                })}></div>
                        </Box>
                       
                        <Box>
                            <Button 
                                sx={{...buttonStyleSm, textTransform: 'none'}} 
                                variant="text"
                                onClick={()=>{
                                    console.log("clicked");
                                    setOpenDrawer(true)
                                    //play()
                                }}
                                >
                                <DensityMediumIcon/>
                            </Button>
                        </Box>
                        
                    </Toolbar>      
                </Box>

                    <Box 
                        className={drawerStyled} >
                
                        <Box
                            sx={{
                                display:'flex',
                                justifyContent:'end'
                            }}>
                                <button 
                                    style={{ 
                                        backgroundColor:'transparent',
                                        border: 0,
                                        color:'white'
                                    }}
                                    onClick={()=>{
                                        console.log("clicked");
                                        setOpenDrawer(false)
                                    }}
                                    >
                                    <CloseIcon/>
                                </button>
                            </Box>
                        
                        <Typography 
                        component="div"
                                sx={{
                                   ...mobile_drawer_text
                                }}>
                            <Box 
                                
                                onClick={()=>{
                                    setOpenDrawer(false)
                                }}
                                >Home</Box>
                        </Typography>
                        <Typography
                        component="div"
                            sx={{
                                ...mobile_drawer_text
                             }}>
                            <Box
                                onClick={()=>{
                                    setOpenDrawer(false)
                                }}
                                >Products</Box>
                        </Typography>
                        <Typography
                        component="div"
                        sx={{
                            ...mobile_drawer_text
                         }}>
                            <Box 
                                
                                onClick={()=>{
                                    setOpenDrawer(false)
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
                                }}
                                >News</Box>
                        </Typography> 
                    </Box>
            </Box>
              
    );
}
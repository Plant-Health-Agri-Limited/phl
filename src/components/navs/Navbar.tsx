import React, { useState, useEffect, useRef } from 'react'
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import CloseIcon from '@mui/icons-material/Close';
import { 
    Box, 
    AppBar, 
    Toolbar, 
    Button,
    Typography,
    Card, 
    Slide
} from '@mui/material'

import Image from 'next/image';
import routes from '../../constants/routes';
import { useRouter } from 'next/router'
import CustomLink from './CustomLink';
import LinkWrapper from './LinkWrapper';
import ProductLink from './ProductLink';
import CustomDrawer from './CustomDrawer';

var classNames = require('classnames');

const logo = '/images/phl_logo_color.png'


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
                    <Box 
                    sx={{
                        ...custbtn
                    }}>
                        <Image 
                        width={130}
                        height={100} 
                        alt="logo" 
                        objectFit='contain'
                        src={logo} />
                    </Box>
                    <Box 
                    sx={{
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

                    <Box sx={{ flexGrow: 1 }}></Box>
                    
                    <LinkWrapper>
                        <CustomLink
                        routePath={routes.home}
                        routeName="home"
                        />
                        <div className={classNames({
                                'btn-line-clicked': (routepath === routes.home)? true : false,
                                'btn-line': true
                        })}/>
                    </LinkWrapper>   
                    <LinkWrapper>
                        <CustomLink
                        routePath={routes.about}
                        routeName="about us"
                        />
                        <div className={classNames({
                                'btn-line-clicked': (routepath === routes.about)? true : false,
                                'btn-line': true
                        })}/>
                    </LinkWrapper>

                    <ProductLink/>
                    
                    <LinkWrapper>
                        <CustomLink
                        routePath={routes.contact}
                        routeName="contact"
                        />
                        <div className={classNames({
                                'btn-line-clicked': (routepath === routes.contact)? true : false,
                                'btn-line': true
                        })}/>
                    </LinkWrapper>
                    <LinkWrapper>
                        <CustomLink
                        routePath={routes.news}
                        routeName="news"
                        />
                        <div className={classNames({
                                'btn-line-clicked': (routepath === routes.news)? true : false,
                                'btn-line': true
                        })}/>
                    </LinkWrapper>
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
                </Toolbar>      
            </Box>
            <Slide direction="right" in={openDrawer} mountOnEnter unmountOnExit>            
                <CustomDrawer openDrawer={openDrawer} setOpenDrawer={setOpenDrawer}/>
            </Slide>
        </Box>
              
    );
}



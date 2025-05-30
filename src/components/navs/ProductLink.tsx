import React, { useState, useEffect, useRef } from 'react'
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
import Link from 'next/link';
import CustomLink from './CustomLink';
import LinkWrapper from './LinkWrapper';
var classNames = require('classnames');

const buttonStyleMd={
    display:{
        md: 'block',
        sm: 'none',
        xs: 'none'
    }
}

const ProductLink = () =>{
    const router = useRouter()
    const [routepath, setRoutePath] = useState("")

    return(
        <Box sx={{...buttonStyleMd}} className="show-dialog">
            <LinkWrapper>
                <CustomLink
                routePath={routes.products}
                routeName="products"
                />
                <div className={classNames({
                        'btn-line-clicked': (routepath === routes.products)? true : false,
                        'btn-line': true
                })}/>
            </LinkWrapper>
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
                    {/* <Box 
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
                    </Box> */}
                    
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
    );
}
export default ProductLink
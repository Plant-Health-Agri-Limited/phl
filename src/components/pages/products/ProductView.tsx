import React, { useState, useEffect } from 'react'
import { 
    Box, 
    Grid, 
    Typography, 
    InputLabel,
    MenuItem,
    FormControl,
    Select,
    Divider
} from '@mui/material'

import { useRouter } from 'next/router';

import LiquidFertiliser from './productDataView/LiquidFertiliser';
import HerbicideElite from './productDataView/HerbicideElite';
import Fungicide from './productDataView/Fungicide';
import Insecticide from './productDataView/Insecticide';
import Biologicals from './productDataView/Biologicals';
import Adjuvants from './productDataView/Adjuvants';
import SeedDressig from './productDataView/SeedDressing';
import Herbicides from './productDataView/Herbicides';

var classNames = require('classnames');

const catergoryList = [
    {
        fontWeight: 100,
        fontSize: 16,
        marginBottom: 2,
        borderBottom: 'solid',
        borderColor: '#cfcfcf',
        borderWidth: 0.5,
        paddingTop: 1,
        paddingBottom: 1,
        borderRadius:1
    },
]

const hover_effect = {
    borderBottom: 'solid',
    borderWidth: 1,
    cursor: 'pointer',
    color: 'white',
    backgroundColor: '#4B9359',
    paddingLeft: 1,
    borderRadius:1
}

export default function ProductView(){
    const router = useRouter()
    const[index, setIndex] = useState(1);
    const[categoryName, setCategoryName] = useState("liquid fertilizer");
    const[buttonActive, setButtonActive] = useState([true,false,false,false,false,false,false,false])

    const handleIndexChange = (event:any) =>{
        setIndex(parseInt(event.target.value));
        
    }

    useEffect(()=>{
        switch(index){
            case 1:
                setCategoryName("Liquid Fertilizers")
                break;
            case 2:
                setCategoryName("Herbicide Elite")
                break;
            case 3:
                setCategoryName("Fungicide")
                break;
            case 4:
                setCategoryName("Insecticide")
                break;
            case 5:
                setCategoryName("Biologicals")
                break;
            case 6:
                setCategoryName("Adjuvants")
                break;
            case 7:
                setCategoryName("Seed Dressing")
                break;
            case 9:
                setCategoryName("Herbicides")
        }
    },[index])
    useEffect(() => {
        if(router.query.productId){
            const id = parseInt(String(router.query.productId))
            setIndex(id)
        }

        if(parseInt(String(router.query.productId)) === 1){
            setButtonActive([true,false,false,false,false,false,false,false])
            setCategoryName("Liquid Fertilizers")
            setIndex(1);
        }

        if(parseInt(String(router.query.productId)) === 2){
            setButtonActive([false,true,false,false,false,false,false,false])
            setCategoryName("Herbicide Elite")
            setIndex(2);
        }

        if(parseInt(String(router.query.productId)) === 9){
            setButtonActive([false,false,false,false,false,false,false,false,true])
            setCategoryName("Herbicides")
            setIndex(9);
        }

        if(parseInt(String(router.query.productId)) === 3){
            setButtonActive([false,false,true,false,false,false,false,false])
            setCategoryName("Fungicide")
            setIndex(3);
        }

        if(parseInt(String(router.query.productId)) === 4){
            setButtonActive([false,false,false,true,false,false,false,false])
            setCategoryName("Insecticide")
            setIndex(4);
        }

        if(parseInt(String(router.query.productId)) === 5){
            setButtonActive([false,false,false,false,true,false,false,false])
            setCategoryName("Biologicals")
            setIndex(5);
        }

        if(parseInt(String(router.query.productId)) === 6){
            setButtonActive([false,false,false,false,false,true,false,false])
            setCategoryName("Adjuvants")
            setIndex(6);
        }

        if(parseInt(String(router.query.productId)) === 7){
            setButtonActive([false,false,false,false,false,false,false,true])
            setCategoryName("Seed Dressing")
            setIndex(7);
        }

    }, [router.query.productId])
    

    return(
        <Box
        sx={{
            width:{
                lg:1200,
                md:900,
                sm:600,
                xs:1
            }
        }} 
        className="container">
            
            <Grid container>

                {/* for small screens */}
                <Grid item xs={12} sm={12} md={12} 
                    sx={{
                        display:{
                            lg:'none',
                            md:'flex',
                            sm:'flex',
                            xs:'flex',
                        },
                        justifyContent: 'center',
                        marginBottom: 3,
                        paddingLeft:1,
                        paddingRight:1
                    }}>
                    <Box sx={{ width: '100%' }}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Category</InputLabel>
                            <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={index}
                            label="Category"
                            onChange={handleIndexChange}
                            >
                                <MenuItem value={1}>Liquid Fertilize</MenuItem>
                                <MenuItem value={2}>Herbicide Elite</MenuItem>
                                <MenuItem value={9}>Herbicide</MenuItem>
                                <MenuItem value={3}>Fungicide</MenuItem>
                                <MenuItem value={4}>Insectcide</MenuItem>
                                <MenuItem value={5}>Biologocals</MenuItem>
                                <MenuItem value={6}>Adjuvants</MenuItem>
                                <MenuItem value={7}>Seed Dressing</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </Grid>
                {/* for small screens  end*/}

                {/* for larger screens */}
                <Grid item xs={12} sm={12} md={12} lg={3}
                    sx={{
                        display:{
                            lg:'block',
                            md:'none',
                            sm:'none',
                            xs:'none',
                        }
                    }} >
                    <Box sx={{width: "90%" }}>
                        <Typography
                        component="div"
                        sx={{
                            paddingRight:3
                        }}
                        >
                            <Box
                                sx={{
                                    fontWeight: 700,
                                    fontSize: 14,
                                    marginBottom: 3,
                                    textTransform: 'capitalize',
                                }}>
                                PRODUCT CATEGORIES
                            </Box>
                            <Box
                                onClick={()=>{
                                    setButtonActive([true,false,false,false,false,false,false,false])
                                    setCategoryName("Liquid Fertilize")
                                    setIndex(1);
                                }}
                                sx={[
                                    ...catergoryList,
                                    {
                                        '&:hover': {
                                            ...hover_effect                                       
                                        }
                                    }
                                ]}
                                className={classNames({
                                    'button-active':buttonActive[0]
                                })}
                            >
                                Liquid Fertilizer
                            </Box>
                            <Box
                                onClick={()=>{
                                    setButtonActive([false,true,false,false,false,false,false,false])
                                    setCategoryName("Herbicide Elite")
                                    setIndex(2);
                                }}
                                sx={[
                                    ...catergoryList,
                                    {
                                        '&:hover': {
                                            ...hover_effect                                       
                                        }
                                    }
                                ]}
                                className={classNames({
                                    'button-active':buttonActive[1]
                                })}
                            >
                                Herbicide Elite
                            </Box>
                            <Box
                                onClick={()=>{
                                    setButtonActive([false,false,false,false,false,false,false,false,true])
                                    setCategoryName("Herbicides")
                                    setIndex(9);
                                }}
                                sx={[
                                    ...catergoryList,
                                    {
                                        '&:hover': {
                                            ...hover_effect                                       
                                        }
                                    }
                                ]}
                                className={classNames({
                                    'button-active':buttonActive[8]
                                })}
                            >
                                Herbicides
                            </Box>
                            <Box
                            onClick={()=>{
                                setButtonActive([false,false,true,false,false,false,false,false])
                                setCategoryName("Fungicide")
                                setIndex(3);
                            }}
                                sx={[
                                    ...catergoryList,
                                    {
                                        '&:hover': {
                                            ...hover_effect                                       
                                        }
                                    }
                                ]}
                                className={classNames({
                                    'button-active':buttonActive[2]
                                })}
                            >
                                Fungicides
                            </Box>
                            <Box
                                onClick={()=>{
                                    setButtonActive([false,false,false,true,false,false,false,false])
                                    setCategoryName("Insecticide")
                                    setIndex(4);
                                }}
                                sx={[
                                    ...catergoryList,
                                    {
                                        '&:hover': {
                                            ...hover_effect                                       
                                        }
                                    }
                                ]}
                                className={classNames({
                                    'button-active':buttonActive[3]
                                })}
                            >
                                Insecticides
                            </Box>
                            <Box
                                onClick={()=>{
                                    setButtonActive([false,false,false,false,true,false,false,false])
                                    setCategoryName("Biologicals")
                                    setIndex(5);
                                }}
                                sx={[
                                    ...catergoryList,
                                    {
                                        '&:hover': {
                                            ...hover_effect                                       
                                        }
                                    }
                                ]}
                                className={classNames({
                                    'button-active':buttonActive[4]
                                })}
                            >
                                Biologicals
                            </Box>
                            
                            <Box
                                onClick={()=>{
                                    setButtonActive([false,false,false,false,false,true,false,false])
                                    setCategoryName("Adjuvants")
                                    setIndex(6);
                                }}
                                sx={[
                                    ...catergoryList,
                                    {
                                        '&:hover': {
                                            ...hover_effect                                       
                                        }
                                    }
                                ]}
                                className={classNames({
                                    'button-active':buttonActive[5]
                                })}
                            >
                                 Adjuvants
                            </Box>
                            
                            <Box
                                onClick={()=>{
                                    setButtonActive([false,false,false,false,false,false,false,true])
                                    setCategoryName("Seed Dressing")
                                    setIndex(7);
                                }}
                                sx={[
                                    ...catergoryList,
                                    {
                                        '&:hover': {
                                            ...hover_effect                                       
                                        }
                                    }
                                ]}
                                className={classNames({
                                    'button-active':buttonActive[7]
                                })}
                            >
                                Seed Dressing
                            </Box>
                        </Typography>
                    </Box>
                </Grid>
                {/* For larger screens end */}


                <Grid item xs={12} sm={12} md={12} lg={9} 
                sx={{
                    paddingLeft:1,
                    // paddingRight:1,
                }}>
                    <Box 
                    sx={{ 
                        marginBottom: 2,
                        
                    }}>
                        <Typography 
                        component="div"
                        sx={{
                            display:{
                            lg:'block',
                            md:'none',
                            sm:'none',
                            xs:'none'
                        }
                        }}>
                            <Box
                                sx={{
                                    fontWeight: 700,
                                    fontSize: 14,
                                    marginBottom: 3,
                                    textTransform: 'capitalize',
                                    textAlign: 'start'
                                }}
                            >
                                PRODUCT LIST
                            </Box>
                        </Typography>

                        <Box sx={{ display: 'flex', marginTop: 2 }}>
                            <Typography component="div">
                                <Box sx={{ fontSize: 16,fontWeight: 400,}}>
                                        Category Name :
                                </Box>
                            </Typography>
                            <Typography component="div">
                                <Box sx={{ 
                                        fontSize: 16, 
                                        fontWeight: 700, 
                                        color: 'orange', 
                                        textTransform: "uppercase", marginLeft: 1}}>
                                        {
                                            categoryName
                                        }
                                </Box>
                            </Typography>
                        </Box>
                    </Box>


                    {/* Product listing */}
                    <Box  sx={{ width:'100%', marginTop: 5}}>
                    {
                        (index === 1)?
                        <LiquidFertiliser/>
                        :null
                    }
                    {
                        (index === 2)?
                        <HerbicideElite/>
                        :null
                    }
                    {
                        (index === 3)?
                        <Fungicide/>
                        :null
                    }
                    {
                        (index === 4)?
                        <Insecticide/>
                        :null
                    }
                    {
                        (index === 5)?
                        <Biologicals/>
                        :null
                    }
                    {
                        (index === 6)?
                        <Adjuvants/>
                        :null
                    }
                    {
                        (index === 7)?
                        <SeedDressig/>
                        :null
                    }
                  
                    {
                        (index === 9)?
                        <Herbicides/>
                        :null
                    }
                    </Box>

                </Grid>
            </Grid>
        </Box>       
    );
}

import React, { useState } from 'react'
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
    InputLabel,
    MenuItem,
    FormControl,
    Select,
    SelectChangeEvent,
    Divider
 } from '@mui/material'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow'


const container = '/images/w_container.png'
const elite_bingo = '/images/elite_bingo.jpg'
const centron = '/images/centron.jpg'
const delfan = '/images/delfan.jpg'
const elite_tribute = '/images/elite_tribute.jpg'
const final_k = '/images/final_k.jpg'
const indingo_elite = '/images/indigo_elite.jpg'
const trador = '/images/trador.jpg'
const zenith = '/images/zenith.jpg'
const twin_tech = '/images/twin_tech.jpg'
const wakanda = '/images/wakanda.jpeg'
const assist = '/images/assist.svg'
const backrow = '/images/backrow.svg' 
const kantor = '/images/kantor.svg' 
const union = '/images/union.svg' 
const wuxal = '/images/WUXAL_Ascofol.jpg' 
const terios =  '/images/WUXAL_Terios.jpg' 

import CardDisplay from './CardDisplay'

import herbicides_list from '../../../constants/herbicides_list';
import fungicides_list from '../../../constants/fungicides_list';

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

const productListContainer = {
    display:'flex',
    justifyContent:'center',
    width: "100%",  
    borderWidth: 1, 
    // borderColor:'green',
    // border:'3px solid orange'
}

// const bgcolor = '#EAF7EC';
// const bgcolor = '#f2fff4'
const bgcolor = '#F9F9F9'
const bg2= "#F9F9F9"

export default function ProductView(){
    const[index, setIndex] = useState(1);
    const[categoryName, setCategoryName] = useState("liquid fertilizer");
    const[buttonActive, setButtonActive] = useState([true,false,false,false,false,false,false,false])

    const handleIndexChange = (event:any) =>{
        setIndex(parseInt(event.target.value));
    }

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
                            <MenuItem value={6}>Code Stock</MenuItem>
                            <MenuItem value={7}>Inauculants</MenuItem>
                            <MenuItem value={8}>Seed Dressing</MenuItem>
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
                            // border:'1px solid #e8e8e8',
                            // padding:3,
                            // borderRadius:5,
                            // backgroundColor:bgcolor
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
                    <Box sx={{ marginBottom: 2 }}>
                        <Typography component="div">
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
                        <Box>
                            <Grid container >
                                <Grid item xs={12} sm={6} md={4}>
                                    <Box sx={{ ...productListContainer }}>
                                        <CardDisplay productimage={final_k} productname="final K" productdetails="Final K" details_log="final_k" />
                                    </Box>
                                </Grid>
                                <Grid item xs={12} sm={6} md={4}>
                                    <Box sx={{ ...productListContainer }}>
                                        <CardDisplay productimage={trador} productname="Tradebor Mo" productdetails="Tradebor Mo" details_log="tradebor_mo"/>
                                    </Box>
                                </Grid>
                                <Grid item xs={12} sm={6} md={4}>
                                    <Box sx={{ ...productListContainer }}>
                                        <CardDisplay productimage={delfan} productname="Delfan Plus" productdetails="Delfan Plus" details_log="delfan_plus"/>
                                    </Box>
                                </Grid>
                                <Grid item xs={12} sm={6} md={4}>
                                    <Box sx={{ ...productListContainer }}>
                                        <CardDisplay productimage={twin_tech} productname="Twintech ZnMn" productdetails="Twintech ZnMn" details_log="twintech"/>
                                    </Box>
                                </Grid>
                                
                            </Grid>
                        </Box>
                        :null
                    }
                    {
                        (index === 2)?
                        <Box>
                            <Grid container >
                                <Grid item xs={12} sm={6} md={4}>
                                    <Box sx={{ ...productListContainer }}>
                                        <CardDisplay productimage={elite_bingo} productname="Bingo Elite" productdetails="Bing Elite" details_log="bingo_elite"/>
                                    </Box>
                                </Grid>
                                <Grid item xs={12} sm={6} md={4}>
                                    <Box sx={{ ...productListContainer }}>
                                        <CardDisplay productimage={wakanda} productname="Wakanda Elite" productdetails="Wakanda Elite" details_log="wakanda_elite"/>
                                    </Box>
                                </Grid>
                                <Grid item xs={12} sm={6} md={4}>
                                    <Box sx={{ ...productListContainer }}>
                                        <CardDisplay productimage={indingo_elite} productname="Indingo Elite" productdetails="Indingo Elite" details_log="indigo_elite"/>
                                    </Box>
                                </Grid>
                                <Grid item xs={12} sm={6} md={4}>
                                    <Box sx={{ ...productListContainer }}>
                                        <CardDisplay productimage={elite_tribute} productname="Tribute Elite" productdetails="Tribute Elite" details_log="tribute_elite"/>
                                    </Box>
                                </Grid>
                                
                            </Grid>
                        </Box>
                        :null
                    }
                    {
                        (index === 3)?
                        <Box
                        sx={{
                            // border:'1px solid #e8e8e8',
                            borderRadius:5,
                            padding:3,
                            backgroundColor:bg2
                        }}>
                            <TableContainer sx={{ marginBottom: 2 }}>
                                <Table size="small">
                                    <TableHead>
                                        <TableCell component="th" scope="row">
                                        </TableCell>
                                        <TableCell component="th" scope="row">
                                            Products
                                        </TableCell>
                                        <TableCell component="th" scope="row">
                                            Active Ingridient
                                        </TableCell>
                                    </TableHead>
                                    <TableBody>
                                        {
                                            fungicides_list.map((data, index)=>{
                                                return(
                                                    <TableRow key={index}>
                                                        <TableCell component="th" scope="row">
                                                            {index + 1}
                                                        </TableCell>
                                                        <TableCell component="th" scope="row">
                                                            {data.product}
                                                        </TableCell>
                                                        <TableCell component="th" scope="row">
                                                            {data.active_ingridient}
                                                        </TableCell>
                                                    </TableRow>
                                                );
                                            })
                                        }
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Box>
                        :null
                    }
                    {
                        (index === 4)?
                        <Box>
                            <Grid container >
                                <Grid item xs={12} sm={6} md={4}>
                                    <Box sx={{ ...productListContainer }}>
                                        <CardDisplay productimage={centron} productname="Centron" productdetails="Centron" details_log="centron"/>
                                    </Box>
                                </Grid>
                                <Grid item xs={12} sm={6} md={4}>
                                    <Box sx={{ ...productListContainer }}>
                                        <CardDisplay productimage={zenith} productname="Zenith" productdetails="Zenith" details_log="zenith"/>
                                    </Box>
                                </Grid>
                                
                                
                            </Grid>
                        </Box>
                        :null
                    }
                    {
                        (index === 5)?
                        <Box>
                            <Grid container >
                                <Grid item xs={12} sm={6} md={4}>
                                    <Box sx={{ ...productListContainer }}>
                                        <CardDisplay productimage={container} productname=""/>
                                    </Box>
                                </Grid>
                                <Grid item xs={12} sm={6} md={4}>
                                    <Box sx={{ ...productListContainer }}>
                                        <CardDisplay productimage={container} productname=""/>
                                    </Box>
                                </Grid>
                                <Grid item xs={12} sm={6} md={4}>
                                    <Box sx={{ ...productListContainer }}>
                                        <CardDisplay productimage={container} productname=""/>
                                    </Box>
                                </Grid>
                                
                            </Grid>
                        </Box>
                        :null
                    }
                    {
                        (index === 6)?
                        <Box>
                            <Typography
                            sx={{ 
                                // border:'1px solid #e8e8e8',
                                borderRadius:3,
                                padding:3,
                                marginBottom:3,
                                backgroundColor:bg2
                            }} 
                            component="div">
                                <Box 
                                sx={{ 
                                    width:'100%',
                                    display:'flex',
                                    marginBottom:2
                                }}>
                                    <Box>
                                        <img
                                        style={{ 
                                            width: 80, 
                                            objectFit:'contain',
                                            marginRight:7
                                        }}
                                        alt="Assist Product image"
                                        src={assist}/>
                                    </Box>
                                    <Box>
                                        <Box
                                            sx={{
                                                fontSize:16,
                                                fontFamily:'Arial',
                                                paddingTop:0.5,
                                                color:'#c53739'
                                            }}>
                                                Water Conditioner
                                        </Box>
                                        <Box
                                            sx={{
                                                fontSize:34,
                                                fontWeight:900,
                                                fontFamily:'Arial'
                                            }}>
                                                Assist
                                        </Box>
                                    </Box>
                                    
                                </Box>
                                <Box 
                                sx={{ 
                                    width:1
                                }}>
                                    The characteristics of water used in the spray tank can have a profound influence on the effectiveness of crop protection products. Hard water and high pH can be detrimental to the performance of crop protection products by preventing uptake into leaves. Assist is a water conditioner for use with selective and non-selective herbicides to improve spray water quality by softening and buffering spray water to pH6-6.5, in order to optimise herbicide uptake and performance.
                                </Box>
                            </Typography>

                            <Divider 
                            sx={{
                                marginBottom:3 
                            }}/>
                         
                            <Typography component="div"
                                sx={{ 
                                    // border:'1px solid #e8e8e8',
                                    borderRadius:3,
                                    padding:3,
                                    marginBottom:3,
                                    backgroundColor:bg2
                                }} >
                                <Box 
                                sx={{ 
                                    width:'100%',
                                    display:'flex',
                                    marginBottom:2
                                }}>
                                    <Box>
                                        <img
                                        style={{ 
                                            width: 80, 
                                            objectFit:'contain',
                                            marginRight:7
                                        }}
                                        alt="Assist Product image"
                                        src={union}/>
                                    </Box>
                                    <Box>
                                        <Box
                                            sx={{
                                                fontSize:16,
                                                fontFamily:'Arial',
                                                paddingTop:0.5,
                                                color:'#c53739'
                                            }}>
                                                Pod Sticker
                                        </Box>
                                        <Box
                                            sx={{
                                                fontSize:34,
                                                fontWeight:900,
                                                fontFamily:'Arial'
                                            }}>
                                                Union
                                        </Box>
                                    </Box>
                                    
                                </Box>
                                <Box 
                                sx={{ 
                                    width:1
                                }}>
                                    Pod shatter arises from the swelling of ripe pods in wet weather, and contracting in dry weather. In the run up to a late harvest, brittle over-mature crops are particularly at risk of pod shatter, as plants become older and drier with age. Iskay is a pod sticker designed to prevent pod shatter by coating the crop with a thin film of polymer, best described as a micro-mesh. This holds brittle pods together to prevent shattering, with sufficient elasticity to allow for the final stages of pod fill to maximise yield.
                                </Box>
                            </Typography>
                              
                            <Divider 
                            sx={{
                                marginBottom:3 
                            }}/>

                            <Typography component="div"
                                sx={{ 
                                    // border:'1px solid #e8e8e8',
                                    borderRadius:3,
                                    padding:3,
                                    marginBottom:3,
                                    backgroundColor:bg2
                                }} >
                                <Box 
                                sx={{ 
                                    width:'100%',
                                    display:'flex',
                                    marginBottom:2
                                }}>
                                    <Box>
                                        <img
                                        style={{ 
                                            width: 80, 
                                            objectFit:'contain',
                                            marginRight:7
                                        }}
                                        alt="Assist Product image"
                                        src={backrow}/>
                                    </Box>
                                    <Box>
                                        <Box
                                            sx={{
                                                fontSize:16,
                                                fontFamily:'Arial',
                                                paddingTop:0.5,
                                                color:'#c53739'
                                            }}>
                                                Adjuvant
                                        </Box>
                                        <Box
                                        sx={{
                                            fontSize:34,
                                            fontWeight:900,
                                            fontFamily:'Arial'
                                        }}>
                                            Backrow Maxx
                                        </Box>
                                   </Box>
                                    
                                </Box>
                                <Box 
                                sx={{ 
                                    width:1
                                }}>
                                    Take the performance uncertainty and safety risks out of your residual herbicide programme with Backrow’s reliability & safety – You can count on it! Pre-emergence residual herbicides have become vital in the war against black-grass and other hard to control grassweeds such as ryegrass and brome spp. Achieving the best results is essential to minimise population growth and the threat of further weed resistance, but like most aspects of crop production, their performance is highly dependant on the weather. The addition of adjuvant Backrow pre- and peri-emergence limits weather constraints on herbicide performance and protects crop and groundwater safety, making it a crucial partner for both reliable and safe herbicide efficacy at the early weed control timing.
                                </Box>
                            </Typography>
                               
                            <Divider 
                            sx={{
                                marginBottom:3 
                            }}/>

                            <Typography component="div"
                                sx={{ 
                                    // border:'1px solid #e8e8e8',
                                    borderRadius:3,
                                    padding:3,
                                    marginBottom:3,
                                    backgroundColor:bg2
                                }} >
                                <Box 
                                sx={{ 
                                    width:'100%',
                                    display:'flex',
                                    marginBottom:2
                                }}>
                                    <Box>
                                        <img
                                        style={{ 
                                            width: 80, 
                                            objectFit:'contain',
                                            marginRight:7
                                        }}
                                        alt="Assist Product image"
                                        src={kantor}/>
                                    </Box>
                                    <Box>
                                        <Box
                                            sx={{
                                                fontSize:16,
                                                fontFamily:'Arial',
                                                paddingTop:0.5,
                                                color:'#c53739'
                                            }}>
                                                Adjuvant
                                        </Box>
                                        <Box
                                        sx={{
                                            fontSize:34,
                                            fontWeight:900,
                                            fontFamily:'Arial'
                                        }}>
                                            Kantor
                                        </Box>
                                    </Box>
                                </Box>
                                <Box 
                                sx={{ 
                                    width:1
                                }}>
                                    Kantor is a unique activator adjuvant that brings unbeatable performance to crop protection sprays by removing the physical and chemical constraints that restrict activity and efficacy. Bringing compatibility to tank mixes, reliability in suboptimal application conditions, and versatility in use, Kantor is your perfect match for plant protection programmes to maximise performance and returns. Kantor’s unique ability to influence every stage of the spray delivery process makes it a hugely valuable addition to many of the plant protection sprays you’ll be making to your crops. With multiple herbicides, fungicides and PGRs often added to the spray tank at the same time in busy springs, it’s crucial they mix well together to make sure they perform when, where and how you need them to. With Kantor you can be confident that products applied to the tank are stable, safe and active, and delivered to/inside the leaf/ear where they are needed. It’s an unbeatable adjuvant. Make your crop protection sprays unbeatable with Kantor – it’s the perfect match for your spring spray programmes.
                                </Box>
                            </Typography>
                        </Box>
                        :null
                    }
                    {
                        (index === 7)?
                        <Box>
                            <Typography component="div"
                                sx={{ 
                                    border:'0px solid red',
                                    borderRadius:5,
                                    backgroundColor:bgcolor,
                                    padding:3,
                                    marginBottom:3 
                                }} >
                                    <Box 
                                    sx={{ 
                                        width:'100%',
                                        display:{
                                            lg:'flex',
                                            md:'flex',
                                            sm:'flex',
                                            xs:'block'
                                        },
                                        marginBottom:5
                                    }}>
                                        <Box
                                        sx={{
                                            marginRight:3
                                        }}>
                                            <img
                                            style={{ 
                                                width: 150, 
                                                objectFit:'contain',
                                                
                                            }}
                                            src={wuxal}/>
                                        </Box>
                                        <Box
                                        sx={{
                                            fontSize:{
                                                lg:40,
                                                md:40,
                                                sm:40,
                                                xs:30
                                            },
                                            fontWeight:'bold',
                                            paddingTop:2,
                                            marginBottom:1
                                        }}>
                                            Ascofol CoMo
                                        </Box>
                                        
                                    </Box>
                                    <Box 
                                    sx={{ 
                                        width:1
                                    }}>
                                        WUXAL Ascofol CoMo is an innovative biostimulant seaweed suspension derived from the seaweed Ascophyllum nodosum rich in molybdenum and cobalt. It has been specifically developed for the presowing seed treatment of soybean, bean and pea. Mo and Co are important in the process of nitrogen fixation. It contains seaweed extract (cytokinin- and auxin-like), which is well known for its hormone-like activity, improves soil bacteria activity, seed germination and seedling development.
                                    </Box>

                                    <TableContainer>
                                        <Table>
                                            <TableHead>
                                                <TableRow>
                                                    <TableCell>% w/w</TableCell>
                                                    <TableCell align="right"></TableCell>
                                                    <TableCell align="right"></TableCell>
                                                    <TableCell align="right">g/l</TableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                <TableRow>
                                                    <TableCell component="th" scope="row">
                                                        1.0
                                                    </TableCell>
                                                    <TableCell component="th" scope="row">
                                                        Co
                                                    </TableCell>
                                                    <TableCell component="th" scope="row">
                                                        Cobalt
                                                    </TableCell>
                                                    <TableCell component="th" scope="row">
                                                        15
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell component="th" scope="row">
                                                        10.4
                                                    </TableCell>
                                                    <TableCell component="th" scope="row">
                                                        Mo
                                                    </TableCell>
                                                    <TableCell component="th" scope="row">
                                                        Molybdenum
                                                    </TableCell>
                                                    <TableCell component="th" scope="row">
                                                        150
                                                    </TableCell>
                                                </TableRow>
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                    <Box
                                    sx={{
                                        fontSize:16,
                                        paddingTop:1,
                                    }}>
                                        All nutrients are water-soluble and Cobalt is fully chelated by EDTA.
                                    </Box>
                                </Typography>
                             
                                <Divider 
                                sx={{
                                    marginBottom:3 
                                }}/>

                                <Typography component="div"
                                    sx={{ 
                                        border:'0px solid red',
                                        borderRadius:5,
                                        backgroundColor:bgcolor,
                                        padding:3,
                                        marginBottom:3
                                    }} >

                                    <Box 
                                    sx={{ 
                                        width:'100%',
                                        display:{
                                            lg:'flex',
                                            md:'flex',
                                            sm:'flex',
                                            xs:'block'
                                        },
                                        marginBottom:5
                                    }}>
                                        <Box
                                        sx={{
                                            marginRight:3
                                        }}>
                                            <img
                                            style={{ 
                                                width: 150, 
                                                objectFit:'contain',
                                                
                                            }}
                                            alt=""
                                            src={terios}/>
                                        </Box>
                                        <Box
                                        sx={{
                                            fontSize:{
                                                lg:40,
                                                md:40,
                                                sm:40,
                                                xs:30
                                            },
                                            fontWeight:'bold',
                                            paddingTop:2,
                                            marginBottom:1
                                        }}>
                                            Terios Zn
                                        </Box>
                                        
                                    </Box>
                                    <Box 
                                    sx={{ 
                                        width:1
                                    }}>
                                        WUXAL Terios Zn is a micronutrient suspension for Seed Treatment with B, Cu, Mn, Mo, Zn, N and S. The composition of WUXAL Terios Zn meets the specific requirements of cereals, especially for crops with higher zinc requirement (wheat and corn) or when growing on soils with low zinc availability.
                                    </Box>
                                    <TableContainer>
                                        <TableHead>
                                            <TableRow>
                                                <TableCell>% w/w</TableCell>
                                                <TableCell align="right"></TableCell>
                                                <TableCell align="right"></TableCell>
                                                <TableCell align="right">g/l</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            <TableRow>
                                                <TableCell component="th" scope="row">
                                                    7.5
                                                </TableCell>
                                                <TableCell component="th" scope="row">
                                                    N
                                                </TableCell>
                                                <TableCell component="th" scope="row">
                                                    Nitrogen
                                                </TableCell>
                                                <TableCell component="th" scope="row">
                                                    102
                                                </TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell component="th" scope="row">
                                                    1.0
                                                </TableCell>
                                                <TableCell component="th" scope="row">
                                                    S
                                                </TableCell>
                                                <TableCell component="th" scope="row">
                                                    Sulphur
                                                </TableCell>
                                                <TableCell component="th" scope="row">
                                                    13.7
                                                </TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell component="th" scope="row">
                                                    0.2
                                                </TableCell>
                                                <TableCell component="th" scope="row">
                                                    B
                                                </TableCell>
                                                <TableCell component="th" scope="row">
                                                    Boron
                                                </TableCell>
                                                <TableCell component="th" scope="row">
                                                    2.74
                                                </TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell component="th" scope="row">
                                                    1.5
                                                </TableCell>
                                                <TableCell component="th" scope="row">
                                                    Cu
                                                </TableCell>
                                                <TableCell component="th" scope="row">
                                                    Copper
                                                </TableCell>
                                                <TableCell component="th" scope="row">
                                                    20.55
                                                </TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell component="th" scope="row">
                                                    0.5
                                                </TableCell>
                                                <TableCell component="th" scope="row">
                                                    Mn
                                                </TableCell>
                                                <TableCell component="th" scope="row">
                                                    Manganese
                                                </TableCell>
                                                <TableCell component="th" scope="row">
                                                    6.85
                                                </TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell component="th" scope="row">
                                                    0.1
                                                </TableCell>
                                                <TableCell component="th" scope="row">
                                                    Mo
                                                </TableCell>
                                                <TableCell component="th" scope="row">
                                                    Molybdenum
                                                </TableCell>
                                                <TableCell component="th" scope="row">
                                                    1.37
                                                </TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell component="th" scope="row">
                                                    4.0
                                                </TableCell>
                                                <TableCell component="th" scope="row">
                                                    Zn
                                                </TableCell>
                                                <TableCell component="th" scope="row">
                                                    Zinc
                                                </TableCell>
                                                <TableCell component="th" scope="row">
                                                    54.8
                                                </TableCell>
                                            </TableRow>
                                        </TableBody>
                                    </TableContainer>
                                    <Box
                                    sx={{
                                        fontSize:16,
                                        // fontWeight:'bold',
                                        paddingTop:1,
                                        marginBottom:1
                                    }}>
                                        All nutrients are water-soluble and the cationic micronutrients (Cu, Mn and Zn) are fully chelated by EDTA.
                                    </Box>
                                </Typography>
                                    
                        </Box>
                        :null
                    }
                    {
                        (index === 8)?
                        <Box>
                            <Grid container >
                                <Grid item xs={12} sm={6} md={4}>
                                    <Box sx={{ ...productListContainer }}>
                                        <CardDisplay productimage={container} productname=""/>
                                    </Box>
                                </Grid>
                                <Grid item xs={12} sm={6} md={4}>
                                    <Box sx={{ ...productListContainer }}>
                                        <CardDisplay productimage={container} productname=""/>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                        :null
                    }

                    {/* Displays Herbicides */}
                    {
                        (index === 9)?
                        <Box
                        sx={{
                            // border:'1px solid #e8e8e8',
                            borderRadius:5,
                            padding:3,
                            backgroundColor:bg2
                        }}>
                            <TableContainer sx={{ marginBottom: 2 }}>
                                <Table size="small">
                                    <TableHead>
                                        <TableCell component="th" scope="row">
                                        </TableCell>
                                        <TableCell component="th" scope="row">
                                            Products
                                        </TableCell>
                                        <TableCell component="th" scope="row">
                                            Active Ingridient
                                        </TableCell>
                                    </TableHead>
                                    <TableBody>
                                        {
                                            herbicides_list.map((data, index)=>{
                                                return(
                                                    <TableRow key={index}>
                                                        <TableCell component="th" scope="row">
                                                            {index + 1}
                                                        </TableCell>
                                                        <TableCell component="th" scope="row">
                                                            {data.product}
                                                        </TableCell>
                                                        <TableCell component="th" scope="row">
                                                            {data.active_ingridient}
                                                        </TableCell>
                                                    </TableRow>
                                                );
                                            })
                                        }
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Box>
                        :null
                    }
                    </Box>

                </Grid>
            </Grid>
        </Box>       
    );
}
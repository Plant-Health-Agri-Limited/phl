import { Box, Typography, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Divider } from "@mui/material";
import Image from "next/image";

const wuxal = '/images/WUXAL_Ascofol.jpg' 
const terios =  '/images/WUXAL_Terios.jpg' 

const bgcolor = '#F9F9F9'
export default function SeedDressig(){
    return(
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
                            <Image
                            width={150}
                            height={100}
                            style={{ 
                                marginRight:0
                            }}
                            alt=""
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
                            <Image
                            width={150}
                            height={100}
                            style={{ 
                                marginRight:7
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
    );
}
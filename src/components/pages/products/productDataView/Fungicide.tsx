import { Box, TableContainer, Table, TableHead, TableCell, TableBody, TableRow, Grid } from "@mui/material";
import fungicides_list from "../../../../constants/fungicides_list";
import CardDisplay from "../CardDisplay";
import { productListContainer } from '../../../../../styles/customcss'

const bg2= "#F9F9F9"

const priaxor = '/images/Priaxor.png'
const abacus = '/images/Abacus.png'
const opera = '/images/Opera.png'
const calibur = '/images/calibur.jpg'
const kapa = '/images/kapa.jpg'
const tripo = '/images/Tripo.jpg'

export default function Fungicide(){
    return(
        <>
            <Grid container >
                <Grid item xs={12} sm={6} md={4}>
                    <Box sx={{ ...productListContainer }}>
                        <CardDisplay productimage={priaxor} productname="Priaxor" productdetails="Priaxor" details_log="priaxor"/>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Box sx={{ ...productListContainer }}>
                        <CardDisplay productimage={abacus} productname="Abacus" productdetails="Abacus" details_log="abacus"/>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Box sx={{ ...productListContainer }}>
                        <CardDisplay productimage={opera} productname="Opera" productdetails="Opera" details_log="opera"/>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Box sx={{ ...productListContainer }}>
                        <CardDisplay productimage={calibur} productname="Calibur" productdetails="Calibur" details_log="calibur"/>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Box sx={{ ...productListContainer }}>
                        <CardDisplay productimage={kapa} productname="Kapa" productdetails="Kapa" details_log="kapa"/>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Box sx={{ ...productListContainer }}>
                        <CardDisplay productimage={tripo} productname="Tripo" productdetails="Tripo" details_log="tripo"/>
                    </Box>
                </Grid>
            </Grid>

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
                            <TableRow hover>
                                <TableCell component="td" scope="row">
                                </TableCell>
                                <TableCell component="td" scope="row">
                                    Products
                                </TableCell>
                                <TableCell component="td" scope="row">
                                    Active Ingridient
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                        {
                            fungicides_list.map((data, index)=>{
                                return(
                                    <TableRow key={index} hover>
                                        <TableCell component="td" scope="row">
                                            {index + 1}
                                        </TableCell>
                                        <TableCell component="td" scope="row">
                                            {data.product}
                                        </TableCell>
                                        <TableCell component="td" scope="row">
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
        </>
    );
}
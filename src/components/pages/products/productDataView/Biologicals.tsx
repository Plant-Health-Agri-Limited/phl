import { Box, TableContainer, Table, TableHead, TableCell, TableBody, TableRow, Grid } from "@mui/material";
import biologicals_list from "../../../../constants/biologicals_list";
import { productListContainer } from "../../../../../styles/customcss";
import CardDisplay from "../CardDisplay";

const bg2= "#F9F9F9"
const tricho = '/images/tricho.jpg'
const sudocel = '/images/sudocel.jpg'
const histick = '/images/Histick.jpg'
const rhizoflo = '/images/Rhizoflo.jpg'

export default function Fungicide(){
    return(
        <>
            <Grid container >
                <Grid item xs={12} sm={6} md={4}>
                    <Box sx={{ ...productListContainer }}>
                        <CardDisplay productimage={tricho} productname="Tricho" productdetails="Tricho" details_log="tricho"/>
                    </Box>
                </Grid> 
                <Grid item xs={12} sm={6} md={4}>
                    <Box sx={{ ...productListContainer }}>
                        <CardDisplay productimage={sudocel} productname="Sudocel" productdetails="Sudocel" details_log="sudocel"/>
                    </Box>
                </Grid> 
                <Grid item xs={12} sm={6} md={4}>
                    <Box sx={{ ...productListContainer }}>
                        <CardDisplay productimage={histick} productname="Histick" productdetails="Histick" details_log="histick"/>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Box sx={{ ...productListContainer }}>
                        <CardDisplay productimage={rhizoflo} productname="Rhizoflo" productdetails="Rhizoflo" details_log="rhizoflo"/>
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
                            <TableRow hover >
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
                            biologicals_list.map((data, index)=>{
                                return(
                                    <TableRow hover  key={index}>
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
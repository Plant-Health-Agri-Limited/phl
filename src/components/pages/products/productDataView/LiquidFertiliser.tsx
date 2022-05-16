import { Grid, Box } from "@mui/material";
import CardDisplay from "../CardDisplay";

import { productListContainer } from '../../../../../styles/customcss'

const delfan = '/images/delfan.png'
const final_k = '/images/final_k.png'
const trador = '/images/trador.png'
const twin_tech = '/images/twin_tech.png'

export default function LiquidFertiliser(){
    return(
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
    );
}
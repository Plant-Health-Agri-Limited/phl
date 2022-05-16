import { Grid, Box } from "@mui/material";
import { productListContainer } from "../../../../../styles/customcss";

import CardDisplay from "../CardDisplay";
const centron = '/images/centron.png'
const zenith = '/images/zenith.png'

export default function Insecticide(){
    return(
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
    );
}
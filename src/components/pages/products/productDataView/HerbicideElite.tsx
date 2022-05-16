import { Grid, Box } from "@mui/material";
import CardDisplay from "../CardDisplay";

import { productListContainer } from '../../../../../styles/customcss'

const elite_bingo = '/images/elite_bingo.jpg'
const elite_tribute = '/images/elite_tribute.jpg'
const indingo_elite = '/images/indigo_elite.jpg'
const wakanda = '/images/wakanda.jpeg'

export default function HerbicideElite(){
    return(
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
    );

}
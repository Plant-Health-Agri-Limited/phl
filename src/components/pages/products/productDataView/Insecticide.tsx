import { Grid, Box } from "@mui/material";
import { productListContainer } from "../../../../../styles/customcss";

import CardDisplay from "../CardDisplay";
const centron = '/images/centron.png'
const zenith = '/images/zenith.png'
const fastac = '/images/Fastac.png'

const chloros = '/images/chloros.png'
const lufenco = '/images/lufenco.png'
const maxium_2 = '/images/maxium_2.png'
const cambri = '/images/cambri.jpg'
const defender = '/images/defender.jpg'
const choking = '/images/choking.png'

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
            <Grid item xs={12} sm={6} md={4}>
                <Box sx={{ ...productListContainer }}>
                    <CardDisplay productimage={fastac} productname="Fastac" productdetails="Fastac" details_log="fastac"/>
                </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <Box sx={{ ...productListContainer }}>
                    <CardDisplay productimage={chloros} productname="Chloros" productdetails="Chloros" details_log="chloros"/>
                </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <Box sx={{ ...productListContainer }}>
                    <CardDisplay productimage={lufenco} productname="Lufenco" productdetails="Lufenco" details_log="lufenco"/>
                </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <Box sx={{ ...productListContainer }}>
                    <CardDisplay productimage={maxium_2} productname="Maxium" productdetails="Maxium" details_log="maxium"/>
                </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <Box sx={{ ...productListContainer }}>
                    <CardDisplay productimage={choking} productname="Choking" productdetails="Choking" details_log="choking"/>
                </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <Box sx={{ ...productListContainer }}>
                    <CardDisplay productimage={cambri} productname="Cambri" productdetails="Cambri" details_log="cambri"/>
                </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <Box sx={{ ...productListContainer }}>
                    <CardDisplay productimage={defender} productname="Defender" productdetails="Defender" details_log="defender"/>
                </Box>
            </Grid>
        </Grid>
    );
}
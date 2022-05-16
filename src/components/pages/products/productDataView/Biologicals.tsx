import { Grid, Box } from "@mui/material";
import { productListContainer } from "../../../../../styles/customcss";
import CardDisplay from "../CardDisplay";
const container = '/images/w_container.png'

export default function Biologicals(){
    return(
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
    )
}
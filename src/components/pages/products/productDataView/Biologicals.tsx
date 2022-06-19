import { Box, TableContainer, Table, TableHead, TableCell, TableBody, TableRow } from "@mui/material";
import biologicals_list from "../../../../constants/biologicals_list";

const bg2= "#F9F9F9"

export default function Fungicide(){
    return(
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
    );
}
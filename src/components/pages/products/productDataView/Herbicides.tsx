import { Box, TableContainer, Table, TableHead, TableCell, TableBody, TableRow } from "@mui/material";
import herbicides_list from "../../../../constants/herbicides_list";

const bg2= "#F9F9F9"

export default function Herbicides(){
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
    );
}
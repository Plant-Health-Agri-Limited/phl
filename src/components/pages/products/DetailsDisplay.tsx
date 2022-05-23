import React, { useState } from 'react'
import { 
    Box, 
    Typography, 
 } from '@mui/material'

 import Table from '@mui/material/Table';
 import TableBody from '@mui/material/TableBody';
 import TableCell from '@mui/material/TableCell';
 import TableContainer from '@mui/material/TableContainer';
 import TableHead from '@mui/material/TableHead';
 import TableRow from '@mui/material/TableRow'

export default function DetailsDisplay(props:any){
    return(
        <Box sx={{ 
                paddingLeft: 5,
                paddingRight: 5,
                borderRadius: 2,
                position: 'fixed', 
                display:'flex', 
                justifyContent: 'center',
                top: '0%',
                left:'0%', 
                width: '100vw', 
                height: '100vh',
                backgroundColor: 'rgba(28, 28, 28, 0.5)',
                boxShadow: '0 4px 20px 5px rgba(0, 0, 0, 0.2)',
                zIndex: 100,
                
            }}>
                <Box sx={{
                        paddingLeft: 5, 
                        backgroundColor: '#F4F4F4', 
                        width: 700, 
                        paddingRight: 5,
                    }}>
                    <Box sx={{ width: '100%', display:'flex', justifyContent: 'end'}}>
                        <button
                            type="button" 
                            onClick={()=>{
                                props.close(false)
                            }}
                            style={{ 
                                cursor: 'pointer',
                                marginTop: 2,
                                border: 'none', 
                                borderWidth: 1,
                                borderRadius: 3,
                                backgroundColor: 'transparent', 
                                color: '#F48200',
                                fontWeight: 100,
                                fontSize: 18
                            }}>close</button>
                    </Box>
                    {
                        (props.details === "final_k")?
                        <Box
                        sx={{
                            width:'100%',
                            height: '90%'
                        }}>
                            <Typography component="div">
                                <Box sx={{ 
                                        color: 'black',
                                        fontSize: 16, 
                                        fontWeight: 100,
                                        marginBottom: 5 
                                    }}>
                                    Product Details
                                </Box>
                                <Box sx={{ 
                                        color: 'black',
                                        fontSize: 24, 
                                        fontWeight: 'bold',
                                        marginBottom: 3
                                    }}>
                                    Final K
                                </Box>
                                <Box sx={{ 
                                        color: 'black',
                                        fontSize: 16, 
                                        fontWeight: 'bold',
                                    }}>
                                    Composition
                                </Box>
                                <TableContainer sx={{ marginBottom: 2 }}>
                                    <Table size="small">
                                        <TableHead>
                                            <TableRow>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            <TableRow>
                                                <TableCell component="th" scope="row">
                                                    Potassium (K2O)
                                                </TableCell>
                                                <TableCell component="th" scope="row">
                                                    462 g/l
                                                </TableCell>
                                                <TableCell component="th" scope="row">
                                                    (31 % p/p)
                                                </TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell component="th" scope="row">
                                                    Total Nitrogen (N) in ureic form
                                                </TableCell>
                                                <TableCell component="th" scope="row">
                                                    45 g/l
                                                </TableCell>
                                                <TableCell component="th" scope="row">
                                                    (3 % p/p)
                                                </TableCell>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                                <Box 
                                sx={{
                                    marginBottom:2
                                }}>
                                {/* details text goes here */}

                                Final K is a concentrated liquid product that is Potassium (K) based and 100% water soluble for crop nutrition. Prevents and treats Potassium deficiency.

                                </Box>
                                <Box 
                                sx={{ 
                                    width:'100%',
                                    paddingLeft:2,
                                    marginBottom:2 
                                }}>
                                    <ol>
                                        <li>through improving the speed of growth and size.</li>
                                        <li>through better sugar concentration (°Brix)</li>
                                        <li>through better colouring (anthocyans and carotenes)</li>
                                        <li>through better skin quality (cell walls)</li>
                                        <li>through better sugar (starch) accumulation.</li>
                                    </ol>
                                </Box>

                                <Box 
                                sx={{
                                    marginBottom:2
                                }}>
                                {/* details text goes here */}

                                Final K is a product designed to avoid antagonism with Ca++ and Mg++ ions present in hard water and which strongly decrease the effectiveness of potassium fertilisers.
                                <br/><br/>
                                Final K may be used totally safely because it is free of Chlorine, Sulphur, and Nitric and Ammoniacal Nitrogen.

                                </Box>
                            </Typography>
                        </Box>
                        :<></>
                    }

                    {
                        (props.details === "tradebor_mo")?
                        <Box
                        sx={{
                            width:'100%',
                            height: '90%'
                        }}>
                            <Typography component="div">
                                <Box sx={{ 
                                        color: 'black',
                                        fontSize: 16, 
                                        fontWeight: 100,
                                        marginBottom: 5 
                                    }}>
                                    Product Details
                                </Box>
                                <Box sx={{ 
                                        color: 'black',
                                        fontSize: 24, 
                                        fontWeight: 'bold',
                                        marginBottom: 5 
                                    }}>
                                    Tradebor Mo
                                </Box>
                                <TableContainer sx={{ marginBottom: 2 }}>
                                    <Table size="small">
                                        <TableHead>
                                            <TableRow>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            <TableRow>
                                                <TableCell component="th" scope="row">
                                                    Boron ethanolamine (B)
                                                </TableCell>
                                                <TableCell component="th" scope="row">
                                                    105 g/L
                                                </TableCell>
                                                <TableCell component="th" scope="row">
                                                    (8,1% W/W)
                                                </TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell component="th" scope="row">
                                                    Molybdenum (Mo)
                                                </TableCell>
                                                <TableCell component="th" scope="row">
                                                    12 g/L
                                                </TableCell>
                                                <TableCell component="th" scope="row">
                                                    (0,9 % W/W)
                                                </TableCell>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                                <Box >
                                {/* details text goes here */}
                                </Box>
                            </Typography>
                        </Box>
                        :<></>
                    }
                    {
                        (props.details === "delfan_plus")?
                        <Box
                        sx={{
                            width:'100%',
                            height: '90%'
                        }}>
                            <Typography component="div">
                                <Box sx={{ 
                                        color: 'black',
                                        fontSize: 16, 
                                        fontWeight: 100,
                                        marginBottom: 5 
                                    }}>
                                    Product Details
                                </Box>
                                <Box sx={{ 
                                        color: 'black',
                                        fontSize: 24, 
                                        fontWeight: 'bold',
                                        marginBottom: 5 
                                    }}>
                                    Delfan plus
                                </Box>
                                <Box 
                                sx={{
                                    marginBottom:2
                                }}>
                                {/* details text goes here */}

                                    Delfan Plus is an easily and rapidly assimilated bio-stimulant formulated on a base of L-α-amino acids.
                                    <br/><br/>
                                    Delfan Plus is specifically formulated to reduce stress events on plants.
                                    <br/>
                                </Box>
                                <Box sx={{ 
                                        color: 'black',
                                        fontSize: 20, 
                                        fontWeight: 'bold',
                                        marginBottom: 2                                    
                                    }}>
                                    Benefits
                                </Box>
                                <Box 
                                sx={{ 
                                    width:'100%',
                                    paddingLeft:2 
                                }}>
                                    <ol>
                                        <li>Efficient anti-stress effect in adverse climatic situations.</li>
                                        <li>Reduces the stress effects of systemic agrochemicals and fertilizers applied to crops.</li>
                                        <li>Improves nutrient uptake and fertilizer efficiency.</li>
                                    </ol>
                                </Box>
                                <Box >
                                {/* details text goes here */}
                                </Box>
                            </Typography>
                        </Box>
                        :<></>
                    }
                    {
                        (props.details === "twintech")?
                        <Box
                        sx={{
                            width:'100%',
                            height: '90%'
                        }}>
                            <Typography component="div">
                                <Box sx={{ 
                                        color: 'black',
                                        fontSize: 16, 
                                        fontWeight: 100,
                                        marginBottom: 5 
                                    }}>
                                    Product Details
                                </Box>
                                <Box sx={{ 
                                        color: 'black',
                                        fontSize: 24, 
                                        fontWeight: 'bold',
                                        marginBottom: 5 
                                    }}>
                                    Twintech
                                </Box>
                                <Box 
                                sx={{
                                    marginBottom:2
                                }}>
                                {/* details text goes here */}

                                Twintech Zn+Mn is a highly concentrated zinc and manganese solution enriched with boron, molybdenum, magnesium and copper. Twintech Zn+Mn is
                                specially formulated to boost zinc and manganese uptake which makes it ideal for the efficient prevention and correction of simultaneous deficiencies in
                                both micronutrients, ensuring better translocation inside the plant and the maximum quality of fruits and harvest.
                                </Box>
                                <Box >
                                {/* details text goes here */}
                                </Box>
                            </Typography>
                        </Box>
                        :<></>
                    }

                    {/* Herbicide Elite */}
                    {
                        (props.details === "wakanda_elite")?
                        <Box
                        sx={{
                            width:'100%',
                            height: '90%',
                            overflowY:'auto'
                        }}>
                            <Typography component="div">
                                <Box sx={{ 
                                        color: 'black',
                                        fontSize: 16, 
                                        fontWeight: 100,
                                        marginBottom: 5 
                                    }}>
                                    Product Details
                                </Box>
                                <Box sx={{ 
                                        color: 'black',
                                        fontSize: 24, 
                                        fontWeight: 'bold',
                                        marginBottom: 1
                                    }}>
                                    Wakanda Elite
                                </Box>

                                <Typography component="div" 
                                sx={{ width:'100%', marginBottom:1, fontSize:14 }}>
                                    <Box>Haloxyfop 6% | Clethodim 12% ME</Box>
                                    <Box>700ml/ha</Box>
                                </Typography>

                                <Box 
                                sx={{
                                    marginBottom:2
                                }}>
                                {/* details text goes here */}

                                Wankanda Elite  is a systemic post emergent selective herbicide for the control of annual and perennial grasses. It is formulated with the active ingredients Clethodim and Haloxyfop and is developed under the innovative Elite Technology. Which, thanks to the application of Nanotechnology, allows maximum efficiency in the assets and achieves new technical and environmental benefits.<br/><br/>
                                Due to its Elite technology, Wakanda elite does not require the addition of oils. Wakanda elite has excellent stability and compatibility in tank mixes. Ensuring a homogeneous dose throughout the treatment.
                                </Box>
                                <Box sx={{ 
                                        color: 'black',
                                        fontSize: 20, 
                                        fontWeight: 'bold',
                                        marginBottom: 2                                    
                                    }}>
                                    Benefits
                                </Box>
                                <Box 
                                sx={{ 
                                    width:'100%',
                                    paddingLeft:2 
                                }}>
                                    <ol>
                                        <li>Excellent compatibility in mixtures</li>
                                        <li>Avoid stock cuts (and peak capping)</li>
                                        <li>Does not leave precipitates at the bottom of the tank</li>
                                        <li>Consistent dosing and control throughout the batch helps prevent resistance build-up</li>
                                        <li>Lower risk of Phytotoxicity</li>
                                        <li>Strengthens the products of the mixture</li>
                                        <li>Complements the action of Glyphosate on difficult weeds</li>
                                        <li>Allows alternating modes of herbicide action</li>
                                    </ol>
                                </Box>
                            </Typography>
                        </Box>
                        :<></>
                    }

                    {
                        (props.details === "tribute_elite")?
                        <Box
                        sx={{
                            width:'100%',
                            height: '90%',
                            overflowY:'auto'
                        }}>
                            <Typography component="div">
                                <Box sx={{ 
                                        color: 'black',
                                        fontSize: 16, 
                                        fontWeight: 100,
                                        marginBottom: 5 
                                    }}>
                                    Product Details
                                </Box>
                                <Box sx={{ 
                                        color: 'black',
                                        fontSize: 24, 
                                        fontWeight: 'bold',
                                        marginBottom: 1
                                    }}>
                                    Tribute Elite
                                </Box>
                                <Typography component="div" 
                                sx={{ width:'100%', marginBottom:1, fontSize:14 }}>
                                    <Box>Metribuzin 20% ME </Box>
                                    <Box>1.5 liters/ha </Box>
                                </Typography>
                                <Box 
                                sx={{
                                    marginBottom:2
                                }}>
                                {/* details text goes here */}

                                Tribute Elite is a selective herbicide that is absorbed by the roots and foliage of weeds and acts by blocking 
                                <br/><br/>
                                Tribute Elite, formulated with Elite technology, allows great control and residual efficiency and, due to its formulation, excellent solubility and compatibility with other products in tank mixtures.
                                </Box>
                                <Box sx={{ 
                                        color: 'black',
                                        fontSize: 20, 
                                        fontWeight: 'bold',
                                        marginBottom: 2                                    
                                    }}>
                                    Benefits
                                </Box>
                                <Box 
                                sx={{ 
                                    width:'100%',
                                    paddingLeft:2 
                                }}>
                                    <ol>
                                        <li><b>Greater Bioefficacy:</b>  Thanks to the formulation with Nanotechnology and the inclusion of specific surfactants that protect the active ingredient, greater bioavailability of the active ingredient is obtained. Thus achieving excellent controls with a lower amount of assets per hectare.</li>
                                        <li><b>Excellent Compatibility:</b> Unlike conventional formulations (Concentrated Suspensions or Dispersible Granules), the elite formulation gives Tribute excellent compatibility in tank mixes. Thus avoiding problems of capping peaks and achieving a homogeneous dose that ensures good control and prevents Phytotoxicity. Helping in this way to avoid the generation of Resistance. </li>
                                        <li>Excellent post emergent action on new weeds </li>
                           
                                    </ol>
                                </Box>
                            </Typography>
                        </Box>
                        :<></>
                    }

                    {
                        (props.details === "indigo_elite")?
                        <Box
                        sx={{
                            width:'100%',
                            height: '90%',
                            overflowY:'auto'
                        }}>
                            <Typography component="div">
                                <Box sx={{ 
                                        color: 'black',
                                        fontSize: 16, 
                                        fontWeight: 100,
                                        marginBottom: 5 
                                    }}>
                                    Product Details
                                </Box>
                                <Box sx={{ 
                                        color: 'black',
                                        fontSize: 24, 
                                        fontWeight: 'bold',
                                        marginBottom: 1
                                    }}>
                                    Tribute Elite
                                </Box>
                                <Typography component="div" 
                                sx={{ width:'100%', marginBottom:1, fontSize:14 }}>
                                    <Box>Imazethapyr 4.5% ME</Box>
                                    <Box>600cc/ha </Box>
                                </Typography>
                                <Box 
                                sx={{
                                    marginBottom:2
                                }}>
                                {/* details text goes here */}

                                <b>Indigo Elite</b> is a selective systemic post-emergence herbicide with residual action for soybeans. After application, susceptible weeds stop growing and stop competing with the crop; their death may take 3 to 4 weeks. 
                                <br/><br/>
                                It also provides residual control of susceptible weeds that germinate after application. For optimum weed growth, moisture conditions must be such as to encourage active growth. Occasionally, soybeans treated between the 1st to 3rd trifoliolate leaf stage may show slight shortening of internodes and yellowing of leaves; however, these symptoms disappear, not affecting yields adversely.
                                </Box>
                                {/* */}
                            </Typography>
                        </Box>
                        :<></>
                    }

                    {
                        (props.details === "centron")?
                        <Box
                        sx={{
                            width:'100%',
                            height: '90%',
                            overflowY:'auto'
                        }}>
                            <Typography component="div">
                                <Box sx={{ 
                                        color: 'black',
                                        fontSize: 16, 
                                        fontWeight: 100,
                                        marginBottom: 5 
                                    }}>
                                    Product Details
                                </Box>
                                <Box sx={{ 
                                        color: 'black',
                                        fontSize: 24, 
                                        fontWeight: 'bold',
                                        marginBottom: 1
                                    }}>
                                    Centron
                                </Box>
                                <Typography component="div" 
                                sx={{ width:'100%', marginBottom:1, fontSize:14 }}>
                                    <Box>Abamectin 2% + Lufenuron 5% ME</Box>
                                    <Box>120ml/ha  </Box>
                                </Typography>
                                <Box 
                                sx={{
                                    marginBottom:2
                                }}>
                                {/* details text goes here */}

                                <b>Centron</b> is an insecticide with Nanoactive technology. It combines two active ingredients with different modes of action and proven control efficacy (Abamectin 2% and Lufenuron 5%). It acts by contact and ingestion, has a tumbling effect and a prolonged residual effect, for the control of lepidoptera larvae. The action of lufenuron by interfering with chitin synthesis inhibits larval growth. 
                                <br/><br/>
                                Centron is indicated mainly for the control of lepidoptera caterpillars, thrips and mites in crops: soybean, corn, sunflower and rapeseed, fruit trees, vegetables and flowers.
                                </Box>
                                <Box sx={{ 
                                        color: 'black',
                                        fontSize: 20, 
                                        fontWeight: 'bold',
                                        marginBottom: 2                                    }}>
                                    Benefits
                                </Box>
                                <Box 
                                sx={{ 
                                    width:'100%',
                                    paddingLeft:2 
                                }}>
                                    <ol>
                                        <li>Less amount of active ingredients per hectare</li>
                                        <li>Greater Bioavailability and Bioefficacy</li>
                                        <li>Minimal impact on beneficial insects</li>
                                        <li>Greater ovicidal action</li>
                                        <li>High environmental profile</li>
                                        <li>High residuality and initial control</li>
                                    </ol>
                                </Box>
                            </Typography>
                        </Box>
                        :<></>
                    }
                    {
                        (props.details === "zenith")?
                        <Box
                        sx={{
                            width:'100%',
                            height: '90%',
                            overflowY:'auto'
                        }}>
                            <Typography component="div">
                                <Box sx={{ 
                                        color: 'black',
                                        fontSize: 16, 
                                        fontWeight: 100,
                                        marginBottom: 5 
                                    }}>
                                    Product Details
                                </Box>
                                <Box sx={{ 
                                        color: 'black',
                                        fontSize: 24, 
                                        fontWeight: 'bold',
                                        marginBottom: 1
                                    }}>
                                    Zenith
                                </Box>
                                <Typography component="div" 
                                sx={{ width:'100%', marginBottom:1, fontSize:14 }}>
                                    <Box>Lambda Cyhalothrin 2.5% ME</Box>
                                    <Box>40ml/ha </Box>
                                </Typography>
                                <Box 
                                sx={{
                                    marginBottom:2
                                }}>
                                {/* details text goes here */}

                                <b>Zenith</b> is an insecticide formulated with Nanoactive Technology, especially recommended for the control of cutworms and defoliators
                                <br/><br/>
                                Its formulation with Nanoactive Technology allows it to achieve excellent control performance with less active ingredient per hectare and, in turn, cause minimal impact on the environment.
                                <br/><br/>
                                ZENITH is a broad-spectrum pyrethroid insecticide that acts by contact and ingestion (double action), also presenting a good residual effect. It also has ovicidal and adulticidal activity. It is characterized by its great flipping power and its persistent protection.
                                </Box>
                                <Box sx={{ 
                                        color: 'black',
                                        fontSize: 20, 
                                        fontWeight: 'bold',
                                        marginBottom: 2                                    }}>
                                    Benefits
                                </Box>
                                <Box 
                                sx={{ 
                                    width:'100%',
                                    paddingLeft:2 
                                }}>
                                    <ol>
                                        <li>Greater bioefficacy and bioavailability</li>
                                        <li>thermodynamic stability</li>
                                        <li>Excellent penetration properties</li>
                                        <li>great flipping power</li>
                                        <li>high persistence</li>
                                        <li>Low environmental impact</li>
                                        <li>Greater operator protection</li>
                                    </ol>
                                </Box>
                            </Typography>
                        </Box>
                        :<></>
                    }
                </Box>
        </Box>
    );
}
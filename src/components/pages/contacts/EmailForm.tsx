import { 
    Box, 
    Grid, 
    Typography, 
    Container
 } from '@mui/material'

import Footer from '../../utils/Footer'
import SendIcon from '@mui/icons-material/Send';
import MailIcon from '@mui/icons-material/Mail';
import SendButton from '../../utils/SendButton';
import { useFormik } from 'formik';
import { SpinnerDotted } from 'spinners-react';
import { testGetData } from '../../../services/methods';


const sleep = (ms:number) => new Promise((r) => setTimeout(r, ms));

export default function EmailForm(){

    const formik = useFormik({
        initialValues: {
          email: '',
          subject:'',
          message:''
        },

        onSubmit: async (values) => {
            const test = await sleep(5000)
        },
    });

    return(
        <Box sx={{ width:'100%' }}>
            <Box
            sx={{
                display:'flex',
            }}>
                <MailIcon
                sx={{
                    marginRight:1
                }}/>
                <Typography 
                component="div"
                sx={{
                    marginBottom:2,
                    fontSize:18
                }}>
                    Get in touch with us
                </Typography>
            </Box>
            <Box 
            sx={{ 
                position:'relative',
                width: {
                    lg:400,
                    md:400,
                    sm:'100%',
                    xs:'100%'
                },
                marginBottom:{
                    lg:0,
                    md:0,
                    sm:5,
                    xs:3
                }
            }}>
                {
                    (formik.isSubmitting)?
                    <Box
                    sx={{
                        position:'absolute',
                        width:'100%',
                        top:'35%',
                        display:'flex',
                        justifyContent:'center',
                        zIndex:5
                    }}>
                        <SpinnerDotted size={50} thickness={150} speed={100} color="#ffa566" />
                    </Box>
                    :<></>
                }
                <form onSubmit={formik.handleSubmit}>
                    <Box sx={{width:'100%', marginBottom:1}}>
                        
                        <label className="label-form">Email</label>
                        <input  
                            className="input" 
                            type="email" 
                            placeholder="Enter valid e-mail"
                            name="email" 
                            onChange={formik.handleChange}
                            value={formik.values.email}/>
                    </Box>
                    <Box sx={{width:'100%', marginBottom:1}}>
                        <label className="label-form">Subject</label>
                        <input
                            className="input" 
                            type="text" 
                            placeholder="Enter subject" 
                            name="subject"
                            onChange={formik.handleChange}
                            value={formik.values.subject}/>
                    </Box>
                    <Box sx={{width:'100%', marginBottom:1}}>
                        <label className="label-form">Message</label>
                        <textarea 
                            className="input" 
                            style={{ 
                                    borderRadius: 5, 
                                    width: '100%', 
                                    height:200,
                                    // backgroundColor: 'rgba(220, 220, 220, 0.4)' 
                                }}  
                            name="message"
                            placeholder="Enter your message"
                            onChange={formik.handleChange}
                            value={formik.values.message}>
                        </textarea>
                    </Box>
                    <Box
                    sx={{ 
                        width:'100%',
                        border:'0px solid red',
                        display:'flex',
                        justifyContent:'flex-start'
                    }}>
                        <SendButton type="submit" startIcon={<SendIcon />}>
                            SEND EMAIL
                        </SendButton>
                    </Box>        
                </form>
            </Box>
        </Box>
    );
}
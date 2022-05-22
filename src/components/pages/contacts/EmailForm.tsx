import React, { useState } from 'react';

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
import Fade from '@mui/material/Fade';

interface Errors {
    email: string,
    subject: string,
    message: string
}

const sleep = (ms:number) => new Promise((r) => setTimeout(r, ms));

export function SingleErrorMessage(props:any){
    return(
        (props.errormessage)?
        <Box sx={{ color: 'red', textAlign:'center', fontSize:14, marginBottom:2 }}>
            {props.errormessage}
        </Box>
        :<></>
    )
}

export default function EmailForm(){
    const [sent, setSent] = useState(false)
    const formik = useFormik({
        validateOnChange:false,
        validateOnBlur:false,
        initialValues: {
          email: '',
          subject:'',
          message:''
        },
        validate: (values)=>{
            const errors = {} as Errors

            if (!values.email) {
                errors.email = 'email cannot be empty'
            }

            else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'invalid email address';
            }

            if (!values.subject) {
                errors.subject = 'subject cannot be empty'
            }

            if (!values.message) {
                errors.message = 'message cannot be empty'
            }

            return errors
        },

        onSubmit: async (values) => {
            const test = await sleep(5000)
            setSent(true)
            setTimeout(function(){
                setSent(false)
            }, 3000)
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
                <Fade in={sent} >
                    <Box
                    sx={{
                        position:'absolute',
                        width:'100%',
                        top:'35%',
                        display:'flex',
                        justifyContent:'center',
                        zIndex:5
                    }}>
                        <Typography
                        component="div"
                        sx={{
                            textAlign:'center',
                            backgroundColor:'#ffa566',
                            borderRadius:2,
                            fontSize:14,
                            paddingLeft:1,
                            paddingRight:1,
                            paddingTop:1.5,
                            boxShadow:'0px 1px 10px -3px rgba(0,0,0,0.2)',
                            color:'white',
                            height:50
                        }}>
                            Email sent successfully!
                        </Typography>
                    </Box>
                </Fade>
                {
                    (false)?
                    <Box
                    sx={{
                        position:'absolute',
                        width:'100%',
                        top:'35%',
                        display:'flex',
                        justifyContent:'center',
                        zIndex:5
                    }}>
                        <Typography
                        component="div"
                        sx={{
                            textAlign:'center',
                            backgroundColor:'#ffedef',
                            borderRadius:2,
                            fontSize:14,
                            paddingLeft:1,
                            paddingRight:1,
                            boxShadow:'0px 1px 10px -3px rgba(0,0,0,0.2)',
                            color:'red',
                            paddingTop:1.5,
                            height:50
                        }}>
                            Email not sent, try again!
                        </Typography>
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
                        <SingleErrorMessage errormessage={formik.errors.email}/>
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
                            <SingleErrorMessage errormessage={formik.errors.subject}/>
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
                        <SingleErrorMessage errormessage={formik.errors.message}/>
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
import React, { useState } from 'react';

import { 
    Box, 
    Grid, 
    Typography, 
    Container,
    TextField
 } from '@mui/material'

import Footer from '../../utils/Footer'
import SendIcon from '@mui/icons-material/Send';
import MailIcon from '@mui/icons-material/Mail';
import SendButton from '../../utils/SendButton';
import { useFormik } from 'formik';
import { SpinnerDotted } from 'spinners-react';
import { testGetData } from '../../../services/methods';
import Fade from '@mui/material/Fade';
import emailjs from '@emailjs/browser';

interface Errors {
    email: string,
    subject: string,
    message: string
}

const sleep = (ms:number) => new Promise((r) => setTimeout(r, ms));

export function SingleErrorMessage(props:any){
    return(
        (props.errormessage)?
        <Typography component="div" sx={{ color: 'red', textAlign:'center', fontSize:14, marginBottom:2 }}>
            {props.errormessage}
        </Typography>
        :<></>
    )
}

export default function EmailForm(){
    const [sent, setSent] = useState(false)
    const [sendFailed, setSendFailed] = useState(false)
    const [playSendAniamtion, setPlaySendAnimation] = useState(false)
    
    const form = React.useRef<any>()!

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
            setPlaySendAnimation(true)
            emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
            .then((result) => {
                setPlaySendAnimation(false)
                setSent(true)
                setTimeout(function(){
                    setSent(false)
                }, 3000)
            }, (error) => {
                setPlaySendAnimation(false)
                setSendFailed(true)
                setTimeout(function(){
                    setSendFailed(false)
                }, 3000)
            });

            formik.resetForm();
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
                    (playSendAniamtion)?
                    <Box
                    sx={{
                        position:'absolute',
                        width:'100%',
                        display:'flex',
                        justifyContent:'center',
                        alignItems:'center',
                        height:'100%',
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
                        display:'flex',
                        justifyContent:'center',
                        alignItems:'center',
                        height:'100%',
                        zIndex:5
                    }}>
                        <Typography
                        component="div"
                        sx={{
                            textAlign:'center',
                            backgroundColor:'#ffa566',
                            borderRadius:2,
                            fontSize:14,
                            boxShadow:'0px 1px 10px -3px rgba(0,0,0,0.2)',
                            color:'white',
                            display:'flex',
                            alignItems:'center',
                            height:50,
                            padding:1
                        }}>
                            Email sent successfully!
                        </Typography>
                    </Box>
                </Fade>
                {
                    (sendFailed)?
                    <Box
                    sx={{
                        position:'absolute',
                        width:'100%',
                        display:'flex',
                        justifyContent:'center',
                        alignItems:'center',
                        height:'100%',
                        zIndex:5
                    }}>
                        <Typography
                        component="div"
                        sx={{
                            textAlign:'center',
                            backgroundColor:'#ffedef',
                            borderRadius:2,
                            fontSize:14,
                            boxShadow:'0px 1px 10px -3px rgba(0,0,0,0.2)',
                            color:'red',
                            display:'flex',
                            alignItems:'center',
                            height:50,
                            padding:1
                        }}>
                            Email not sent, try again!
                        </Typography>
                    </Box>
                    :<></>
                }
                <form ref={form} onSubmit={formik.handleSubmit}>
                    <Box sx={{width:'100%', marginBottom:1}}>
                        <TextField
                            fullWidth
                            size="small"
                            label="Your Email"
                            type="email" 
                            name="email" 
                            onChange={formik.handleChange}
                            value={formik.values.email}
                        />
                        <SingleErrorMessage errormessage={formik.errors.email}/>
                    </Box>
                    <Box sx={{width:'100%', marginBottom:1}}>
                        <TextField
                            fullWidth
                            size="small"
                            label="Subject"
                            type="text" 
                            placeholder="Enter subject" 
                            name="subject"
                            onChange={formik.handleChange}
                            value={formik.values.subject}
                        />
                        <SingleErrorMessage errormessage={formik.errors.subject}/>
                    </Box>
                    <Box sx={{width:'100%', marginBottom:1}}>
                        <TextField   
                            fullWidth
                            size="small"
                            label="Message"
                            name="message"
                            placeholder="Enter your message"
                            multiline
                            rows={8}
                            onChange={formik.handleChange}
                            value={formik.values.message}
                        />
                        <SingleErrorMessage errormessage={formik.errors.message}/>
                    </Box>
                    <Box
                    sx={{ 
                        width:'100%',
                        border:'0px solid red',
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
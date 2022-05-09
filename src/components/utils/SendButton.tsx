import { styled } from '@mui/material/styles';
import { Box, Container, Typography, Button } from '@mui/material'

const SendButton = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 14,
    padding: '6px 12px',
    border: '0px solid',
    lineHeight: 1.5,
    backgroundColor: '#ee7623',
    color:'white',
    borderColor: 'none',
    fontFamily: [
        'Poppins Regular',
        'Arial',
    ].join(','),
    '&:hover': {
      backgroundColor: '#ee7623',
      borderColor: '#ee7623',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#ee7623',
      borderColor: '#ee7623',
    },
    '&:focus': {
      boxShadow: 'white',
    },
  });
  
  export default SendButton
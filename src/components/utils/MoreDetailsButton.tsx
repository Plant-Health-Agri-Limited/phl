import { styled } from '@mui/material/styles';
import { Box, Container, Typography, Button } from '@mui/material'

const MoreDetailsButton = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 14,
    padding: '6px 12px',
    border: '1px solid',
    lineHeight: 1.5,
    // backgroundColor: '#ee7623',
    color:'#ee7623',
    borderColor: '#ee7623',
    fontFamily: [
        'Poppins Medium',
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
  
  export default MoreDetailsButton
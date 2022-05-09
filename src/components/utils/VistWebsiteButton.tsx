import { styled } from '@mui/material/styles';
import { Box, Container, Typography, Button } from '@mui/material'

const VistWebsiteButton = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 14,
    padding: '6px 12px',
    border: '0px solid',
    lineHeight: 1.5,
    backgroundColor: '#f7865c',
    color:'white',
    borderColor: 'none',
    fontFamily: [
        'Poppins Regular',
        'Arial',
    ].join(','),
    '&:hover': {
      backgroundColor: '#f7865c',
      borderColor: '#f7865c',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#f7865c',
      borderColor: '#f7865c',
    },
    '&:focus': {
      boxShadow: 'white',
    },
  });
  
  export default VistWebsiteButton
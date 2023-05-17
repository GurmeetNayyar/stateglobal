import React from 'react'
import "./Main.css";
import Signup from './Signup';
import Login from './Login';
import { Box, Grid } from '@mui/material';
import Register from './Register';
const Main = () => { const background={ backgroundImage: "linear-gradient(90deg, #ba000d 20%, white 0%)",width:"78vw" ,height:"80vh" ,padding:"12vh 10vw",}

const imageStyle={width:"50%",
 backgroundColor:"white",overflow:"hidden"}
 const imgSize={width:"100%",height:"100%"}
  return (

    <Box style={background} >
 <Box sx={{ boxShadow: 3 }}>
      <Grid container spacing={0}  >
      <Grid style={imageStyle}item sx={{ display: { xs: 'none', lg: 'block', xl: 'none' } }}  ><img src='./welcomeD.jpg' style={imgSize}></img></Grid>
      <Grid item md={6} >
      <Register/>
      </Grid>  
      </Grid>
      </Box>
    </Box>
  )
}

export default Main
import { Box, Button, Checkbox, FormControl, FormControlLabel, FormLabel, Grid, Paper, Radio, RadioGroup, Stack, TextField, Typography } from '@mui/material'
import React from 'react'

const Signup = () => {
  
    const headerStyle = { backgroundImage: "linear-gradient(90deg, #ba000d 2%, white 0%)",}
    
    const marginTop = { marginTop: 5 }
   const basicStyle={backgroundColor:"white",width:"100%",padding:"20px"}
  
  
    return (
        <Grid style={basicStyle}>
            
                <Box sx= { { pl:2,pt:0,mt:0,pb:0,mb:2}} style={headerStyle}>

                <Typography variant='caption' 
                ><h2 style={{color:"#ba000d",margin:'0',fontWeight:"700"}}>Login here</h2>
                <h4 style= { { margin:0}}>loren dummy text</h4>
                    </Typography>
                </Box>
                <form>
                <Stack spacing={2}>
                    <TextField fullWidth label='Name' placeholder="Enter your name" />
                    <TextField fullWidth label='Email' placeholder="Enter your email" />
                    <FormControl component="fieldset" style={marginTop}>
                        <FormLabel component="legend">Gender</FormLabel>
                        <RadioGroup aria-label="gender" name="gender" style={{ display: 'initial' }}>
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                        </RadioGroup>
                    </FormControl></Stack>
                    <Stack spacing={2}>
                        <TextField fullWidth label='Phone Number' placeholder="Enter your phone number" />
                        <TextField fullWidth label='Password' placeholder="Enter your password" />
                        <TextField fullWidth label='Confirm Password' placeholder="Confirm your password" /></Stack>
                    <FormControlLabel
                        control={<Checkbox name="checkedA" />}
                        label="I accept the terms and conditions."
                    />
                    <Box textAlign='center'>
                    <Typography align='center'>
                    <Button type='submit' variant='contained' style={{ backgroundColor: '#ba000d' }} >Login</Button>
                    </Typography>
                    </Box>
                   
                </form>
          
        </Grid>
      
    )
}

export default Signup;
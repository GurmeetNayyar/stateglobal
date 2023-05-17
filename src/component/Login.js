import React from 'react'
import Button from '@mui/material/Button';
import { Grid, Paper, Box, Container, Stack, FormLabel, RadioGroup, Radio, FormControlLabel, Typography, Select, MenuItem, } from '@mui/material';
import TextField from '@mui/material/TextField';
import FilledInput from '@mui/material/FilledInput';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';

const Login = () => {
  const [Subscription, setSubscription] = React.useState('');

  const handleChange = (event) => {
    setSubscription(event.target.value);
  };

  return (


    <Grid bgcolor="#F8F8FF" sx={{ mt: 10, ml: 5, mr: 10, p: 4 }}>




      <Grid container spacing={6} rowSpacing={3} sx={{mb:2}} >



        <Grid item md={6} sm={12}  >


          <FormControl variant="standard" fullWidth sx={{ m: 2 }}>
            <InputLabel id="demo-simple-select-standard-label">Subscription Type</InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={Subscription}
              onChange={handleChange}
              label="Subscription"
            >
              <MenuItem value="">
                <em>Select</em>
              </MenuItem>
              <MenuItem value={60}>DIAMOND Price 60 Discount 0</MenuItem>
              <MenuItem value={60}>PLATINUM Price 50 Discount 0</MenuItem>
              <MenuItem value={60}>SILVER Price 30 Discount 0</MenuItem>
              <MenuItem value={60}>GOLD Price 40 Discount 0</MenuItem>


            </Select>
          </FormControl>
        </Grid>
        <Grid item md={6} sm={12}>
          <TextField fullWidth label='Cardholder Name' placeholder="Enter Cardholder Name" />

        </Grid>
      
     
        <Grid item md={6} sm={12}>
          <TextField fullWidth label='Card Number' placeholder="Enter card number" />
          </Grid>
          <Grid item md={6} sm={12}> <TextField fullWidth label='Expiry Date ' placeholder="Enter your password" />
          </Grid>
          <Grid item md={6} sm={12}>
      <TextField fullWidth label='Confirm Password' placeholder="Confirm your password" />
      </Grid>
</Grid>

      <Button type='submit' variant='contained' color='primary'>Submit</Button>

    </Grid>

  )
}

export default Login
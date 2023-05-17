import { Box, Button, Checkbox, FormControl, FormControlLabel, FormLabel, Grid, InputLabel, MenuItem, Paper, Radio, RadioGroup, Select, Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const Register = () => {

    const headerStyle = { backgroundImage: "linear-gradient(90deg, #ba000d 2%, white 0%)", }

    const marginTop = { marginTop: 5 }
    const basicStyle = { backgroundColor: "white", width: "100%", padding: "20px" }

    const [Subscription, setSubscription] = React.useState('');

    const handleChange = (event) => {
        setSubscription(event.target.value);
    };
    const [entityname, setEntityname] = useState("");
    const [error, setError] = useState(false);

    const handleEntitynameChange = (event) => {
        setEntityname(event.target.value);
        setError(false);
    };
    const handleSubmit = (event) => {
        event.preventDefault();

        if (entityname.trim() === '') {
            setError(true);
        } else {

            console.log('entityname:', entityname);
        }
    };
    return (
        <Grid style={basicStyle}>

            <Box sx={{ pl: 2, pt: 0, mt: 0, pb: 0, mb: 2 }} style={headerStyle}>

                <Typography variant='caption'
                ><h1 style={{ color: "#ba000d", margin: '0', fontWeight: "700" }}>Register here</h1>

                </Typography>
            </Box>
            <form onSubmit={handleSubmit}>
                <Stack spacing={2}>
                    <Grid container spacing={6} rowSpacing={3} sx={{ mb: 2 }}>
                        <Grid item lg={6}>
                            <TextField type='text' fullWidth label=' First Name' placeholder="First Name" />
                        </Grid>
                        <Grid item lg={6}>
                            <TextField type='text' fullWidth label='Last Name' placeholder="Last Name" /> </Grid>
                        <Grid item lg={6}>
                            <TextField type='email' fullWidth label='Email' placeholder="Enter your email" />  {error && <span style={{ color: 'red' }}>Email Not Valid</span>} </Grid>
                        <Grid item lg={6}>
                            <TextField type='password' fullWidth label='Last Name' placeholder="Last Name" /> </Grid>
                        <Grid item lg={6}><TextField type='password' fullWidth label='Password' placeholder="Enter your password" /></Grid>
                        <Grid item lg={6}> <TextField type='password' fullWidth label='Confirm Password' placeholder="Confirm your password"
                        /> {error && <span style={{ color: 'red' }}>Passwords Must Match</span>}
                        </Grid> <Grid item lg={6}>
                            <TextField type='text' fullWidth label=' PAN No' placeholder="PAN No" />  {error && <span style={{ color: 'red' }}>Pan No. Not Valid</span>} </Grid>
                        <Grid item lg={6}>
                            <TextField type='text' fullWidth label='GST No' placeholder="GST No" />  {error && <span style={{ color: 'red' }}>GST No. is required</span>} </Grid>
                        <Grid item lg={6}   >


                            <FormControl variant="standard" fullWidth sx={{ m: 2 }}>
                                <InputLabel id="demo-simple-select-standard-label">User Type</InputLabel>
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
                        <Grid item lg={6}>
                            <TextField type='text' fullWidth label='Name of the entity' placeholder="Name of the entity" value={entityname}
                                onChange={handleEntitynameChange} /> {error && <span style={{ color: 'red' }}>Name of Entity is required</span>} </Grid>
                    </Grid>

                </Stack>

                <Box >
                    <Typography >
                        <Button type='submit' variant='contained' style={{ backgroundColor: '#ba000d' }} >Submit</Button>
                    </Typography>
                </Box>

            </form>

        </Grid>

    )
}

export default Register;
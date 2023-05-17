import { Tab, Tabs, Typography, createTheme ,ThemeProvider, Box, makeStyles} from '@mui/material';
import React from 'react'
import Login from './Login';

const Header = () => {
   
    const headerStyle = { backgroundImage: "linear-gradient(90deg, #ba000d 1%, white 0%)",}
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    const theme = createTheme({
        typography: {
          heading: {
            fontSize: 80,
            color: '#777777',
marginRight:"24x",
          },heading2:{
            color:'#777777',
            fontSize:40,
            display: 'flex-inline', flexDirection: 'row', height: '200px', justifyContent: 'center', alignItems: 'center' ,
textTransform:"none"

          }
          
        },
       
      });

    return (<>
        <Box sx= { { pl:2,pt:2,m:4,pb:2,ml:6}} style={headerStyle}>

        <Typography variant='caption' 
        ><h2 style={{color:"#ba000d",margin:'0',fontWeight:"700",}}>Complete your Entity process</h2>
       
            </Typography>
        </Box>
      <Tabs value={value} onChange={handleChange} aria-label="disabled tabs example" >
        <Tab label=  {<div>
            <ThemeProvider theme={theme}>
        <Typography variant="heading" display={'inline'}>
          1
        </Typography>
        <Typography variant="heading2" >
          Subscription
        </Typography></ThemeProvider>
      </div>}/>
      <Tab label=  {<div>
            <ThemeProvider theme={theme}>
        <Typography variant="heading" display={'inline'}>
        2
        </Typography>
        <Typography variant="heading2" >
         Basic Details
        </Typography></ThemeProvider>
      </div>}/>
      <Tab label=  {<div>
            <ThemeProvider theme={theme}>
        <Typography variant="heading" display={'inline'}>
          3
        </Typography>
        <Typography variant="heading2" >
       Entity Details
        </Typography></ThemeProvider>
      </div>}/>
      <Tab label=  {<div>
            <ThemeProvider theme={theme}>
        <Typography variant="heading" display={'inline'}>
          4
        </Typography>
        <Typography variant="heading2" >
       KYC
        </Typography></ThemeProvider>
      </div>}/>    <Tab label=  {<div>
            <ThemeProvider theme={theme}>
        <Typography variant="heading" display={'inline'}>
          5
        </Typography>
        <Typography variant="heading2" >
       Bank Details
        </Typography></ThemeProvider>
      </div>}/>
      </Tabs>
      <Login/></>
    );
}

export default Header
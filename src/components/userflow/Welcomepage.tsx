import { Box, Grid } from '@mui/material'
import Header from './Header'
import Sidebar from './Sidebar'
import { useStyles } from './Styles/makeStyles'
import Footer from './Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import AboutUs from './AboutUs';
import Events from './Events';
import GoverningBody from './GoverningBody';
import Sponsors from './Sponsors';
import Telugu from './Telugu';
import Gallery from './Gallery';
import ContactUs from './ContactUs';
import Mebershipbenfits from './Mebershipbenfits';
type Classes = {
    root: string;
};

export default function Welcomepage() {
 const { classes }: { classes: Classes } = useStyles();
  return (
    <Box className={classes.root}>
    <Header/>
     <Grid container sx={{width:'76%',background:'#FDF7E1'}}>
        <Grid size={{lg:2.7}} sx={{borderRight:'1px solid #3DB80C',overflow:'hidden'}}>
            <Sidebar/>
        </Grid>
        <Grid size={{lg:9.3}}>
          <Routes>
            <Route path="" element={<Home/>}/>
            <Route path="about_us" element={<AboutUs/>}/>
            <Route path="governing_body" element={<GoverningBody/>}/>
            <Route path="events" element={<Events/>}/>
            <Route path="sponsors" element={<Sponsors/>}/>
            <Route path="telugu" element={<Telugu/>}/>
            <Route path="gallery" element={<Gallery/>}/>
            <Route path="contactUs" element={<ContactUs/>}/>
            <Route path="mebershipbenfits" element={<Mebershipbenfits/>}/>
          </Routes>
        </Grid>
     </Grid>
     <Footer/>
    </Box>
  )
}

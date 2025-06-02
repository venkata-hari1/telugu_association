import { Box, Grid } from '@mui/material'
import Header from './Header'
import Sidebar from './Sidebar'
import { useStyles } from './Styles/makeStyles'
import Footer from './Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import AboutUs from './AboutUs';
import Events from './Events';
import Sponsors from './Sponsors';
import Telugu from './Telugu';
import Gallery from './Gallery';
import ContactUs from './ContactUs';
import Mebershipbenfits from './Mebershipbenfits';
import Registration from './Auth/Registration';
import AdminLogin from '../AdminFlow/AdminLogin'
import Mission from './Mission';
import Organization from './Organization';
import Upcommingevents from './EventDetails';
import Nakshatralu from './Nakshatralu';
import Samvatsaralu from './Samvatsaralu';
import Tithulu from './Tithulu';
import Gunintamulu from './Gunintamulu';
import Vemanapadyalu from './Vemanapadyalu';
import Aksaramala from './Aksaramala';
import BhashaandLipi from './BhashaandLipi';
import TAMbylaws from './TAMbylaws';
import GoverningBodyPresidents from './GoverningBody';
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
            
            <Route path="login" element={<AdminLogin/>}/>
            <Route path="about_us" element={<AboutUs/>}/>
            <Route path="governing_body/presidents" element={<GoverningBodyPresidents/>}/>
            <Route path="governing_body/board_of_directors" element={<GoverningBodyPresidents/>}/>
            <Route path="governing_body/previous_board_members" element={<GoverningBodyPresidents/>}/>
            <Route path="events/past" element={<Events/>}/>
            <Route path="events/upcoming" element={<Events/>}/>

            <Route path="sponsors" element={<Sponsors/>}/>
            <Route path="telugu" element={<Telugu/>}/>
            <Route path="gallery/photos" element={<Gallery/>}/>
            <Route path="gallery/videos" element={<Gallery/>}/>
            <Route path="contactUs" element={<ContactUs/>}/>
            <Route path="mebershipbenfits" element={<Mebershipbenfits/>}/>
            <Route path="mission" element={<Mission/>}/>
            <Route path="about_us/organization" element={<Organization/>}/>
            <Route path="about_us/mission" element={<Mission/>}/>
            <Route path="about_us/tam_by_laws" element={<TAMbylaws/>}/>
             <Route path="eventdetails" element={<Upcommingevents/>}/>  
            <Route path="nakshatralu" element={<Nakshatralu/>}/> 
            <Route path="samvatsaralu" element={<Samvatsaralu/>}/>  
            <Route path="tithulu" element={<Tithulu/>}/>  
             <Route path="gunintamulu" element={<Gunintamulu/>}/>  
             <Route path="padyalu" element={<Vemanapadyalu/>}/>
             <Route path="aksharamala" element={<Aksaramala/>}/>
              <Route path="lipi" element={<BhashaandLipi/>}/>

                <Route path="volunteer" element={<Registration type='/volunteer'/>}/>
                  <Route path="member" element={<Registration type="/member"/>}/>
                  <Route path="donate" element={<Registration type="/donate"/>}/>
                  
          </Routes>

        </Grid>
     </Grid>
     <Footer/>
    </Box>
  )
}

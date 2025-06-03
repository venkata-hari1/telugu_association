import { Box, Button, Grid, IconButton, Typography } from '@mui/material'
import Logo from '../../assets/logo.png'
import { TabData } from './Header';
import { useStyles } from './Styles/makeStyles';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import { useLocation, useNavigate } from 'react-router-dom';


type IProps={
    classes:{
        [type:string]:string
    }
}
export default function Footer() {
    const {classes}:IProps=useStyles()
    const navigate=useNavigate()
    const tabData: TabData[] = [
        { id: 0, label: 'Home', link:'/' },
        { id: 1, label: 'Sponsors', link: '/sponsors' },
        { id: 2, label: 'About Us',link: '/about_us' },
        { id: 3, label: 'Telugu',  link: '/telugu' },
        { id: 4, label: 'Governing Body', link: '/governing_body'  },
        { id: 5, label: 'Gallery', link: '/gallery'  },
        { id: 6, label: 'Events',  link: '/events'  },
        { id: 7, label: 'Membership Benefits', link: 'mebershipbenfits' },
        { id: 8, label: '', link: '' },
        { id: 9, label: 'Contact Us', link: '/contactus' },

    ];


const handleClick=(tab:{id:number,link:string})=>{
 navigate(`${tab.link}`)
}

const location=useLocation()
console.log(location.pathname)

    return (
        <Box className={classes.footercontainer} sx={{display:{xs:'none',md:'none',lg:'grid'}}}>
        
   

        <Grid container>
            <Grid size={{lg:1,xs:2,md:2}}>
            <Box src={Logo} component={'img'} alt='Logo' sx={{width:'70px',height:'70px'}}/>   
            </Grid>
            <Grid size={{ lg: 7, xs: 12, md: 12 }}>
                <Box>
                   
                    <Typography className={classes.footertitle}>TELUGU ASSOCIATION OF MINNESOTA</Typography>
                    <Box className={classes.root_socialmediaicons_container}>
                        <IconButton className={classes.socailmediaicon_container}><YouTubeIcon className={classes.socailmediaicon}/></IconButton>
                        <IconButton className={classes.socailmediaicon_container}><InstagramIcon className={classes.socailmediaicon}/></IconButton>
                        <IconButton className={classes.socailmediaicon_container}><FacebookIcon className={classes.socailmediaicon}/></IconButton>
                        <IconButton className={classes.socailmediaicon_container}><XIcon  className={classes.socailmediaicon}/></IconButton>
                    </Box>
                    <Button className={classes.volunteer_btn} onClick={()=>navigate('/volunteer')}>BECOME A VOLUNTEER</Button>
                    <Typography className={classes.copyright_text}>Tax Id : 90-0089250 @ 2025 Telugumn.Org. All Rights Reserved.</Typography>
                </Box>
            </Grid>
            <Grid size={{ lg: 4, xs: 12, md: 12 }}>
                <Box className={classes.footeroptions}>
                {tabData.map((tab) => (
                    <Box
                        key={tab.id}
                        onClick={()=>handleClick(tab)}
                       className={classes.footertext}
                    >
                        {tab.label}
                    </Box>
                    
                ))}
                </Box>
            </Grid>
        </Grid>
        </Box>
    )
}

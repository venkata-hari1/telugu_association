import { Box, Button, Grid, IconButton, Typography } from '@mui/material'
import Logo from '../../assets/logo.png'
import { TabData } from './Header';
import { useStyles } from './Styles/makeStyles';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
type IProps={
    classes:{
        [type:string]:string
    }
}
export default function Footer() {
    const {classes}:IProps=useStyles()
    const tabData: TabData[] = [
        { id: 0, label: 'Home', content: 'This is the Home tab content' },
        { id: 1, label: 'Sponsors', content: 'Sponsor logos and info' },
        { id: 2, label: 'About Us', content: 'About Us content goes here' },
        { id: 3, label: 'Telugu', content: 'Content in Telugu' },
        { id: 4, label: 'Governing Body', content: 'Details about Governing Body' },
        { id: 5, label: 'Gallery', content: 'Photos and videos' },
        { id: 6, label: 'Events', content: 'Upcoming Events and activities' },
        { id: 7, label: 'Membership Benefits', content: 'Upcoming Events and activities' },
        { id: 8, label: '', content: '' },
        { id: 9, label: 'Contact Us', content: 'Contact form and details' },

    ];
    return (
        <Box className={classes.footercontainer}>
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
                    <Button className={classes.volunteer_btn}>BECOME A VOLUNTEER</Button>
                    <Typography className={classes.copyright_text}>Tax Id : 90-0089250 @ 2025 Telugumn.Org. All Rights Reserved.</Typography>
                </Box>
            </Grid>
            <Grid size={{ lg: 4, xs: 12, md: 12 }}>
                <Box className={classes.footeroptions}>
                {tabData.map((tab) => (
                    <Box
                        key={tab.id}
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

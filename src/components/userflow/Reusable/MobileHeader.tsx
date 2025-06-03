
import { Box, Divider, IconButton, Typography } from '@mui/material'
import DonateBecomeMember from './DonateBecomeMember'
import ProudSponers from './ProudSponers'
import teluguassociation from '../../../assets/teluguassociation.png'
import MenuIcon from '@mui/icons-material/Menu';
import { useStyles } from '../Styles/makeStyles';
import { useState } from 'react';
import SidebarDrawer from '../MobileSideBar';
export default function MobileHeader() {
    const {classes}:any=useStyles()
    const [openDrawer, setOpenDrawer] = useState(false);
    return (
        <div>
              <SidebarDrawer open={openDrawer} onClose={() => setOpenDrawer(false)} />
           <Box className={classes.mobilefixedheader}>
            <Box component="img" src={teluguassociation}
                sx={{ objectFit: 'contain',position:'relative', height: '100%', width: '100%', display: 'block' }} />
                <IconButton className={classes.menuicon} onClick={() => setOpenDrawer(true)}>
                <MenuIcon sx={{color:'green',fontSize:'14px'}}/>
                </IconButton>
          
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                width: '100%',
                border: '1px solid #3DB80C',
                background: 'white',
                height: 'auto',
                padding:'8px'
            }}>
                <Typography
                    variant="h6"

                    sx={{
                        color: '#3DB80C',
                        fontWeight: '600',
                        whiteSpace: 'nowrap',
                        marginRight: '8px',
                        fontSize:'14px'
                    }}>
                    NEWS &UPDATES
                </Typography>
                <Divider orientation="vertical"
                    flexItem
                    sx={{ borderColor: '#4caf50', marginRight: '8px' }} />
                <Box sx={{
                    overflow: 'hidden',
                    whiteSpace: 'nowrap',
                    flex: 1,
                    position: 'relative',

                }}>
                    <Typography
                        component="div"
                        sx={{
                            display: 'inline-block',
                            paddingLeft: '100%',
                            animation: 'marquee 15s linear infinite',
                            '@keyframes marquee': {
                                '0%': { transform: 'translateX(0%)' },
                                '100%': { transform: 'translateX(-100%)' },
                            },
                        }}
                    >
                        Stay informed with the latest events, announcements, and opportunities shaping Minnesota's community!
                    </Typography>

                </Box>
            </Box>
            </Box>
            <Box sx={{marginTop:'32%'}}>
            <ProudSponers />
            <DonateBecomeMember />
            </Box>
        </div>
    )
}

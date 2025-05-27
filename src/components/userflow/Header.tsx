import * as React from 'react';
import { AppBar, Box, Button, Toolbar } from '@mui/material';
import logo from '../../assets/logo.png'
import { useStyles } from './Styles/makeStyles';
import { useNavigate } from 'react-router-dom';

export interface TabData {
  id: number;
  label: string;
  link: string;
}
type IProps = {
  classes: {
    [type: string]: string
  }
}

const tabData: TabData[] = [
  { id: 0, label: 'Home', link: '/' },
  { id: 1, label: 'About Us', link: '/about_us' },
  { id: 2, label: 'Governing Body', link: '/governing_body' },
  { id: 3, label: 'Events', link: '/events' },
  { id: 4, label: 'Sponsors', link: '/sponsors' },
  { id: 5, label: 'Telugu', link: '/telugu' },
  { id: 6, label: 'Gallery', link: '/gallery' },
  { id: 7, label: 'Contact Us', link: '/contactus' },
];



export default function Header() {
  const [activeTab, setActiveTab] = React.useState<number>(0);
  const { classes }: IProps = useStyles()
  const navigate=useNavigate()
  const handleClick=(tab:{id:number,link:string})=>{
   setActiveTab(tab.id)
   navigate(`${tab.link}`)
  }
  return (
    <Box sx={{ width: '76%' }}>
      <AppBar
        position="static"
        sx={{
          background: 'linear-gradient(180deg, #5BE823 0%, #3DB80C 100%)',
        }}
      >
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box className={classes.logo}>
            <Box src={logo} component={'img'} alt='logo' className={classes.logo_image} />
          </Box>
          <Box sx={{ display: 'flex', width: '80%', justifyContent: 'space-between' }}>

            {tabData.map((tab) => (
              
              <Button
                key={tab.id}
                onClick={()=>handleClick(tab)}
                sx={{
                  height: '5vh',
                  color: 'white',
                  textTransform: 'none',
                  fontSize: '14px !important',
                  padding: '10px',
                  whiteSpace: 'nowrap',
                  position: 'relative',
                  fontFamily: '"Lato", sans-serif !important',
                  fontWeight: 'bold',
                  mx: 1,
                  '& span': {
                    fontSize: '14px',
                    fontFamily: '"Lato", sans-serif',
                  },

                  '&::after': {
                    content: '""',
                    display: 'block',
                    position: 'absolute',
                    bottom: -11,
                    left: 0,
                    right: 0,
                    height: '3px',
                    backgroundColor: activeTab === tab.id ? 'white' : 'transparent',
                    borderRadius: '2px',
                    transition: 'left 0.3s cubic-bezier(0.4, 0, 0.2, 1), width 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  },
                  
                }}
              >
                {tab.label}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

    </Box>
  );
}

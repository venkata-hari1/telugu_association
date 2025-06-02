import * as React from 'react';
import { AppBar, Box, Button, Toolbar, Menu, MenuItem } from '@mui/material';
import logo from '../../assets/logo.png';
import { useStyles } from './Styles/makeStyles';
import { useNavigate } from 'react-router-dom';

export interface TabData {
  id: number;
  label: string;
  link: string;
  dropdown?: { label: string; link: string; id: number }[];
}

type IProps = {
  classes: {
    [type: string]: string;
  };
};

const tabData: TabData[] = [
  { id: 0, label: 'Home', link: '/' },
  {
    id: 1,
    label: 'About Us',
    link: '/about_us',
    dropdown: [
      { id: 10, label: 'Organization', link: '/about_us/organization' },
      { id: 11, label: 'Mission', link: '/about_us/mission' },
      { id: 12, label: 'TAM By Laws', link: '/about_us/tam_by_laws' },
    ],
  },
  {
    id: 2,
    label: 'Governing Body',
    link: '/governing_body',
    dropdown: [
      { id: 20, label: 'Board of Directors', link: '/governing_body/board_of_directors' },
      { id: 21, label: 'Previous Board Members', link: '/governing_body/previous_board_members' },
      { id: 22, label: 'Presidents', link: '/governing_body/presidents' },
    ],
  },
  {
    id: 3,
    label: 'Events',
    link: '/events',
    dropdown: [
      { id: 30, label: 'Upcoming Events', link: '/events/upcoming' },
      { id: 31, label: 'Past Events', link: '/events/past' },
    ],
  },
  { id: 4, label: 'Sponsors', link: '/sponsors' },
  { id: 5, label: 'Telugu', link: '/telugu' },
  { id: 6, label: 'Gallery', link: '/gallery',
    dropdown: [
      { id: 40, label: 'Photos', link: '/gallery/photos' },
      { id: 41, label: 'Videos', link: '/gallery/videos' },
    ],

   },
  { id: 7, label: 'Contact Us', link: '/contactus' },
];

export default function Header() {
  const [activeTab, setActiveTab] = React.useState<number>(0);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [selectedTab, setSelectedTab] = React.useState<number | null>(null);
  const { classes }: IProps = useStyles();
  const navigate = useNavigate();

  const handleClick = (tab: TabData, dropdownItemId?: number) => {
    // If dropdownItemId is provided, set activeTab to the parent tab's id
    const newActiveTab = dropdownItemId !== undefined ? tab.id : tab.id;
    setActiveTab(newActiveTab);
    navigate(dropdownItemId !== undefined ? tab.dropdown!.find(item => item.id === dropdownItemId)!.link : tab.link);
    if (dropdownItemId !== undefined) {
      handleMenuClose();
    }
  };

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>, tabId: number) => {
    setAnchorEl(event.currentTarget);
    setSelectedTab(tabId);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setSelectedTab(null);
  };

  return (
    <Box sx={{ width: '76%', display: { xs: 'none', md: 'none', lg: 'grid' } }}>
      <AppBar
        position="static"
        sx={{
          background: 'linear-gradient(180deg, #5BE823 0%, #3DB80C 100%)',
        }}
      >
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box className={classes.logo}>
            <Box src={logo} component={'img'} alt="logo" className={classes.logo_image} />
          </Box>
          <Box sx={{ display: 'flex', width: '80%', justifyContent: 'space-between' }}>
            {tabData.map((tab) => (
              <Box key={tab.id} sx={{ position: 'relative' }}>
                <Button
                  onClick={() => handleClick(tab)}
                  onMouseEnter={(e) => tab.dropdown && handleMenuOpen(e, tab.id)}
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
                {tab.dropdown && (
                  <Menu
                    anchorEl={anchorEl}
                    open={selectedTab === tab.id}
                    onClose={handleMenuClose}
                    MenuListProps={{
                      onMouseLeave: handleMenuClose,
                    }}
                    PaperProps={{
                      sx: {
                        background: 'linear-gradient(180deg, #5BE823 0%, #3DB80C 100%)',
                      },
                    }}
                  >
                    {tab.dropdown.map((item) => (
                      <MenuItem
                        key={item.id}
                        onClick={() => handleClick(tab, item.id)}
                        sx={{
                          color: 'white',
                          fontFamily: '"Lato", sans-serif',
                          fontSize: '14px',
                          fontWeight: 'bold',
                          backgroundColor: activeTab === item.id ? 'rgba(255, 255, 255, 0.2)' : 'transparent',
                        }}
                      >
                        {item.label}
                      </MenuItem>
                    ))}
                  </Menu>
                )}
              </Box>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
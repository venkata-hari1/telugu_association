import React, { useState } from 'react';
import {
  Drawer, List, ListItemButton, ListItemText, Collapse, Box,
  Button
} from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import LoginIcon from '@mui/icons-material/Login';
import { useDispatch } from 'react-redux';
import { setLogin } from '../../Redux/UserFlow';
interface DropdownItem {
  id: number;
  label: string;
  link: string;
}

interface TabItem {
  id: number;
  label: string;
  link: string;
  dropdown?: DropdownItem[];
}

interface SidebarDrawerProps {
  open: boolean;
  onClose: () => void;
}

const tabData: TabItem[] = [
  { id: 0, label: 'Home', link: '/' },
  {
    id: 1,
    label: 'About Us',
    link: '/about_us',
    dropdown: [
      { id: 10, label: 'Organization', link: '/about_us/organization' },
      { id: 11, label: 'Our Mission', link: '/about_us/mission' },
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
  {
    id: 6,
    label: 'Gallery',
    link: '/gallery',
    dropdown: [
      { id: 40, label: 'Photos', link: '/gallery/photos' },
      { id: 41, label: 'Videos', link: '/gallery/videos' },
    ],
  },
  { id: 7, label: 'Contact Us', link: '/contactus' },
];

const SidebarDrawer: React.FC<SidebarDrawerProps> = ({ open, onClose }) => {
  const [openDropdown, setOpenDropdown] = useState<Record<number, boolean>>({});
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const navigate = useNavigate();
  const dispatch=useDispatch()
  const handleItemClick = (item: TabItem) => {
    setSelectedId(item.id);
    if (item.dropdown) {
      setOpenDropdown((prev) => ({
        ...prev,
        [item.id]: !prev[item.id],
      }));
    } else {
      navigate(item.link);
      onClose();
    }
  };

  const handleSubItemClick = (subItem: DropdownItem) => {
    setSelectedId(subItem.id);
    navigate(subItem.link);
    onClose();
  };
const handleLogin=()=>{
  dispatch(setLogin(true))
  onClose();
}
  return (
    <Drawer anchor="left" open={open} onClose={onClose} PaperProps={{
        sx: { backgroundColor: '#FDF7E1', width: 280,padding:'20px' },
      }}>
      <Box  role="presentation">
        <List>
          {tabData.map((item) => (
            <React.Fragment key={item.id}>
              <ListItemButton
                onClick={() => handleItemClick(item)}
                sx={{
                    borderRadius:'14px',
                  backgroundColor: selectedId === item.id ? '#3DB80C' : 'transparent',
                  color: selectedId === item.id ? '#fff' : 'green',
                  fontSize:'14px',
                  fontWeight:'bold',
                  '&:hover': {
                    backgroundColor: selectedId === item.id ? '#3DB80C' : '#f0f0f0',
                  },
                }}
              >
                <ListItemText primary={item.label} />
                {item.dropdown ? (
                  openDropdown[item.id] ? <ExpandLess /> : <ExpandMore />
                ) : null}
              </ListItemButton>
              {item.dropdown && (
                <Collapse in={openDropdown[item.id]} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    {item.dropdown.map((subItem) => (
                      <ListItemButton
                        key={subItem.id}
                        sx={{
                          pl: 4,
                          backgroundColor: selectedId === subItem.id ? '#3DB80C' : 'transparent',
                          color: selectedId === subItem.id ? '#fff' : 'green',
                          fontSize:'14px',
                          fontWeight:'bold',
                          borderRadius:'14px',
                          '&:hover': {
                            backgroundColor: selectedId === subItem.id ? '#3DB80C' : '#f0f0f0',
                          },
                        }}
                        onClick={() => handleSubItemClick(subItem)}
                      >
                        <ListItemText primary={subItem.label} />
                      </ListItemButton>
                    ))}
                  </List>
                </Collapse>
              )}
              {/* Removed <Divider /> to eliminate bottom border */}
            </React.Fragment>
          ))}
        </List>
        <Button
        onClick={handleLogin}
  sx={{
    marginLeft:'10px',
    background: '#3DB80C',
    color: 'white',
    width: '90%',
    fontWeight:'bold',
    fontSize: '14px',
    justifyContent: 'space-between',
    textTransform: 'none', 
  }}
  endIcon={<LoginIcon />}
>
  Login
</Button>
      </Box>
    </Drawer>
  );
};

export default SidebarDrawer;

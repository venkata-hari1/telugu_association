import { Box } from '@mui/material';
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()(() => ({
  centergrid:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    alignContent:'center'
  },
    calendarRoot: {
      fontFamily: '"Lato", sans-serif !important', 
      overflow: 'hidden',
      borderRadius: '10px',
      width:'200px',
      border: 'none',
      boxShadow: '19.37px 19.37px 15.5px 0px #0000001A',
      
      fontSize: '10px',
      '& .react-calendar__navigation__prev2-button, & .react-calendar__navigation__next2-button': {
  display: 'none',
},
      '& .react-calendar__navigation button': {
        fontSize: '10px',
        background: 'none !important',
        boxShadow: 'none',
        '&:hover': {
          background: 'none !important', 
        },
      },
  
      '& .react-calendar__tile--now': {
        backgroundColor: '#e0f7fa',
      },
    },
    highlight: {
        backgroundColor: '#FFE400 !important',
        color: 'black !important',
        width: '20px',      
        height: '25px',        
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 'auto',      
      },
  }));
  

const MyCalendar = () => {
  const { classes } = useStyles();
  const [value, setValue] = useState<any>(new Date());

  const highlightedDates = [
    new Date(2025, 4, 10),
    new Date(2025, 4, 11),
    new Date(2025, 4, 15),
    new Date(2025, 5, 11),
    new Date(2025, 5, 13),
  ];

  const isSameDay = (date1: Date, date2: Date) =>
    date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() === date2.getDate();

  return (
    <Box className={classes.centergrid}>
    <Calendar
      className={classes.calendarRoot}
      onChange={setValue}
      value={value}
      tileClassName={({ date, view }) => {
        if (view === 'month') {
          return highlightedDates.find(d => isSameDay(d, date)) ? classes.highlight : undefined;
        }
        return undefined;
      }}
    />
    </Box>
  );
};

export default MyCalendar;

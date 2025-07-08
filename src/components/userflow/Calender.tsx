import { Box, Theme, useMediaQuery } from "@mui/material";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()((theme: Theme) => ({
  centergrid: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
  mobilecalnderRoot: {
    boxShadow: "19.37px 19.37px 15.5px 0px #0000001A",
    border: "none",
    borderRadius: "14px",
    width: "90%",
    "& .react-calendar__navigation__prev2-button, & .react-calendar__navigation__next2-button":
      {
        display: "none",
      },
    "& .react-calendar__navigation button": {
      fontSize: "15px",
    },
  },
  calendarRoot: {
    fontFamily: '"Lato", sans-serif !important',
    overflow: "hidden",
    borderRadius: "10px",
    border: "none",
    boxShadow: "19.37px 19.37px 15.5px 0px #0000001A",
    width: "200px",
    fontSize: "10px",
    "& .react-calendar__navigation__prev2-button, & .react-calendar__navigation__next2-button":
      {
        display: "none",
      },
    "& .react-calendar__navigation button": {
      fontSize: "10px",
      background: "none !important",
      boxShadow: "none",
      "&:hover": {
        background: "none !important",
      },
    },
  },
  highlight: {
    backgroundColor: "#FFE400 !important",
    color: "black !important",
    width: "20px",
    height: "25px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "auto",
    [theme.breakpoints.down("lg")]: {
      width: "fit-content",
      height: "fit-content",
    },
  },
}));

interface CalenderProps {
  value: Date;
  setValue: (date: Date) => void;
  onDateClick?: (date: Date) => void;
}

const MyCalendar = ({ value, setValue, onDateClick }: CalenderProps) => {
  const { classes }: any = useStyles();
  const display = useMediaQuery((theme) => theme.breakpoints.down("lg"));
  const highlightedDates = [
    new Date(2025, 4, 10),
    new Date(2025, 4, 11),
    new Date(2025, 4, 15),
    new Date(2025, 5, 11),
    new Date(2025, 5, 13),
  ];

  const isSameDay = (date1: Date | null, date2: Date | null) => {
    if (!date1 || !date2) return false;
    return (
      date1.getFullYear() === date2.getFullYear() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getDate() === date2.getDate()
    );
  };

  return (
    <Box className={classes.centergrid}>
      <Calendar
        className={display ? classes.mobilecalnderRoot : classes.calendarRoot}
        onChange={(val) => {
          const date = Array.isArray(val) ? val[0] : val;
          if (date instanceof Date) {
            setValue(date);
            if (onDateClick) onDateClick(date);
          }
        }}
        value={value}
        maxDate={new Date()} // disable future dates
        tileClassName={({ date, view }) => {
          if (view === "month" && date instanceof Date) {
            return highlightedDates.find(
              (d) => d instanceof Date && isSameDay(d, date)
            )
              ? classes.highlight
              : undefined;
          }
          return undefined;
        }}
      />
    </Box>
  );
};

export default MyCalendar;

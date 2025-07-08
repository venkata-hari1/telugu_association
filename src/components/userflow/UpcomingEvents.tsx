import { Box, Typography, IconButton } from "@mui/material";
import { useState, useEffect } from "react";
import bathukamma from "../../assets/bathukamma.jpg";
import { useStyles } from "./Styles/makeStyles";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

type IProps = any;

export default function UpcomingEvents() {
  const { classes }: IProps = useStyles();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const itemsPerRow = isSmallScreen ? 2 : 3;
  const [currentIndex, setCurrentIndex] = useState(0);

  const eventdata = [
    { id: 1, img: bathukamma },
    { id: 2, img: bathukamma },
    { id: 3, img: bathukamma },
    { id: 4, img: bathukamma },
    { id: 5, img: bathukamma },
  ];

  const totalItems = eventdata.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % (totalItems - itemsPerRow + 1));
    }, 10000);
    return () => clearInterval(interval);
  }, [itemsPerRow, totalItems]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalItems) % totalItems);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % (totalItems - itemsPerRow + 1));
  };

  return (
    <Box>
      <Box className={classes.upcomingevents_title}>
        <Typography
          component="div"
          variant="h6"
          color="#3DB80C"
          sx={{ fontSize: "18px", fontWeight: "bold" }}
          padding={2}
        >
          UPCOMING EVENTS
        </Typography>
      </Box>
      <Box sx={{ position: "relative", overflow: "hidden" }}>
        <IconButton
          onClick={handlePrev}
          sx={{
            position: "absolute",
            left: 3,
            top: "50%",
            transform: "translateY(-50%)",
            color: "#3DB80C",
            background: "white",
            display: "flex",
            zIndex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ArrowBackIosIcon />
        </IconButton>
        <Box
          sx={{
            display: "flex",
            padding: "0 10px",
            transition: "transform 0.5s ease",
            transform: `translateX(-${currentIndex * (100 / itemsPerRow)}%)`,
          }}
        >
          {eventdata.map((event) => (
            <Box
              key={event.id}
              sx={{
                flex: `0 0 ${100 / itemsPerRow}%`,
                padding: "10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box
                component="img"
                src={event.img}
                alt=""
                sx={{ width: "80%", borderRadius: "8px" }}
              />
            </Box>
          ))}
        </Box>
        <IconButton
          onClick={handleNext}
          sx={{
            position: "absolute",
            right: 3,
            top: "50%",
            transform: "translateY(-50%)",
            color: "#3DB80C",
            background: "white",
            zIndex: 1,
          }}
        >
          <ArrowForwardIosIcon />
        </IconButton>
      </Box>
    </Box>
  );
}

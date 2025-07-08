import { makeStyles } from "tss-react/mui";
import backgroundImg from "../../../assets/BackgroundImage.png";
import { Theme } from "@mui/material";
export const Lato = {
  fontFamily: '"Lato", sans-serif',
};
const flex = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column" as "column",
  alignContent: "center",
};

export const useStyles = makeStyles()((theme: Theme) => ({
  root: {
    backgroundImage: `url(${backgroundImg})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    minHeight: "100vh",
    width: "100%",
    height: "fit-content",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    [theme.breakpoints.down("lg")]: {
      backgroundImage: "none",
    },
  },
  commontext: {
    ...Lato,
    marginBottom: "5px",
    fontWeight: "bold",
    fontSize: "15px",
    color: "#3DB80C",
    textAlign: "center" as "center",
  },
  sidebarstyle: {
    position: "relative",
  },
  sidebarbarbox1: {
    background: "linear-gradient(180deg, #5BE823 0%, #3DB80C 100%)",
    height: "7.6vh",
  },
  logo_image: {
    position: "absolute",

    top: 0,

    objectFit: "cover",
    width: "150px",
    height: "150px",
  },
  mobilebuttons: {
    display: "grid",
    gridTemplateColumns: "50% 50%",
    gridGap: "1%",
    padding: "10px",
    placeItems: "center",
    "&>button": {
      ...Lato,
      width: "100%",
      padding: "10px",
      fontSize: "12px",
      fontWeight: "bold",
      background: "#3DB80C",
      color: "white",
      borderRadius: "14px",
    },
  },
  buttons: {
    padding: "10px",
    marginTop: "80px",
    "&>button": {
      ...Lato,
      width: "100%",
      padding: "10px",
      fontWeight: "bold",
      fontSize: "12px",
      background: "#3DB80C",
      color: "white",
      marginTop: "15px",
    },
  },
  sponsorimages: {
    objectFit: "cover",
    width: "100%",
    marginTop: "3px",
    padding: "3px",
  },
  footertitle: {
    ...Lato,
    fontSize: "16px",
    marginTop: "10px",
    marginLeft: "5px",
    color: "white",
    fontWeight: "bold",
  },

  root_socialmediaicons_container: {
    display: "flex",
    justifyContent: "space-between",
    width: "30%",
    marginTop: "15px",
  },
  socailmediaicon_container: {
    background: "white",
    borderRadius: "50%",
    width: "30px",
    height: "30px",
  },
  socailmediaicon: {
    fontSize: "15px",
  },
  footeroptions: {
    display: "grid",
    gridTemplateColumns: "50% 50%",
  },
  volunteer_btn: {
    ...Lato,
    fontWeight: "bold",
    color: " #3DB80C !important",
    fontSize: "13px",
    marginTop: "4%",
    marginBottom: "4%",
    background: "white",
    borderRadius: "8px",
  },

  copyright_text: {
    ...Lato,
    fontSize: "11px",
    color: "white !important",
    fontWeight: "600",
  },
  footertext: {
    height: "5vh",
    color: "white",
    textTransform: "none",
    fontSize: "14px",
    padding: "10px",
    whiteSpace: "nowrap",
    position: "relative",
    fontFamily: '"Lato", sans-serif',
    fontWeight: "bold",
    mx: 1,
  },
  footercontainer: {
    marginTop: "1px",
    background: "#3DB80C",
    width: "76%",
    padding: "15px",
  },
  logo: {
    ...flex,
    width: "20%",
  },
  sponsaresSection: {
    display: "flex",
    flexDirection: "column",
  },
  mobileressection: {
    display: "inline-flex",
    overflowX: "scroll" as "scroll",
  },
  res_sponsorimages: {
    width: "80%",
    height: "80%",
    objectFit: "cover" as "cover",
    borderRadius: "8px",
  },
  res_sponsorsection: {
    display: "grid",
    background: "white",
    padding: "10px",
    gridGap: "1%",
    gridTemplateColumns: "20% 80%",
    placeItems: "center",
  },
  imgbox: {
    ...flex,
  },
  upcomingevents_title: {
    width: "100%",
    display: "grid",
    gridTemplateColumns: "50% 50%",
  },
  upcomingevents: {
    display: "grid",
    gridTemplateColumns: "33% 33% 33%",
    gap: "1%",
    width: "100%",
    placeItems: "center",
  },
  menuicon: {
    position: "absolute" as "absolute",
    top: "0",
    left: "0",
    marginTop: "5%",
    marginLeft: "4%",
    background: "white",
  },
  mobilefixedheader: {
    position: "fixed" as "fixed",
    width: "100%",
    top: 0,
    zIndex: 900,
  },
}));

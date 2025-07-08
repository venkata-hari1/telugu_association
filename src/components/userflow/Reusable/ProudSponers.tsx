import { Box, Typography, useMediaQuery } from "@mui/material";
import Sponsor1 from "../../../assets/sponsor1.png";
import Sponsor2 from "../../../assets/sponsor2.png";
import Sponsor3 from "../../../assets/sponsor3.png";
import Sponsor4 from "../../../assets/sponsor4.png";
import { useStyles } from "../Styles/makeStyles";
type IProps = {
  classes: {
    [type: string]: string;
  };
};
export default function ProudSponers() {
  const { classes }: IProps = useStyles();
  const display = useMediaQuery((theme) => theme.breakpoints.down("lg"));
  const sponsor = [
    { id: 1, img: Sponsor1 },
    { id: 2, img: Sponsor2 },
    { id: 3, img: Sponsor3 },
    { id: 4, img: Sponsor4 },
  ];
  return (
    <Box
      sx={{ marginTop: display ? "1px" : "50px" }}
      className={display ? classes.res_sponsorsection : classes.sponsorsection}
    >
      {!display ? (
        <Typography className={classes.commontext}>
          OUR PROUD SPONSORS
        </Typography>
      ) : (
        <Box sx={{ textAlign: "center" }}>
          <Typography
            sx={{ fontSize: "10px", color: "#3DB80C", fontWeight: "bold" }}
          >
            OUR PROUD
          </Typography>

          <Typography
            sx={{ fontSize: "18x", color: "#3DB80C", fontWeight: "bold" }}
          >
            SPONSORS
          </Typography>
        </Box>
      )}

      <Box
        className={
          display ? classes.mobileressection : classes.sponsaresSection
        }
      >
        {sponsor.map((x: { id: number; img: string }) => (
          <Box key={x.id} className={classes.imgbox}>
            <Box
              component={"img"}
              src={x.img}
              className={
                display ? classes.res_sponsorimages : classes.sponsorimages
              }
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
}

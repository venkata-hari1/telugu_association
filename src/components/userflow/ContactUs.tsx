import { Box, Paper, Typography } from "@mui/material";

function ContactUs() {
  return (
    <Box width="100%" p={2}>
      <Typography color="#3DB80C" fontWeight="700" fontSize="17px">
        Contact Us
      </Typography>
      <Box
        mt={3}
        component={Paper}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          "& .MuiTypography-root": { lineHeight: 2.6 },
        }}
      >
        <Typography color="#3DB80C" variant="h6" fontWeight="700" fontSize={20}>
          Get in Touch with Us
        </Typography>
        <Typography fontSize={18}>Have questions, suggestions, or need support?</Typography>
        <Typography  fontSize={18}>Feel free to reach out to us at:</Typography>
        <Typography>
          <Typography component="span" color="#3DB80C"  fontSize={18}>
            Email:
          </Typography>
          <Typography component="span"  fontSize={18}> info@team.org</Typography>
        </Typography>
        <Typography color="#3DB80C"  fontSize={18}>Mailing Address:</Typography>
        <Typography  fontSize={18}>PO Box: 2424, Naperville, IL 60567</Typography>
        <Typography>
          <Typography component="span" color="#3DB80C"  fontSize={18}>
            Tax ID:
          </Typography>
          <Typography component="span"  fontSize={18}> 23-7411880</Typography>
        </Typography>
        <Typography  fontSize={18}>
          We’ll get back to you as soon as possible. Thank you for connecting
          with TEAM!
        </Typography>
      </Box>
    </Box>
  );
}

export default ContactUs;

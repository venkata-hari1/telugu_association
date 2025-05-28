import { Box, Paper, Typography } from "@mui/material";

function ContactUs() {
  return (
    <Box width="100%" p={2}>
      <Typography color="#3DB80C" fontWeight="700">
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
        <Typography color="#3DB80C" variant="h6" fontWeight="700">
          Get in Touch with Us
        </Typography>
        <Typography>Have questions, suggestions, or need support?</Typography>
        <Typography>Feel free to reach out to us at:</Typography>
        <Typography>
          <Typography component="span" color="#3DB80C">
            Email:
          </Typography>
          <Typography component="span"> info@team.org</Typography>
        </Typography>
        <Typography color="#3DB80C">Mailing Address:</Typography>
        <Typography>PO Box: 2424, Naperville, IL 60567</Typography>
        <Typography>
          <Typography component="span" color="#3DB80C">
            Tax ID:
          </Typography>
          <Typography component="span"> 23-7411880</Typography>
        </Typography>
        <Typography>
          We’ll get back to you as soon as possible. Thank you for connecting
          with TEAM!
        </Typography>
      </Box>
    </Box>
  );
}

export default ContactUs;

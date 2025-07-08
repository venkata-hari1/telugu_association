import { Box, Paper, Typography } from "@mui/material";

function ContactUs() {
  return (
    <Box width="100%" p={2}>
      <Typography color="#3DB80C" fontWeight="800" fontSize="16px">
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
        <Typography color="#3DB80C" variant="h5" fontWeight="800">
          Get in Touch with Us
        </Typography>
        <Typography fontWeight="500">
          Have questions, suggestions, or need support?
        </Typography>
        <Typography fontWeight="500">
          Feel free to reach out to us at:
        </Typography>
        <Typography fontWeight="500">
          <Typography fontWeight="500" component="span" color="#3DB80C">
            Email:
          </Typography>
          <Typography fontWeight="500" component="span">
            {" "}
            info@team.org
          </Typography>
        </Typography>
        <Typography fontWeight="500" color="#3DB80C">
          Mailing Address:
        </Typography>
        <Typography fontWeight="500">
          PO Box: 2424, Naperville, IL 60567
        </Typography>
        <Typography fontWeight="500">
          <Typography fontWeight="500" component="span" color="#3DB80C">
            Tax ID:
          </Typography>
          <Typography fontWeight="500" component="span">
            {" "}
            23-7411880
          </Typography>
        </Typography>
        <Typography fontWeight="500" sx={{ mb: 2 }}>
          We’ll get back to you as soon as possible. Thank you for connecting
          with TEAM!
        </Typography>
      </Box>
    </Box>
  );
}

export default ContactUs;

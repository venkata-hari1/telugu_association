import { Box, Typography } from "@mui/material";
import TAGC123 from '../../assets/TAGC123.pdf';

export default function TAMbylaws() {
  return (
    <Box p={2}>
      <Typography variant="h6" mb={2}>
       
      </Typography>

      <Box
        component="iframe"
        src={TAGC123}
        width="100%"
        height="800px"
        sx={{ border: '1px solid #ccc', borderRadius: 2 }}
      />
    </Box>
  );
}


import {
  Box,
  FormControlLabel,
  Grid,
  Paper,
  Radio,
  TextField,
  Typography,
  FormControl,
 
} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { GreenTextField, Submit } from "../adminstyles/MembershiptableStyles";

const AddMember = () => {
  return (
    <Box sx={{ overflowX: { sm: "hidden" } }}>
     {/*  <Box
        display="flex"
        justifyContent="space-between"
        sx={{ margin: "5px 0 14px 0" }}
      >
        <Typography variant="h5" color="#3DB80C">
          Membership Management/
          <Typography component="span" fontSize={22} fontWeight="300">
            Add Member
          </Typography>
        </Typography>
      </Box> */}

      <Grid container spacing={2}>
        <Grid size={{ xs: 12, sm: 12, md: 2, lg: 2 }}>
          <Typography>First Name</Typography>
        </Grid>
        <Grid size={{ xs: 12, sm: 12, md: 10, lg: 10 }}>
          <TextField
            fullWidth
            size="small"
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#3DB80C",
                },
                "&:hover fieldset": {
                  borderColor: "#3DB80C",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#3DB80C",
                },
                borderRadius: "8px",
                width: { md: "600px", lg: "600px", xs: "100%", sm: "600px" },
              },
            }}
          />
        </Grid>

        <Grid size={{ xs: 12, sm: 12, md: 2, lg: 2 }}>
          <Typography>Last Name</Typography>
        </Grid>
        <Grid size={{ xs: 12, sm: 12, md: 10, lg: 10 }}>
          <TextField
            type="text"
            fullWidth
            size="small"
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#3DB80C",
                },
                "&:hover fieldset": {
                  borderColor: "#3DB80C",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#3DB80C",
                },
                borderRadius: "8px",
                width: { md: "600px", lg: "600px", xs: "100%", sm: "600px" },
              },
            }}
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 12, md: 2, lg: 2 }}>
          <Typography>Email Address</Typography>
        </Grid>
        <Grid size={{ xs: 12, sm: 12, md: 10, lg: 10 }}>
          <TextField
            fullWidth
            type="email"
            size="small"
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#3DB80C",
                },
                "&:hover fieldset": {
                  borderColor: "#3DB80C",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#3DB80C",
                },
                borderRadius: "8px",
                width: { md: "600px", lg: "600px", xs: "100%", sm: "600px" },
              },
            }}
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 12, md: 2, lg: 2 }}>
          <Typography>Phone Number</Typography>
        </Grid>
        <Grid size={{ xs: 12, sm: 12, md: 10, lg: 10 }}>
          <TextField
            fullWidth
            type="number"
            size="small"
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#3DB80C",
                },
                "&:hover fieldset": {
                  borderColor: "#3DB80C",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#3DB80C",
                },
                borderRadius: "8px",
                width: { md: "600px", lg: "600px", xs: "100%", sm: "600px" },
              },
            }}
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 12, md: 2, lg: 2 }}>
          <Typography>Payment Method</Typography>
        </Grid>
        <Grid size={{ xs: 12, sm: 12, md: 10, lg: 10 }}>
          <Paper
            variant="outlined"
            sx={{
              borderColor: "#3DB80C",
              px: 2,
              py: 0.5,
              borderRadius: 2,
              display: "flex",
              alignItems: "center",
              width: "150px",
              background: "transparent",
            }}
          >
            <FormControlLabel
              value="zelle"
              control={<Radio size="small" />}
              label="Zelle"
              sx={{
                m: 0,
                "& .MuiRadio-root": { padding: "7px" },
                width: "100%",
                "& .MuiRadio-root.Mui-checked": {
                  color: "#3DB80C",
                },
              }}
            />
          </Paper>
        </Grid>

        <Grid size={{ xs: 12, sm: 12, md: 2, lg: 2 }}>
          <Typography>Subscription Plan</Typography>
        </Grid>
        <Grid size={{ xs: 12, sm: 12, md: 10, lg: 10 }}>
          <FormControl size="small">
            <Select
              value="One Year"
              variant="outlined"
              displayEmpty
              IconComponent={() => (
                <ArrowDropDownIcon
                  sx={{ color: "#3DB80C", cursor: "pointer" }}
                />
              )}
              MenuProps={{
                PaperProps: {
                  sx: {
                    borderColor: "#3DB80C",
                    backgroundColor: "#FDF7E1",
                    marginTop: "4px",
                    "& .MuiMenuItem-root": {
                      backgroundColor: "#FDF7E1",
                      color: "#3DB80C",
                      "&:hover": {
                        backgroundColor: "#3DB80C",
                        color: "white",
                      },
                    },
                  },
                },
              }}
              sx={{
                color: "#3DB80C",
                backgroundColor: "#FDF7E1",
                border: "1px solid #3DB80C",
                borderRadius: "8px",
                width: "140px",
                padding: "2px 2px",
                "& .MuiSelect-outlined": {
                  padding: "8px 10px",
                  color: "#3DB80C",
                  background: "transparent",
                },
                "& fieldset": {
                  border: "none",
                },
              }}
            >
              <MenuItem value="One Month">One Month</MenuItem>
              <MenuItem value="Six Months">Six Months</MenuItem>
              <MenuItem value="One Year">One Year</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid size={{ xs: 12, sm: 12, md: 2, lg: 2 }}>
          <Typography>Membership Date</Typography>
        </Grid>
        <Grid size={{ xs: 12, sm: 12, md: 10, lg: 10 }}>
          <Box display="flex" alignItems="center" gap={3}>
            <GreenTextField
              type="date"
              InputLabelProps={{
                shrink: true,
              }}
              size="small"
            />
            <Typography>To</Typography>
            <GreenTextField
              type="date"
              InputLabelProps={{
                shrink: true,
              }}
              size="small"
            />
          </Box>
        </Grid>
        <Grid size={{ xs: 12, sm: 12, md: 10, lg: 10 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mt: 3,
            }}
          >
            <Submit variant="contained" size="large">
              Submit
            </Submit>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AddMember;

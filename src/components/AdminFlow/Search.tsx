import { Box, InputAdornment, TextField } from "@mui/material"
import SearchIcon from "@mui/icons-material/Search";
const Search = () => {
  
    return (
    <Box>
       <TextField
                  type="search"
                  placeholder="Search"
                  size="small"
                  slotProps={{
                    input: {
                      startAdornment: (
                        <InputAdornment position="start">
                          <SearchIcon sx={{ color: "#3DB80C" }} />
                        </InputAdornment>
                      ),
                    },
                  }}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "#3DB80C",
                        borderRadius: "10px",
                      },
                      "&:hover fieldset": {
                        borderColor: "#3DB80C",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#3DB80C",
                      },
                    },
                    "& input::placeholder": {
                      color: "#3DB80C",
                      opacity: 1,
                    },
                    width: { lg: "500px", md: "500px", xs: "100%", sm: "100%" },
                    borderRadius: "10px",
                    background: "white",
                  }}
                /> 

    </Box>
  )
}

export default Search
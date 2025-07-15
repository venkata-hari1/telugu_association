import {
  Box,
  Button,
  FormControl,
  Select,
  TextField,
  Typography,
  MenuItem,
  Grid,
} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import CancelIcon from "@mui/icons-material/Cancel";
import { useState } from "react";
import { Submit, VisuallyHiddenInput } from "../../adminstyles/MembershiptableStyles";
import { showToast } from "../../Utils/ShowToast";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


const MAX_IMAGE_SIZE = 1 * 1024 * 1024; // 1MB
const ALLOWED_TYPES = ["image/jpeg", "image/png"];

const Addboard = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    role: "",
    image: null as File | null,
  });
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [errors, setErrors] = useState({ image: "" });
  const navigate = useNavigate();
  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRoleChange = (e: any) => {
    setFormData((prev) => ({ ...prev, role: e.target.value }));
  };

  const handleImageChange = (e: any) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!ALLOWED_TYPES.includes(file.type)) {
      setErrors({ image: "Only JPG and PNG files are allowed" });
      setFormData((prev) => ({ ...prev, image: null }));
      setImagePreview(null);
      return;
    }

    if (file.size > MAX_IMAGE_SIZE) {
      setErrors({ image: "Image must be less than or equal to 1MB" });
      setFormData((prev) => ({ ...prev, image: null }));
      setImagePreview(null);
      return;
    }

    setErrors({ image: "" });
    setFormData((prev) => ({ ...prev, image: file }));
    setImagePreview(URL.createObjectURL(file));
  };

  const isFormValid =
    formData.firstName.trim() &&
    formData.lastName.trim() &&
    formData.role &&
    formData.image &&
    !errors.image;

  const handleSubmit = () => {
    if (!isFormValid) return;

    showToast(true, "Board members added successfully");

    setFormData({ firstName: "", lastName: "", role: "", image: null });
    setImagePreview(null);
    setErrors({ image: "" });
  };

  return (
    <Box sx={{ overflowX: { sm: "hidden" }, width: {lg:"60%",md:'100%',xs:'100%'}, }}>
      {/* Year Select */}
      <Grid sx={{mb:3}} >
        <Box display="flex" alignItems="center" mb={2}>
          <ArrowBackIcon onClick={() => navigate(-1)} sx={{ cursor: 'pointer', color: '#3DB80C', mr: 1 }} />
          <Typography variant="h5" color="#3DB80C" fontWeight="500">
              Events and Calendar / Add Event
          </Typography>
        </Box>
      </Grid>

      <Box mb={2}>
        <FormControl size="small">
          <Select
            value="2025"
            variant="outlined"
            displayEmpty
            IconComponent={() => (
              <ArrowDropDownIcon sx={{ color: "#3DB80C", cursor: "pointer" }} />
            )}
            sx={{
              color: "#3DB80C",
              backgroundColor: "white",
              border: "1px solid #3DB80C",
              borderRadius: "2px",
              width: "120px",
              "& fieldset": { border: "none" },
            }}
          >
            <MenuItem value="2025">2025</MenuItem>
          </Select>
        </FormControl>
      </Box>

      {/* First Name */}
      <Box mb={2}>
        <Typography mb={0.5}>First Name</Typography>
        <TextField
          fullWidth
          size="small"
          name="firstName"
          value={formData.firstName}
          onChange={handleInputChange}
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": { borderColor: "#3DB80C" },
              "&:hover fieldset": { borderColor: "#3DB80C" },
              "&.Mui-focused fieldset": { borderColor: "#3DB80C" },
              borderRadius: "8px",
            },
          }}
        />
      </Box>

      {/* Last Name */}
      <Box mb={2}>
        <Typography mb={0.5}>Last Name</Typography>
        <TextField
          fullWidth
          size="small"
          name="lastName"
          value={formData.lastName}
          onChange={handleInputChange}
          sx={{
            "& .MuiOutlinedInput-root": {
              "& fieldset": { borderColor: "#3DB80C" },
              "&:hover fieldset": { borderColor: "#3DB80C" },
              "&.Mui-focused fieldset": { borderColor: "#3DB80C" },
              borderRadius: "8px",
            },
          }}
        />
      </Box>

      {/* Role */}
      <Box mb={2}>
        <Typography mb={0.5}>Role</Typography>
        <FormControl size="small" fullWidth>
          <Select
            value={formData.role}
            onChange={handleRoleChange}
            displayEmpty
            IconComponent={() => (
              <ArrowDropDownIcon sx={{ color: "#3DB80C", cursor: "pointer" }} />
            )}
            sx={{
              color: "#3DB80C",
              backgroundColor: "#FDF7E1",
              border: "1px solid #3DB80C",
              borderRadius: "6px",
              "& fieldset": { border: "none" },
            }}
          >
            <MenuItem value="">Select Role</MenuItem>
            <MenuItem value="president">President</MenuItem>
            <MenuItem value="vice-president">Vice President</MenuItem>
            <MenuItem value="marketing secretary">Marketing Secretary</MenuItem>
            <MenuItem value="food secretary">Food Secretary</MenuItem>
            <MenuItem value="culture secretary">Culture Secretary</MenuItem>
            <MenuItem value="volunteer secretary">Volunteer Secretary</MenuItem>
            <MenuItem value="event secretary">Event Secretary</MenuItem>
            <MenuItem value="media secretary">Language/Media Secretary</MenuItem>
            <MenuItem value="others">Others</MenuItem>
          </Select>
        </FormControl>
      </Box>

      {/* Image Upload */}
      <Box mb={2}>
        <Typography mb={0.5}>Load Image</Typography>
        <Button
          component="label"
          variant="outlined"
          tabIndex={-1}
          endIcon={<UploadFileIcon />}
          sx={{ borderColor: "#3DB80C", color: "#3DB80C", py: "7px" }}
        >
          Upload
          <VisuallyHiddenInput type="file" onChange={handleImageChange} />
        </Button><br/>

        {errors.image && (
          <Typography color="#F34646" fontSize={14} mt={1}>
            {errors.image}
          </Typography>
        )}

        {imagePreview && (
          <Box mt={1} position="relative" display="inline-block">
            <img
              src={imagePreview}
              alt="preview"
              style={{
                maxWidth: "200px",
                maxHeight: "100px",
                objectFit: "contain",
                border: "1px solid #ddd",
                borderRadius: "4px",
              }}
            />
            <CancelIcon
              onClick={() => {
                setFormData((prev) => ({ ...prev, image: null }));
                setImagePreview(null);
                setErrors({ image: "" });
              }}
              sx={{
                position: "absolute",
                top: -10,
                right: -10,
                backgroundColor: "white",
                borderRadius: "50%",
                color: "red",
                cursor: "pointer",
                boxShadow: 1,
              }}
            />
          </Box>
        )}

        <Typography color="#F34646" mt={1}>
          *Please upload the sponsor logo in landscape format (Preferred size: 300px × 100px)
        </Typography>
      </Box>

      {/* Submit */}
      <Box display="flex" justifyContent="center" mt={4}>
        <Submit variant="contained" size="large" disabled={!isFormValid} onClick={handleSubmit}>
          Submit
        </Submit>
      </Box>
    </Box>
  );
};

export default Addboard;

import {
  Box,
  Button,
  Card,
  CardMedia,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import { Custombutton } from "../../adminstyles/MembershiptableStyles";
import AddIcon from "@mui/icons-material/Add";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from "react-router-dom";
import tgallery1 from "../../assets/tgallery1.jpg";

const Media = () => {
 
  const gallerydata = [
    { id: 1, img: tgallery1 },
    { id: 2, img: tgallery1 },
    { id: 3, img: tgallery1 },
  ];
  const festdata = [
    {
      id: 1,
      festtitle: "TAM Deepavali",
      icon: <BorderColorIcon />,
      edit: "Edit",
    },
    {
      id: 2,
      festtitle: "TAM Sankranthi",
      icon: <BorderColorIcon />,
      edit: "Edit",
    },
    {
      id: 3,
      festtitle: "TAM Shivarathri",
      icon: <BorderColorIcon />,
      edit: "Edit",
    },
  ];

  const mememberbutton = [2013, 2014, 2015, 2016, 2017];
  const navigate = useNavigate();
  return (
    <Box>
      <Grid container sx={{ pt: 1 }}>
        <Grid size={{ lg: 6, md: 6, sm: 6, xs:8}}>
        <Box display="flex" alignItems="center" mb={2}>
        <ArrowBackIcon onClick={() => navigate(-1)} sx={{ cursor: 'pointer', color: '#3DB80C', mr: 1 }} />
            <Typography variant="h5" color="#3DB80C" fontWeight="500">
              Gallery & Media
            </Typography>
          </Box>
        </Grid>
        <Grid size={{md:6,xs:4}}>
          <Box display="flex" sx={{ gap: "20px", justifyContent: "flex-end" }}>
            <Custombutton
              variant="outlined"
              startIcon={<AddIcon />}
              onClick={() => navigate("/admin/admingallery/addgallery")}
            >
              Add Gallery
            </Custombutton>
          </Box>
        </Grid>

        <Grid>
          <Box
            display="flex"
            sx={{ gap: "30px", justifyContent: "flex-start", mt: "5px" }}
          >
            <Custombutton
              variant="outlined"
              sx={{ background: "white", color: "#3DB80C" }}
              
            >
              Photo Gallery
            </Custombutton>
            <Custombutton variant="outlined" onClick={()=>navigate('/admin/admingallery/video')}>Video Gallery</Custombutton>
          </Box>

          <Box display="flex" gap={1} flexWrap="wrap" mt={2}>
            {mememberbutton.map((member) => (
              <Button
                variant="contained"
                sx={{ background: "#3DB80C", color: "#fff" }}
              >
                {member}
              </Button>
            ))}
          </Box>

          {festdata.map((fest) => (
            <Box
              component={Paper}
              sx={{
                width: { lg: "100%" },
                p: 3,
                mt: 2,
                background: "transparent",
              }}
            >
              <Box
                display="flex"
                justifyContent="space-between">  
                <Typography variant="h6" color="#3DB80C">
                  {fest.festtitle}
                </Typography>
                 <Button variant="outlined"  onClick={()=>navigate('/admin/admingallery/addgallery')}
                 sx={{background:'#3DB80C',color:'white'}}startIcon={fest.icon}>{fest.edit}</Button>
              </Box>
               <Grid container spacing={5} sx={{ mt: 2 }}>
                {gallerydata.map((data) => (
                  <Grid size={{ xs: 12, sm: 6, md: 4 }} key={data.id}>
                    <Card sx={{ maxWidth: "100%" }} component={Paper}>
                      <CardMedia
                        component="img"
                        image={data.img}
                        sx={{ height: 200, objectFit: "cover", width: "300" }}
                      />
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Box>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Media;

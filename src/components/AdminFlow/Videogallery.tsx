import {
  Box,
  Button,
  Card,
  CardMedia,
  CardContent,
  Grid,
 Typography,
} from "@mui/material";
import { Custombutton } from "../../adminstyles/MembershiptableStyles";
import AddIcon from "@mui/icons-material/Add";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import { useNavigate } from "react-router-dom";
import tgallery1 from "../../assets/tgallery1.jpg";

const Videogallery = () => {
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
    }
    ];
 
const navigate=useNavigate()
  return (
    <Box>
      <Grid container>
        <Grid size={{ lg: 6, md: 6, sm: 6, xs: 6 }}>
          <Typography variant="h5" color="#3DB80C" fontWeight="500">
            Gallery & Media
          </Typography>
        </Grid>
        <Grid size={{ lg: 6, md: 6, sm: 6, xs: 6 }}>
          <Box display="flex" sx={{ gap: "20px", justifyContent: "flex-end" }}>
            <Custombutton
              startIcon={<AddIcon />}
              onClick={() => navigate("/admin/admingallery/addgallery")}
            >
              Add Gallery
            </Custombutton>
          </Box>
        </Grid>

        <Grid size={{xs:12}}>
          <Box
            display="flex"
            sx={{ gap: "30px", justifyContent: "flex-start", mt: "5px" ,flexWrap:'nowrap'}}
          >
            <Custombutton onClick={()=>navigate('/admin/admingallery/photogallery')}>Photo Gallery</Custombutton>
            <Custombutton
              variant="outlined"
              sx={{ background: "white", color: "#3DB80C" }}
            >
              Video Gallery
            </Custombutton>
          </Box>
        </Grid>
      </Grid>
      <Box sx={{ display: "flex", gap: 2, flexDirection: "column", mt: 2 }}>
       {festdata.map((fest)=>(
           <Card
          variant="outlined"
          sx={{ maxWidth: 345, background: "transparent" }}
        >
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              Team Sankranthi Event
            </Typography>
          </CardContent>
          <CardMedia
            sx={{ height: 140 }}
            image={tgallery1}
            title="green iguana"
          />
          <Box display="flex" justifyContent="center">
            <Button
              variant="outlined"
              sx={{ background: "#3DB80C", color: "white",mt:1,mb:1 }}
              startIcon={<BorderColorIcon />}
            >
              Edit
            </Button>
          </Box>
        </Card>


       ))}
       
     </Box>
    </Box>
  );
};

export default Videogallery;

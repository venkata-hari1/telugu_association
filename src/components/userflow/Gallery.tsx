import {
  Box,
  Card,
  CardMedia,
  FormControl,
  MenuItem,
  Paper,
  Select,
  Typography,
} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useLocation } from "react-router-dom";
import Photo1 from '../../assets/photo1.png'
import Photo2 from '../../assets/photo2.png'
import Photo3 from '../../assets/photo3.png'
import Photo4 from '../../assets/photo4.png'
function Gallery() {
  const location=useLocation()
  const pathname=location.pathname
  const Video1 = () => (
    <iframe
      width="600"
      height="315"
      src="https://www.youtube.com/embed/MSxd7wENUZ4?si=MD3hqBOhD0STIEYD"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    />
  );
  const photogalldata = [
    {id:1,txt:'TAM Deepavali',imgs:[
      { id: 1, img: Photo1 },
      { id: 2, img: Photo2},
      { id: 3, img: Photo2 },
    ]},
    {id:2,txt:'TAM Sankranti',imgs:[
      { id: 1, img: Photo3 },
      { id: 2, img:Photo4 },
      { id: 3, img: Photo4 },
    ]}
  ];

  const videogalldata = [
    {
      id: 1,
      txt: 'TAM Deepavali',
      imgs: [{ id: 1, img: <Video1 /> }],
    },
    {
      id: 2,
      txt: 'TAM Sankranti',
      imgs: [{ id: 1, img: <Video1 /> }],
    }
  ];
 const Gallery=pathname==="/gallery/photos"?photogalldata:videogalldata
  return (
    <Box width="100%" p={2}>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography color="#3DB80C" fontWeight="700">
          {pathname==="/gallery/photos"?"Photo Gallery":"Video Gallery"}
        </Typography>
        <FormControl size="small">
          <Select
            value="2025"
            variant="outlined"
            displayEmpty
            IconComponent={() => (
              <ArrowDropDownIcon sx={{ color: "white", cursor: "pointer" }} />
            )}
            MenuProps={{
              PaperProps: {
                sx: {
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
              color: "white",
              backgroundColor: "#3DB80C",
              border: "1px solid #3DB80C",
              borderRadius: "2px",
              width: "120px",
              padding: "1px 1px",
              "& .MuiSelect-outlined": {
                padding: "8px 10px",

                background: "transparent",
              },
              "& fieldset": {
                border: "none",
              },
            }}
          >
            <MenuItem value="2025">2025</MenuItem>
            <MenuItem value="2024">2024</MenuItem>
          </Select>
        </FormControl>
      </Box>

      {Gallery.map((gdata) => (
        <Box key={gdata.id}>
          <Paper
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              p: 1,
              margin: "auto",
              marginTop: "10px",
              width: "95%",
            }}
          >
            <Typography
              sx={{ color: "#3DB80C", fontSize: 14, fontWeight: 600 }}
            >
              {gdata.txt}
            </Typography>
          </Paper>
          <Box
            mt={3}
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection={{ lg: "row", md: "row", sm: "column", xs: "column" }}
            gap={3}
          >
            {gdata.imgs.map((gallery:any) => (
              <Card
                key={gallery.id}
                sx={{
                  background: "transparent",
                  width: { sm: "100%", xs: "100%", lg: "100%" },
               
                }}
              >
               {pathname==="/gallery/photos" ? (
  <CardMedia
    component="img"
    src={gallery.img}
    sx={{ width: "100%", height: "150px" }}
  />
) : (
  <Box
  sx={{
    position: "relative",
    display:'flex',
    padding:'10px',
    justifyContent:'center',
    alignItems:'center',
    alignContent:'center',
    width: "100%",
  }}
>
  
    {gallery.img}

</Box>
)}
              </Card>
            ))}
          </Box>
        </Box>
      ))}
    </Box>
  );
}

export default Gallery;

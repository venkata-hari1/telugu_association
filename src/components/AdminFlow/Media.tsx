import {
  Box,
  Button,
  Card,
  CardMedia,
  Grid,
  IconButton,
  Paper,
  Typography,
} from "@mui/material";
import { Custombutton } from "../../adminstyles/MembershiptableStyles";
import AddIcon from "@mui/icons-material/Add";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../Redux/Store";
import {
  deleteGalleryById,
  fetchGallery,
  deleteAllGalleryItems,
} from "../../Redux/gallarySlice";
import { useEffect, useState } from "react";
import Deletepopup from "./Deletepopup";
import Loading from "../../Utils/CircularLoader";
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import { showToast } from "../../Utils/ShowToast";
interface Year {
  year: string;
}

const Media = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  // const currentYear = new Date().getFullYear().toString(); 
  const { gallery, loading }:any = useSelector(
    (state: RootState) => state.gallery
  );
  const [selectedYear, setSelectedYear] = useState<string>('');

  const [page, setPage] = useState<number>(1);
  const[name,setName]=useState('')
  const [openDeletePopup, setOpenDeletePopup] = useState(false);

  useEffect(() => {
    const getData = async () => {
       await dispatch(fetchGallery({ year: selectedYear, page }));
     
    };
    getData();
  }, [dispatch, selectedYear, page]);
useEffect(()=>{
  localStorage.setItem('year',selectedYear)
  localStorage.setItem('page',page.toString())
},[selectedYear, page,name])
  

  const handleConfirmDelete = async () => {
    switch(name){
      case 'singledelete':{
        const response=await dispatch(deleteGalleryById());
        const fullfilled=response.payload
        if(fullfilled.status){
          setOpenDeletePopup(false)
          showToast(true,fullfilled.message)
        }
        else{
          setOpenDeletePopup(false)
          showToast(false,fullfilled.message)
        }
        break;
      }
      case 'deleteAll':{
        const response= await dispatch(deleteAllGalleryItems());
        const fullfilled=response.payload
        if(fullfilled.status){
          setOpenDeletePopup(false)
          showToast(true,fullfilled.message)
        }
        else{
          setOpenDeletePopup(false)
          showToast(false,fullfilled.message)
        }
        break;
      }
      default:{
       break;
      }
     }
    
  };

  const handleDeleteByTitle = (id: string) => {
    if(id){
    setName('singledelete')
    localStorage.setItem('galleryid',id)
    setOpenDeletePopup(true)
    }
  };
 const handleDeleteAll=()=>{
  setName('deleteAll')
  setOpenDeletePopup(true)
 }
 

  const handleYearClick = (year: string) => {
    setSelectedYear(year);
    setPage(1);
  };

const handleNavigate=(id:string)=>{
  if(id){
    localStorage.setItem('galleryid',id)
    setTimeout(()=>{
      navigate(`/admin/admingallery/addgallery`,{state:{value:true}})
    },10)
    
  }
}

  return (
    <Box>
     
        <Deletepopup
       name={name}
       loading={loading}
        open={openDeletePopup}
        handleClose={() => setOpenDeletePopup(false)}
        onConfirm={handleConfirmDelete}
      />
      {loading&&<Loading/>}
      <Grid container sx={{ pt: 1 }}>
        <Grid size={{ lg: 6, md: 6, sm: 6, xs: 8 }}>
          <Typography variant="h5" color="#3DB80C" fontWeight="500">
            Gallery & Media
          </Typography>
        </Grid>
        <Grid size={{ md: 6, xs: 4 }}>
          <Box display="flex" justifyContent="flex-end" gap={2}>
            <Button
              variant="outlined"
              startIcon={<AddIcon />}
              sx={{
                background: "#3DB80C",
                color: "white",
                textTransform: "none",
                "&:hover": {
                  backgroundColor: "white",
                  color: "#3DB80C",
                  borderColor: "#3DB80C",
                },
              }}
              onClick={() => console.log("Add Highlight clicked")}
            >
              Add Highlight
            </Button>
            <Custombutton
              variant="outlined"
              startIcon={<AddIcon />}
              onClick={() => navigate("/admin/admingallery/addgallery")}
            >
              Add Gallery
            </Custombutton>
          </Box>
        </Grid>
        <Box display="flex" sx={{gap:"30px",justifyContent:"flex-start",mt:'5px'}}>
       <Custombutton variant="outlined"
              sx={{ background: "white", color: "#3DB80C" }}>
         Photo Gallery
       </Custombutton>
       <Custombutton>
         Video Gallery
       </Custombutton>
      </Box>
{gallery?.gallery?.length>0?
        <Grid sx={{ width: "100%" }}>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            flexWrap="wrap"
            mt={3}
          >
           
            <Box display="flex" gap={2} flexWrap="wrap">
              <IconButton onClick={()=>setSelectedYear('')}><RestartAltIcon/></IconButton>
              {gallery?.years?.length > 0 ? (
                gallery.years.map((year: Year) => (
                  <Button
                    key={year.year}
                    onClick={() => handleYearClick(year.year)}
                    variant={
                      selectedYear === year.year ? "contained" : "outlined"
                    }
                    sx={{
                      backgroundColor:
                        selectedYear === year.year ? "#3DB80C" : "white",
                      color: selectedYear === year.year ? "white" : "#3DB80C",
                      borderColor: "#3DB80C",
                      textTransform: "none",
                      minWidth: "80px",
                      fontWeight: 600,
                      "&:hover": {
                        backgroundColor:
                          selectedYear === year.year ? "#2a8c06" : "#e8f5e9",
                        color:
                          selectedYear === year.year ? "white" : "#3DB80C",
                        borderColor: "#3DB80C",
                      },
                    }}
                  >
                    {year.year}
                  </Button>
                ))
              ) : (
                <Typography color="gray">No years available</Typography>
              )}
            </Box>

    
            <Box mt={{ xs: 2, md: 0 }}>
              <Button
                variant="outlined"
                color="error"
                sx={{
                  borderColor: "#ff4d4f",
                  color: "#ff4d4f",
                  backgroundColor: "white",
                  textTransform: "none",
                  height: "40px",
                }}
                onClick={handleDeleteAll}
              >
                Delete All
              </Button>
            </Box>
          </Box>

        

          {gallery?.gallery?.map((fest:{_id:string;title:string;CloudFile?:{image:string,_id:string}[]}) => (
            <Box
              key={fest._id}
              component={Paper}
              sx={{
                width: "100%",
                p: 3,
                mt: 2,
                background: "transparent",
              }}
            >
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                mb={2}
              >
                <Typography variant="h6" color="#3DB80C">
                  {fest?.title}
                </Typography>
                <Box display="flex" gap={1}>
                  <Button
                    variant="outlined"
                    sx={{
                      background: "#3DB80C",
                      color: "white",
                      textTransform: "none",
                      "&:hover": {
                        backgroundColor: "white",
                        color: "#3DB80C",
                        borderColor: "#3DB80C",
                      },
                    }}
                    startIcon={<BorderColorIcon />}
                    onClick={() => handleNavigate(fest._id)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="outlined"
                    color="error"
                    sx={{
                      borderColor: "#ff4d4f",
                      color: "#ff4d4f",
                      backgroundColor: "white",
                      textTransform: "none",
                    }}
                    onClick={() => handleDeleteByTitle(fest._id)}
                  >
                    Delete
                  </Button>
                </Box>
              </Box>

              <Grid container spacing={5} sx={{ mt: 2 }}>
                {fest?.CloudFile?.map((data:{_id:string,image:string}) => (
                  <Grid size={{ xs: 12, sm: 6, md: 4 }} key={data._id}>
                    <Card sx={{ maxWidth: "100%" }} component={Paper}>
                      <CardMedia
                        component="img"
                        image={data.image || "placeholder.jpg"} 
                        sx={{ height: 200, objectFit: "cover", width: "100%" }}
                      />
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Box>
          ))}
        </Grid>:
        <Grid sx={{width:'100%'}}>
          <Box sx={{textAlign:'center',fontWeight:'800',fontSize:'15px'}} mt={3}>
          No data found
          </Box>
        </Grid>
        }
      </Grid>


    
    </Box>
  );
};

export default Media;
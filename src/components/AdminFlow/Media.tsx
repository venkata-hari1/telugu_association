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
  pagination,
} from "../../Redux/gallarySlice";
import { Fragment, useEffect, useState } from "react";
import Deletepopup from "./Deletepopup";
import Loading from "../../Utils/CircularLoader";
import { showToast } from "../../Utils/ShowToast";
import Paginationcomponent from "./Pagination";
interface Year {
  year: string;
}

const Media = () => {
  const mediaType = localStorage.getItem('type') || ''
  const [type, setType] = useState(mediaType)
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const { gallery, loading, Page,SearchTitle }: any = useSelector(
    (state: RootState) => state.gallery
  );
  const [selectedYear, setSelectedYear] = useState<string>('');
  const [name, setName] = useState('')
  const [openDeletePopup, setOpenDeletePopup] = useState(false);

  useEffect(() => {
    const getData = async () => {
      await dispatch(fetchGallery({ year: selectedYear, Page, type,SearchTitle }));
    }
    getData();
  }, [dispatch, selectedYear, Page, type, Page,SearchTitle]);


  useEffect(() => {
    const type = localStorage.getItem('type')
    if (!type) {

      localStorage.setItem('type', 'photos');
    }
    localStorage.setItem('year', selectedYear)
    localStorage.setItem('page', (Page ?? 1).toString())
    localStorage.setItem('SearchTitle',SearchTitle)
  }, [selectedYear, Page, name, type])


  const handleConfirmDelete = async () => {
    switch (name) {
      case 'singledelete': {
        const response = await dispatch(deleteGalleryById());
        const fullfilled = response.payload
        if (fullfilled.status) {
          if (gallery?.gallery?.length === 1 && gallery.currentPage > 1) {
            const newPage = gallery.currentPage - 1;
            localStorage.setItem('page', newPage.toString());
            dispatch(pagination(newPage));
          } else {
            dispatch(pagination(gallery.currentPage));
          }
          setOpenDeletePopup(false)
          showToast(true, fullfilled.message)
        }
        else {
          setOpenDeletePopup(false)
          showToast(false, fullfilled.message)
        }
        break;
      }
      case 'deleteAll': {
        const response = await dispatch(deleteAllGalleryItems());
        const fullfilled = response.payload
        if (fullfilled.status) {
          if (gallery?.gallery?.length === 1 && gallery.currentPage > 1) {
            const newPage = gallery.currentPage - 1;
            localStorage.setItem('page', newPage.toString());
            dispatch(pagination(newPage));
          } else {
            dispatch(pagination(gallery.currentPage));
          }
          setOpenDeletePopup(false)
          showToast(true, fullfilled.message)
        }
        else {
          setOpenDeletePopup(false)
          showToast(false, fullfilled.message)
        }
        break;
      }
      default: {
        break;
      }
    }

  };

  const handleDeleteByTitle = (id: string) => {
    if (id) {
      setName('singledelete')
      localStorage.setItem('galleryid', id)

      setOpenDeletePopup(true)
    }
  };
  const handleDeleteAll = () => {
    setName('deleteAll')
    setOpenDeletePopup(true)
  }


  const handleYearClick = (year: string) => {
    setSelectedYear(year);
    dispatch(pagination(1))
  };

  const handleNavigate = (id: string) => {
    if (id) {
      localStorage.setItem('galleryid', id)
      setTimeout(() => {
        navigate(`/admin/admingallery/addgallery`, { state: { value: true } })
      }, 10)

    }
  }
  const handleGallery = (type: string) => {
    switch (type) {
      case 'photo': {
        dispatch(pagination(1))
        localStorage.setItem('type', 'photos')
        setType('photos')
        break;
      }
      case 'video': {
        dispatch(pagination(1))
        localStorage.setItem('type', 'videos')
        setType('videos')
        break;
      }
      default: {
        break;
      }
    }
  }

  const getYoutubeEmbedUrl = (url: string) => {
    const regex = /(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|v\/|shorts\/))([a-zA-Z0-9_-]{11})/;
    const match = url.match(regex);
    return match ? `https://www.youtube.com/embed/${match[1]}` : '';
  };
  return (
    <Box>

      <Deletepopup
        name={name}
        loading={loading}
        open={openDeletePopup}
        handleClose={() => setOpenDeletePopup(false)}
        onConfirm={handleConfirmDelete}
      />
      {loading && <Loading />}
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
              // onClick={() => console.log("Add Highlight clicked")}
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
        <Box display="flex" sx={{ gap: "30px", justifyContent: "flex-start", mt: '5px' }}>

          <Custombutton variant={type === 'photos' ? "outlined" : "contained"} onClick={() => handleGallery('photo')}
            sx={{ background: type === 'photos' ? "white" : '', color: type === 'photos' ? "#3DB80C" : '' }}>
            Photo Gallery
          </Custombutton>
          <Custombutton variant={type === 'videos' ? "outlined" : "contained"}
            sx={{ background: type === 'videos' ? "white" : '', color: type === 'videos' ? "#3DB80C" : '' }}
            onClick={() => handleGallery('video')}>
            Video Gallery
          </Custombutton>
        </Box>
        
          <Grid sx={{ width: "100%" }}>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              flexWrap="wrap"
              mt={3}
            >

              <Box display="flex" gap={2} flexWrap="wrap">
                {gallery.years.length>0&&<Button onClick={() => {
                  setSelectedYear('');
                  dispatch(pagination(1));
                }
                } variant={selectedYear === '' ? "outlined":"contained" }
                  sx={{
                    backgroundColor: selectedYear === '' ?  "white":"#3DB80C" ,
                    color: selectedYear === '' ?"#3DB80C": "white" ,
                    borderColor: "#3DB80C",
                  }}
                >All</Button>}
                {gallery?.years?.map((year: Year) => (
                    <Button
                      key={year.year}
                      onClick={() => handleYearClick(year.year)}
                      variant={
                        selectedYear === year.year ? "outlined":"contained" 
                      }
                      sx={{
                        backgroundColor:
                          selectedYear === year.year ?  "white":"#3DB80C" ,
                        color: selectedYear === year.year ? "#3DB80C":"white" ,
                        borderColor: "#3DB80C",
                        textTransform: "none",
                        minWidth: "80px",
                        fontWeight: 600,
                        "&:hover": {
                          backgroundColor:
                            selectedYear === year.year ?  "#e8f5e9":"#2a8c06" ,
                          color:
                            selectedYear === year.year ?  "#3DB80C":"white" ,
                          borderColor: "#3DB80C",
                        },
                      }}
                    >
                      {year.year}
                    </Button>
                  ))
                }
              </Box>


              {gallery?.gallery?.length>0&&<Box mt={{ xs: 2, md: 0 }}>
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
              </Box>}
             </Box>


             {gallery?.gallery?.length>0?<Fragment>
            {gallery?.gallery?.map((fest: { _id: string; title: string; mediaType: string; youtubelink: string; CloudFile?: { image: string, _id: string }[] }) => (
              <Box
                key={fest._id}
                // component={Paper}
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

                {fest.mediaType === 'photos' ? <Grid container spacing={5} sx={{ mt: 2 }}>
                  {fest?.CloudFile?.map((data: { _id: string, image: string }) => (
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
                </Grid> : <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',alignContent:'center'}}>

                  <iframe
                    width="600"
                    height="315"
                    src={getYoutubeEmbedUrl(fest?.youtubelink)}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />

                </Box>}
              </Box>
            ))}
            <Paginationcomponent />
            </Fragment>:<Typography color="gray" sx={{textAlign:'center',fontWeight:'600'}} mt={4}>No data available</Typography>}
          </Grid> 
      </Grid>



    </Box>
  );
};

export default Media;
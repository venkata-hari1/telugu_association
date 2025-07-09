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
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../Redux/Store";
import { deleteGalleryById, fetchGallery,deleteAllGalleryItems, GalleryItem } from "../../Redux/gallarySlice";
import { useEffect, useState } from "react";
import Deletepopup from './Deletepopup';








const Media = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const { gallery, currentPage, totalPages } = useSelector(
    (state: RootState) => state.gallery
  );

  const [selectedYear, setSelectedYear] = useState<string | null>(null);
  const [allGallery, setAllGallery] = useState<GalleryItem[]>([]);
  const [pagedGallery, setPagedGallery] = useState<GalleryItem[]>([]);
  const [page, setPage] = useState<number>(1);
  const [mememberbutton, setMememberbutton] = useState<string[]>([]);
  const [openDeletePopup, setOpenDeletePopup] = useState(false);
const [deleteType, setDeleteType] = useState<'all' | 'year' | null>(null);



  useEffect(() => {
  const loadAllYears = async () => {
    let all: GalleryItem[] = [];
    let pg = 1;
    let done = false;
    while (!done) {
      const res: any = await dispatch(fetchGallery({ page: pg, limit: 5}));
      if (res.payload?.gallery?.length) {
        all.push(...res.payload.gallery);
        if (pg >= res.payload.totalPages) done = true;
        pg++;
      } else {
        done = true;
      }
    }

    // Extract unique years from gallery
    const years = Array.from(
      new Set(all.map((item) => item.year).filter((y) => !!y))
    ).sort((a, b) => Number(b) - Number(a));

    setMememberbutton(years); // set years for buttons
  };

  loadAllYears();
}, []);


  // Fetch gallery when page changes
  useEffect(() => {
    const loadAll = async () => {
      let all: GalleryItem[] = [];
      let pg = 1;
      let done = false;
      while (!done) {
        const res: any = await dispatch(fetchGallery({ page: pg, limit: 50 }));
        if (res.payload?.gallery?.length) {
          all.push(...res.payload.gallery);
          if (pg >= res.payload.totalPages) done = true;
          pg++;
        } else {
          done = true;
        }
      }
      setAllGallery(all);
    };

    loadAll();
  }, [dispatch]);

  useEffect(() => {
  dispatch(fetchGallery({ page, limit: 9 })).then((res: any) => {
    setPagedGallery(res.payload?.gallery || []);
  });
}, [dispatch, page]);


 const token = localStorage.getItem("token") || ""; 


const handleConfirmDelete = async () => {
  await dispatch(deleteAllGalleryItems({ token }));

  setOpenDeletePopup(false);
  setDeleteType(null);

  // Refresh gallery state after deletion
  const refreshed: any = await dispatch(fetchGallery({ page: 1, limit: 5 }));
  if (refreshed.payload?.gallery) {
    setAllGallery(refreshed.payload.gallery);
    setPagedGallery(refreshed.payload.gallery.slice(0, 9));
  }
};
const handleDeleteByTitle = async (title: string) => {
  const confirmDelete = window.confirm(`Are you sure you want to delete all items for "${title}"?`);
  if (!confirmDelete) return;

  const itemsToDelete = allGallery.filter(item => item.title === title);

  for (const item of itemsToDelete) {
    await dispatch(deleteGalleryById({ id: item._id, token }));
  }

  // Refresh gallery after deletions
  const refreshed: any = await dispatch(fetchGallery({ page: 1, limit: 50 }));
  if (refreshed.payload?.gallery) {
    setAllGallery(refreshed.payload.gallery);
    setPagedGallery(refreshed.payload.gallery.slice(0, 9));
  }
};




  // Filter gallery by selected year
const filteredGallery = selectedYear
  ? allGallery.filter((item) => item.year === selectedYear)
  : pagedGallery;



  const groupedData = filteredGallery.reduce<Record<string, GalleryItem[]>>((acc, item) => {
    if (!acc[item.title]) acc[item.title] = [];
    acc[item.title].push(item);
    return acc;
  }, {});

  const handleYearClick = async (year: string) => {
  setSelectedYear(year);
  const res: any = await dispatch(fetchGallery({ page: 1, limit: 9, year }));
  setPagedGallery(res.payload?.gallery || []);
};


  const festdata = Object.entries(groupedData).map(([title, items], index) => ({
    id: index + 1,
    festtitle: title,
    icon: <BorderColorIcon />,
    edit: "Edit",
    images: items,
  }));
  

  return (
    <Box>
      <Grid container sx={{ pt: 1 }}>
        <Grid size={{ lg: 6, md: 6, sm: 6, xs:8}}>
          <Typography variant="h5" color="#3DB80C" fontWeight="500">
            Gallery & Media
          </Typography>
        </Grid>
        <Grid size={{md:6,xs:4}}>
            <Box display="flex" justifyContent="flex-end" gap={2}>
      <Button
          variant="outlined"
          startIcon={<AddIcon />}
          sx={{ background: "#3DB80C", color: "white", textTransform: "none" }}
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

        <Grid>
  <Box
  display="flex"
  justifyContent="space-between"
  alignItems="center"
  flexWrap="wrap"
  mt={3}
>
  {/* Left side: Year buttons */}
  <Box display="flex" gap={3} flexWrap="wrap">
    {mememberbutton.map((year) => (
      <Button
        key={year}
        onClick={() => handleYearClick(year)}
        variant={selectedYear === year ? "contained" : "outlined"}
        sx={{
          backgroundColor: selectedYear === year ? "white" : "#3DB80C",
          color: selectedYear === year ? "#3DB80C" : "white",
          borderColor: "#3DB80C",
          textTransform: "none",
          minWidth: "80px",
          fontWeight: 600,
          "&:hover": {
            backgroundColor: selectedYear === year ? "#3DB80C" : "#E8F5E9",
          },
        }}
      >
        {year}
      </Button>
    ))}
  </Box>

  {/* Right side: Delete All button */}
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
      onClick={() => {
        setOpenDeletePopup(true);
      }}
    >
      Delete All
    </Button>
  </Box>
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
                {/* Header with title and buttons */}
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      mb={2}
    >
      <Typography variant="h6" color="#3DB80C">
        {fest.festtitle}
      </Typography>

      <Box display="flex" gap={1}>
        <Button
          variant="outlined"
          sx={{
            background: "#3DB80C",
            color: "white",
            textTransform: "none",
          }}
          startIcon={<BorderColorIcon />}
          onClick={() => navigate("/admin/admingallery/addgallery")}
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
          onClick={() => handleDeleteByTitle(fest.festtitle)}

        >
          Delete
        </Button>
      </Box>
       </Box>
              {festdata.length === 0 && (
  <Typography mt={3} textAlign="center" color="gray">
    No gallery items found for {selectedYear}
  </Typography>
)}
               <Grid container spacing={5} sx={{ mt: 2 }}>
                 {fest.images.map((data) => (
             <Grid size={{ xs: 12, sm: 6, md: 4 }} key={data._id}>
              <Card sx={{ maxWidth: "100%" }} component={Paper}>
               <CardMedia
              component="img"
             image={data.images}
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
{!selectedYear && (
  <Box mt={4} display="flex" justifyContent="center" gap={2}>
    <Button
      variant="outlined"
      disabled={page === 1}
      onClick={() => setPage((prev) => prev - 1)}
    >
      Prev
    </Button>
    <Typography>
      Page {currentPage} of {totalPages}
    </Typography>
    <Button
      variant="outlined"
      disabled={page === totalPages}
      onClick={() => setPage((prev) => prev + 1)}
    >
      Next
    </Button>
   </Box>

)}<Deletepopup
  open={openDeletePopup}
  handleClose={() => setOpenDeletePopup(false)}
  onConfirm={handleConfirmDelete}
/>
    </Box>
   
    
  );
};

export default Media;


import { Box, Button, Grid, IconButton, Stack, Typography, Dialog, DialogTitle, DialogContent, DialogActions, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import UploadIcon from '@mui/icons-material/Upload';
import FilterListIcon from '@mui/icons-material/FilterList';
import EditIcon from '@mui/icons-material/Edit';
import CircleIcon from '@mui/icons-material/Circle';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import * as XLSX from 'xlsx';
import Filtersponser from "../AdminFlow/Filtersponser";
import Paginationcomponent from "./Pagination";

const Sponsershipmanagement = () => {
  const navigate = useNavigate();
  const [state, setState] = useState(false);
  const [openPreview, setOpenPreview] = useState(false); // State for preview dialog

  const tabledata = [
    { sno: 1, companyname: 'Pizza Hut', sponsorcontact: 'Srikanth', logo: 'img', contactemail: 'mastinfo@gmail.com', website: "One Year", sponserplan: 'Gold', date: 'From Mar15th to April15th 2025', status: 'Active', action: '' },
    { sno: 2, companyname: 'Pizza Hut', sponsorcontact: 'Srikanth', logo: 'img', contactemail: 'mastinfo@gmail.com', website: "One Year", sponserplan: 'Gold', date: 'From Mar15th to April15th 2025', status: 'Active', action: '' },
    { sno: 3, companyname: 'Pizza Hut', sponsorcontact: 'Srikanth', logo: 'img', contactemail: 'mastinfo@gmail.com', website: "One Year", sponserplan: 'Gold', date: 'From Mar15th to April15th 2025', status: 'Active', action: '' },
    { sno: 4, companyname: 'Pizza Hut', sponsorcontact: 'Srikanth', logo: 'img', contactemail: 'mastinfo@gmail.com', website: "One Year", sponserplan: 'Gold', date: 'From Mar15th to April15th 2025', status: 'Active', action: '' },
    { sno: 5, companyname: 'Pizza Hut', sponsorcontact: 'Srikanth', logo: 'img', contactemail: 'mastinfo@gmail.com', website: "One Year", sponserplan: 'Gold', date: 'From Mar15th to April15th 2025', status: 'Active', action: '' },
    { sno: 6, companyname: 'Pizza Hut', sponsorcontact: 'Srikanth', logo: 'img', contactemail: 'mastinfo@gmail.com', website: "One Year", sponserplan: 'Gold', date: 'From Mar15th to April15th 2025', status: 'Active', action: '' },
  ];

  const openActivemembers = () => {
    setState(prev => !prev);
  };

  // Open preview dialog
  const handleOpenPreview = () => {
    setOpenPreview(true);
  };

  // Close preview dialog
  const handleClosePreview = () => {
    setOpenPreview(false);
  };

  // Export to Excel function
  const exportToExcel = () => {
    // Prepare data for export (excluding the 'action' column)
    const exportData = tabledata.map(({ sno, companyname, sponsorcontact, logo, contactemail, website, sponserplan, date, status }) => ({
      SNo: sno,
      CompanyName: companyname,
      SponsorName: sponsorcontact,
      Logo: logo,
      ContactEmail: contactemail,
      Website: website,
      SponsorshipPlan: sponserplan,
      Date: date,
      Status: status,
    }));

    // Create a worksheet
    const worksheet = XLSX.utils.json_to_sheet(exportData);
    // Create a workbook
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sponsorships");
    // Export the workbook to a file
    XLSX.writeFile(workbook, "Sponsorship_Management.xlsx");
    handleClosePreview(); // Close dialog after download
  };

  return (
    <Box>
      <Grid container>
        <Grid size={{ lg: 6, md: 6, sm: 12, xs: 12 }}>
          <Typography variant="h5" color='#3DB80C'>Sponsorship Management</Typography>
        </Grid>
        <Grid size={{ lg: 6, md: 6, sm: 12, xs: 12 }}>
          <Box display="flex" justifyContent={{ xs: 'flex-start', md: 'flex-end' }}
            gap={1} flexWrap="nowrap" sx={{ marginTop: { xs: 1 } }}>
            <Button
              sx={{ background: '#3DB80C', color: 'white', borderColor: '#3DB80C', fontWeight: 400 }}
              variant="outlined"
              onClick={() => navigate('subscriptionplans')}
            >
              Subscription Plan
            </Button>
            <Button
              sx={{ background: '#3DB80C', color: 'white', borderColor: '#3DB80C', fontWeight: 400 }}
              variant="outlined"
              onClick={() => navigate('donations')}
            >
              Donations
            </Button>
          </Box>
        </Grid>

        {/* Search and buttons */}
        <Grid size={{ lg: 6, md: 6, sm: 12, xs: 12 }}></Grid>
        <Grid size={{ lg: 6, md: 6, sm: 12, xs: 12 }}>
          <Box sx={{
            display: "flex",
            justifyContent: { lg: "flex-end" },
            flexDirection: "row",
            flexWrap: "wrap",
            gap: 1,
            mt: 1,
          }}>
            <Button
              variant="outlined"
              startIcon={<AddIcon />}
              sx={{ background: "#3DB80C", color: 'white', border: 'none', fontWeight: 400 }}
              onClick={() => navigate('/admin/sponsorship/addsponsor')}
            >
              Add Sponsor
            </Button>
            <Button
              variant="outlined"
              startIcon={<UploadIcon />}
              sx={{ background: "#3DB80C", color: 'white', border: 'none', fontWeight: 400 }}
              onClick={handleOpenPreview} // Open preview dialog
            >
              Export
            </Button>
            <Box sx={{ position: 'relative' }}>
              <Button
                variant="contained"
                fullWidth
                startIcon={<FilterListIcon />}
                onClick={openActivemembers}
                sx={{ background: "#3DB80C", fontWeight: 400, color: "white", border: "none" }}
              >
                Filters
              </Button>
              {state && <Filtersponser />}
            </Box>
          </Box>
        </Grid>

        {/* Table */}
        <Grid size={{ lg: 12, md: 12, sm: 12, xs: 12 }}>
          <TableContainer component={Paper} sx={{ marginTop: "10px", background: "white" }}>
            <Table sx={{ minWidth: 650 }} size='small'>
              <TableHead sx={{
                border: '2px solid #3DB80C',
              }}>
                <TableRow sx={{
                  fontWeight: 'bold',
                  '& .MuiTableCell-head': {
                    fontWeight: 'bold',
                    color: '#3DB80C',
                    borderBottom: 'none',
                  },
                }}>
                  <TableCell>S.No</TableCell>
                  <TableCell align="left">Company Name</TableCell>
                  <TableCell align="left">Sponsor Name</TableCell>
                  <TableCell align="left">Logo</TableCell>
                  <TableCell align="left">Contact Details</TableCell>
                  <TableCell align="left">Website</TableCell>
                  <TableCell align="left">Sponsorship Plan</TableCell>
                  <TableCell align="left">Date</TableCell>
                  <TableCell align="left">Status</TableCell>
                  <TableCell align="left">Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {tabledata.map(data => (
                  <TableRow key={data.sno}>
                    <TableCell>{data.sno}</TableCell>
                    <TableCell>{data.companyname}</TableCell>
                    <TableCell>{data.sponsorcontact}</TableCell>
                    <TableCell>{data.logo}</TableCell>
                    <TableCell>{data.contactemail}</TableCell>
                    <TableCell>{data.website}</TableCell>
                    <TableCell>{data.sponserplan}</TableCell>
                    <TableCell>{data.date}</TableCell>
                    <TableCell sx={{ color: "#3DB80C", padding: "6px 10px" }}>
                      <Stack direction='row'>
                        {data.status && <CircleIcon sx={{ marginTop: '5px', marginRight: '2px', fontSize: "11px" }} />}
                        {data.status}
                      </Stack>
                    </TableCell>
                    <TableCell>
                      <Stack direction='row' gap={2}>
                        <IconButton sx={{ flexDirection: 'column' }}>
                          <EditIcon sx={{ fontSize: '20px', color: '#3DB80C' }} />
                          <Typography sx={{ fontSize: '11px', color: '#3DB80C', fontWeight: '550' }}>EDIT</Typography>
                        </IconButton>
                        <IconButton sx={{ flexDirection: 'column' }}>
                          <DeleteOutlineIcon sx={{ color: '#FF3326' }} />
                          <Typography sx={{ color: '#FF3326', fontSize: '11px' }}>Delete</Typography>
                        </IconButton>
                      </Stack>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>

      {/* Preview Dialog */}
      <Dialog open={openPreview} onClose={handleClosePreview} maxWidth="lg" fullWidth>
        <DialogTitle>Excel Preview</DialogTitle>
        <DialogContent>
          <Typography variant="body2" sx={{ mb: 2 }}>
            Below is a preview of the data that will be exported to Excel.
          </Typography>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} size="small">
              <TableHead>
                <TableRow sx={{
                  '& .MuiTableCell-head': {
                    fontWeight: 'bold',
                    color: '#3DB80C',
                    borderBottom: 'none',
                  },
                }}>
                  <TableCell>S.No</TableCell>
                  <TableCell align="left">Company Name</TableCell>
                  <TableCell align="left">Sponsor Name</TableCell>
                  <TableCell align="left">Logo</TableCell>
                  <TableCell align="left">Contact Details</TableCell>
                  <TableCell align="left">Website</TableCell>
                  <TableCell align="left">Sponsorship Plan</TableCell>
                  <TableCell align="left">Date</TableCell>
                  <TableCell align="left">Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {tabledata.map(data => (
                  <TableRow key={data.sno}>
                    <TableCell>{data.sno}</TableCell>
                    <TableCell>{data.companyname}</TableCell>
                    <TableCell>{data.sponsorcontact}</TableCell>
                    <TableCell>{data.logo}</TableCell>
                    <TableCell>{data.contactemail}</TableCell>
                    <TableCell>{data.website}</TableCell>
                    <TableCell>{data.sponserplan}</TableCell>
                    <TableCell>{data.date}</TableCell>
                    <TableCell>{data.status}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClosePreview} color="secondary">
            Cancel
          </Button>
          <Button onClick={exportToExcel} sx={{ background: "#3DB80C", color: 'white' }} variant="contained">
            Download
          </Button>
        </DialogActions>
      </Dialog>

      <Paginationcomponent />
    </Box>
  );
};

export default Sponsershipmanagement;
import { Box, Button, Grid, IconButton, Stack, Typography, Dialog, DialogTitle, DialogContent, DialogActions, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import UploadIcon from "@mui/icons-material/Upload";
import FilterListIcon from "@mui/icons-material/FilterList";
import EditIcon from "@mui/icons-material/Edit";
import CircleIcon from "@mui/icons-material/Circle";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import * as XLSX from 'xlsx'; // Import SheetJS
import Filterdropdown from "./Filterdropdown";
import Paginationcomponent from "./Pagination";

const Membershiptable = () => {
  const navigate = useNavigate();
  const [state, setState] = useState(false);
  const [openPreview, setOpenPreview] = useState(false); // State for preview dialog

  const tabledata = [
    {
      sno: 1,
      name: "Tanuja Abhilash",
      email: "hwestiii@outlook.com",
      phone: "+18143008184",
      membertype: "One Year",
      date: "From Mar 15 to Apr 15 2025",
      status: "Active",
    },
    {
      sno: 2,
      name: "Vignesh",
      email: "ianbuck@icloud.com",
      phone: "+14842634655",
      membertype: "One Year",
      date: "From Mar 15 to Apr 15 2025",
      status: "Active",
    },
    {
      sno: 3,
      name: "Hema Chaudhari",
      email: "tkrotchko@yahoo.ca",
      phone: "+15852826353",
      membertype: "One Year",
      date: "From Mar 15 to Apr 15 2025",
      status: "Active",
    },
    {
      sno: 4,
      name: "Ayush Dhyan",
      email: "mugwump@verizon.net",
      phone: "+16102448965",
      membertype: "One Year",
      date: "From Mar 15 to Apr 15 2025",
      status: "Active",
    },
    {
      sno: 5,
      name: "Param N",
      email: "larry@verizon.net",
      phone: "+18143008346",
      membertype: "One Year",
      date: "From Mar 15 to Apr 15 2025",
      status: "Active",
    },
    {
      sno: 6,
      name: "Pratyush Solanki",
      email: "oevans@icloud.com",
      phone: "+18143008346",
      membertype: "One Year",
      date: "From Mar 15 to Apr 15 2025",
      status: "Active",
    },
  ];

  const openFilter = () => {
    setState((prev) => !prev);
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
    const exportData = tabledata.map(({ sno, name, email, phone, membertype, date, status }) => ({
      SNo: sno,
      Name: name,
      Email: email,
      PhoneNumber: phone,
      MembershipType: membertype,
      Date: date,
      Status: status,
    }));

    // Create a worksheet
    const worksheet = XLSX.utils.json_to_sheet(exportData);
    // Create a workbook
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Memberships");
    // Export the workbook to a file
    XLSX.writeFile(workbook, "Membership_Management.xlsx");
    handleClosePreview(); // Close dialog after download
  };

  return (
    <Box gap={2}>
      <Grid container spacing={2} alignItems="center">
        <Grid size={{ lg: 6, md: 6, sm: 12, xs: 12 }}>
          <Typography variant="h5" color="#3DB80C">
            Membership Management
          </Typography>
        </Grid>
        <Grid size={{ lg: 6, md: 6, sm: 12, xs: 12 }}>
          <Box display="flex" justifyContent={{ xs: 'flex-start', md: 'flex-end' }} gap={2} flexWrap="wrap">
            <Button
              sx={{ background: '#3DB80C', color: 'white', borderColor: '#3DB80C', fontWeight: 400 }}
              variant="outlined"
              onClick={() => navigate("volunteermgmt")}
            >
              Volunteer Management
            </Button>
            <Button
              sx={{ background: '#3DB80C', color: 'white', borderColor: '#3DB80C', fontWeight: 400 }}
              variant="outlined"
              onClick={() => navigate("/admin/sponsorship/subscriptionplans")}
            >
              Subscription plans
            </Button>
          </Box>
        </Grid>

        <Grid size={{ lg: 12, md: 12, sm: 12, xs: 12 }}>
          <Box sx={{ display: 'flex', justifyContent: { lg: 'flex-end' }, flexDirection: 'row', flexWrap: 'wrap', gap: 2 }}>
            <Button
              variant="contained"
              startIcon={<AddIcon />}
              onClick={() => navigate("/admin/membership/member", { state: { value: 'add' } })}
              sx={{ background: '#3DB80C', fontWeight: 400 }}
            >
              Add Member
            </Button>
            <Button variant="contained" startIcon={<UploadIcon />} sx={{ background: '#3DB80C', fontWeight: 400 }}>
              Bulk Upload
            </Button>
            <Button
              variant="contained"
              startIcon={<UploadIcon />}
              sx={{ background: '#3DB80C', fontWeight: 400 }}
              onClick={handleOpenPreview} // Open preview dialog
            >
              Export
            </Button>
            <Box sx={{ position: 'relative' }}>
              <Button
                variant="outlined"
                startIcon={<FilterListIcon />}
                onClick={openFilter}
                sx={{ borderColor: '#3DB80C', color: '#3DB80C', fontWeight: 400 }}
              >
                Filters
              </Button>
              {state && <Filterdropdown />}
            </Box>
          </Box>
        </Grid>

        <TableContainer component={Paper} sx={{ marginTop: "10px", background: "white", fontWeight: 400 }}>
          <Table sx={{ minWidth: 650 }} size="small">
            <TableHead sx={{ border: "2px solid #3DB80C" }}>
              <TableRow sx={{
                fontWeight: "bold",
                "& .MuiTableCell-head": {
                  fontWeight: "bold",
                  color: "#3DB80C",
                  borderBottom: "none",
                },
              }}>
                <TableCell>S.No</TableCell>
                <TableCell align="left">Name</TableCell>
                <TableCell align="left">Email</TableCell>
                <TableCell align="left">Phone Number</TableCell>
                <TableCell align="left">Membership Type</TableCell>
                <TableCell align="left">Date</TableCell>
                <TableCell align="left">Status</TableCell>
                <TableCell align="left">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tabledata.map((data) => (
                <TableRow key={data.sno}>
                  <TableCell>{data.sno}</TableCell>
                  <TableCell>{data.name}</TableCell>
                  <TableCell>{data.email}</TableCell>
                  <TableCell>{data.phone}</TableCell>
                  <TableCell>{data.membertype}</TableCell>
                  <TableCell>{data.date}</TableCell>
                  <TableCell sx={{ color: "#3DB80C" }}>
                    <Stack direction='row'>
                      {data.status && <CircleIcon sx={{ marginTop: '5px', marginRight: '2px', fontSize: "11px" }} />}
                      {data.status}
                    </Stack>
                  </TableCell>
                  <TableCell>
                    <Stack direction='row' gap={2}>
                      <IconButton sx={{ flexDirection: 'column' }} onClick={() => navigate('/admin/membership/member', { state: { value: 'edit' } })}>
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
                  <TableCell align="left">Name</TableCell>
                  <TableCell align="left">Email</TableCell>
                  <TableCell align="left">Phone Number</TableCell>
                  <TableCell align="left">Membership Type</TableCell>
                  <TableCell align="left">Date</TableCell>
                  <TableCell align="left">Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {tabledata.map(data => (
                  <TableRow key={data.sno}>
                    <TableCell>{data.sno}</TableCell>
                    <TableCell>{data.name}</TableCell>
                    <TableCell>{data.email}</TableCell>
                    <TableCell>{data.phone}</TableCell>
                    <TableCell>{data.membertype}</TableCell>
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

export default Membershiptable;
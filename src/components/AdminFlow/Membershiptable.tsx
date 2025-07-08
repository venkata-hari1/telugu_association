import { Box, Button, Grid, IconButton, Stack, Typography, Dialog, DialogTitle, DialogContent, DialogActions, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, CircularProgress } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import UploadIcon from "@mui/icons-material/Upload";
import FilterListIcon from "@mui/icons-material/FilterList";
import EditIcon from "@mui/icons-material/Edit";
import CircleIcon from "@mui/icons-material/Circle";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { useNavigate } from "react-router-dom";
import { useState, useRef } from "react";
import { useDispatch } from 'react-redux';
import * as XLSX from 'xlsx';

import Filterdropdown from "./Filterdropdown";
import Paginationcomponent from "./Pagination";

const Membershiptable = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [state, setState] = useState(false);
  const [openExportPreview, setOpenExportPreview] = useState(false); 

  const [uploadLoading, setUploadLoading] = useState(false);
  const [uploadError, setUploadError] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

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

  const handleOpenExportPreview = () => {
    setOpenExportPreview(true);
  };

  const handleCloseExportPreview = () => {
    setOpenExportPreview(false);
  };

  const exportToExcel = () => {
    const exportData = tabledata.map(({ sno, name, email, phone, membertype, date, status }) => ({
      SNo: sno,
      Name: name,
      Email: email,
      PhoneNumber: phone,
      MembershipType: membertype,
      Date: date,
      Status: status,
    }));

    const worksheet = XLSX.utils.json_to_sheet(exportData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Memberships");
    XLSX.writeFile(workbook, "Membership_Management.xlsx");
    handleCloseExportPreview();
  };

  const handleBulkUploadButtonClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) {
      setUploadError('No file selected.');
      return;
    }

    setUploadLoading(true);
    setUploadError('');

    const reader = new FileReader();

    reader.onload = (e) => {
      try {
        const data = new Uint8Array(e.target?.result as ArrayBuffer);
        const workbook = XLSX.read(data, { type: 'array' });

        const firstSheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[firstSheetName];

        const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

        if (jsonData.length > 0) {
          const headers = jsonData[0] as string[];
          const rows = jsonData.slice(1);

          const formattedData = rows.map(row => {
            let obj: { [key: string]: any } = {};
            headers.forEach((header, index) => {
              obj[header] = (row as any[])[index];
            });
            return obj;
          });

          // Console log the formatted data (the parsed array of objects)
          console.log('Parsed and formatted data ready for dispatch:', formattedData);

          dispatch({
            type: 'BULK_UPLOAD_MEMBERSHIPS_TEXT',
            payload: JSON.stringify(formattedData),
          });

        } else {
          setUploadError('The uploaded file appears to be empty or contains no data after headers.');
        }
      } catch (err: any) {
        setUploadError(`Error processing file: ${err.message}`);
        console.error('Error processing Excel/CSV file:', err);
      } finally {
        setUploadLoading(false);
        if (fileInputRef.current) {
          fileInputRef.current.value = '';
        }
      }
    };

    reader.onerror = () => {
      setUploadLoading(false);
      setUploadError('Failed to read file.');
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    };

    reader.readAsArrayBuffer(file);
  };

  return (
    <Box sx={{ p: 2 }}>
      {/* Grid container to manage overall layout */}
      <Grid container spacing={2} alignItems="center">
        {/* Child Grid items no longer need the 'item' prop. Responsive props (xs, sm, md, lg) are now within 'sx'. */}
        <Grid sx={{ xs: 12, sm: 12, md: 6, lg: 6 }}>
          <Typography variant="h5" color="#3DB80C">
            Membership Management
          </Typography>
        </Grid>
        <Grid sx={{ xs: 12, sm: 12, md: 6, lg: 6 }}>
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

        <Grid sx={{ xs: 12, sm: 12, md: 12, lg: 12 }}>
          <Box sx={{ display: 'flex', justifyContent: { lg: 'flex-end' }, flexDirection: 'row', flexWrap: 'wrap', gap: 2 }}>
            <Button
              variant="contained"
              startIcon={<AddIcon />}
              onClick={() => navigate("/admin/membership/member", { state: { value: 'add' } })}
              sx={{ background: '#3DB80C', fontWeight: 400 }}
            >
              Add Member
            </Button>
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileUpload}
              accept=".xlsx, .xls, .csv"
              style={{ display: 'none' }}
            />
            <Button
              variant="contained"
              startIcon={<UploadIcon />}
              sx={{ background: '#3DB80C', fontWeight: 400 }}
              onClick={handleBulkUploadButtonClick}
              disabled={uploadLoading}
            >
              {uploadLoading ? <CircularProgress size={24} color="inherit" /> : 'Bulk Upload'}
            </Button>
            <Button
              variant="contained"
              startIcon={<UploadIcon />}
              sx={{ background: '#3DB80C', fontWeight: 400 }}
              onClick={handleOpenExportPreview}
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

        {uploadError && (
          <Grid sx={{ xs: 12 }}>
            <Box sx={{ color: 'red', textAlign: 'center', my: 2 }}>
              <Typography variant="body1">{uploadError}</Typography>
            </Box>
          </Grid>
        )}

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

      {/* Export Preview Dialog */}
      <Dialog open={openExportPreview} onClose={handleCloseExportPreview} maxWidth="lg" fullWidth>
        <DialogTitle>Excel Export Preview</DialogTitle>
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
          <Button onClick={handleCloseExportPreview} color="secondary">
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

import { useState } from "react";
import {
  Box,
  Grid,
  Typography,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { Custombutton, Filterbutton } from "../../adminstyles/MembershiptableStyles";
import UploadIcon from "@mui/icons-material/Upload";
import FilterListIcon from "@mui/icons-material/FilterList";
import EditIcon from "@mui/icons-material/Edit";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import CircleIcon from "@mui/icons-material/Circle";
import Paginationcomponent from "./Pagination";
import * as XLSX from "xlsx";

const Donations = () => {
  const [openPreview, setOpenPreview] = useState(false); // State for preview dialog
  const [error, setError] = useState(""); // State for error message

  const tabledata = [
    {
      transactionid: "IT59598",
      name: "Tanuja Abhishek",
      email: "abishek@gmail.com",
      phone: "+1-8828282828",
      amount: "$244.07",
      paymentmode: "PayPal",
      date: "24-May-2020",
      status: "Received",
    },
    {
      transactionid: "IT69598",
      name: "Tanuja Abhishek",
      email: "abishek@gmail.com",
      phone: "+1-8828282828",
      amount: "$244.07",
      paymentmode: "PayPal",
      date: "24-May-2020",
      status: "Received",
    },
    {
      transactionid: "IT79598",
      name: "Tanuja Abhishek",
      email: "abishek@gmail.com",
      phone: "+1-8828282828",
      amount: "$244.07",
      paymentmode: "PayPal",
      date: "24-May-2020",
      status: "Received",
    },
    {
      transactionid: "IT99598",
      name: "Tanuja Abhishek",
      email: "abishek@gmail.com",
      phone: "+1-8828282828",
      amount: "$244.07",
      paymentmode: "PayPal",
      date: "24-May-2020",
      status: "Received",
    },
    {
      transactionid: "IT59566",
      name: "Tanuja Abhishek",
      email: "abishek@gmail.com",
      phone: "+1-8828282828",
      amount: "$244.07",
      paymentmode: "PayPal",
      date: "24-May-2020",
      status: "Received",
    },
    {
      transactionid: "IT59577",
      name: "Tanuja Abhishek",
      email: "abishek@gmail.com",
      phone: "+1-8828282828",
      amount: "$244.07",
      paymentmode: "PayPal",
      date: "24-May-2020",
      status: "Received",
    },
  ];

  // Open preview dialog
  const handleOpenPreview = () => {
    if (!tabledata.length) {
      setError("No data available to preview");
      return;
    }
    setError("");
    setOpenPreview(true);
  };

  // Close preview dialog
  const handleClosePreview = () => {
    setOpenPreview(false);
  };

  // Export to Excel
  const exportToExcel = () => {
    if (!tabledata.length) {
      setError("No data available to export");
      return;
    }

    // Prepare data for export (excluding 'Actions' column)
    const exportData = tabledata.map(
      ({ transactionid, name, email, phone, amount, paymentmode, date, status }) => ({
        TransactionID: transactionid,
        Name: name,
        Email: email,
        PhoneNumber: phone,
        Amount: amount,
        PaymentMode: paymentmode,
        Date: date,
        Status: status,
      })
    );

    // Create worksheet and workbook
    const worksheet = XLSX.utils.json_to_sheet(exportData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Donations");

    // Generate and download file
    XLSX.writeFile(workbook, "Donations.xlsx");
    handleClosePreview(); // Close dialog after download
  };

  return (
    <Box>
      <Grid container>
        <Grid size={{ lg: 6, md: 6, sm: 6, xs: 6 }}>
          <Typography variant="h5" color="#3DB80C">
            Donations
          </Typography>
        </Grid>
        <Grid size={{ lg: 6, md: 6, sm: 6, xs: 6 }}>
          <Box display="flex" sx={{ gap: "20px", justifyContent: "flex-end" }}>
            <Custombutton startIcon={<UploadIcon />} onClick={handleOpenPreview}>
              Export
            </Custombutton>
            <Filterbutton variant="outlined" startIcon={<FilterListIcon />}>
              Filter
            </Filterbutton>
          </Box>
        </Grid>
        {error && (
          <Grid size={{ lg: 12, md: 12, sm: 12, xs: 12 }}>
            <Typography color="#FF0000" variant="body2" sx={{ mt: 1 }}>
              {error}
            </Typography>
          </Grid>
        )}
        <Grid size={{ lg: 12, md: 12, sm: 12, xs: 12 }}>
          <TableContainer component={Paper} sx={{ marginTop: "10px", background: "white" }}>
            <Table sx={{ minWidth: 650 }} size="small">
              <TableHead sx={{ border: "2px solid #3DB80C" }}>
                <TableRow
                  sx={{
                    fontWeight: "bold",
                    "& .MuiTableCell-head": {
                      fontWeight: "bold",
                      color: "#3DB80C",
                      borderBottom: "none",
                    },
                  }}
                >
                  <TableCell align="left">Transaction ID</TableCell>
                  <TableCell align="left">Name</TableCell>
                  <TableCell align="left">Email</TableCell>
                  <TableCell align="left">Phone Number</TableCell>
                  <TableCell align="left">Amount</TableCell>
                  <TableCell align="left">Payment Mode</TableCell>
                  <TableCell align="left">Date</TableCell>
                  <TableCell align="left">Status</TableCell>
                  <TableCell align="left">Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {tabledata.map((data) => (
                  <TableRow key={data.transactionid}>
                    <TableCell>{data.transactionid}</TableCell>
                    <TableCell>{data.name}</TableCell>
                    <TableCell>{data.email}</TableCell>
                    <TableCell>{data.phone}</TableCell>
                    <TableCell>{data.amount}</TableCell>
                    <TableCell>{data.paymentmode}</TableCell>
                    <TableCell>{data.date}</TableCell>
                    <TableCell sx={{ color: "#3DB80C" }}>
                      {data.status && <CircleIcon sx={{ fontSize: "11px" }} />}
                      {data.status}
                    </TableCell>
                    <TableCell>
                      <Button
                        variant="text"
                        startIcon={<EditIcon />}
                        endIcon={<ArrowDropDownIcon />}
                        sx={{ textTransform: "none", color: "#555555" }}
                      >
                        Edit
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
      <Paginationcomponent />
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
                <TableRow
                  sx={{
                    "& .MuiTableCell-head": {
                      fontWeight: "bold",
                      color: "#3DB80C",
                      borderBottom: "none",
                    },
                  }}
                >
                  <TableCell align="left">Transaction ID</TableCell>
                  <TableCell align="left">Name</TableCell>
                  <TableCell align="left">Email</TableCell>
                  <TableCell align="left">Phone Number</TableCell>
                  <TableCell align="left">Amount</TableCell>
                  <TableCell align="left">Payment Mode</TableCell>
                  <TableCell align="left">Date</TableCell>
                  <TableCell align="left">Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {tabledata.map((data) => (
                  <TableRow key={data.transactionid}>
                    <TableCell>{data.transactionid}</TableCell>
                    <TableCell>{data.name}</TableCell>
                    <TableCell>{data.email}</TableCell>
                    <TableCell>{data.phone}</TableCell>
                    <TableCell>{data.amount}</TableCell>
                    <TableCell>{data.paymentmode}</TableCell>
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
          <Button
            onClick={exportToExcel}
            sx={{ background: "#3DB80C", color: "white" }}
            variant="contained"
          >
            Download
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Donations;
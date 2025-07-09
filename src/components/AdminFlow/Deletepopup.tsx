import { Box, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';

const Deletepopup = ({
  open,
  handleClose,
  onConfirm,
}: {
  open: boolean;
  handleClose: () => void;
  onConfirm: () => void;
}) => {
  return (
    <Box>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          sx: {
            padding: '20px',
            borderRadius: '10px',
            minWidth: '400px',
            textAlign: 'center',
          },
        }}
      >
        <DialogContent>
          <Typography variant="h6" sx={{ color: '#f44336', fontWeight: 500 }}>
            Are you sure you want to delete the Selected <br /> 1 Homepage Highlight?
          </Typography>

          <DialogActions
            sx={{ justifyContent: 'center', marginTop: '40px' }}
          >
            <Button
              onClick={handleClose}
              sx={{
                border: '1px solid #f44336',
                color: '#f44336',
                textTransform: 'none',
                px: 4,
                py: 1.5,
                borderRadius: '6px',
                fontWeight: 500,
                backgroundColor: 'transparent',
                '&:hover': {
                  backgroundColor: '#ffe6e6',
                },
              }}
            >
              Cancel
            </Button>
            <Button
              onClick={onConfirm}
              sx={{
                backgroundColor: '#f44336',
                color: '#fff',
                textTransform: 'none',
                px: 4,
                py: 1.5,
                borderRadius: '6px',
                fontWeight: 500,
                marginLeft: '20px',
                '&:hover': {
                  backgroundColor: '#d32f2f',
                },
              }}
            >
              Delete
            </Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default Deletepopup;

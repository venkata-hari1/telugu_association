import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Typography } from '@mui/material';

const Panchangampopup = ({open,handleclose,selecteddate}:{open:boolean,handleclose:()=>void,selecteddate:any}) => {

  return (
     
     <Dialog
        open={open}
        onClose={handleclose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        PaperProps={{
           sx:{width:'430px',
            margin:'auto',
            maxHeight:'95vh',
            overflowY: 'auto', 
            borderRadius:'20px',
          }
       }}
      >
       <DialogTitle sx={{ m: 0, p:2, fontSize:'20px',color:'white',
       display:'flex',justifyContent:'center', background:'linear-gradient(to bottom, #3DB80C ,#5BE823)'
       }} id="customized-dialog-title">
          {selecteddate}
        </DialogTitle>
        <DialogContent sx={{mt:2,display:'flex',flexDirection:'column', alignItems:'center',
           '& .MuiTypography-root': { fontSize: '10px',fontWeight:800,} }}>
          
          <Typography>తెలుగు పంచాంగం</Typography>
          <Typography>తేది: 02 డిసెంబర్ 2024 (సోమవారం)</Typography>
          <Typography>స్థలం: హైదరాబాద్, ఇండియా </Typography>
          <Typography>శక సంవత్సరం: నందన</Typography>
          <Typography>దిన సూచిక: సోమవారం</Typography>
          <Typography>తిథి: ద్వాదశి (మధ్యాహ్నం 01:20 వరకు), తదుపరి త్రయోదశి</Typography>
          <Typography>నక్షత్రం: అనూరాధ (మధ్యాహ్నం 02:45 వరకు), తదుపరి జ్యేష్ఠ</Typography>
          <Typography>యోగం: వర్ష (రాత్రి 11:10 వరకు), తదుపరి వృద్ది</Typography>
          <Typography>కరణం: బావ (మధ్యాహ్నం 01:20 వరకు), తదుపరి బాలవ</Typography>
          <Typography>పక్షం: కృష్ణపక్షం</Typography>
           <Typography>రోజువారీ సమయాలు</Typography>
            <Typography>సూర్యోదయం: ఉదయం 06:33</Typography>
             <Typography>సూర్యాస్తమయం: సాయంత్రం 05:43</Typography>
              <Typography>చంద్రోదయం: రాత్రి 08:15</Typography>
              <Typography>చంద్రాస్తమయం: ఉదయం 07:10</Typography>
              <Typography>శుభ సమయాలు</Typography>
              <Typography>అభిజిత్ ముహూర్తం: మధ్యాహ్నం 12:10 నుండి 12:50 వరకు</Typography>
              <Typography>అమృత కాలం: ఉదయం 07:20 నుండి 08:50 వరకు</Typography>
              <Typography>బ్రహ్మ ముహూర్తం: ఉదయం 04:50 నుండి 05:30 వరకు </Typography>
              <Typography>అశుభ సమయాలు</Typography>
              <Typography>రాహుకాలం: ఉదయం 07:30 నుండి 09:00 వరకు</Typography>
              <Typography>యమగండం: మధ్యాహ్నం 10:30 నుండి 12:00 వరకు</Typography>
              <Typography>గులిక కాలం: మధ్యాహ్నం 01:30 నుండి 03:00 వరకు</Typography>
              <Typography>దిన విశేషాలు</Typography>
              <Typography>వ్రతాలు/పూజలు: క్షీరాబ్ది ద్వాదశి</Typography>
              <Typography>దేవతారాధన: శ్రీ మహా విష్ణువు </Typography>
              <Typography>చంద్ర రాశి: వృశ్చికం</Typography>
              <Typography>వార నామం: సోమవారం - చంద్ర దేవుని ఉపాసనకు అనుకూలం </Typography>
              <Typography>రాశి ఫలితాలు</Typography>
              <Typography>మేషం: ప్రయాణాలలో జాగ్రత్త అవసరం</Typography>
              <Typography>వృషభం: ఆర్థిక లావాదేవీల్లో లాభం</Typography>
              <Typography>మిథునం: కుటుంబంలో శుభవార్త</Typography>
            </DialogContent>
             </Dialog>

  )
}
export default Panchangampopup

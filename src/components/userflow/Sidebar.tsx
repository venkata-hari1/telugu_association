import { Box, Typography } from "@mui/material";
import { useStyles } from "./Styles/makeStyles";
import Calender from "./Calender";
import DonateBecomeMember from "./Reusable/DonateBecomeMember";
import ProudSponers from "./Reusable/ProudSponers";
import { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";

interface PanchangamModalProps {
  open: boolean;
  onClose: () => void;
  date: Date;
  setDate: (date: Date | null) => void;
  headerColor?: string;
}

export function PanchangamModal({
  open,
  onClose,
  date,
  headerColor = "#3DB80C",
}: PanchangamModalProps) {
  const formatDate = (date: Date) =>
    date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: 6,
          overflow: "hidden",
        },
      }}
    >
      <DialogTitle
        sx={{
          textAlign: "center",
          fontSize: "22px",
          color: "#fff",
          fontWeight: "700",
          background: headerColor,
          borderTopLeftRadius: 24,
          borderTopRightRadius: 24,
          p: 2.5,
        }}
      >
        {formatDate(date)}
      </DialogTitle>
      <DialogContent
        sx={{
          "&::-webkit-scrollbar": { display: "none" },
          msOverflowStyle: "none",
          scrollbarWidth: "none",
          p: 0,
        }}
      >
        <div
          style={{
            textAlign: "center",
            padding: 24,
            fontWeight: "900",
            whiteSpace: "pre-line",
          }}
        >
          తెలుగు పంచాంగం
          <br />
          తేది: 02 డిసెంబర్ 2024 (సోమవారం)
          <br />
          స్థలం: హైదరాబాద్, ఇండియా
          <br />
          శక సంవత్సరం: నందన
          <br />
          దిన సూచిక: సోమవారం
          <br />
          తిథి: ద్వాదశి (మధ్యాహ్నం 01:20 వరకు), తదుపరి త్రయోదశి
          <br />
          నక్షత్రం: అనూరధ (మధ్యాహ్నం 02:45 వరకు), తదుపరి జ్యేష్ఠ
          <br />
          యోగం: వర్ష (రాత్రి 11:10 వరకు), తదుపరి వృద్ది
          <br />
          కరణం: బావ (మధ్యాహ్నం 01:20 వరకు), తదుపరి బాలవ
          <br />
          పక్షం: కృష్ణపక్షం
          <br />
          <br />
          రోజువారీ సమయాలు
          <br />
          సూర్యోదయం: ఉదయం 06:33
          <br />
          సూర్యాస్తమయం: సాయంత్రం 05:43
          <br />
          చంద్రోదయం: రాత్రి 08:15
          <br />
          చంద్రాస్తమయం: ఉదయం 07:10
          <br />
          <br />
          శుభ సమయాలు
          <br />
          అభిజిత్ ముహూర్తం: మధ్యాహ్నం 12:10 నుండి 12:50 వరకు
          <br />
          అమృత కాలం: ఉదయం 07:20 నుండి 08:50 వరకు
          <br />
          బ్రహ్మ ముహూర్తం: ఉదయం 04:50 నుండి 05:30 వరకు
          <br />
          <br />
          అశుభ సమయాలు
          <br />
          రాహుకాలం: ఉదయం 07:30 నుండి 09:00 వరకు
          <br />
          యమగండం: మధ్యాహ్నం 10:30 నుండి 12:00 వరకు
          <br />
          గులిక కాలం: మధ్యాహ్నం 01:30 నుండి 03:00 వరకు
          <br />
          <br />
          దిన విశేషాలు
          <br />
          వ్రతాలు/పూజలు: క్షీరాబ్ది ద్వాదశి
          <br />
          దేవతారాధన: శ్రీ మహా విష్ణువు
          <br />
          చంద్ర రాశి: వృశ్చికం
          <br />
          వార నామం: సోమవారం - చంద్ర దేవుని ఉపాసనకు అనుకూలం
          <br />
          <br />
          రాశి ఫలితాలు
          <br />
          మేషం: ప్రయాణాలలో జాగ్రత్త అవసరం
          <br />
          వృషభం: ఆర్థిక లావాదేవీల్లో లాభం
          <br />
          మిథునం: కుటుంబంలో శుభవార్త
        </div>
      </DialogContent>
    </Dialog>
  );
}

type IProps = {
  classes: {
    [type: string]: string;
  };
};
export default function Sidebar() {
  const { classes }: IProps = useStyles();
  const [calendarDate, setCalendarDate] = useState<Date>(new Date());
  const [openPanchangam, setOpenPanchangam] = useState(false);

  return (
    <Box
      className={classes.sidebarstyle}
      sx={{ display: { xs: "none", md: "none", lg: "grid" } }}
    >
      <DonateBecomeMember />
      <Box>
        <Typography
          className={classes.commontext}
          sx={{ mt: 2, textTransform: "uppercase", cursor: "pointer" }}
        >
          Panchangam
        </Typography>
        <Calender
          value={calendarDate}
          setValue={setCalendarDate}
          onDateClick={(date) => {
            setCalendarDate(date);
            setOpenPanchangam(true);
          }}
        />
      </Box>
      <ProudSponers />

      <PanchangamModal
        open={openPanchangam}
        onClose={() => setOpenPanchangam(false)}
        date={calendarDate}
        setDate={(d) => setCalendarDate(d ?? new Date())}
      />
    </Box>
  );
}

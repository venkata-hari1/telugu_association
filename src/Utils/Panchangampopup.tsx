import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { getFullPanchangam, getDistanceFromLatLonInKm } from './getPanchangamDetails';

const LOCATION_KEY = 'panchangam_location_data';
const DISTANCE_THRESHOLD_KM = 10;

const Panchangampopup = ({open,handleclose,selecteddate}:{open:boolean,handleclose:()=>void,selecteddate:any}) => {

   const [data, setData] = useState<Record<string, string> | null>(null);
   const getInitialLocationName = (): string | null => {
     try {
       const stored = localStorage.getItem(LOCATION_KEY);
       if (stored) {
         const parsed = JSON.parse(stored);
         return parsed.name || null;
       }
     } catch {
       return null;
     }
     return null;
   };
   const [locationName, setLocationName] = useState<string | null>(getInitialLocationName());
   const [locationLoaded, setLocationLoaded] = useState(!!getInitialLocationName());

   useEffect(() => {
      if(selecteddate){
        const stored = localStorage.getItem(LOCATION_KEY);
        let storedData: { name: string, lat: number, lon: number } | null = null;
        if (stored) {
          try {
            storedData = JSON.parse(stored);
          } catch {}
        }

        const fallbackData = getFullPanchangam(selecteddate);
        setData(fallbackData);


        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            async (position) => {
              const lat = position.coords.latitude;
              const lon = position.coords.longitude;

              let shouldFetch = true;
              if (storedData && storedData.lat && storedData.lon && storedData.name !== "") {
                const dist = getDistanceFromLatLonInKm(lat, lon, storedData.lat, storedData.lon);
                if (dist < DISTANCE_THRESHOLD_KM) {
                  setLocationName(storedData.name);
                  setLocationLoaded(true);
                  shouldFetch = false;
                }
              }

              if (shouldFetch) {
                try {
                  const response = await fetch(
                    `https://api.allorigins.win/raw?url=${encodeURIComponent(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}&zoom=10&addressdetails=1&accept-language=te`)}`,
                    {
                      headers: {
                        'User-Agent': 'PanchangamApp/1.0 (teluguassociation@gmail.com)', 
                      },
                    }
                  );
                  const json = await response.json();
                  console.log(json)
                  const address = json.address || {};
                  const city = address.state || address.city || address.town || address.village || address.county || '';
                  const country = address.country || '';
                  let loc = city && country ? `${city}, ${country}` : city || country || '';
                  setLocationName(loc);
                  setLocationLoaded(true);
                  localStorage.setItem(LOCATION_KEY, JSON.stringify({ name: loc, lat, lon }));

                  const panchangamData = getFullPanchangam(selecteddate, lat, lon);
                  setData(panchangamData);
                } catch (e) {
                  setLocationLoaded(true);
                  setLocationName(`${lat}, ${lon}`);
                  localStorage.setItem(LOCATION_KEY, JSON.stringify({ name: ``, lat, lon }));
                }
              }
            },
            () => {
              setLocationLoaded(true);
              if (storedData) setLocationName(storedData.name);
            }
          );
        } else {
          setLocationLoaded(true);
          if (storedData) setLocationName(storedData.name);
        }
      }
   },[selecteddate])

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
          <Typography>తేది: {data?.['తేది']}</Typography>
          {locationLoaded && locationName && (
            <Typography>స్థలం: {locationName}</Typography>
          )}
          <Typography>శక సంవత్సరం: {data?.['శక_సంవత్సరం']}</Typography>
          <Typography>దిన సూచిక: {data?.['దిన_సూచిక']}</Typography>
          <Typography>తిథి: {data?.['తిథి']}</Typography>
          <Typography>నక్షత్రం: {data?.['నక్షత్రం']}</Typography>
          <Typography>యోగం: {data?.['యోగం']}</Typography>
          <Typography>కరణం: {data?.['కరణం']}</Typography>
          <Typography>పక్షం: {data?.['పక్షం']}</Typography>
          <Typography>రోజువారీ సమయాలు</Typography>
          <Typography>సూర్యోదయం: {data?.['సూర్యోదయం']}</Typography>
          <Typography>సూర్యాస్తమయం: {data?.['సూర్యాస్తమయం']}</Typography>
          <Typography>చంద్రోదయం: {data?.['చంద్రోదయం']}</Typography>
          <Typography>చంద్రాస్తమయం: {data?.['చంద్రాస్తమయం']}</Typography>
          <Typography>శుభ సమయాలు</Typography>
          <Typography>అభిజిత్ ముహూర్తం: {data?.['అభిజిత్_ముహూర్తం']}</Typography>
          <Typography>అమృత కాలం: {data?.['అమృత_కాలం']}</Typography>
          <Typography>బ్రహ్మ ముహూర్తం: {data?.['బ్రహ్మ_ముహూర్తం']}</Typography>
          <Typography>అశుభ సమయాలు</Typography>
          <Typography>రాహుకాలం: {data?.['రాహుకాలం']}</Typography>
          <Typography>యమగండం: {data?.['యమగండం']}</Typography>
          <Typography>గులిక కాలం: {data?.['గులిక_కాలం']}</Typography>
          <Typography>దిన విశేషాలు</Typography>
          <Typography>• వ్రతాలు/పూజలు: {data?.['వ్రతాలు_పూజలు']}</Typography>
          <Typography>• దేవతారాధన: {data?.['దేవతారాధన']}</Typography>
          <Typography>• చంద్ర రాశి: {data?.['చంద్ర_రాశి']}</Typography>
          <Typography>• వార నామం: {data?.['వార_నామం']}</Typography>
        </DialogContent>
             </Dialog>

  )
}
export default Panchangampopup

import * as astronomia from 'astronomia';
import * as SunCalc from 'suncalc';

function getShakaYear(date: Date, tithiIndex: number): number {
  const year = date.getFullYear();
  const month = date.getMonth();
  if (month < 3 || (month === 3 && tithiIndex < 1)) return year - 79;
  return year - 78;
}

function parseDateString(dateStr: string): Date {
  const parts = dateStr.trim().split(' ');
  if (parts.length !== 3) throw new Error('Invalid date format');
  const [dayStr, monthStr, yearStr] = parts;
  const day = parseInt(dayStr);
  const year = parseInt(yearStr);
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const month = months.findIndex(m => m.toLowerCase() === monthStr.toLowerCase());
  if (month === -1 || isNaN(day) || isNaN(year)) throw new Error('Invalid date components');
  return new Date(Date.UTC(year, month, day, 4, 40));
}

function formatTime(h: number, m: number): string {
  const period = h < 6 ? 'ఉదయం' : h < 12 ? 'ఉదయం' : h < 16 ? 'మధ్యాహ్నం' : h < 18 ? 'సాయంత్రం' : 'రాత్రి';
  const hour12 = h % 12 || 12;
  return `${period} ${hour12.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}`;
}

function getJulianDay(date: Date): number {
  const year = date.getUTCFullYear();
  const month = date.getUTCMonth() + 1;
  const day = date.getUTCDate();
  const hours = date.getUTCHours();
  const minutes = date.getUTCMinutes();
  const seconds = date.getUTCSeconds();
  const a = Math.floor((14 - month) / 12);
  const y = year + 4800 - a;
  const m = month + 12 * a - 3;
  let jd = day + Math.floor((153 * m + 2) / 5) + 365 * y + Math.floor(y / 4) - Math.floor(y / 100) + Math.floor(y / 400) - 32045;
  jd += (hours + minutes / 60 + seconds / 3600) / 24;
  return jd;
}

function getLahiriAyanamsa(julianDay: number): number {
  const J2000 = 2451545.0; 
  const yearsSinceJ2000 = (julianDay - J2000) / 365.25;
  const precessionRate = 1.4 / 100; 
  const baseAyanamsa = 23.853; 
  return baseAyanamsa + precessionRate * yearsSinceJ2000;
}

function toSiderealLongitude(tropicalLongitude: number, ayanamsa: number): number {
  let siderealLongitude = (tropicalLongitude - ayanamsa) % 360;
  if (siderealLongitude < 0) siderealLongitude += 360;
  return siderealLongitude;
}

function equatorialToEcliptic(ra: number, dec: number): { lon: number; lat: number } {
  const obliquity = 23.4367; 
  const epsRad = obliquity * (Math.PI / 180);
  const sinBeta = Math.sin(dec) * Math.cos(epsRad) - Math.cos(dec) * Math.sin(epsRad) * Math.sin(ra);
  const beta = Math.asin(sinBeta);
  const y = Math.sin(ra) * Math.cos(epsRad) + Math.tan(dec) * Math.sin(epsRad);
  const x = Math.cos(ra);
  let lambda = Math.atan2(y, x);
  if (lambda < 0) lambda += 2 * Math.PI;
  return { lon: lambda * (180 / Math.PI), lat: beta * (180 / Math.PI) };
}

function getPlanetPosition(planetId: 'sun' | 'moon', date: Date): number {
  const jd = getJulianDay(date);
  const position = planetId === 'sun' ? astronomia.solar.apparentEquatorial(jd) : astronomia.moonposition.position(jd);
  const ecliptic = equatorialToEcliptic(position.ra, position.dec);
  const tropicalLongitude = ecliptic.lon;
  const ayanamsa = getLahiriAyanamsa(jd);
  return toSiderealLongitude(tropicalLongitude, ayanamsa);
}


function getMoonTimes(date: Date, lat: number, lon: number): { rise?: Date; set?: Date } {
  const jd = getJulianDay(date);
  const startTime = new Date(date.getTime());
  startTime.setUTCHours(0, 0, 0, 0);
  const endTime = new Date(startTime.getTime() + 86400000);
  let rise: Date | undefined;
  let set: Date | undefined;
  const stepMinutes = 1; 

  
  const latRad = lat * (Math.PI / 180);
  const lonRad = lon * (Math.PI / 180);

  
  const T = (jd - 2451545.0) / 36525; 
  const gmst0 = (280.46061837 + 360.98564736629 * (jd - 2451545.0) + 0.000387933 * T * T - T * T * T / 38710000) % 360;
  const gmst0Rad = gmst0 * (Math.PI / 180);

  let prevAltitude = 0;
  for (let t = startTime.getTime(); t < endTime.getTime(); t += stepMinutes * 60000) {
    const currentTime = new Date(t);
    const currentJd = getJulianDay(currentTime);
    const moonPos = astronomia.moonposition.position(currentJd);
    const ra = moonPos.ra;
    const dec = moonPos.dec;

    
    const timeFraction = (currentTime.getUTCHours() + currentTime.getUTCMinutes() / 60) / 24;
    const lstRad = (gmst0Rad + lonRad + timeFraction * 360.98564736629 * (Math.PI / 180)) % (2 * Math.PI);

    
    const ha = lstRad - ra;

    
    const sinAlt = Math.sin(latRad) * Math.sin(dec) + Math.cos(latRad) * Math.cos(dec) * Math.cos(ha);
    const altitude = Math.asin(sinAlt) * (180 / Math.PI);

    
    if (prevAltitude < 0 && altitude >= 0 && !rise) {
      rise = new Date(currentTime);
    }
    
    if (prevAltitude > 0 && altitude <= 0 && !set) {
      set = new Date(currentTime);
    }

    prevAltitude = altitude;
  }

  
  if (!rise && !set) {
    const suncalcMoonTimes = SunCalc.getMoonTimes(date, lat, lon);
    rise = suncalcMoonTimes.rise;
    set = suncalcMoonTimes.set;
  }

  return { rise, set };
}

function getVratam(tithiIdx: number, month: number): string {
  const paksha = tithiIdx < 15 ? 'శుక్ల' : 'కృష్ణ'
  const tithiNum = tithiIdx % 15;
  const ekadashiNames = [
    'కామదా', 'వరూథినీ', 'మోహినీ', 'అపరా', 'నిర్జల', 'యోగినీ',
    'దేవశయనీ', 'కామికా', 'పవిత్రా', 'అజా', 'పరివర్తినీ', 'ఇందిరా',
    'పాశాంకుశా', 'రమా', 'ఉత్థాన', 'ప్రబోధినీ', 'వైకుంఠ', 'సఫలా',
    'పుత్రదా', 'షట్‌తిలా', 'జయా', 'విజయా', 'ఆమలకీ', 'పాపవిమోచనీ'
  ];
  const ekadashiTithi = tithiNum === 11;
  const amavasya = tithiIdx === 29;
  const pournami = tithiIdx === 15;

  // Kshirabdi Dwadasi: Shukla Dwadasi in Kartika (Oct/Nov)
  if (tithiNum === 12 && paksha === 'శుక్ల' && (month === 9 || month === 10)) {
    return 'క్షీరాబ్ది ద్వాదశి – తులసీ వివాహం';
  }

  if (ekadashiTithi) {
    const idx = (month * 2 + (paksha === 'కృష్ణ' ? 1 : 0)) % 24;
    return `${paksha} ఏకాదశి వ్రతం (${ekadashiNames[idx] || 'ఏకాదశి'})`;
  }

  if (pournami) return 'పౌర్ణమి – సత్యనారాయణ వ్రతం';
  if (amavasya) return 'అమావాస్య – పితృ తర్పణం, దర్బ హోమం';
  if (tithiNum === 14 && paksha === 'కృష్ణ') return 'మాస శివరాత్రి వ్రతం';
  if (tithiNum === 4 && paksha === 'కృష్ణ') return 'సంకటహర చతుర్థి';
  if (tithiNum === 6 && paksha === 'శుక్ల') return 'షష్ఠి – స్కంద శష్ఠి';

  return 'సాధారణ రోజు';
}

function getDevataAradhana(nakshatraIdx: number, tithiIdx: number, weekday: number): string {
  const nakshatraDevatas: Record<number, string> = {
    0: 'అశ్విని దేవతలు (అశ్వినీ కుమారులు)',
    1: 'యమధర్మరాజు',
    2: 'అగ్ని',
    3: 'చంద్రుడు',
    4: 'బృహస్పతి',
    5: 'రుద్రుడు',
    6: 'ఆది శక్తి',
    7: 'బృహస్పతి',
    8: 'సర్ప దేవతలు',
    9: 'పితృ దేవతలు',
    10: 'వినాయకుడు',
    11: 'శివుడు',
    12: 'సవితా దేవుడు',
    13: 'ఇంద్రుడు',
    14: 'వాయుదేవుడు',
    15: 'ఇంద్ర & అగ్ని',
    16: 'మిత్ర దేవత',
    17: 'ఇంద్రుడు',
    18: 'నిరృతి',
    19: 'జల దేవత',
    20: 'విష్ణువు',
    21: 'విష్ణువు',
    22: 'విష్ణువు',
    23: 'వసవులు',
    24: 'వరుణుడు',
    25: 'అహిర్బుధ్న్యుడు',
    26: 'పుషన్'
  };

  const tithiDeityMap: Record<number, string> = {
    14: 'శివారాధన', 15: 'విష్ణు పూజ',
    29: 'పితృ ఆరాధన', 11: 'విష్ణువు – ఏకాదశి ఉపవాసం'
  };

  if (tithiDeityMap[tithiIdx]) return tithiDeityMap[tithiIdx];
  if (nakshatraDevatas[nakshatraIdx]) return nakshatraDevatas[nakshatraIdx];

  const weekdayDevataMap: Record<number, string> = {
    0: 'ఆదివారం – సూర్యుడు',
    1: 'సోమవారం – పరమేశ్వరుడు',
    2: 'మంగళవారం – హనుమంతుడు లేదా సుబ్రహ్మణ్యుడు',
    3: 'బుధవారం – గణపతి లేదా విష్ణువు',
    4: 'గురువారం – గురుదేవుడు లేదా దత్తాత్రేయుడు',
    5: 'శుక్రవారం – లక్ష్మీదేవి లేదా దుర్గాదేవి',
    6: 'శనివారం – శనిదేవుడు లేదా హనుమంతుడు'
  };
  return weekdayDevataMap[weekday];
}

function findTransitionTime(
  getFn: (d: Date) => number,
  start: Date,
  stepMinutes: number,
  getIndex: (value: number) => number
): { index: number; endTime?: Date } {
  const base = getFn(start);
  const startIndex = getIndex(base);
  let testTime = new Date(start.getTime());
  const endTime = new Date(start.getTime() + 86400000);
  while (testTime < endTime) {
    testTime = new Date(testTime.getTime() + stepMinutes * 60000);
    const newIndex = getIndex(getFn(testTime));
    if (newIndex !== startIndex) return { index: startIndex, endTime: testTime };
  }
  return { index: startIndex };
}

export function getDistanceFromLatLonInKm(lat1: number, lon1: number, lat2: number, lon2: number) {
  const R = 6371; 
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c; 
}

export function getFullPanchangam(
  dateStr: string,
  lat: number = 17.385,
  lon: number = 78.4867,
): Record<string, string> {
  const date = dateStr ? parseDateString(dateStr) : new Date();
  const sunLongFn = (d: Date) => getPlanetPosition('sun', d);
  const moonLongFn = (d: Date) => getPlanetPosition('moon', d);
  const tithiCalc = (m: number, s: number) => Math.floor(((m - s + 360) % 360) / 12);
  const nakshatraCalc = (m: number) => Math.floor(m / (360 / 27));
  const karanaCalc = (m: number, s: number) => Math.floor(((m - s + 360) % 360) / 6) % 11;
  const yogaCalc = (m: number, s: number) => {
    const sum = (m + s) % 360;
    return Math.floor(sum / (360 / 27));
  };
  const tithiRes = findTransitionTime(d => tithiCalc(moonLongFn(d), sunLongFn(d)), date, 5, i => i);
  const nakshatraRes = findTransitionTime(moonLongFn, date, 5, nakshatraCalc);
  const karanaRes = findTransitionTime(d => karanaCalc(moonLongFn(d), sunLongFn(d)), date, 5, i => i);
  const yogaRes = findTransitionTime(d => yogaCalc(moonLongFn(d), sunLongFn(d)), date, 5, i => i);
  const rasiIndex = Math.floor(moonLongFn(date) / 30);
  const weekday = date.getDay();
  const teluguMonths = ['జనవరి','ఫిబ్రవరి','మార్చి','ఏప్రిల్','మే','జూన్','జులై','ఆగస్టు','సెప్టెంబర్','అక్టోబర్','నవంబర్','డిసెంబర్'];
  const weekdayNames = ['ఆదివారం','సోమవారం','మంగళవారం','బుధవారం','గురువారం','శుక్రవారం','శనివారం'];
  const tithiNames = ['ప్రథమ','ద్వితీయ','తృతీయ','చతుర్థి','పంచమి','షష్ఠి','సప్తమి','అష్టమి','నవమి','దశమి','ఏకాదశి','ద్వాదశి','త్రయోదశి','చతుర్దశి','పౌర్ణమి','ప్రథమ','ద్వితీయ','తృతీయ','చతుర్థి','పంచమి','షష్ఠి','సప్తమి','అష్టమి','నవమి','దశమి','ఏకాదశి','ద్వాదశి','త్రయోదశి','చతుర్దశి','అమావాస్య'];
  const nakshatraNames = ['అశ్విని','భరణి','కృత్తిక','రోహిణి','మృగశిర','ఆరుద్ర','పునర్వసు','పుష్యమి','ఆశ్లేష','మఖ','పుబ్బ','ఉత్తర','హస్త','చిత్ర','స్వాతి','విశాఖ','అనూరాధ','జ్యేష్ఠ','మూల','పూర్వాషాఢ','ఉత్తరాషాఢ','శ్రవణం','ధనిష్ఠ','శతభిషం','పూర్వాభాద్ర','ఉత్తరాభాద్ర','రేవతి'];
  const karanaNames = ['బవ','బాలవ','కౌలవ','తైతిల','గరజ','వణిజ','విష్టి','శకుని','చతుష్పద','నాగ','కింస్తుగ్న'];
  const rasiNames = ['మేషం','వృషభం','మిథునం','కర్కాటకం','సింహం','కన్య','తుల','వృశ్చికం','ధనస్సు','మకరం','కుంభం','మీనం'];
  const yogaNames = [
    'విష్కంభం', 'ప్రీతి', 'ఆయుష్మాన్', 'సౌభాగ్యం', 'శోభనం', 'అతిగండం', 'సుకర్మ', 'ధృతి', 'శూలం', 
    'గండం', 'వృద్ధి', 'ధ్రువం', 'వ్యాఘాతం', 'హర్షణం', 'వజ్రం', 'సిద్ధి', 'వ్యతీపాతం', 'వరీయాన్', 
    'పరిఘం', 'శివం', 'సిద్ధం', 'సాధ్యం', 'శుభం', 'శుక్లం', 'బ్రహ్మం', 'ఇంద్రం', 'వైధృతి'
  ];
  const paksha = tithiRes.index < 15 ? 'శుక్లపక్షం' : 'కృష్ణపక్షం';
  const teluguMonth = teluguMonths[date.getMonth()];
  const weekdayName = weekdayNames[weekday];

  const sunTimes = SunCalc.getTimes(date, lat, lon);
  const moonTimes = getMoonTimes(date, lat, lon);
  const format = (d?: Date) => d ? formatTime(d.getHours(), d.getMinutes()) : 'N/A';

  const sunrise = sunTimes.sunrise;
  const sunset = sunTimes.sunset;
  const dayDuration = (sunset.getTime() - sunrise.getTime()) / 60000;
  const muhurtaDuration = dayDuration / 30;
  const kalamDuration = dayDuration / 8;

  const abhijitStart = new Date(sunrise.getTime() + 14 * muhurtaDuration * 60000);
  const abhijitEnd = new Date(abhijitStart.getTime() + muhurtaDuration * 60000);
  const brahmaStart = new Date(sunrise.getTime() - 2 * muhurtaDuration * 60000);
  const brahmaEnd = new Date(brahmaStart.getTime() + muhurtaDuration * 60000);
  const amrutaStart = new Date(sunrise.getTime() + 2 * muhurtaDuration * 60000);
  const amrutaEnd = new Date(amrutaStart.getTime() + muhurtaDuration * 60000);

  const kalamStartTimes: Record<number, number[]> = {
    0: [7, 2, 6, 5, 6, 4, 3], 
    1: [5, 4, 3, 2, 1, 0, 6], 
    2: [6, 0, 5, 4, 3, 2, 1]  
  };
  const makeKalamRange = (type: number): string => {
    const startIndex = kalamStartTimes[type][weekday];
    const start = new Date(sunrise.getTime() + startIndex * kalamDuration * 60000);
    const end = new Date(start.getTime() + kalamDuration * 60000);
    return `${formatTime(start.getHours(), start.getMinutes())} నుండి ${formatTime(end.getHours(), end.getMinutes())} వరకు`;
  };

  const rahukalam = makeKalamRange(0);
  const yamagandam = makeKalamRange(1);
  const gulikaKalam = makeKalamRange(2);

  const formatWithTransition = (
    currentName: string,
    nextName: string,
    endTime?: Date
  ): string => {
    if (!endTime) return currentName;
    const hours = endTime.getHours();
    const minutes = endTime.getMinutes();
    return `${currentName} (${formatTime(hours, minutes)} వరకు), తదుపరి ${nextName}`;
  };

  const tithiOutput = formatWithTransition(
    tithiNames[tithiRes.index],
    tithiNames[(tithiRes.index + 1) % tithiNames.length],
    tithiRes.endTime
  );
  const nakshatraOutput = formatWithTransition(
    nakshatraNames[nakshatraRes.index],
    nakshatraNames[(nakshatraRes.index + 1) % nakshatraNames.length],
    nakshatraRes.endTime
  );
  const karanaOutput = formatWithTransition(
    karanaNames[karanaRes.index],
    karanaNames[(karanaRes.index + 1) % karanaNames.length],
    karanaRes.endTime
  );
  const yogaOutput = formatWithTransition(
    yogaNames[yogaRes.index],
    yogaNames[(yogaRes.index + 1) % yogaNames.length],
    yogaRes.endTime
  );

  const shakaYear = getShakaYear(date, tithiRes.index);
  const samvatsaraNames = ['ప్రభవ','విభవ','శుఖ','శోభన','క్రోడి','విశ్వావసు','పరాభవ','ప్లవ','శుభకృతు','శోభకృతు','క్రోధన','విష్వాసు','పరాభవ','ప్లవంగ','కీలక','సౌమ్య','సాధారణ','విరోధి','వికృతి','ఖర','నందన','విజయ','జయ','మన్మథ','దుర్ముఖి','హేమలంబి','విలంబి','వికారి','శార్వరి','ప్లవ','శుభకృతు'];
  const samvatsaraName = samvatsaraNames[(shakaYear + 57) % 60];
  const vratam = getVratam(tithiRes.index, date.getMonth());
  const devata = getDevataAradhana(nakshatraRes.index, tithiRes.index, weekday);

  return {
    'తేది': `${date.getDate()} ${teluguMonth} ${date.getFullYear()} (${weekdayName})`,
    'శక_సంవత్సరం': samvatsaraName,
    'దిన_సూచిక': weekdayName,
    'తిథి': tithiOutput,
    'నక్షత్రం': nakshatraOutput,
    'కరణం': karanaOutput,
    'పక్షం': paksha,
    'యోగం': yogaOutput,
    'సూర్యోదయం': format(sunTimes.sunrise),
    'సూర్యాస్తమయం': format(sunTimes.sunset),
    'చంద్రోదయం': format(moonTimes.rise),
    'చంద్రాస్తమయం': format(moonTimes.set),
    'అభిజిత్_ముహూర్తం': `${formatTime(abhijitStart.getHours(), abhijitStart.getMinutes())} నుండి ${formatTime(abhijitEnd.getHours(), abhijitEnd.getMinutes())} వరకు`,
    'అమృత_కాలం': `${formatTime(amrutaStart.getHours(), amrutaStart.getMinutes())} నుండి ${formatTime(amrutaEnd.getHours(), amrutaEnd.getMinutes())} వరకు`,
    'బ్రహ్మ_ముహూర్తం': `${formatTime(brahmaStart.getHours(), brahmaStart.getMinutes())} నుండి ${formatTime(brahmaEnd.getHours(), brahmaEnd.getMinutes())} వరకు`,
    'రాహుకాలం': rahukalam,
    'యమగండం': yamagandam,
    'గులిక_కాలం': gulikaKalam,
    'వ్రతాలు_పూజలు': vratam,
    'దేవతారాధన': devata,
    'చంద్ర_రాశి': rasiNames[rasiIndex],
    'వార_నామం': weekdayName
  };
}
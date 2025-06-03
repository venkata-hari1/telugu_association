import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import Ramachandra from "../../assets/ram peteti.jpg";
import Ramuthodapunuri from "../../assets/ramu todupunoori.jpg";
import Maheswar from "../../assets/maheshwar.jpg";
import Updendra from "../../assets/upendra.jpg";
import Chithamreddy from "../../assets/chitham.jpg";
import Haritha from "../../assets/haritha.jpg";
import Laxman from "../../assets/laxman.jpg";
import Durgaprasad from "../../assets/durgaprasad.jpg";
import Surya from "../../assets/suriya.jpg";
import Sudhir from "../../assets/Sudhir.jpg";
import Hari from "../../assets/hari.jpg";
import Vasanth from "../../assets/vasanth.jpg";
import Kiran from "../../assets/kiran.jpg";
import Ramtallapaka from "../../assets/ramtallapaka.jpg";
import Venkat from "../../assets/venkat.jpg";
import { useLocation } from "react-router-dom";
import { Fragment, useEffect, useState } from "react";

function GoverningBodyPresidents() {
  const location = useLocation();
  const pathname = location.pathname;
 const[date,setData]=useState<number[]>([])
  const boardmembers = [
    { id: 1, name: "Ramachandra Peteti", image: Ramachandra, position: "2021 President" },
    { id: 2, name: "Ramu Thodupunoori", image: Ramuthodapunuri, position: "2020 President" },
    { id: 3, name: "Maheswar Avilala", image: Maheswar, position: "2019 President" },
    { id: 4, name: "Upendra Mikkilineni", image: Updendra, position: "2018 President" },
    { id: 5, name: "Chitham Reddy Purushotham", image: Chithamreddy, position: "2017 President" },
    { id: 6, name: "Haritha Chimata", image: Haritha, position: "2016 President" },
    { id: 7, name: "Laxman Sunkam", image: Laxman, position: "2015 President" },
    { id: 8, name: "Durgaprasad Kunapareddy", image: Durgaprasad, position: "2014 President" },
    { id: 9, name: "Surya Dugiralla", image: Surya, position: "2013 President" },
    { id: 10, name: "Sudhir Nandamuru", image: Sudhir, position: "2012 President" },
    { id: 11, name: "Hari Pallempati", image: Hari, position: "2011 President" },
    { id: 12, name: "Vasanth Chaganti", image: Vasanth, position: "2010 President" },
    { id: 13, name: "Kiran", image: Kiran, position: "2009 President" },
    { id: 14, name: "Ram Tallapaka", image: Ramtallapaka, position: "2008 President" },
    { id: 15, name: "Venkata Akurati", image: Venkat, position: "2007 President" },
  ];
  useEffect(() => {
    const years = [];
    for (let i = 2023; i >= 2013; i--) {
      years.push(i);
    }
    setData(years);
  }, []);
  return (
    <Box width="100%" p={2}>
      <Typography variant="h6" color="#3DB80C" mb={1} fontWeight={700} >
        {pathname==="/governing_body/previous_board_members"?"Previous Board members":pathname==="/governing_body/board_of_directors"?"Board of Directors":"TEAM Honors and Recognizes our Past Presidents!"}
      </Typography>
{pathname==="/governing_body/previous_board_members"&&<Fragment>
  <Box
  gap={1}
  sx={{
    display: 'flex',
    justifyContent:'space-between',
    overflowX: 'auto',
    whiteSpace: 'nowrap',
    paddingBottom: '8px',
    '&::-webkit-scrollbar': {
      display: 'none', 
    },
  }}
>
  {date.map((x:number)=>
    <Button key={x} variant="contained" sx={{ background: '#3DB80C',fontSize:{lg:'14px',xs:'11px',md:'11px'}}} >{x}</Button>
  )}
  
</Box>
  </Fragment>}
      <Grid container  spacing={1}>
        {boardmembers.map((member) => (
          <Grid key={member.id} size={{xs:6,md:6,lg:4}}>
            <Card
              sx={{
        
                margin: "0 auto",
                background: "transparent",
                boxShadow: "none",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <CardMedia
                component="img"
                image={member.image}
                alt={member.name}
                sx={{
                  width: {lg:'100%',xs:'85%',md:'85%'},
                 height:{lg:200,xs:130,md:130},
                  objectFit: "cover",
                  borderRadius: 2,
                
                }}
              />
              <CardContent>
                <Typography
                  variant="subtitle1"
                  sx={{ color: "black", textAlign: "center", fontWeight: 700 }}
                >
                  {member.name}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "#3DB80C", textAlign: "center", fontWeight: 700 }}
                >
                  {member.position}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default GoverningBodyPresidents;

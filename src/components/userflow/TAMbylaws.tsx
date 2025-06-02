import { Box, Typography } from "@mui/material"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import TAGC123 from '../../assets/TAGC123.pdf'

export default function TAMbylaws() {
  
  const navigate=useNavigate()

  useEffect(()=>{
   window.open(TAGC123,'_blank')
   navigate('/') 
  },[navigate])

  return (
   <Box>
    <Typography>Opening PDF..</Typography>

   </Box>
  )
}

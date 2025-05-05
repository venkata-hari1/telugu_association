import React, { useState } from 'react'
import { BrowserRouter, Routes } from 'react-router-dom'
import AppRoutes from './adminroutes/Routes'
const App = () => {

 
  return (
     <BrowserRouter>
       <AppRoutes />
     </BrowserRouter>
  )
}

export default App

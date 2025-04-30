import React from 'react'
import {Routes, Route } from 'react-router-dom'
import Membershiptable from '../components/Membershiptable'

const AppRoutes = () => {
  return (
    <Routes>
     <Route path='/membershiptable' element={<Membershiptable />}/>

    </Routes>  

  )
}

export default AppRoutes

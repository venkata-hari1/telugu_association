import React from 'react'
import {Routes, Route } from 'react-router-dom'
import Membershiptable from '../components/Membershiptable'
import Subscriptionplans from '../components/Subscriptionplans'
import Sidebar from '../components/Sidebar'
import Privateroutes from './Privateroutes'
import Login from '../components/Login'


const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/login' element={<Login/>}/>
      
       <Route element={<Privateroutes />}>
        <Route path='/admin/' element={<Sidebar />}/>
        <Route path='/admin/membership' element={<Membershiptable />}/>
        <Route path='/admin/membership/subscriptionplans' element={<Subscriptionplans />}/>
      </Route>
      </Routes>  

  )
}

export default AppRoutes

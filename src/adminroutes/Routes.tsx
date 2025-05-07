import {Routes, Route } from 'react-router-dom'
import Membershiptable from '../components/Membershiptable'
import Subscriptionplans from '../components/Subscriptionplans'
import Sidebar from '../components/Sidebar'
import Privateroutes from './Privateroutes'
import Login from '../components/Login'
import AddMember from '../components/Addmember'
import Commonheader from '../components/Commonheader'
import Sponsershipmanagement from '../components/Sponsershipmanagement'
import Addsponsor from '../components/Addsponsor'
import Donations from '../components/Donations'



const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Login/>}/>
      
       <Route element={<Privateroutes />}>
        <Route path='/admin/' element={<Sidebar />}/>
        <Route path='/admin/membership' element={<Membershiptable />}/>
        <Route path='/admin/membership/subscriptionplans' element={<Subscriptionplans />}/>
        <Route path='/admin/membership/addmember' element={<AddMember />}/>
        <Route path='/admin/header' element={<Commonheader />}/>
        <Route path='/admin/sponsorship' element={<Sponsershipmanagement />}/>
        <Route path='/admin/addsponsor' element={<Addsponsor />}/>
        <Route path='/admin/sponsorship/donations' element={<Donations />}/>
      </Route>
      </Routes>  

  )
}

export default AppRoutes

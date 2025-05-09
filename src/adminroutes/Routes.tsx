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
import Volunteermanagement from '../components/Volunteermanagement'
import Addvolunteer from '../components/Addvolunteer'
import Editsubscription from '../components/Editsubscription'



const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Login/>}/>
      
       <Route element={<Privateroutes />}>
        <Route path='/admin/' element={<Sidebar />}/>
        <Route path='/admin/header' element={<Commonheader />}/>
        <Route path='/admin/membership' element={<Membershiptable />}/>
        <Route path='/admin/membership/addmember' element={<AddMember />}/>
        <Route path='/admin/membership/volunteermgmt' element={<Volunteermanagement />}/>
        <Route path='/admin/membership/volunteermgmt/addvolunteer' element={<Addvolunteer />}/>
        <Route path='/admin/sponsorship/subscriptionplans' element={<Subscriptionplans />}/>
        <Route path='/admin/sponsorship' element={<Sponsershipmanagement />}/>
        <Route path='/admin/sponsorship/addsponsor' element={<Addsponsor />}/>
        <Route path='/admin/sponsorship/donations' element={<Donations />}/>

        <Route path="/admin/sponsorship/subscriptionplans/editsubscription" element={<Editsubscription />}/>
        </Route>
      </Routes>  

  )
}

export default AppRoutes

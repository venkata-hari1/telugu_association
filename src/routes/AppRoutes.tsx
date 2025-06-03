import { Route, Routes} from 'react-router-dom'
import Membershiptable from '../components/AdminFlow/Membershiptable'
import Subscriptionplans from '../components/AdminFlow/Subscriptionplans'
import Privateroutes from './Privateroutes'
import Login from '../components/AdminFlow/AdminLogin'
import AddMember from '../components/AdminFlow/Addmember'
import Sponsershipmanagement from '../components/AdminFlow/Sponsershipmanagement'
import Addsponsor from '../components/AdminFlow/Addsponsor'
import Donations from '../components/AdminFlow/Donations'
import Volunteermanagement from '../components/AdminFlow/Volunteermanagement'
import Addvolunteer from '../components/AdminFlow/Addvolunteer'
import Editsubscription from '../components/AdminFlow/Editsubscription'
import Mainlayout from '../components/AdminFlow/Mainlayout'
import Dashboard from '../components/AdminFlow/Dashboard'
import Gallery from '../components/AdminFlow/Gallery'
import Addgallery from '../components/AdminFlow/Addgallery'
import EventsandCalender from '../components/AdminFlow/EventsandCalender'
import Addevent from '../components/AdminFlow/Addevents'
import BoardandLeadership from '../components/AdminFlow/BoardandLeadership'
import Addboard from '../components/AdminFlow/Addboard'
import Profile from '../components/AdminFlow/Profile'
import Changepassword from '../components/AdminFlow/Changepassword'
import Changeemail from '../components/AdminFlow/Changeemail'
import Addnews from '../components/AdminFlow/Addnews'
import Welcomepage from '../components/userflow/Welcomepage'
import Home from '../components/userflow/Home'
import Adminforgotpassword from '../components/AdminFlow/Adminforgotpassword'
import AdminResetpassword from '../components/AdminFlow/AdminResetpassword'
import AdminOtp from '../components/AdminFlow/AdminOtp'



const AdminRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Welcomepage />} />
      <Route path='/home' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/*' element={<Welcomepage />}/> 
      <Route path="/adminforgot" element={<Adminforgotpassword/>} />
      <Route path="/adminreset" element={<AdminResetpassword/>} />
      <Route path="/adminotp" element={<AdminOtp/>} />
      <Route element={<Privateroutes />}>
        <Route path="/admin" element={<Mainlayout />}>
            {/* <Route path="/admin" element={<Dashboard />} /> */}
            <Route path="dashboard" element={<Dashboard />} /> 
           {/* <Route path="dashboard" element={<Dashboard />} />  */}
           <Route path='dashboard/addnews' element={<Addnews />}/>
          <Route path="membership" element={<Membershiptable />} />
          <Route path="membership/addmember" element={<AddMember />} />
          <Route path="membership/volunteermgmt" element={<Volunteermanagement />} />
          <Route path="membership/volunteermgmt/addvolunteer" element={<Addvolunteer />} />
          <Route path="sponsorship" element={<Sponsershipmanagement />} />
          <Route path="sponsorship/addsponsor" element={<Addsponsor />} />
          <Route path="sponsorship/donations" element={<Donations />} />
          <Route path="sponsorship/subscriptionplans" element={<Subscriptionplans />} />
          <Route path="sponsorship/subscriptionplans/editsubscription" element={<Editsubscription />} />
          <Route path="gallery" element={<Gallery />}/>
          <Route path="gallery/addgallery" element={<Addgallery />}/>
          <Route path="events" element={<EventsandCalender />}/>
           <Route path="events/addevent" element={<Addevent />}/>  
           <Route path="board" element={<BoardandLeadership />}/>  
           <Route path="board/addboard" element={<Addboard />}/>  
            <Route path="profile" element={<Profile />}/>  
            <Route path="profile/change-email" element={<Changeemail />}/> 
            <Route path="profile/change-password" element={<Changepassword />}/>
        </Route>
       
     </Route>
    </Routes>

  )
}

export default AdminRoutes

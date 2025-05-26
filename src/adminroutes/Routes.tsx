import {Routes, Route} from 'react-router-dom'
import Membershiptable from '../components/Membershiptable'
import Subscriptionplans from '../components/Subscriptionplans'
import Privateroutes from './Privateroutes'
import Login from '../components/Login'
import AddMember from '../components/Addmember'
import Sponsershipmanagement from '../components/Sponsershipmanagement'
import Addsponsor from '../components/Addsponsor'
import Donations from '../components/Donations'
import Volunteermanagement from '../components/Volunteermanagement'
import Addvolunteer from '../components/Addvolunteer'
import Editsubscription from '../components/Editsubscription'
import Mainlayout from '../components/Mainlayout'
import Dashboard from '../components/Dashboard'
import Gallery from '../components/Gallery'
import Addgallery from '../components/Addgallery'
import EventsandCalender from '../components/EventsandCalender'
import Addevent from '../components/Addevents'
import BoardandLeadership from '../components/BoardandLeadership'
import Addboard from '../components/Addboard'
import Profile from '../components/Profile'
import Changepassword from '../components/Changepassword'
import Changeemail from '../components/Changeemail'
import Addnews from '../components/Addnews'
import Media from '../components/Media'
import Videogallery from '../components/Videogallery'


const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Login />} />

      <Route element={<Privateroutes />}>
        <Route path="/admin" element={<Mainlayout />}>
          <Route path="/admin" element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} /> 
           <Route path="dashboard" element={<Dashboard />} /> 
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
           <Route path="gallery/photogallery" element={<Media />}/>
           <Route path="gallery/video" element={<Videogallery />}/>
          <Route path="media/addgallery" element={<Addgallery />}/>
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

export default AppRoutes

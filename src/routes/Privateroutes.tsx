import { Navigate, Outlet } from 'react-router-dom'

const Privateroutes = () => {
  
  const user=true
  return user?<Outlet />:<Navigate to ="/login"/> 
}

export default Privateroutes 
import React from 'react'
import  '../adminstyles/Membershiptable.css'
import Pagination from './Pagination'
const Membershiptable = () => {

const tabledata=[
  {sno:1,name:'Tanuja Abhilash',email:'hwestiii@outlook.com',phone:'+18143008184',membertype:'One Year',date:'From Mar 15 to Apr 15 2025',status:'active'},
  {sno:2,name:'Vignesh',email:'ianbuck@icloud.com',phone:'+14842634655',membertype:'One Year',date:'From Mar 15 to Apr 15 2025',status:'active'},
  {sno:3,name:'Hema Chaudhari',email:'tkrotchko@yahoo.ca',phone:'+15852826353',membertype:'One Year',date:'From Mar 15 to Apr 15 2025',status:'active'},
  {sno:4,name:'Ayush Dhyan',email:'mugwump@verizon.net',phone:'+16102448965',membertype:'One Year',date:'From Mar 15 to Apr 15 2025',status:'active'},
  {sno:5,name:'Param N',email:'larry@verizon.net',phone:'+18143008346',membertype:'One Year',date:'From Mar 15 to Apr 15 2025',status:'active'},
  {sno:6,name:'Pratyush Solanki',email:'oevans@icloud.com',phone:'+18143008346',membertype:'One Year',date:'From Mar 15 to Apr 15 2025',status:'active'},
]


  return (
    <div className='container-fluid'>
      <div className='membership-heading'>
      <h3 className='member-title'>Membership Management</h3>
      <button className='subscription-button'>Subscription Plans</button>
      </div>   
      <div className='membership-search-group'>
          <div className='inputsearch-box'>
          <input type='search' className='form-control' placeholder='Search'/> 
          <i className="bi bi-search"></i>
          </div>
          <div className='membership-btngroup'>
          <button className='memberbtn'>
          <i className="bi bi-plus-lg me-2"></i>
            Add Item
          </button >
            <button className='memberbtn'>
            <i className="bi bi-upload me-2"></i>
            Bulk Upload</button>
            <button className='memberbtn'>
            <i className="bi bi-upload me-2"></i>
            Export</button>
            <button className='filter-button'>
            <i className="bi bi-filter me-2"></i>
            Filters</button>
          </div>

              
      </div>
    
      <div className='table-container'>
      <table className="table">
      <thead>
      <tr>
      <th scope="col">SNo</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Phone Number</th>
      <th scope="col">Membership Type</th>
      <th scope="col">Date</th>
      <th scope="col">Status</th>
      <th scope="col">Actions</th>
      </tr>
      </thead>
      <tbody>
       {
         tabledata.map((data)=>(
          <tr key={data.sno}>
           <td>{data.sno}</td>
           <td>{data.name}</td>
           <td>{data.email}</td>
           <td>{data.phone}</td>
           <td>{data.membertype}</td>
           <td>{data.date}</td>
           <td>{data.status}</td>
           <td>
  <div className="dropdown">
    <button
      className="btn dropdown-toggle d-flex align-items-center"
      type="button"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
      <i className="bi bi-pencil me-1"></i>
      Edit
    </button>
    <ul className="dropdown-menu">
      <li><a className="dropdown-item" href="#">Edit Details</a></li>
      <li><a className="dropdown-item" href="#">Deactivate</a></li>
      <li><a className="dropdown-item" href="#">Delete</a></li>
    </ul>
  </div>
</td>
</tr>
          

         ))

       }
    
    </tbody> 

      </table>  
</div>  

<Pagination />    
    
    </div>
  )
}

export default Membershiptable

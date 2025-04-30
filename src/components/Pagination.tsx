import React from 'react'
import '../adminstyles/Pagination.css'
const Pagination = () => {
  return (
    <div className="pagination-wrapper">
    <ul className="pagination-list">
      <li className="pagination-arrow">&#x276E;</li> 
      <li className="pagination-box active">1</li>
      <li className="pagination-box">2</li>
      <li className="pagination-box">...</li>
      <li className="pagination-box">9</li>
      <li className="pagination-box">10</li>
      <li className="pagination-arrow">&#x276F;</li> 
    </ul>
  </div>
  )
}

export default Pagination
import React from 'react'


const NavBar = ({setCatagory}) => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="navbar-brand" href="#">
        <h4 className="badge p-2 text-dark bg-light " style={{cursor:'pointer'}} onClick={()=> {setCatagory("general")}}>NewsMag</h4>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <div className="nav-link" onClick={()=> {setCatagory("technology")}}>
              Technology
              </div>
            </li>
            <li className="nav-item" >
              <div className="nav-link" onClick={()=> {setCatagory("entertainment")}}>
              Entertainment
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-link" onClick={()=> {setCatagory("health")}}>
              Health
              </div>
            </li>
            <li className="nav-item" onClick={()=> {setCatagory("science")}}>
              <div className="nav-link">
              Science
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-link" onClick={()=> {setCatagory("sports")}}>
              Sports
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default NavBar

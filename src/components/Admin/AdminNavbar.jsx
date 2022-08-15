import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../images/arrow-logo-mini.png'
import { useLocation } from "react-router-dom";
import "./AdminNavbar.css"


function AdminNavbar() {
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");


  return (
    <section className='navsection'>
      <div className='arrowscope_container'>
         <nav>
            <div className='logo'>
              <Link to="/">
                <img src={logo} alt="logo" className='nav_logo_img'/>
                </Link>
            </div>
            <div className='nav_links'>
                <ul className='nav_links_ul'>
                  <li className={splitLocation[1] === "" ? "active" : ""}><Link to="/">Home</Link></li>
                  <li className={splitLocation[1] === "upload" ? "active" : ""}><Link to="/upload">Upload</Link></li>
                  <li className={splitLocation[1] === "dashboard" ? "active" : ""}><Link to="/dashboard">dashboard</Link></li>
                </ul>
            </div>
         </nav>
      </div>
    </section>
  )
}

export default AdminNavbar
import React from 'react'
import logo from '../images/arrow-logo-mini.png'

function Navbar() {
  return (
    <section className='navsection'>
      <div className='arrowscope_container'>
         <nav>
            <div className='logo'>
                <img src={logo} alt="logo" className='nav_logo_img'/>
            </div>
            <div className='nav_links'>
                <ul className='nav_links_ul'>
                    <li className='nav_links_name'>
                    <span className='mob_icon'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-phone" viewBox="0 0 16 16">
  <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z"/>
  <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
</svg>
                            </span>
                        <a className='nav_links_mobile' href="tel:+918122387001">8122387001</a></li>
                    {/* <li className='nav_links_name'>Home</li> */}
                </ul>
            </div>
         </nav>
      </div>
    </section>
  )
}

export default Navbar
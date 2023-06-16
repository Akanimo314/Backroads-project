import React from 'react'
import logo from '../images/logo.svg'
import { socialLink } from '../data';
import Pagelink from './Pagelink';
// import { pageLink } from '../data';
import NavbarEX from './NavbarEX';



const Navbar = () => {
  return (
    <nav className="navbar">
    <div className="nav-center">
      <div className="nav-header">
        <img src={logo} className="nav-logo" alt="backroads" />
        <button type="button" className="nav-toggle" id="nav-toggle">
          <i className="fas fa-bars"></i>
        </button>
      </div>
      {/* <!-- left this comment on purpose --> */}
      <Pagelink parent='nav-links'child='nav-link'/>
        
      {/* <ul className="nav-links" id="nav-links">
          {pageLink.map((links) => {
            return(
              <li key={links.id}>
              <a href={links.href} className="nav-link"> {links.text} </a>
            </li>
            )
          })}
      </ul> */}
        <ul className="nav-icons">
          {socialLink.map((social) => {
            // const {id, href, icon} = social
            return(
              <NavbarEX key={social.id} {...social}/>
          // <li key={id}>
          //   <a href={href} target="_blank" rel='noreferrer' className="nav-icon">
          //     <i className={icon}></i>
          //   </a>
          // </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
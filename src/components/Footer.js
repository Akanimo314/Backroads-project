import React from 'react'
// import { pageLink } from '../data'
import { socialLink } from '../data'
import Pagelink from './Pagelink'

const Footer = () => {
  return (
    <footer className="section footer">
    <Pagelink parent='footer-links' child='footer-link'/>

    {/* <ul className={parent} id="nav-links">
          {pageLink.map((links) => {
            return(
              <li key={links.id}>
              <a href={links.href} className={child}> {links.text} </a>
            </li>
            )
          })}
    </ul> */}
    <ul className="footer-icons">
      {socialLink.map((links) => {
        const{id, href, icon} = links
        return(
        <li key={id}>
        <a href={href} target="_blank" rel='noreferrer' className="footer-icon">
          <i className={icon}></i>
        </a>
      </li>
        )
      })}
    </ul>
    <p className="copyright">
      copyright &copy; Backroads travel tours company
      <span id="date">{new Date().getFullYear()}</span> all rights reserved
    </p>
  </footer>
  )
}

export default Footer
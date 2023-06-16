import React from 'react'
import { pageLink } from '../data'

const Pagelink = ({parent, child}) => {
  return (
    <ul className={parent} id="nav-links">
          {pageLink.map((links) => {
            return(
            <li key={links.id}>
              <a href={links.href} className={child}> {links.text} </a>
            </li>
            )
          })}
      </ul>
  )
}

export default Pagelink
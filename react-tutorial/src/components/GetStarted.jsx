import React from 'react'
import { NavLink } from 'react-router-dom'

const GetStarted = ({display}) => {
  const linkClass = ({isActive}) => isActive ?
  'bg-white text-black rounded-md px-8 pr-2 py-2 p-2 drop-shadow-md'
  : 
  'text-white bg-yellow-600 hover:bg-yellow-400 rounded-md p-2 px-8 py-2';
  return (
    <NavLink to="/getting-started" className={linkClass`${display}`}>
      <span className='relative after:content-[">>"] after:absolute after:left-full after:ml-2'>
      Get Started
      </span>
    </NavLink>
  )
}

export default GetStarted
import React from 'react'
import { Link } from 'react-router-dom'

const NotFoundPage = () => {
  return (
    <section className='mx-auto text-center flex flex-col justify-center items-center h-screen'>
        <div className='max-w-md md:max-w-lg'>
          <img src='/images/not-found.png' alt="" />
        </div>
        <p className="text-xl mb-5">This page does not exist yet.
          <span className="text-2xl drop-shadow-md text-indigo-500"> COMING SOON...</span>
        </p>
        <Link to="/" className='text-white bg-indigo-700
         hover:bg-indigo-900 rounded-md px-3 py-2 mt-4 animate-pulse'> Go Back </Link>
    </section>
  )
}

export default NotFoundPage
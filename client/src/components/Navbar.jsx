import React from 'react'
import Logo from '../assets/Logo'

const Navbar = () => {
  return (
    <div className=' flex justify-between items-center h-20 border-2 border-t-0 border-black px-6 rounded-b-2xl fixed inset-x-0 ml-20 mr-20 bg-white z-50'>
    <Logo/>
    <div className=' flex justify-evenly gap-20 text-xl'>
      <div>
        Program
      </div>
      <div>
        Pricing
      </div>
      <div>
        Blog
      </div>
    </div>
    <div className=' flex justify-evenly gap-6 text-base items-baseline'>
      <div>
        Sign in
      </div>
      <div>
        <button className='bg-black text-white rounded-lg shadow-md px-4 py-1'>Get Started  &rarr;</button>
      </div>
    </div>
    </div>
  )
}

export default Navbar
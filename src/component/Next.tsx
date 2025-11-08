import React from 'react'
import Logo from '../assets/logo.png'

function Next() {
  return (
    <div className="relative h-15 w-15 bg-orange-bold  rounded-full hover:animate-wiggle border border-2">
        <span></span>
        <div className='absolute h-12 w-12  rounded-full bg-orange-light left-1 top-1'>
        <img className='p-2' src={Logo}/>
        </div>
    </div>
  )
}


export default Next;  
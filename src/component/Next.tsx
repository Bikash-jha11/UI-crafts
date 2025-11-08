import React from 'react'
import Logo from '../assets/logo.png'

function Next() {
  return (
    <div className="absolute h-12 w-12  rounded-full   bg-orange-light  before:content-[''] before:absolute before:h-15 before:w-15 before:bg-orange-bold before:rounded-full  before:-z-1 before:top-[-12%] before:left-[-12%] nextjs">
        <img className='p-2' src={Logo}/>
    </div>
  )
}

export default Next;  
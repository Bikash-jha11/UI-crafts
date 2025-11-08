import React, { useEffect, useState } from 'react'
import { useRef } from 'react';
import Logo from '../assets/logo.png'
import { RxCross2 } from "react-icons/rx";


function Next() {


    const closingRef: any = useRef(null);


    const handleClick = () => {
      if (closingRef.current) {
            closingRef.current.classList.add('transition-backward')
        }

    }

    useEffect(() => {
        const el = closingRef.current;
        const end = () => {
            closingRef.current.classList.remove('transition-backward')
        }
        el.addEventListener("animationend", end);

        return () => el.removeEventListener("animationend", end);
    }, [closingRef])

    return (
        <div className="relative h-15 w-15 bg-orange-bold  rounded-full hover:animate-wiggle border border-2 group" ref={closingRef}>
            <span className='absolute  right-1.5 top-3 text-3xl font-bold '><RxCross2 style={{ 'color': '#E7E7E7' }} onClick={handleClick} /></span>
            <div className='absolute h-12 w-12  rounded-full bg-orange-light left-1 top-1'>
                <img className='p-2' src={Logo} />
            </div>
            <span className='absolute text-nowrap font-medium opacity-0 group-hover:opacity-100 top-4 left-[40%] text-1xl text-white-light'>1 Issues</span>
        </div>
    )
}


export default Next;  
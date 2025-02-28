"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { BsThreeDots } from 'react-icons/bs'

const ButtonViewAndDelete = ({link}) => {
    const [isClicked, setisClicked] = useState(true)

  return (
    <>
    
    <button onClick={()=> setisClicked(prev => !prev)}className="relative"><BsThreeDots size={24}/></button>
            <div className={`${isClicked ? 'opacity-0 pointer-events-none' : 'block'} absolute bg-slate-500 p-4 flex gap-2 justify-items-center items-center rounded-md transition-opacity duration-500 ease-out max-lg:right-0`}>
            <Link href={link} className="bg-teal-600 px-2 py-1 rounded-md hover:bg-teal-900 text-sm">View</Link>
            <button className="bg-red-400 px-2 py-1 rounded-md hover:bg-red-900 text-sm">Delete</button>
            </div>
    </>
  )
}

export default ButtonViewAndDelete
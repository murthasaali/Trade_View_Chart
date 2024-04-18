import React from 'react'
import { FaPlus } from 'react-icons/fa'
import { SlGraph } from "react-icons/sl";
import { HiMenuAlt1 } from "react-icons/hi";


function ChartDideBar() {
  return (
    <div className='w-full h-full flex items-center flex-col justify-start gap-3'>
        <button className='h-14 w-14 bg-stone-50 rounded-full flex justify-center items-center text-stone-300 text-opacity-65 bg-opacity-10 '><FaPlus className=' text-xl'/></button>
        <button className='h-14 w-14 bg-stone-50 rounded-full flex justify-center items-center text-stone-300 text-opacity-65 bg-opacity-10 '><SlGraph className=' text-xl'/></button>
        <button className='h-14 w-14 bg-stone-50 rounded-full flex justify-center items-center text-stone-300 text-opacity-65 bg-opacity-10 '><HiMenuAlt1 className=' text-xl'/></button>
        <button className='h-14 w-14 bg-stone-50 rounded-full flex justify-center items-center text-stone-300 text-opacity-65 bg-opacity-10 '><FaPlus className=' text-xl'/></button>
        <button className='h-14 w-14 bg-stone-50 rounded-full flex justify-center items-center text-stone-300 text-opacity-65 bg-opacity-10 '><FaPlus className=' text-xl'/></button>
        <button className='h-14 w-14 bg-stone-50 rounded-full flex justify-center items-center text-stone-300 text-opacity-65 bg-opacity-10 '><FaPlus className=' text-xl'/></button>
        <button className='h-14 w-14 bg-stone-50 rounded-full flex justify-center items-center text-stone-300 text-opacity-65 bg-opacity-10 '><FaPlus className=' text-xl'/></button>
        <button className='h-14 w-14 bg-stone-50 rounded-full flex justify-center items-center text-stone-300 text-opacity-65 bg-opacity-10 '><FaPlus className=' text-xl'/></button>
    </div>
  )
}

export default ChartDideBar
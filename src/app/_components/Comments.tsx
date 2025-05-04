"use client"
import React, { useState } from 'react'
import { CiHeart } from 'react-icons/ci'
import { FaHeart } from 'react-icons/fa'
import userImg from './../assets/profile.jpg'
import Image from 'next/image'
const Comments = ({setIsLikedModalOpen}:{setIsLikedModalOpen: (value: boolean) => void}) => {
    const [isLiked,setIsLiked] =useState(false);
  return (
    <div className='border-b border-[#eaeaea] py-4'>
        <div className='flex items-center justify-between gap-2'>
            
        <div className='flex gap-1'>
        <Image src={userImg} alt="user image" className='w-[40px] h-[40px] rounded-full -translate-y-[20%] mr-1'></Image>
        <h3 className='font-medium'>UserName:</h3>
        <p className='max-w-[60%]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi odio nulla quas dolore corrupti minima labore numquam dolorum.</p>
        </div>
        {isLiked ? <FaHeart onClick={() => setIsLiked(false)} className='text-[48px] self-start cursor-pointer text-red-600' /> : <CiHeart onClick={() => setIsLiked(true)} className='text-[48px] self-start cursor-pointer' />}
        </div>
        <div className='text-[#929292] text-[12px] hover:text-[#929292] px-6 mt-2 flex items-center gap-6'>
            <button disabled className='cursor-text hover:!text-[#929292]'>12w</button>
            <button onClick={() => setIsLikedModalOpen(true)}>1 Like</button>
        </div>
    </div>
  )
}

export default Comments
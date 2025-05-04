"use client"
import React, { useState } from 'react'
import cardImg from "./../../assets/bgLogin2.jpg"
import Image from 'next/image'
import ProfileModal from './ProfileModal'
const ProfileCard = () => {
    const [isOpen, setIsOpen] = useState(false)
  return (
    <>
    <div onClick={() => setIsOpen(true)} className='relative aspect-[0.75/1] overflow-hidden rounded-lg shadow-md'>
        <Image src={cardImg} alt='card image' className='aspect-[0.75/1] object-cover rounded-lg'></Image>
    </div>
    {isOpen&&<ProfileModal img={cardImg} />}
    </>
  )
}

export default ProfileCard
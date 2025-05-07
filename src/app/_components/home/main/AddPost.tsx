"use client"
import { useState } from "react"
import AddPostModal from "./AddPostModal"

const AddPost = () => {
  const [isOpen,setIsOpen] = useState(false)
  const handleClick = (e: React.MouseEvent<HTMLInputElement>) => {e.preventDefault();setIsOpen(true)}
  return (
    <div className='max-w-[60%] mx-auto bg-white rounded-2xl p-4  flex flex-col gap-4'>
        <h4 className='text-center text-[--main-color] text-[18px] font-medium'>Create Post</h4>
        <div>
            <input onClick={handleClick} type="text" readOnly placeholder='What is on your mind?' className='w-full outline-none border-none bg-[#f6faff] hover:bg-[#e9f1fc] rounded-xl cursor-pointer focus:ring-0' />
        </div>
        {isOpen&&<AddPostModal setIsOpen={setIsOpen} />}
    </div>
  )
}

export default AddPost
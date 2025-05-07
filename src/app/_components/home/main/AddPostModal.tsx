"use client";
import { IoClose } from "react-icons/io5";
import galleryBtn from "@/app/assets/photoBtn.png";
import locationBtn from "@/app/assets/location.png";
import Image from "next/image";
// import { GrGallery } from "react-icons/gr";
// import { useRef, useState } from "react";

const AddPostModal = ({setIsOpen}:{setIsOpen:(value: boolean) => void}) => {
  // const editorRef = useRef(null);
  // const [content, setContent] = useState("");

  // const handleInput = (e) => {
  //   const value = e.target.value;
  //   if (!value) {
  //     setContent(value);
  //     return;
  //   }
  //   const urlRegex = /\b(www\.[^\s]+\.com)\b/g;
  //   const newContent = value.replace(urlRegex, (match, p1) => {
  //     // Check if the match is already inside an HTML tag like <a>
  //     if (/<[^>]*>.*?<\/[^>]*>/.test(match)) {
  //       return match; // Don't re-process links
  //     }
  //     return `<a href="https://${p1}" target="_blank" rel="noopener noreferrer">${p1}</a>`;
  //   });
  //   setContent(newContent);
  // };
  // const textArea = document.getElementById("AddPostInput");
  // const handleInput = (e)=>{
  //   const value = e.target.value;
  //   const formattedText = value.replace(
  //     /\b(www\.\S+\.com)\b/g,
  //     "<a href='https://$1'>$1</a>"
  //   );
  //   textArea.value = formattedText;
  // }
  const handleClick = (e: React.MouseEvent<HTMLInputElement>)=>{
    e.stopPropagation();
    setIsOpen(false)
  }
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-[#000000b7] overflow-hidden z-[99999] flex items-center justify-center ">
      <div className="bg-[#fff] rounded-lg w-[40%]">
        <div className="py-4 border-b border-[#eaeaea] relative">
          <h4 className="text-center font-semibold text-[20px]">Create Post</h4>
          <div onClick={handleClick} className="absolute top-[50%] right-5 text-[#000] text-[24px] w-fit cursor-pointer -translate-y-[50%]"><IoClose /></div>
        </div>
        <div>
          <textarea
            // value={content}
            // onChange={handleInput}
            id="AddPostInput"
            className="w-full outline-none border-none resize-none focus:ring-0"
          ></textarea>
        </div>

        <div className="p-4 ">
          <div className="flex items-center justify-between py-2 px-4 border border-[#eaeaea] rounded-lg">
            <p>Add to your post</p>
            <div className="flex items-center gap-2">
              <div className="relative w-fit">
                <input
                  type="file"
                  name="image"
                  id="input-image"
                  className="opacity-0 hidden"
                  accept="video/*,image/*"
                />
                <label
                  htmlFor="input-image"
                  className=" w-full h-full cursor-pointer"
                >
                  <div className="w-[40px] h-[40px] p-1 hover:bg-[#bcb4ff4e] rounded-full">
                    <Image src={galleryBtn} alt="gallery button" />
                  </div>
                </label>
              </div>
              <div className="w-[40px] h-[40px] p-1 hover:bg-[#bcb4ff4e] rounded-full">
                <Image src={locationBtn} alt="location button" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPostModal;

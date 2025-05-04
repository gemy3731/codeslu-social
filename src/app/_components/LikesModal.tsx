'use client'
import Image from "next/image";
import { IoClose } from "react-icons/io5";
import userImg from "./../assets/profile.jpg";
const LikesModal = ({
  isLikedModalOpen,
}: {
  isLikedModalOpen: (value: boolean) => void;
}) => {
  return (
    <div className="overflow-hidden bg-[#000000b7]  fixed top-0 left-0 right-0 bottom-0 z-[99999] flex items-center justify-center">
      <div className="container mx-auto px-[150px] py-10 ">
        <div className="bg-[#f6faff] rounded-lg mx-auto w-[50%] h-[500px] overflow-hidden ">
          <header className="border-b border-[#eaeaea] p-5 text-center text-[20px] relative">
            <h4>Likes</h4>
            <div
              onClick={() => isLikedModalOpen(false)}
              className="absolute top-3 right-3 text-[#000] text-[24px] w-fit cursor-pointer"
            >
              <IoClose />
            </div>
          </header>
          <div className="p-5 flex flex-col gap-6 overflow-y-auto h-full">
            {[...Array(10)].map((_, i) => {
              return (
                <div key={i} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Image
                      src={userImg}
                      alt="user image"
                      className="w-[40px] h-[40px] rounded-full"
                    ></Image>
                    <h4>UserName</h4>
                  </div>
                  <button
                  id="followBtn"
                    className={
                      "bg-[#4c42ab] hover:bg-[#6155d2] text-white py-2 px-4 rounded-full"
                    }
                  >
                    Follow
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LikesModal;

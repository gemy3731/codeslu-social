"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import img1 from "@/app/assets/logo.png";
import img4 from "@/app/assets/backgroundLogin.jpg";
import img2 from "@/app/assets/bgLogin2.jpg";
import img3 from "@/app/assets/bgLogin3.jpg";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import Typing from "@/app/_components/register/Typing";
import { BsApple } from "react-icons/bs";
const Page = () => {
  const imgs = [img2, img3, img4];
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImgIndex((prev) => (prev + 1) % imgs.length);
      // console.log(currentImgIndex)
      // console.log(imgs[currentImgIndex])
    }, 10000);

    return () => clearInterval(interval); // cleanup on unmount
  }, [imgs.length, currentImgIndex]);

  return (
    <div
      id="login"
      className="bgLogin relative min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${imgs[currentImgIndex].src})` }}
    >
      <div className="bgLayout flex items-center p-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="md:colspan-1 md:flex flex-col gap-4 items-start justify-center hidden">
              <div className="flex items-baseline gap-2 text-white">
                <Image
                  src={img1}
                  alt="img"
                  priority
                  className="w-[50px] h-[50px] rounded-full"
                ></Image>
                <h3 className="header text-[48px] font-semibold">CodeSlu</h3>
              </div>
              <Typing />
            </div>
            <div className="glass-form lg:min-w-[500px] col-span-1 md:ml-auto py-14 px-10 pt-8">
              <form className="mb-10">
                <h2 className="font-bold header mb-4 text-white">
                  Login to CodeSlu!
                </h2>
                <div className="form-group mb-[1.5rem]">
                  <input type="text" placeholder="Username" />
                </div>
                <div className="form-group mb-[0.5rem]">
                  <input type="password" placeholder="Password" />
                </div>
                <div className=" text-left mb-[2rem] flex flex-col">
                  <Link href="#" className="text-white">
                    Forgot Password?
                  </Link>
                  <Link href="/Register" className="text-white">
                    Don&apos;t have an account?{" "}
                    <span className="text-[#ffffff]">Sign up</span>
                  </Link>
                </div>
                <button type="submit">Sign In</button>
              </form>
              <div className="relative flex justify-center">
                <p className="anotherLogin text-[#ffffff4d]    w-fit z-10">
                  or login with
                </p>
              </div>
              <div className="flex justify-center gap-6 mt-5">
                <div className="loginMethods">
                  <FcGoogle className="text-[40px]" />
                </div>
                <div className="loginMethods">
                  <FaFacebookF className="text-[40px] text-blue-700" />
                </div>
                <div className="loginMethods">
                  <BsApple className="text-[40px] text-black" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;

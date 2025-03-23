"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import img1 from "@/app/assets/logo.png";
import img4 from "@/app/assets/backgroundLogin.jpg";
import img2 from "@/app/assets/bgLogin2.jpg";
import img3 from "@/app/assets/bgLogin3.jpg";
import Typing from "@/app/_components/register/Typing";
import Login from "@/app/_components/auth/Login";
import { useDispatch, useSelector } from "react-redux";
import { store } from './../../../lib/Redux/Store';
import Register from "@/app/_components/auth/Register";
import ForgotPass from "@/app/_components/auth/ForgotPass";
const Page = () => {
  const imgs = [img2, img3, img4];
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const {formState} = useSelector((reduxStore: ReturnType<typeof store.getState>)=>reduxStore.formState);
  const dispatch = useDispatch();
console.log(formState)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImgIndex((prev) => (prev + 1) % imgs.length);
    }, 10000);

    return () => clearInterval(interval);
  }, [imgs.length, currentImgIndex]);

  return (
    <div
      id="login"
      className="bgLogin relative min-h-screen w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${imgs[currentImgIndex].src})` }}
    >
      <div className="bgLayout flex items-center p-4">
        <div className="container mx-auto py-10">
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
            {formState==='login' && <Login dispatch={dispatch}/>}
            {formState==='register' && <Register dispatch={dispatch}/>}
            {formState==='forgotPass' && <ForgotPass dispatch={dispatch}/>}
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;

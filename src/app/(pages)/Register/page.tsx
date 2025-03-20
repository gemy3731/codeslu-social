import React from "react";
import img1 from "./../../assets/registerImg.png";
import Image from "next/image";
import Typing from "@/app/_components/register/Typing";
import RegisterForm from "@/app/_components/register/RegisterForm";

const page = () => {
  return (
    <div className="bg-[#a6a3ff] p-4 sm:p-20   overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-5 shadow-2xl w-full h-full  overflow-hidden rounded-2xl">
        <div className="col-span-3 bg-[#e9f2ff] hidden md:block">
          <div className="relative w-full h-full">
            <div className="absolute top-0 bottom-0 right-0 left-0 bg-[#00000069] flex flex-col items-center justify-center">
              <h3 className="text-transparent bg-clip-text bg-gradient-to-br from-[#a6a3ff] to-slate-50 text-[18px] sm:text-[36px] font-semibold mb-1">
                Welcome to CODESLU!
              </h3>
              <Typing />
            </div>
            <Image src={img1} priority alt="img" className="w-full h-full" />
          </div>
        </div>

        <div className="bg-[#f6faff] pt-4 pb-8 px-8 col-span-1 md:col-span-2 relative rounded-2xl md:rounded-none ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 700 700"
            style={{ overflow: "hidden", display: "block" }}
            width={200}
            height={200}
            className="absolute top-0 right-0 translate-x-[25%] translate-y-[-30%]"
          >
            <defs>
              <linearGradient
                id="two-3"
                x1={350}
                y1={-350}
                x2={350}
                y2={350}
                spreadMethod="pad"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0%" stopColor="#8885f6" stopOpacity={1} />
                <stop offset="100%" stopColor="#8885f6" stopOpacity={0.5} />
              </linearGradient>
            </defs>
            <g id="two-0" transform="matrix(1 0 0 1 0 0)" opacity={1}>
              <path
                transform="matrix(1 0 0 1 350 350)"
                id="two-111"
                d="M 155.500755 41.666301 C 157.855066 69.969063 193.138757 87.813837 199.882333 115.402119 C 206.125129 140.941686 216.994087 180.638785 194.918489 194.918489 C 163.751168 215.079218 125.045961 166.462128 89.650857 155.27984 C 72.884218 149.982797 53.629946 133.851174 38.048883 142.000367 C 6.050649 158.736055 25.870458 219.405066 0 244.598113 C -18.0169 262.143245 -52.206766 284.538228 -72.129684 269.191642 C -115.209502 236.00734 -12.81893 130.93303 -60.515982 104.816754 C -122.850337 70.6859 -181.964133 282.442701 -233.324944 233.324943 C -279.918961 188.765799 -104.922409 133.136427 -123.855636 71.508084 C -129.848796 52.000126 -163.340414 58.289195 -181.288517 48.576111 C -205.821021 35.299708 -252.767403 27.799454 -250.465895 0 C -247.754303 -32.752772 -165.821238 -10.591727 -160.6603 -43.048798 C -151.227919 -102.368924 -316.572323 -113.816017 -292.294423 -168.756264 C -274.534288 -208.946981 -202.822628 -152.322371 -159.467553 -159.467553 C -140.307535 -162.625242 -117.048967 -166.816528 -105.188731 -182.192226 C -77.110552 -218.592982 -130.601569 -309.91523 -85.781809 -320.142067 C -36.059969 -331.487445 -31.1993 -231.933498 -0.000001 -191.590188 C 11.974701 -176.105895 20.488807 -152.085732 39.472844 -147.31466 C 59.154145 -142.368352 78.435919 -160.770808 97.234466 -168.415037 C 140.542676 -186.025857 195.896699 -261.839294 226.46704 -226.467041 C 265.229583 -181.615775 106.113862 -129.296286 129.895706 -74.995322 C 141.976488 -47.411335 209.224706 -87.099878 219.712962 -58.871911 C 228.426898 -35.419328 184.562859 -21.602397 171.941734 -0.000001 C 164.485023 12.762952 154.275409 26.935585 155.500755 41.666301 Z "
                fill="url(#two-3)"
                stroke="undefined"
                strokeWidth={1}
                strokeOpacity={1}
                fillOpacity={1}
                visibility="visible"
                strokeLinecap="butt"
                strokeLinejoin="miter"
                strokeMiterlimit={4}
              />
            </g>
          </svg>
          <h3 className="text-[#7773f2] text-[20px] sm:text-[28px] font-medium mb-1">
            Welcome to CODESLU!
          </h3>
          <h4 className="text-[#0000003f] text-[16px] font-medium mb-10">
            Register your account
          </h4>
          <div className="px-4">
            <RegisterForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;

"use client";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "./keen.css";
// import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import img from "@/app/assets/profile.jpg";
import Image from "next/image";
import { FaPlus } from "react-icons/fa";
import "@splidejs/react-splide/css";

function StoriesBar() {
  // const [ref] = useKeenSlider<HTMLDivElement>({
  //   loop: {
  //     min: 0,
  //     max: 17,
  //   },
  //   slides: {
  //     perView: 'auto',
  //     origin:'auto',
  //     spacing: 30,
  //   },
  // });
  return (
    <>
      <div className="flex gap-4 justify-center">
        <div className="keen-slider__slide relative overflow-hidden cursor-pointer">
          <Image
            src={img}
            alt=""
            className="w-full h-full border-[#f6faff] border-[3px] rounded-full"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-[#00000056] flex justify-center items-center text-white">
            <FaPlus />
          </div>
        </div>
        <Splide
          aria-label="My Favorite Images"
          options={{
            perPage: 1,
            perMove: 1,
            height: "auto",
            width:'70vw',
            fixedWidth: 80,
            focus: "left",
            trimSpace: true,
            gap: 10,
            pagination: false,
            drag: true,
          }}
        >
          {[...Array(20)].map((_, i) => {
            return (
              <SplideSlide
                key={i}
                className="bg-gradient-to-bl from-red-600 to-orange-400 p-[3px] rounded-full w-fit cursor-pointer"
              >
                <Image
                  src={img}
                  alt="Image 1"
                  className="rounded-full w-[80px] border-[#f6faff] border-[4px]"
                />
              </SplideSlide>
            );
          })}
        </Splide>
      </div>
    </>
  );
}
export default StoriesBar;
{
  /* <div className="flex gap-4">
    <div  className="keen-slider__slide relative overflow-hidden cursor-pointer">
              <Image
                src={img}
                alt=""
                className="w-full h-full border-[#f6faff] border-[3px] rounded-full"
              />
              <div className="absolute top-0 left-0 w-full h-full bg-[#00000056] flex justify-center items-center text-white"><FaPlus /></div>
            </div>
      <div ref={ref} className="keen-slider mx-auto">
        {[...Array(18)].map((_, i) => {
          return (
            <div key={i} className="keen-slider__slide number-slide1 cursor-pointer">
              <Image
                src={img}
                alt=""
                className="w-full border-[#f6faff] border-[3px] rounded-full"
              />
            </div>
          );
        })}
      </div>
    </div> */
}

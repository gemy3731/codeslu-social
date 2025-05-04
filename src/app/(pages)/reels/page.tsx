"use client";

import { useState } from "react";
import "./../../keen.css";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import ReactPlayer from "react-player";
// import ReactPlayer from "react-player";


const reels = [
  {
    inView: false,
    url: "https://www.youtube.com/shorts/Bx7mzwE2yiE",
  },
  {
    inView: false,
    url: "https://www.youtube.com/shorts/RNab-pKJr28",
  },
  {
    inView: false,
    url: "https://www.youtube.com/shorts/KxAaSh77j7A",
  },
  {
    inView: false,
    url: "https://www.youtube.com/shorts/evYRrsB0cas",
  },
]
const Page = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [reelsState, setReelsState] = useState(reels);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    slides: {
      origin: 0,
      perView: 1,
      spacing: 10,
    },
    vertical: true,
    slideChanged(slider) {
      const currentIndex = slider.track.details.rel;
      setCurrentSlide(currentIndex);
      
      // Update reels inView state
      setReelsState(prev => prev.map((reel, index) => ({
        ...reel,
        inView: index === currentIndex
      })));
    },
    created() {
      setLoaded(true);
      // Set initial reel as in view
      setReelsState(prev => prev.map((reel, index) => ({
        ...reel,
        inView: index === 0
      })));
    },
  });
  // const handleNext = () => {
  //   setCurrentIndex((prev) => (prev + 1) % 5);
  // };
  // const handlePrevious = () => {
  //   setCurrentIndex((prev) => (prev - 1) % 5);
  // };
  // const url = 'https://drive.google.com/file/d/1AvVcF_R3zQIUHbVtYOynU60yoQb2ijIv/preview';
  // const directUrl = `https://www.youtube.com/embed/gvI8a74iXvg`;
  return (
    <>
      <div className="relative flex flex-col gap-10 items-center justify-center ">
        <div className="navigation-wrapper">
          <div
            ref={sliderRef}
            className="keen-slider"
            style={{ height: "100vh" }}
          >
            {reelsState.map((reel, i) => {
              return (
                <div key={i} className="keen-slider__slide mx-auto">
                  <ReactPlayer 
                width="500px"
                height="100%"
                className="mx-auto"
                url={reel.url}
                playing={reel.inView}
                id={`yt-player-${i}`}
                // controls
                onEnded={()=>{
                  instanceRef.current?.next();
                }}
              />
                </div>
              );
            })}
          </div>
          {loaded && instanceRef.current && (
            <>
              <FaArrowUp
                onClick={(e: React.MouseEvent<SVGElement>) => {
                  e.stopPropagation();
                  instanceRef.current?.prev();
                }}
                className={`fixed top-[35%] right-[20%] rounded-full w-[40px] h-[40px] flex items-center justify-center text-[#fff] bg-[--main-color] p-2 box-content ${
                  currentSlide === 0 ? "hidden" : ""
                }`}
              />

              <FaArrowDown
                onClick={(e: React.MouseEvent<SVGElement>) => {
                  e.stopPropagation();
                  instanceRef.current?.next();
                }}
                className={`fixed top-[65%] right-[20%] rounded-full  w-[40px] h-[40px] flex items-center justify-center text-[#fff] bg-[--main-color] p-2 box-content ${
                  currentSlide ===
                  instanceRef.current.track.details.slides.length - 1
                    ? "hidden"
                    : ""
                }`}
              />
            </>
          )}
        </div>
      </div>

    </>
  );
};

export default Page;

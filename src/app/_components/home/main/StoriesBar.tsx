"use client";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "./keen.css";
// import { Modal, ModalBody, ModalHeader } from "flowbite-react";
import { useState } from "react";
import "keen-slider/keen-slider.min.css";
import img from "@/app/assets/profile.jpg";
import img2 from "@/app/assets/backgroundLogin.jpg";
import img3 from "@/app/assets/bgLogin2.jpg";
import img4 from "@/app/assets/bgLogin3.jpg";
import Image from "next/image";
import { FaPlus } from "react-icons/fa";
import "@splidejs/react-splide/css";
// import StoriesPerFeed from "./StoriesPerFeed";
import MyStory from "./MyStory";
import { IoCloseSharp } from "react-icons/io5";

function StoriesBar() {
  const [openModal, setOpenModal] = useState(false);
  const [currentFeedIndex, setCurrentFeedIndex] = useState(0);
  
  const stories = [
    {
      type: "image",
      duration: 6000,
      url: "https://images.pexels.com/photos/9733197/pexels-photo-9733197.jpeg",
    },
    {
      type: "video",
      url: "https://assets.mixkit.co/videos/preview/mixkit-mother-with-her-little-daughter-eating-a-marshmallow-in-nature-39764-large.mp4",
      duration: 28000,
    },
    {
      type: "image",
      duration: 6000,
      url: "https://images.pexels.com/photos/9733197/pexels-photo-9733197.jpeg",
    },
    {
      type: "video",
      url: "https://assets.mixkit.co/videos/preview/mixkit-mother-with-her-little-daughter-eating-a-marshmallow-in-nature-39764-large.mp4",
      duration: 10000,
    },
    {
      type: "video",
      url: "https://assets.mixkit.co/videos/preview/mixkit-family-walking-together-in-nature-39767-large.mp4",
      duration: 10000,
    },
    {
      type: "video",
      duration: 6000,
      url: "https://assets.mixkit.co/videos/preview/mixkit-girl-in-neon-sign-1232-large.mp4",
    },
    {
      duration: 7000,
      type: "image",
      url: "https://images.pexels.com/photos/9470805/pexels-photo-9470805.jpeg",
    },
  ];

  const storyFeeds = [
    {
      header: {
        heading: "Mohit Karekar",
        date: "2h",
        image: img
      },
      stories:[
        {
          type: "image",
          duration: 6000,
          url: "https://images.pexels.com/photos/9733197/pexels-photo-9733197.jpeg",
        },
        {
          type: "video",
          url: "https://assets.mixkit.co/videos/preview/mixkit-mother-with-her-little-daughter-eating-a-marshmallow-in-nature-39764-large.mp4",
          duration: 28000,
        },
        {
          type: "image",
          duration: 6000,
          url: "https://images.pexels.com/photos/9733197/pexels-photo-9733197.jpeg",
        },
      ],
    },
    {
      header: {
        heading: "Mohamed Gamal",
        date: "5h",
        image: img2
      },
      stories,
    },
    {
      header: {
        heading: "Osama Ahmed",
        date: "7h",
        image: img3
      },
      stories,
    },
    {
      header: {
        heading: "Mustafa",
        date: "12h",
        image: img4
      },
      stories,
    },
  ];

  const handleFeedComplete = (direction: 'next' | 'prev') => {
    if (direction === 'next') {
      if (currentFeedIndex < storyFeeds.length - 1) {
        setCurrentFeedIndex(prev => prev + 1);
      } else {
        setCurrentFeedIndex(0);
      }
    } else {
      if (currentFeedIndex > 0) {
        setCurrentFeedIndex(prev => prev - 1);
      } else {
        setCurrentFeedIndex(storyFeeds.length - 1);
      }
    }
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setCurrentFeedIndex(0);
  };

  return (
    <>
      <div className="flex gap-4 justify-start">
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
            width: '70vw',
            fixedWidth: 80,
            focus: "left",
            trimSpace: true,
            gap: 10,
            pagination: false,
            drag: true,
          }}
        >
          {storyFeeds.map((feed, i) => (
            <SplideSlide
              key={i}
              className="bg-gradient-to-bl from-red-600 to-orange-400 p-[3px] rounded-full w-fit cursor-pointer"
            >
              <Image
                src={feed.header.image}
                alt="Image 1"
                className="rounded-full w-[80px] h-[80px] border-[#f6faff] border-[4px]"
                onClick={() => {
                  setCurrentFeedIndex(i);
                  setOpenModal(true);
                }}
              />
            </SplideSlide>
          ))}
        </Splide>
      </div>
      {openModal && (
        <div className="fixed top-0 right-0 left-0 bottom-0 h-screen z-50 bg-[#000000e9] overflow-hidden">
          <h1 className='text-[48px] font-medium text-[#888888d7] absolute top-10 left-10'>CodeSlu</h1>
          <button onClick={handleCloseModal} className='absolute top-10 right-10 text-[48px] text-[#888888d7]'>
            <IoCloseSharp />
          </button>
          <MyStory 
            key={currentFeedIndex}
            storyFeed={storyFeeds[currentFeedIndex]} 
            onComplete={handleFeedComplete}
          />
        </div>
      )}
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

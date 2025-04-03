import Image, { StaticImageData } from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { FaHeart } from "react-icons/fa";
import { LuSendHorizontal } from "react-icons/lu";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import { IoVolumeMedium, IoVolumeMute } from "react-icons/io5";

interface Story {
  type: string;
  duration: number;
  url: string;
}

interface StoryFeed {
  header: {
    heading: string;
    date: string;
    image: string | StaticImageData;
  };
  stories: Story[];
}

interface MyStoryProps {
  storyFeed: StoryFeed;
  onComplete?: (direction: "next" | "prev") => void;
}

const MyStory = ({ storyFeed, onComplete }: MyStoryProps) => {
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);
  const [isPause, setIsPause] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isFav, setIsFav] = useState(false);
  const progressBarsRef = useRef<(HTMLDivElement | null)[]>([]);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [progress, setProgress] = useState(0);
  const startTimeRef = useRef<number>(0);
  const elapsedTimeRef = useRef<number>(0);

  const handleNextStory = () => {
    if (currentStoryIndex < storyFeed.stories.length - 1) {
      setCurrentStoryIndex((prev) => prev + 1);
      setIsPause(false);
      setProgress(0);
      elapsedTimeRef.current = 0;
    } else {
      onComplete?.("next");
    }
  };

  const handlePreviousStory = () => {
    if (currentStoryIndex > 0) {
      setCurrentStoryIndex((prev) => prev - 1);
      setIsPause(false);
      setProgress(0);
      elapsedTimeRef.current = 0;
    } else {
      onComplete?.("prev");
    }
  };

  const onStoryComplete = () => {
    handleNextStory();
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (!isPause && currentStoryIndex < storyFeed.stories.length) {
      const duration = storyFeed.stories[currentStoryIndex].duration;
      startTimeRef.current = Date.now() - elapsedTimeRef.current;

      interval = setInterval(() => {
        const elapsed = Date.now() - startTimeRef.current;
        elapsedTimeRef.current = elapsed;
        const newProgress = Math.min((elapsed / duration) * 100, 100);
        setProgress(newProgress);

        if (newProgress >= 100) {
          clearInterval(interval);
          onStoryComplete();
        }
      }, 10);
    }

    return () => clearInterval(interval);
  }, [currentStoryIndex, isPause, storyFeed.stories]);

  const handlePause = () => {
    setIsPause(!isPause);
    if (videoRef.current) {
      if (isPause) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  };

  const handleMute = () => {
    setIsMuted(!isMuted);
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
    }
  };

  return (
    <>
      <div className="h-screen flex items-center justify-center bg-transparent z-[500]">
        <div className="myStoryContainer relative w-[400px] bg-[#0000008e] rounded-2xl pb-[15px] pt-[15px] px-[25px]">
          {/* Upper Part */}
          <div className="upperPart flex flex-col gap-3 mb-[25px]">
            <div className="flex flex-row flex-nowrap justify-normal items-center gap-2 w-full">
              {storyFeed.stories.map((story, i) => {
                return (
                  <div
                    key={i}
                    className="progress-container w-full flex-1 h-1 bg-[#d4d4d461] rounded-md overflow-hidden"
                  >
                    <div
                      ref={(el) => {
                        progressBarsRef.current[i] = el;
                      }}
                      className={`progress-bar h-full bg-white ${
                        i === currentStoryIndex ? "active" : ""
                      }`}
                      style={{
                        width:
                          i === currentStoryIndex
                            ? `${progress}%`
                            : i < currentStoryIndex
                            ? "100%"
                            : "0%",
                        transition: isPause ? "none" : "width 10ms linear",
                      }}
                    />
                  </div>
                );
              })}
            </div>

            <div className="flex items-center justify-between">
              <div
                id="storyHeader"
                className="flex items-center gap-2 cursor-pointer w-fit"
              >
                <Image
                  src={storyFeed.header.image}
                  alt=""
                  width={40}
                  height={40}
                  className="w-[40px] h-[40px] rounded-full"
                />
                <div className="flex items-baseline gap-2">
                  <h4 className="text-[16px] p-0 my-0 font-medium text-white">
                    {storyFeed.header.heading}
                  </h4>
                  <span className="text-[12px] text-[#d4d4d4]">
                    {storyFeed.header.date}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {storyFeed.stories[currentStoryIndex].type === "video" && (
                  <div
                    onClick={handleMute}
                    className="text-white text-[24px] cursor-pointer"
                  >
                    {isMuted ? <IoVolumeMute /> : <IoVolumeMedium />}
                  </div>
                )}
                {/* <div
                  onClick={handlePause}
                  className="text-white text-[24px] cursor-pointer"
                >
                  {isPause ? <VscDebugContinue /> : <IoPauseSharp />}
                </div> */}
              </div>
            </div>
          </div>

          {/* Middle Part */}
          <div className="relative overflow-hidden bg-black rounded-2xl aspect-[4/5]">
            <div
              className="flex transition-transform duration-300 ease-in-out h-full"
              style={{
                transform: `translateX(-${currentStoryIndex * 100}%)`,
              }}
            >
              {storyFeed.stories.map((story, i) => (
                <div key={i} className="w-full flex-shrink-0 h-full">
                  <div
                    className="w-full h-full relative"
                    onMouseDown={handlePause}
                    onMouseUp={handlePause}
                  >
                    {story.type === "image" ? (
                      <Image
                        src={story.url}
                        alt=""
                        fill
                        className="rounded-2xl object-cover"
                        priority={i === currentStoryIndex}
                      />
                    ) : story.type === "video" ? (
                      <video
                        ref={i === currentStoryIndex ? videoRef : null}
                        src={story.url}
                        className="w-full h-full rounded-2xl object-cover"
                        autoPlay
                        loop
                        muted={isMuted}
                      />
                    ) : null}
                  </div>
                </div>
              ))}
            </div>

            {/* Arrows */}
            <button
              onClick={handlePreviousStory}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/30 text-white p-2 rounded-full z-10"
            >
              <IoChevronBack size={24} />
            </button>

            <button
              onClick={handleNextStory}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/30 text-white p-2 rounded-full z-10"
            >
              <IoChevronForward size={24} />
            </button>
          </div>

          {/* Lower Part */}
          <div className="flex items-center gap-6 mt-[10px]">
            <div className="relative w-full">
              <input type="text" className="myStoryInput my-2 pr-10" />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[24px] text-white">
                <LuSendHorizontal />
              </button>
            </div>
            <FaHeart
              className={`text-[36px] ${
                isFav ? "text-[#4c42ab]" : "text-[#ffffff61]"
              } cursor-pointer`}
              onClick={() => setIsFav(!isFav)}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default MyStory;

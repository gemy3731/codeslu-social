"use client";
import { Progress } from "flowbite-react";
import { useEffect, useRef, useState } from "react";
import { CiPause1 } from "react-icons/ci";
import { FaRegTrashCan } from "react-icons/fa6";
import { GrEmoji, GrGallery } from "react-icons/gr";
import { LuMic, LuSendHorizontal } from "react-icons/lu";
import { RxResume } from "react-icons/rx";
import { useReactMediaRecorder } from "react-media-recorder";
const InputChat = () => {
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const [recordingCount, setRecordingCount] = useState<number>(0);
  // const recordingCount = useRef<number>(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const {
    status,
    startRecording,
    stopRecording,
    mediaBlobUrl,
    clearBlobUrl,
    pauseRecording,
    resumeRecording,
  } = useReactMediaRecorder({ audio: true });
  const startRecordingTimer = ()=>{
    if (intervalRef.current) return;
    intervalRef.current = setInterval(() => {
      setRecordingCount((prevCount) => prevCount + 1);
      
    }, 1000);
  }
  useEffect(() => {
    if(recordingCount >= 100){
      clearInterval(intervalRef.current!);
      intervalRef.current = null;
      setRecordingCount(0);
      stopRecording();
    }
  }, [recordingCount, stopRecording]);
  const stopRecordingTimer = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
      setRecordingCount(0);
    }
  }
  const pauseTimer = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };
  const resumeTimer = () => {
    startRecordingTimer();
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const textarea = e.target;
    textarea.style.height = "auto";
    textarea.style.height = `${Math.min(textarea.scrollHeight, 130)}px`;
    if (textarea.value.length > 0) {
      setIsTyping(true);
    } else {
      setIsTyping(false);
    }
  };
  useEffect(() => {
    console.log(status, "status");
    console.log(mediaBlobUrl, "mediaBlobUrl");
  }, [status, mediaBlobUrl]);
  
  return (
    <div className="relative mt-auto">
      <div className=" ">
          
          </div>
      {/* <div className="mt-32 flex items-center gap-4">
        <audio src={mediaBlobUrl} controls />
      </div> */}
      {status !== "stopped" &&
      status !== "acquiring_media" &&
      status !== "idle" ? (
        <>
          <input
            type="text"
            // placeholder="Recording..."
            className="w-full relative pl-12 pr-16  py-3 rounded-[30px] border-[#8989892b] bg-[#f6faff] row-span-5 overflow-hidden ring-0 focus:ring-0 focus:outline-none focus:border-[#8989892b] text-[16px] text-[#000000] placeholder:text-[#898989]"
            readOnly
            // value={recordingCount}
          />
          <div className=" flex items-center gap-6 absolute left-[50%] -translate-x-[50%] bottom-[7px]">
            <h5 className="text-[14px] bg-[--main-color] text-[#fff] py-1 px-2 rounded-full">{recordingCount} s</h5>
          <Progress progress={recordingCount} color="pink" size="xl" className=" !bg-[#b1a9fb]   w-[300px]  " />
          </div>
          <div className="w-fit flex items-center gap-4 absolute right-[22px] bottom-[14px] text-[22px]">
            {status === "paused" ? (
              <button
                id="resumeButton"
                onClick={()=>{resumeRecording();resumeTimer()}}
                className="focus:outline-none"
              >
                <RxResume />
              </button>
            ) : (
              <button
                id="pauseButton"
                onClick={()=>{pauseRecording();pauseTimer()}}
                className="focus:outline-none"
              >
                <CiPause1 />
              </button>
            )}

            <button
              id="stopButton"
              onClick={()=>{stopRecording();stopRecordingTimer()}}
              className="focus:outline-none"
            >
              <LuSendHorizontal />
            </button>
          </div>
          <div className="w-fit flex items-center gap-4 absolute left-[22px] bottom-[14px] text-[22px]">
            <button
              id="clearButton"
              onClick={()=>{clearBlobUrl();stopRecordingTimer()}}
              className="focus:outline-none"
            >
              <FaRegTrashCan />
            </button>
          </div>
        </>
      ) : (
        <div>
          <textarea
            id="auto-resize"
            rows={1}
            autoFocus
            className="w-full resize-none relative pl-12 pr-16  py-3 rounded-[30px] border-[#8989892b] bg-[#f6faff] row-span-5 overflow-hidden ring-0 focus:ring-0 focus:outline-none focus:border-[#8989892b] text-[16px] text-[#000000] placeholder:text-[#898989]"
            placeholder="Message..."
            onChange={handleChange}
          />
          <div input-emoji="emoji" className="w-fit">
            <GrEmoji />
          </div>
          <div className="w-fit flex items-center gap-4 absolute right-[22px] bottom-[18px] text-[22px]">
            {!isTyping ? (
              <>
                <button
                  id="startButton"
                  onClick={()=>{startRecording();startRecordingTimer()}}
                  className="focus:outline-none"
                >
                  <LuMic />
                </button>

                <div className="relative w-fit">
                  <input
                    type="file"
                    name="image"
                    id="input-image"
                    className="opacity-0 hidden"
                    accept="image/*"
                  />
                  <label
                    htmlFor="input-image"
                    className=" w-full h-full cursor-pointer"
                  >
                    <GrGallery />
                  </label>
                </div>
              </>
            ) : (
              <LuSendHorizontal />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default InputChat;

import img from "./../../assets/profile.jpg";
import Image from "next/image";
import videoImg from "./../../assets/zoom.png";
import phoneImg from "./../../assets/phone-call.png";
import InputChat from "@/app/_components/messages/InputChat";
interface IMessage {
  name: string;
  message: string;
  time: string;
  read: boolean;
  active: string;
}
interface IMessageBody {
  person: string;
  message: string;
  time: string;
}
const messages: IMessage[] = [
  {
    name: "Mohamed",
    message:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus, doloribus.",
    time: "1w",
    read: true,
    active: "13h",
  },
  {
    name: "Mustafa",
    message:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus, doloribus.",
    time: "3d",
    read: true,
    active: "2d",
  },
  {
    name: "Osama",
    message:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus, doloribus.",
    time: "3d",
    read: false,
    active: "4w",
  },
  {
    name: "Ahmed",
    message:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus, doloribus.",
    time: "3d",
    read: true,
    active: "30min",
  },
];
const messageBody: IMessageBody[] = [
  {
    person: "me",
    message:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus, doloribus.",
    time: "1w",
  },
  {
    person: "him",
    message:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus, doloribus.",
    time: "1w",
  },
  {
    person: "him",
    message:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus, doloribus.",
    time: "1w",
  },
  {
    person: "him",
    message:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus, doloribus.",
    time: "1w",
  },
  {
    person: "him",
    message:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus, doloribus.",
    time: "1w",
  },
  {
    person: "me",
    message:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus, doloribus.",
    time: "1w",
  },
  {
    person: "me",
    message:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus, doloribus.",
    time: "1w",
  },
  {
    person: "him",
    message:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus, doloribus.",
    time: "1w",
  },
];
const Page = () => {
  return (
    <>
      <div className="flex">
        <div
          id="msg_sidebar"
          className="pl-5 py-8 border-r border-[#939393] w-[400px] overflow-visible"
        >
          <div className="w-full">
            <h2 className="sectionHeader text-center">Messages</h2>
            <div className=" h-[84vh] w-full overflow-y-scroll">
              {[...messages, ...messages].map((msg, i) => {
                return (
                  <div
                    key={i}
                    className="flex gap-2 items-center justify-start mt-10 cursor-pointer"
                  >
                    <Image
                      src={img}
                      alt=""
                      className="w-[70px] h-[70px] rounded-full"
                    ></Image>
                    <div>
                      <h4 className="font-[400]">{msg.name}</h4>
                      {msg.active.includes("min") ||
                      msg.active.includes("h") ||
                      msg.active.includes("sec") ? (
                        <p className="text-[#66666689] text-[13px] mt-1">
                          active <span>{msg.active} </span>ago
                        </p>
                      ) : (
                        <p
                          className={` text-[13px] mt-1 ${
                            msg.read
                              ? "text-[#66666689]"
                              : "text-[#000] font-[600]"
                          }`}
                        >
                          {msg.message.substring(0, 20)}{" "}
                          <span className="text-[#66666689]">.{msg.time}</span>
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div id="msg_content" className="flex-1 h-screen">
          <nav className="flex items-center justify-between px-8 py-3 border-b border-[#939393] w-full">
            <div className="leftSide flex items-center gap-4">
              <Image
                src={img}
                alt=""
                className="w-[50px] h-[50px] rounded-full"
              ></Image>
              <h4 className="font-[500]">Mohamed</h4>
            </div>
            <div className="rightSide flex items-center gap-6 text-[24px]">
              <Image
                src={phoneImg}
                alt=""
                className="w-[24px] h-[24px]"
              ></Image>
              <Image
                src={videoImg}
                alt=""
                className="w-[28px] h-[28px]"
              ></Image>
            </div>
          </nav>
          <main className="px-8 py-4 flex flex-col justify-between overflow-hidden  h-[calc(100vh-75px)]">
            <div
              id="msg_content_body"
              className=" flex-1 flex flex-col gap-4  overflow-y-auto pr-2 -mr-4"
              style={{ maxHeight: "calc(100vh - 180px)" }}
            >
              <div className="mt-auto flex flex-col gap-4">
                {messageBody.map((msg, i) => {
                  return (
                    <div key={i} className="flex flex-col gap-2 ">
                      <div className={ `text-[14px] text-[#606060] ${msg.person === "me" ? "self-start ms-7" : "self-end me-7"}`}>{msg.time}</div>
                      <div
                        className={`bg-gradient-to-br from-[#4c42ab] to-[#8176e2] text-[#fff] w-fit rounded-full py-3 px-5 max-w-[70%] ${
                          msg.person === "me" ? "self-start" : "self-end"
                        }`}
                      >
                        {msg.message}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="mt-4 shrink-0">
              <InputChat />
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default Page;

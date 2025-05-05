import { TabItem, Tabs } from "flowbite-react";
import userImg from "./../../assets/profile.jpg";
import Image from "next/image";
import { IoSearchOutline } from "react-icons/io5";
import SwitcherBtn from "@/app/_components/SwitcherBtn";
const page = () => {
  return (
    <section className=" container mx-auto flex justify-center items-start py-10 sm:px-10">
      <div className="bg-white  max-w-[750px] w-full p-6 rounded-3xl shadow-xl h-[600px] overflow-hidden">
        <div className="flex justify-between items-baseline">
          <h2 className="sectionHeader text-center mx-auto">Contacts</h2>
        </div>
        <Tabs
          aria-label="Default tabs"
          variant="underline"
          className="mt-5 flex justify-center tabsItems"
        >
          <TabItem active title="Followers" >
            <div className="h-[300px]">
            <div className="relative h-fit mb-10">
              <input
                type="search"
                name=""
                id=""
                className="w-full rounded-xl bg-[#efefef] pl-11 ring-0 focus:ring-0 outline-none border-none"
                placeholder="Search..."
              />
              <IoSearchOutline className="absolute top-[50%] left-3 -translate-y-[50%] text-[20px] text-[#797688]" />
            </div>
            <div className="flex flex-col gap-5 overflow-y-auto h-full pr-4">
              {[...Array(10)].map((_, index) => {
                return (
              <div key={index} className="flex justify-between items-center gap-2 mt-4">
                <div className="flex items-center gap-3">
                  <Image
                    src={userImg}
                    alt="user image"
                    className="w-[50px] h-[50px] rounded-full"
                  ></Image>
                  <h4>UserName</h4>
                </div>
                <div className="flex items-center gap-2">
                  <button className="bg-[--main-color] hover:bg-[#6155d2] text-white py-2 px-4 rounded-full">
                    Follow
                  </button>
                  <button
                    className={
                      "bg-[#686868] hover:bg-[#7e7e7e] text-white py-2 px-4 rounded-full"
                    }
                  >
                    Remove
                  </button>
                </div>
              </div>
              )})}
            </div>
            </div>
          </TabItem>
          <TabItem title="Following">
          <div className="h-[300px]">
            <div className="relative h-fit mb-10">
              <input
                type="search"
                name=""
                id=""
                className="w-full rounded-xl bg-[#efefef] pl-11 ring-0 focus:ring-0 outline-none border-none"
                placeholder="Search..."
              />
              <IoSearchOutline className="absolute top-[50%] left-3 -translate-y-[50%] text-[20px] text-[#797688]" />
            </div>
            <div className="flex flex-col gap-5 overflow-y-auto h-full pr-4">
              {[...Array(10)].map((_, index) => {
                return (
              <div key={index} className="flex justify-between items-center gap-2 mt-4">
                <div className="flex items-center gap-3">
                  <Image
                    src={userImg}
                    alt="user image"
                    className="w-[50px] h-[50px] rounded-full"
                  ></Image>
                  <h4>UserName</h4>
                </div>
                <div className="flex items-center gap-2">
                <SwitcherBtn/>
                </div>
              </div>
              )})}
            </div>
            </div>
          </TabItem>
        </Tabs>
      </div>
    </section>
  );
};

export default page;

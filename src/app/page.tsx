import Sidebar from "./_components/home/Sidebar";

export default function Home() {
  return (
    <div className="flex gap-4  bg-[#f6faff] h-screen">
      <Sidebar />

      <div id="main" className=" w-[86%]  overflow-y-auto  flex-1 bg-[#f6faff] min-h-screen">
        
      </div>
    </div>
  );
}

import Sidebar from "./_components/home/sidebar/Sidebar";
import Home from './_components/home/main/Home';

export default function Page() {
  return (
    <div className="flex gap-4  bg-[#f6faff] h-screen">
      <Sidebar />

      <div id="main" className=" w-[86%] overflow-y-auto  flex-1 bg-[#f6faff] min-h-screen relative" >
        <div className="container mx-auto py-3 px-4 h-[300vh]">
        <Home/>

        </div>
      </div>
    </div>
  );
}

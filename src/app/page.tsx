import Sidebar from "./_components/home/sidebar/Sidebar";
// import Home from "./_components/home/main/Home";
import Notifications from "./_components/home/notifications/Notifications";

export default function Page() {
  return (
    <div className="flex gap-4  bg-[#f6faff] h-screen">
      <Sidebar />

      <div
        id="main"
        className=" overflow-y-auto  flex-1 bg-[#f6faff] min-h-screen "
      >
        <div className=" mx-auto py-3 px-4 ">
          {/* <Home /> */}
          <Notifications />
        </div>
      </div>
    </div>
  );
}

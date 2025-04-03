
import Navbar from "./Navbar";
import StoriesBar from "./StoriesBar";




const Home = () => {
  return (
    <div className="">
      <Navbar />
      <div className="mt-[180px] md:mt-[100px] ">
      <StoriesBar/>
      </div>
    </div>
  );
};

export default Home;

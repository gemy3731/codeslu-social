
import Navbar from "./Navbar";
import StoriesBar from "./StoriesBar";




const Home = () => {
  return (
    <div className="h-[200vh]">
      <Navbar />
      <div className="mt-[80px] md:mt-[30px] container mx-auto px-10 ">
      <StoriesBar/>
      </div>
    </div>
  );
};

export default Home;


import Navbar from "./Navbar";
import StoriesBar from "./StoriesBar";



const Home = () => {
  return (
    <div className="relative">
      <Navbar />
      <div className="mt-[100px] ">
      <StoriesBar/>

      </div>
    </div>
  );
};

export default Home;

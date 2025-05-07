
import RightSidebar from "../rightSidebar/RightSidebar";
import AddPost from "./AddPost";
import Navbar from "./Navbar";
import Post from "./Post";
import StoriesBar from "./StoriesBar";




const Home = () => {
  return (
    <div className="h-[200vh]">
      <Navbar />
      <div className="mt-[80px] md:mt-[30px] container mx-auto px-10 ">
      <StoriesBar/>
      <div className="mt-20 mx-auto"><AddPost/></div>
      <div className='mt-5 mx-auto flex flex-col gap-5'>
        {[...Array(10)].map((_, index) => (
          <Post key={index} />
        ))}
      </div>
      <RightSidebar/>
      </div>
    </div>
  );
};

export default Home;

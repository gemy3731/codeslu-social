import Image from "next/image";
import userImg from "./../../../assets/profile.jpg";
import postImg from "./../../../assets/backgroundLogin.jpg";
import { HiDotsHorizontal } from "react-icons/hi";
import InterActivePost from "../../InterActivePost";
import HomeComment from "./HomeComment";


const Post = () => {
  return (
    <div className="max-w-[60%] mx-auto bg-white rounded-2xl px-4 pt-4 flex flex-col gap-4">
      <div id="postHeader">
        <div className="flex justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <Image
              src={userImg}
              alt="user image"
              className="w-[50px] h-[50px] rounded-full"
            ></Image>
            <h4 className="font-medium">User Name</h4>
          </div>
          <div>
            <button className="text-[1.3rem] text-[#000]">
              <HiDotsHorizontal />
            </button>
          </div>
        </div>
      </div>
      <div id='postDesc'>
        <p className="text-[13px]">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus laudantium a eligendi sunt quibusdam, illo mollitia nemo ducimus fugit est ipsam beatae odit ex debitis error corporis ullam deserunt reiciendis.</p>
      </div>
      <div id='postMedia'>
        {/* <Image id="postImg" src={postImg} alt="post image" className="w-full rounded-2xl object-cover" ></Image> */}
        <Image id="postImg" src={postImg} alt="post image" className="w-full rounded-2xl object-cover" ></Image>

      </div>
      <div id="postInterActive">
        <InterActivePost/>
      </div>
      <div id='postLikes'>
        <h5 className="text-[12px]">165 Likes</h5>
      </div>
      <div id="postComments">
        <HomeComment postImg={postImg}/>
      </div>
    </div>
  );
};

export default Post;

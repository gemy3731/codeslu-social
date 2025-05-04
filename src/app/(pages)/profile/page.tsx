import Image from 'next/image'
import profileImg from './../../assets/profile.jpg'
import { CiFacebook } from 'react-icons/ci'
import ProfileTabs from '../../_components/profile/ProfileTabs';

const page = () => {
  return (
    <div id='profile' className='container px-10 lg:px-40 mx-auto pt-16'>
        <div className='grid grid-cols-1 md:grid-cols-6 gap-4'>
            <div className='col-span-2'>
                <Image src={profileImg} alt='' className='w-[150px] h-[150px] rounded-full aspect-square mx-auto'></Image>
            </div>
            <div className='col-span-4'>
                {/* userName and edit btn */}
                <div className='flex items-center justify-between gap-4'>
                <h3 className='text-[20px] font-medium'>UserName</h3>
                <button className='px-4 py-1 bg-[--main-color] text-white rounded-xl'>Edit Profile</button>
                </div>
                {/* no. of posts, followers, following */}
                <div className='flex items-center justify-start gap-8 mt-6'>
                    <button className='cursor-text'>8 <span className='text-[#929292]'>Posts</span></button>
                    <button>250 <span className='text-[#929292]'>Followers</span></button>
                    <button>864 <span className='text-[#929292]'>Following</span></button>
                </div>
                {/* bio */}
                <div className='mt-6 text-[14px]'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, doloremque.</p>
                </div>
                {/* links */}
                <div className='flex flex-col gap-4 mt-6'>
                    <a href="https://facebook.com" target='_blank' className='text-blue-700 flex items-center gap-1'><CiFacebook /> <span >Facebook</span></a> 
                </div>
            </div>
        </div>
        <div>
            <ProfileTabs/>
        </div>
    </div>
  )
}

export default page
import React from 'react'
import { FaRegHeart } from "react-icons/fa";
// import { FaHeart } from "react-icons/fa";
import { FiMessageCircle } from "react-icons/fi";

// const post = {
//   userName : "Vishwa Ravi",
//   date : "Nov 10 2024",
//   tweetcontent : "Vijay Starts a new Party named Tamilaga Vettri Kalagam",
//   tweetMedia : "https://i.pinimg.com/550x/c1/c9/16/c1c916de0270dd7fc41a382bf3446007.jpg"
// }

const Post = () => {
  return (
    <>
      <div id='post' className='grid p-3 grid-cols-12 border-b-[1px] border-secondary'>
        <div className='flex items-center col-span-12'>
          <img className='col-span-2 rounded-full h-10 w-10 m-2' src='https://static.vecteezy.com/system/resources/previews/036/594/092/non_2x/man-empty-avatar-photo-placeholder-for-social-networks-resumes-forums-and-dating-sites-male-and-female-no-photo-images-for-unfilled-user-profile-free-vector.jpg' alt='pp' />
          <p className='text-white p-2 pr-0 text-lg'>Vishwa Ravi</p>
          <p className='text-slate-500 p-2 text-lg'>· Nov 10 2024</p>
        </div>
        <div id="tweet-content" className='col-span-12 m-1'>
          <p>Vijay Starts a new Party named Tamilaga Vettri Kalagam</p>
        </div>
        <div className='flex rounded-sm m-1 col-span-12 justify-center'>
          <img src='https://i.pinimg.com/550x/c1/c9/16/c1c916de0270dd7fc41a382bf3446007.jpg' className='items-center border-[1px] border-secondary justify-center rounded-xl'  alt='vijay' />
        </div>
        <div id='like-comment-section' className='flex col-span-4'>
          <FaRegHeart className='size-8 m-2' />
          <FiMessageCircle className='size-8 m-2' />
        </div>
      </div>
    </>

  )
}

export default Post
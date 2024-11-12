import React from 'react'

const Post = () => {
  return (
    <>
      <div id='post' className='grid grid-cols-12 p-3 border-b-[1px] border-secondary'>
        <div className='flex items-center col-span-12'>
          <img className='col-span-2 rounded-full h-10 w-10 m-2' src='https://static.vecteezy.com/system/resources/previews/036/594/092/non_2x/man-empty-avatar-photo-placeholder-for-social-networks-resumes-forums-and-dating-sites-male-and-female-no-photo-images-for-unfilled-user-profile-free-vector.jpg' alt='pp' />
          <p className='text-white p-2 text-lg'>Vishwa Ravi · Nov 10 2024</p>
        </div>
        <div className='flex rounded-sm m-1 col-span-12 justify-center'>
          <img className='items-center border-[1px] border-secondary justify-center rounded-xl' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqCgNG9UfNdPgiSyTwpWU22nmG1NOmSeeBTA&s' alt='vijay' />
        </div>
        <div id='like-comment-section'>

        </div>
      </div>

      <div id='post' className='grid p-3 grid-cols-12 border-b-[1px] border-secondary'>
        <div className='flex items-center col-span-12'>
          <img className='col-span-2 rounded-full h-10 w-10 m-2' src='https://static.vecteezy.com/system/resources/previews/036/594/092/non_2x/man-empty-avatar-photo-placeholder-for-social-networks-resumes-forums-and-dating-sites-male-and-female-no-photo-images-for-unfilled-user-profile-free-vector.jpg' alt='pp' />
          <p className='text-white p-2 text-lg'>Vishwa Ravi · Nov 10 2024</p>
        </div>
        <div className='flex rounded-sm m-1 col-span-12 justify-center'>
          <img className='items-center border-[1px] border-secondary justify-center rounded-xl' src='https://pbs.twimg.com/profile_images/1837200576779563009/EcHkTM-M_400x400.jpg' alt='vijay' />
        </div>
        <div id='like-comment-section'>

        </div>
      </div>
    </>

  )
}

export default Post
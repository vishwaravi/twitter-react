import React from 'react'
import { BiImageAdd } from 'react-icons/bi'
import { useState, useRef } from 'react';
import { IoMdArrowRoundBack } from 'react-icons/io';
const CreatePost = () => {

	const [value, setValue] = useState('');
	const textareaRef = useRef(null);
	
	//function for auto grow the text area when writing.
		const handleInputChange = (event) => {
		  setValue(event.target.value);
		  // Adjust the height of the textarea
		  if (textareaRef.current) {
			textareaRef.current.style.height = 'auto'; // Reset height
			textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`; // Set new height based on content
		  }
		};

	return (
		<div id="create-post" className='grid grid-cols-12'>
			<div id ="nav" className='flex items-center col-span-9'>
				<IoMdArrowRoundBack className='size-8 m-2' />
			</div>
			<div className='col-span-3 flex items-center m-2'>
				<button className='bg-primary font-body text-white p-2 w-full rounded-full' >Post</button>
			</div>
			<div id= "post-area" className='col-span-12 border-b-[1px] border-secondary'>
				<div id = "flex-container" className='mt-3 flex justify-center col-span-12'>
					<img className='col-span-2 rounded-full h-10 w-10 m-4' src='https://static.vecteezy.com/system/resources/previews/036/594/092/non_2x/man-empty-avatar-photo-placeholder-for-social-networks-resumes-forums-and-dating-sites-male-and-female-no-photo-images-for-unfilled-user-profile-free-vector.jpg' alt='pp' />
					<textarea  id="message" name="message" onChange={handleInputChange}
						ref={textareaRef} value={value} rows="4" class="text-2xl w-full border-none resize-none border-secondary  mt-4 pt-1 focus:outline-none bg-black" placeholder="Whats Happening..." />
				</div>
				<BiImageAdd className='size-10 m-1 text-primary' />
			</div>
		</div>
	)
}

export default CreatePost
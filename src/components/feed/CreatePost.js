import React from 'react'
import { BiImageAdd } from 'react-icons/bi'
import { IoCloseCircle } from "react-icons/io5";
import { useState, useRef } from 'react';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import api from '../../api/api'

const CreatePost = () => {

	const navigate = useNavigate();
	const [tweetContent, setTweetContent] = useState('');
	const [imageSrc, setImageSrc] = useState(null);
	const [file,setFile] = useState(null);
	const textareaRef = useRef(null);
	const uploadRef = useRef(null);

	const postData = new FormData();

	//function for auto grow the text area when writing.
	const handleInputChange = (event) => {
		setTweetContent(event.target.value);
		// Adjust the height of the textarea
		if (textareaRef.current) {
			textareaRef.current.style.height = 'auto'; // Reset height
			textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`; // Set new height based on content
		}
	};

	// for arrow previous page or going back
	const goBack = () => {
		return navigate('home')
	}

	const handleUploadClick = () => {
		if (uploadRef.current) {
			uploadRef.current.click();
		}
	}
	
	const handleFileChange = (e) => {
		const tmpfile = e.target.files[0];
		setFile(e.target.files[0])
		if (tmpfile) {
			const reader = new FileReader();
			reader.onload = () => {
				setImageSrc(reader.result); // Setitng the Uploaded image source to the file content
			};
			reader.readAsDataURL(tmpfile); // Read file as a data URL
		}
	}
	const handleImgRemove = () => {
		setImageSrc(null);
	}

	// Function for Posting the Content
	const handlePost = async () => {
		postData.append("tweetContent",tweetContent);
		file && postData.append("file",file);

		try{
			const response = await api.post('/home',postData,{
				headers: {
					"Content-Type": "multipart/form-data",
				}
			})
			if(response.status === 201)
				alert("posted");

		}catch(err){
			console.log(err)
		}
	}


	return (
		<div id="create-post" className='grid grid-cols-12'>
			<div id="nav" className='flex items-center col-span-9'>
				<IoMdArrowRoundBack className='size-8 m-2' onClick={goBack} />
			</div>
			<div className='col-span-3 flex items-center m-2'>
				<button onClick={handlePost} className='bg-primary font-body text-white p-2 w-full rounded-full'>Post</button>
			</div>
			<div id="post-area" className='col-span-12 border-b-[1px] border-secondary'>
				<div id="flex-container" className='mt-3 flex justify-center col-span-12'>
					<img className='col-span-2 rounded-full h-10 w-10 m-4' src='https://static.vecteezy.com/system/resources/previews/036/594/092/non_2x/man-empty-avatar-photo-placeholder-for-social-networks-resumes-forums-and-dating-sites-male-and-female-no-photo-images-for-unfilled-user-profile-free-vector.jpg' alt='pp' />
					<textarea id="message" name="messageabsolute top-2" onChange={handleInputChange}
						ref={textareaRef} value={tweetContent} rows="4" class="text-2xl w-full border-none resize-none border-secondary  mt-4 pt-1 focus:outline-none bg-black" placeholder="Whats Happening..." />
				</div>
				{
					imageSrc ? (
						<div id="post-image" className='m-5 relative col-span-12 flex items-center justify-center'>
							<button onClick={handleImgRemove} className='absolute top-7 right-7 bg-secondary rounded-2xl hover:text-red-600 hover:bg-white'>
								<IoCloseCircle className='size-6' />
							</button>
							<img src={imageSrc} className='m-8 w-full border-secondary border-2 rounded-lg' alt='post-img' />
						</div>
					):
					null
				}
				<button onClick={handleUploadClick}>
					<BiImageAdd className='size-10 m-1 text-primary' />
				</button>
				<input ref={uploadRef} onChange={handleFileChange} type='file' style={{ display: 'none' }} />
			</div>
		</div>
	)
}

export default CreatePost
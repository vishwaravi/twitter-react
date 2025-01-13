import React, { useEffect, useState } from 'react'
import api from '../../api/api'
import Post from './Post';
import { useNavigate } from 'react-router-dom';
import { PiEmptyBold } from "react-icons/pi";

const Feed = () => {
	const navigate = useNavigate();
	const [feed, setFeed] = useState([]);

	useEffect(() => {
		const fetchFeed = async () => {
			try {
				const response = await api.get('/home', {
				});

				if (response.status === 200) {
					setFeed(response.data);
					console.log(response.data)
				}
			} catch (err) {
				if(err.response.status === 401){
					return (navigate('/home'))
				}
				console.log(err);
			}

		}
		fetchFeed();
	}, [navigate]);


	return (
		<div id="feed">
			{
				feed.length ?
				feed.map(
					post => (
						<Post key={post.id}
							youLiked={post.youLiked}
							tweetId={post.id}
							tweetContent={post.tweetContent}
							tweetFilePath={post.tweetFilePath}
							userId={post.userId}
							likesCount={post.likesCount}
							hashtags={post.hashtags}
							timestamp={post.timeStamp}
						/>
					)
				):
				<div className='flex  flex-col items-center justify-center h-screen w-screen'>
					<PiEmptyBold className='size-20' />
					<p className='text-xl font-body'>No Post at this Time...</p>
				</div>
			}
		</div>
	)
}

export default Feed
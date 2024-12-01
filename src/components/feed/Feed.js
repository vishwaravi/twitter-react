import React, { useEffect, useState } from 'react'
import api from '../../api/api'
import Post from './Post';
import { useNavigate } from 'react-router-dom';

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
	}, []);


	return (
		<div id="feed">
			{
				feed.map(
					post => (
						<Post key={post.id}
							tweetContent={post.tweetContent}
							tweetFilePath={post.tweetFilePath}
							userId={post.userId}
							likesCount={post.likesCount}
							hashtags={post.hashtags}
						/>
					)
				)
			}
		</div>
	)
}

export default Feed
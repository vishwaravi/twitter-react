import React, { useEffect, useState } from 'react'
import Comment from './Comment';
// import { useParams } from 'react-router-dom'
import api from '../../../api/api';
const Comments = () => {

    // const { id } = useParams();

    const [comments,setComments] = useState([]);

    useEffect(() => {
        const getComments = async () => {
            let response = await api.get(`/home/1/comments`,{});
            setComments(response.data);
        }
        getComments();
    },[])
    

    return (
        <div className='comment-section'>
            <div className='flex-container flex justify-center'>
                <p className='text-lg font-bold'>Comments</p>
            </div>
            <div className='comments'>
               {
                    comments.map(comment => (
                        <Comment 
                            key={comment.id}
                            commentContent={comment.commentContent}
                            userId={comment.userId}
                            timestamp={comment.timestamp}
                        />
                    ))
               }
            </div>
        </div>
    )
}

export default Comments
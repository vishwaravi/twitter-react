import React, { useEffect, useState } from 'react'
import Comment from './Comment';
import api from '../../../api/api';
import { useParams } from 'react-router-dom';
import { PiEmptyBold } from "react-icons/pi";


const CommentSection = () => {
    const { id } = useParams();
    const [comments, setComments] = useState([]);

    useEffect(() => {
        const getComments = async () => {
            let response = await api.get(`/home/${id}/comments`, {});
            setComments(response.data);
        }
        getComments();
    }, [id])


    return (
        <div className='comment-section lg:h-screen'>
            <div className='flex-container flex justify-center'>
                <p className='text-lg font-bold'>Comments</p>
            </div>
            <div className='comments'>
                {
                    comments.length ?
                        comments.map(comment => (
                            <Comment
                                key={comment.id}
                                commentContent={comment.commentContent}
                                userId={comment.userId}
                                timeStamp={comment.timeStamp}
                                userProfile={comment.userProfile}
                            />
                        )) :
                        <div className='flex  flex-col items-center justify-center h-screen'>
                            <PiEmptyBold className='size-20' />
                            <p className='text-xl font-poppins'>No Comments Yet.</p>
                        </div>
                }
            </div>
        </div>
    )
}

export default CommentSection
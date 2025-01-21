import React, { useState } from 'react'
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FiMessageCircle } from "react-icons/fi";
import MenuButton from '../MenuButton';
import api from '../../api/api';
import getPostTime from '../../utils/time';
import DpPlaceHolder from '../../assets/dp-placeholder.svg'
import { useNavigate } from 'react-router-dom';

const Post = ({tweetId,userProfile, userId, tweetContent, tweetFilePath, likesCount, timestamp,youLiked}) => {

    const [isliked, setIsLiked] = useState(youLiked);
    const [curLikesCount, setCurLikesCount] = useState(likesCount);
    const navigate = useNavigate();
    const handleLike = async () => {
        setIsLiked(!isliked);
        if (isliked) {
            setCurLikesCount(curLikesCount - 1);
            try {
                await api.put(`/home/${tweetId}/dislike`,{});
            } catch (err) {
                console.log(err);
            }
        }
        else {
            setCurLikesCount(curLikesCount + 1);
            try {
                await api.put(`/home/${tweetId}/like`,{});
            } catch (err) {
                console.log(err);
            }
        }

    }

    const handleCommentClick = () => {
            navigate(`/home/${tweetId}/comments`);
    }

    return (
        <>
            <div id='post' className='grid p-3 grid-cols-12 border-b-[1px] border-secondary'>

                <div id="name-dp-date" className='flex items-center col-span-11'>
                    <img className='col-span-2 rounded-full h-10 w-10 m-2' src={userProfile ? userProfile:DpPlaceHolder} alt='pp' />
                    <p className='text-white p-2 pr-0 text-lg'>{userId}</p>
                    <p className='text-slate-500 p-2 text-lg'>· {getPostTime(timestamp)}</p>
                </div>

                <div className="group relative flex items-center">
                    <MenuButton />
                    <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 bg-gray-800 text-white text-sm py-1 px-2 rounded shadow-md transition-opacity duration-200">
                        <button>Nothing...</button>
                    </div>
                </div>

                <div id="tweet-content" className='col-span-12 m-1'>
                    <p>{tweetContent}</p>
                </div>
                {
                    tweetFilePath && (
                        <div className='flex rounded-sm m-1 col-span-12 justify-center'>
                            <img src={tweetFilePath} className='items-center border-[1px] border-secondary justify-center rounded-xl' alt={"img"} />
                        </div>
                    )
                }
                <div id='like-comment-section' className='flex col-span-4'>
                    {isliked ? (
                        <div className='like-wrapper flex items-center'>
                            <FaHeart onClick={handleLike} className='size-8 m-2 text-red-600 animate-pop' />
                            <p className='font'>{curLikesCount}</p>
                        </div>) : (
                        <div className='like-wrapper flex items-center'>
                            <FaRegHeart onClick={handleLike} className='size-8 m-2' />
                            <p className='font'>{curLikesCount}</p>
                        </div>)
                    }
                    <FiMessageCircle className='size-8 m-2' onClick={handleCommentClick} />
                </div>
            </div>
        </>

    )
}

export default Post
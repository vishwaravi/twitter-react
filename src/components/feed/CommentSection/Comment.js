import React from 'react'
import DpPlaceHolder from '../../../assets/dp-placeholder.svg'
import getPostTime from '../../../utils/time'
const Comment = ({commentContent,userId,timeStamp}) => {
    return (
        <div className='comment mb-3 mt-2'>
            <div id="name-dp-date" className='flex col-span-11'>
                <img className='col-span-2 rounded-full h-10 w-10 m-2' src={DpPlaceHolder} alt='pp' />
                <div className='flex flex-col'>
                    <p className='text-white p-1 pr-0'>{userId}<span className='text-slate-500 p-2 text'>· {getPostTime(timeStamp)}</span></p>
                    <p className='p-1 pr-0'>{commentContent}</p>
                </div>
            </div>
        </div>
    )
}

export default Comment
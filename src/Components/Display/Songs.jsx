import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { songsredux } from '../../Reduxstore/RedirectStore';

const Songs = ({ image, artist, songname, songurl }) => {
  const dispatch = useDispatch();

  const sendsong = () => {
    dispatch(songsredux({ songurl }));
    console.log("data sended", { songurl });
  }

  const songreduxurl = useSelector((state) => state.redirect.SongContainer);
  console.log("from song component redux value =>>", songreduxurl);

  return (
    <>
      <div className='min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]' onClick={sendsong}>
        <img className='rounded w-48' src={image} alt="" />
        <p className='font-bold mt-2 mb-1'>{artist}</p>
        <p className='font-bold mt-2 mb-1 text-slate-200 text-sm'>{songname}</p>
      </div>
      
    </>
  )
}

export default Songs;
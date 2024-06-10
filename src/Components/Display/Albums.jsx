import React, { useState } from 'react'
import { songsredux } from '../../Reduxstore/RedirectStore';
import Navbar from './Navbar';
import { useSelector, useDispatch } from 'react-redux'
import { container } from '../../Reduxstore/RedirectStore'

const Albums = ({ image, songname, songurl }) => {

  const dispatch = useDispatch();

  const sendsong = () => {
    dispatch(songsredux({ songurl }));
    console.log("data sended", { songurl });
  }

  const songreduxurl = useSelector((state) => state.redirect.SongContainer);
  console.log("from song component redux value =>>", songreduxurl);
  return (
    <>
      {/* <button onClick={changeroute} className='mt-5'>Go to Display Album</button> */}


      <div className='min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]' onClick={sendsong}>
            <img className='rounded w-48' src={image} alt="" />
            
              <p className='font-bold mt-2 mb-1 text-sm'>{songname}</p>
     

        </div>


   


    </>
  )
}

export default Albums

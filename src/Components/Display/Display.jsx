import React,{useState} from 'react'
import { Route, Routes, } from 'react-router'
import DisplayHome from './DisplayHome'
import { BrowserRouter } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { container } from '../../Reduxstore/RedirectStore'
import Navbar from './Navbar'
const Display = () => {




  const SemiRoute = useSelector((state) => state.redirect.ChangePage)
  // console.log("redux-value=>>",SemiRoute);

  const songreduxurl = useSelector((state) => state.redirect.SongContainer);
  console.log("from display component  songurl =>>", songreduxurl);
  return (
    <>
    <div className='w-[100%] m-2 px-6 pt-6 bg-[#121212] overflow-auto lg:w-[75%] lg:ml-0'>
       
        <DisplayHome />
    </div>

      
    </>
  )
}

export default Display

import { useContext, useState } from 'react'
import Sidebar from './Components/Sidebar/Sidebar'
import Player from './Components/Player/Player'
import Display from './Components/Display/Display'



function App() {


  return (
    <>
      <div className='h-screen bg-black'>

        <div className='h-[90%] flex '>
          <Sidebar />
          <Display />
        </div>
        <Player />
   
      </div>



    </>
  )
}

export default App

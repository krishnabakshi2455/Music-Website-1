import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import AddIcon from '@mui/icons-material/Add';
import { Button } from '@mui/material';




const Sidebar = () => {
  return (
    <>
      <div className='w-[25%] h-full p-2 flex-col gap-2 lg:flex sm:hidden max-sm:hidden'>

        <div className=' bg-[#121212] h-[15%] rounded flex flex-col justify-around'>

          <div className='flex items-center gap-3 pl-8 cursor-pointer'>
            <HomeIcon />
            <p className='font-bold font-serif'>Home</p>
          </div>

          <div className='flex items-center gap-3 pl-8 cursor-pointer'>
            <SearchIcon />
            <p className='font-bold font-serif'>Search</p>
          </div>

        </div>

        {/* ------------------------ */}
        <div className=' bg-[#121212] h-[85%] rounded'>

          <div className='p-4 flex items-center justify-between'>

            <div className='flex items-center gap-3'>
              <PhotoLibraryIcon />
              <p>Your Librarry</p>
            </div>

            <div className='flex items-center gap-3'>
              <ArrowForwardIcon />
              <AddIcon />
            </div>
          </div>

          <div className='p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4'>
            <h1>Create Your First Playlist</h1>
            <p className='font-light'>It's easy we will help you</p>
            <Button variant="contained" sx={{
              backgroundColor: "white",
              color: "black",
              borderRadius: "100px",
              ":hover": { backgroundColor: "grey" }
            }}>Create Playlist</Button>

          </div>

          <div className='p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4'>
            <h1>Lets Find Some Podcasts To Follow</h1>
            <p className='font-light'>We'll keep you update to new episodes</p>
            <Button variant="contained" sx={{
              backgroundColor: "white",
              color: "black",
              borderRadius: "100px",
              ":hover": { backgroundColor: "grey" }
            }}>Browse Podcast</Button>

          </div>


        </div>

      </div>

    </>
  )
}

export default Sidebar

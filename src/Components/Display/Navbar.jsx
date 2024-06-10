import React from 'react'
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import { useSelector, useDispatch } from 'react-redux'
import { container,goback } from '../../Reduxstore/RedirectStore'
import Tooltip from '@mui/material/Tooltip';

const Navbar = () => {

  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));

  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: '100%',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));

  const SemiRoute = useSelector((state) => state.redirect.ChangePage)
  console.log("redux-value=>>", SemiRoute);
  const dispatch = useDispatch()
  const gobackfunc =()=>{
    dispatch(goback({ goback: null }))
    console.log("chal gaya gobackfunc");
  }
  // console.log("redux-value=>>", SemiRoute);

  return (
    <>
   <div className='w-full flex justify-between items-center font-semibold max-sm:gap-3'>
        <div className='flex items-center gap-10 max-sm:gap-5'>
            <div className='flex gap-5 max-sm:gap-2 cursor-pointer' >
            
            <Tooltip title="Go-Back" placement="top-start" onClick={gobackfunc}>
              <ArrowCircleLeftIcon />
            </Tooltip>

            <ArrowCircleRightIcon />
            </div>

          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        </div>


        
        <div className='flex items-center gap-4'>
            <p className='bg-white text-black cursor-pointer font-serif text-[15px] px-4 py-1 rounded-2xl hidden md:block'>Explore Premium</p>
            <p className='bg-black py-1 px-3 rounded-2xl text-[15px] cursor-pointer max-sm:hidden'>Install App</p>
            <p className='bg-blue-500 text-white w-7 h-7 rounded-full flex items-center justify-center'>K</p>
        </div>
   </div>
   
   <div className='flex items-center gap-2 mt-4'>
      <p className='bg-white text-black px-4 py-1 rounded-2xl cursor-pointer'>All</p>
      <p className='bg-black px-4 py-1 rounded-2xl cursor-pointer'>Music</p>
        <p className='bg-black px-4 py-1 rounded-2xl cursor-pointer'>Podcasts</p>

   </div>
      
    </>
  )
}

export default Navbar

import React, { useContext, useEffect, useRef, useState } from 'react'
import ShuffleIcon from '@mui/icons-material/Shuffle';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import LoopIcon from '@mui/icons-material/Loop';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import PauseIcon from '@mui/icons-material/Pause';
import { useSelector } from 'react-redux';
import { songsredux } from '../../Reduxstore/RedirectStore';
const Player = () => {
    const [audiotime, setaudiotime] = useState()
    const [audioduration, setaudioduration] = useState()


    const songreduxurl = useSelector((state) => state.redirect.SongContainer)
    console.log("from player component songurlredux", songreduxurl);

    const audioRef = useRef(null);
    const [playiconredering, setplayiconredering] = useState(false)

    function togglePlayPause() {
        const audiomain = audioRef.current
        if (audiomain.paused || audiomain.ended) {
            audiomain.play();
            setplayiconredering(true)
            console.log("from player songredux data", songreduxurl);

        } else {
            audiomain.pause();
            setplayiconredering(false)
            console.log("from player songredux data", songreduxurl);
        }
        // ===================================================================
        setaudiotime(audiomain.currentTime)
        console.log("from player audio current time ", audiotime);
        setaudioduration(audiomain.duration)
    }

    function stopAudio() {
        const audiomain = audioRef.current
        audiomain.pause();
        setTimeout(() => {
            audiomain.play();
        }, 1000);
        audiomain.currentTime = 0;



    }

    // const volumeref = useRef()
    const [volume, setVolume] = useState(1);

    const changeVolume = (amount) => {
        let newVolume = audioRef.current.volume + amount;
        if (newVolume > 1) newVolume = 1;
        if (newVolume < 0) newVolume = 0;
        audioRef.current.volume = newVolume;
        setVolume(newVolume);
    };

    const adjustVolume = (value) => {
        audioRef.current.volume = value;
        setVolume(value);
    };

    useEffect(() => {
        const audio = audioRef.current;

        const updateCurrentTime = () => {
            setaudiotime(audio.currentTime);
        };

        const updateDuration = () => {
            setaudioduration(audio.duration);
        };

        audio.addEventListener('timeupdate', updateCurrentTime);
        audio.addEventListener('loadedmetadata', updateDuration);

        return () => {
            audio.removeEventListener('timeupdate', updateCurrentTime);
            audio.removeEventListener('loadedmetadata', updateDuration);
        };

        /**Key Changes:
Event Listeners: Added timeupdate and loadedmetadata event listeners to update the audiotime and audioduration state variables.
Progress Bar Width: The width of the <hr> element is dynamically set based on the ratio of audiotime to audioduration */
    }, []);




    return (
        <>
            <div className='h-[10%] bg-black flex justify-center w-full items-center px-2'>

                <div className='flex flex-col items-center justify-center gap-1 w-full'>
                    <div className='flex items-center justify-center  w-full'>
                        <audio ref={audioRef} className=' hidden ' src={songreduxurl} controls>
                            Your browser does not support the audio element.
                        </audio>
                        <div className='flex gap-4  ml-auto'>
                            <div className=' cursor-pointer' onClick={stopAudio}>
                                <LoopIcon />
                            </div>
                            <SkipPreviousIcon />

                            <button onClick={togglePlayPause}>
                                {
                                    playiconredering ? <PauseIcon /> : <PlayArrowIcon />
                                }
                            </button>
                            <SkipNextIcon />
                        </div>

                        <div className='flex items-center gap-2 ml-auto'>
                            <button onClick={() => changeVolume(0.1)}>
                                <AddIcon />
                            </button>

                            <input
                                id="volumeSlider"
                                type="range"
                                min="0"
                                max="1"
                                step="0.01"
                                value={volume}
                                onChange={(e) => adjustVolume(e.target.value)}
                                className=' sm:block hidden'
                            />

                            <button onClick={() => changeVolume(-0.1)}>
                                <RemoveIcon />
                            </button>
                        </div>

                    </div>

                    <div className='flex items-center gap-5'>
                        <p>{audiotime ? Math.floor(audiotime) : "0"}</p>
                        <div
                            className='w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer'>
                            {/* <hr className='h-1 w-0 border-none bg-green-800 rounded-full' /> */}
                            <hr
                                className='h-1 bg-green-800 rounded-full'
                                style={{ width: `${(audiotime / audioduration) * 100}%` }}
                            />
                        </div>
                        <p>{audioduration ? Math.floor(audioduration) : "0"}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Player

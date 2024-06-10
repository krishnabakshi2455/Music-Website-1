import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios';
import Albums from './Albums';
import Episode from './Episode';
import Songs from './Songs';
const DisplayHome = () => {   


    const [episodedata, setepisodedata] = useState()

    useEffect(() => {

        ;(async ()=>{
            const response = await axios.get('https://v1.nocodeapi.com/godess/spotify/sXsGOimSxalAjFYq/search?q=artist&type=artist')
            // setepisodedata(response)
            setepisodedata(response.data.artists.items)
        })()
    }, [])
    console.log("Artists =>>",episodedata);

    // ========================================================EPISODES API ENDS HERE=========================================================

 
    const [playlists, setplaylists] = useState()
    useEffect(() => {
        ; (async () => {
            const response = await axios.get('https://v1.nocodeapi.com/godess/spotify/sXsGOimSxalAjFYq/search?q=romantic&type=track')
            // setplaylists(response)
            setplaylists(response.data.tracks.items)

        })()

    }, [])
    console.log("plalists",playlists);

    // ================================================PLAYLISTS API ENDS HERE=====================================================


    const [songs, setsongs] = useState()

    useEffect(() => {

        ;(async ()=>{
            const response = await axios.get('https://v1.nocodeapi.com/godess/spotify/sXsGOimSxalAjFYq/search?q=party&type=track')
            setsongs(response.data.tracks.items)
            // setsongs(response)
        })()
    }, [])
    // console.log("before songs");
    // console.log("from display home",songs);

    const [song3, setsong3] = useState()
    useEffect(() => {

        ; (async () => {
            const response = await axios.get('https://v1.nocodeapi.com/godess/spotify/sXsGOimSxalAjFYq/search?q=horror&type=track')
            // setsongs(response)
            setsong3(response.data.tracks.items)
            // setalbum(response)
        })()
    }, [])
    console.log("from displayalbum song3", song3);

    // ==========================================================SONGS ENDS HERE=================================================================

    

    return (
        <>
            <Navbar />
{/*             
            <Albums />

            
            <Songs/>
            
            <Episode /> */}

            


            <div className='mb-4'>
                <h1 className='my-5 font-bold text-2xl'>Artists</h1>
                <div className='flex overflow-auto '>
                    {
                        episodedata && episodedata.map((item, index) => {
                            return <div key={index}>
                                <Episode key={index} Episodename={item.name} id={item.id} image={item.images[1].url} />
                            </div>
                        })
                    }
                </div>

            </div>

            {/* // ================================================episodes API ENDS HERE========================================================= */}

             


            <div className='mb-4'>
                <h1 className='my-5 font-bold text-2xl'>Songs</h1>
                <div className='flex overflow-auto '>
                    {
                        playlists && playlists.map((item, index) => {
                            return <div key={index}>
                                <Albums key={index} songname={item.name} id={item.id} image={item.album.images[1].url} songurl={item.preview_url} />
                            </div>
                        })
                    }
                </div>

            </div>

            {/* ================================================Songs API ENDS HERE===================================================== */}

            


            <div className='mb-4'>
                <h1 className='my-5 font-bold text-2xl'>Songs</h1>
                <div className='flex overflow-auto '>

                    
                    {
                        songs && songs.map((item, index) => {
                            return <div key={index}>
                                <Songs key={index} songname={item.name} id={item.id} image={item.album.images[1].url}  songurl={item.preview_url} />
                            </div>
                        })
                    }
                </div>

            </div>


            <div className='mb-4'>
                <h1 className='my-5 font-bold text-2xl'>Songs</h1>
                <div className='flex overflow-auto '>


                    {
                        song3 && song3.map((item, index) => {
                            return <div key={index}>
                                <Songs key={index} songname={item.name} id={item.id} image={item.album.images[1].url} songurl={item.preview_url} />
                            </div>
                        })
                    }
                </div>

            </div>

            

            {/* // ==========================SONGS ENDS HERE================================================================= */}

           

        </>
    )
}

export default DisplayHome

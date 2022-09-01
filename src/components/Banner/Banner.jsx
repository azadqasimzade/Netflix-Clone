import React, { useEffect, useState } from 'react'
import requests from '../../Requests/Requests'
import axios from '../../axios/axios'

function Banner() {
    const [movie, setMovie] = useState([])

    useEffect(() =>{
         async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length - 1)
                ]
            )

            return request
         }
         fetchData()
    }, [])

    function truncate(string, n){
        return string?.length > n ? string.substr(0, n - 1) + '...' : string  
    }

  return (
    <header className='w-full h-[45.875rem] relative border-b-8 border-bordercolor'>
        <img className='w-full h-full object-cover absolute' src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt="" />
        <div className='bg-[rgba(0,0,0,.4)] w-full h-full absolute gradient'/>
        <div className='h-full lg:px-14 px-6 flex flex-col justify-center gap-y-5 absolute text-white'>
            <h1 className='xl:text-6xl sm:text-5xl text-3xl max-w-[50rem] leading-tight font-bold tracking-wide'>{movie?.title || movie?.name || movie?.original_name}</h1>
            <div className='flex gap-x-4'>
                <button className='outline-none border-none text-white rounded-sm px-8 py-2 bg-buttonColor hover:bg-white hover:text-black transition-all font-semibold'>Play</button>
                <button className='outline-none border-none text-white rounded-sm px-8 py-2 bg-buttonColor hover:bg-white hover:text-black transition-all font-semibold'>My List</button>
            </div>
            <h1 className='max-w-[22.5rem] sm:w-[45rem] h-[5.5rem] text-sm'>
               {
                truncate(movie?.overview, 150)
               }
            </h1>
        </div>
    </header>
  )
}

export default Banner
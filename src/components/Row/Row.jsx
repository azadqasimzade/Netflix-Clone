import React, { useEffect, useState } from 'react'
import axios from '../../axios/axios'

function Row({title, fetchUrl, isLargerRow}) {
    const [movies, setMovies] = useState([])

    const base_url = 'https://image.tmdb.org/t/p/original/'

    useEffect(() =>{
        async function fetchData(){
            const request = await axios.get(fetchUrl)
            setMovies(request.data.results)
            return request
        }
        fetchData()
    }, [fetchUrl])

  return (
    <div className='text-white ml-5'>
        <h2>{title}</h2>
        <div className='flex overflow-y-hidden overflow-x-scroll scrollbar-hide lg:p-5'>
            {
                movies.map(movie =>(
                    ((isLargerRow && movie.poster_path) || 
                    (!isLargerRow && movie.backdrop_path)) && (
                    <img key={movie.id} src={`${base_url}${
                            isLargerRow ? movie.poster_path : movie.backdrop_path
                        }`} 
                        className={`${isLargerRow ? 'max-h-[15.625rem] hover:scale-[1.09]' : 'max-h-[6.25rem] hover:scale-[1.08]'} object-contain ml-3 transition duration-300 hover:scale-[1.08] hover:opacity-100`}
                        alt={movie.title} 
                    />
                    )
                    
                ))
            }
        </div>
    </div>
  )
}

export default Row
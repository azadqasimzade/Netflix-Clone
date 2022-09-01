import React from 'react'
import video from '../../../assets/video-tv-0819.mp4'

function Enjoy() {
  return (
    <div className='border-b-8 border-bordercolor mb-16'>
        <div className='max-w-[78rem] mx-auto grid lg:grid-cols-2 grid-cols-1 items-center mb-16 lg:px-16 px-6 py-10'>
          <div className='lg:text-start text-center'>
              <h1 className='lg:text-[3.125rem] md:text-[2.5rem] text-2xl lg:mb-8 mb-2 font-bold text-white'>Enjoy on your TV.</h1>
              <h2 className='lg:text-[1.625rem] md:text-xl text-lg font-semibold text-white'>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</h2>
          </div>
          <div className='relative h-full w-full flex felx-col justify-center'>
              <div>
                <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" alt="" />
              </div>
              <div className='w-[75%] h-[57%] top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 flex items-center justify-center absolute -z-10'>
                  <video autoPlay={true} playsInline={true} muted loop={true}>
                      <source src={video} type="video/mp4"/></video>
              </div>
          </div>
        </div>
    </div>
  )
}

export default Enjoy
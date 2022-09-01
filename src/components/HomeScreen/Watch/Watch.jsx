import React from 'react'
import video from '../../../assets/video-devices.mp4'

function Watch() {
  return (
    <div className='border-b-8 border-bordercolor mb-16'>
        <div className='max-w-[78rem] mx-auto flex lg:flex-row flex-col items-center justify-center mb-16 lg:px-16 px-6 py-10'>
          <div className='lg:w-1/2 w-full lg:text-start text-center'>
              <h1 className='lg:text-[3.125rem] md:text-[2.5rem] text-2xl lg:mb-8 mb-2 font-bold text-white'>Watch everywhere.</h1>
              <h2 className='lg:text-[1.625rem] md:text-xl text-lg font-semibold text-white leading-tight'>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more.</h2>
          </div>
          <div className='lg:w-1/2 relative flex flex-col items-center justify-center'>
              <div>
                <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png" alt="" />
              </div>
              <div className='w-[65%] h-[80%] top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 absolute -z-10'>
                  <video autoPlay={true} playsInline={true} muted loop={true}>
                      <source src={video} type="video/mp4"/></video>
              </div>
          </div>
        </div>
    </div>
  )
}

export default Watch
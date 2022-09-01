import React from 'react'

function Download() {
  return (
    <div className='border-b-8 border-bordercolor mb-16'>
        <div className='max-w-[78rem] mx-auto flex lg:flex-row flex-col-reverse items-center justify-center mb-16 lg:px-16 px-6 py-10'>
          <div className='relative lg:w-[48%] w-full h-full lg:-left-16 flex justify-center'>
            <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" alt="" />
            <div  className='lg:w-[65%] md:w-[45%] sm:w-[60%] w-full absolute left-1/2 -translate-x-1/2 lg:bottom-7 bottom-5 bg-black flex items-center gap-x-5 border border-inputColor rounded-lg sm:py-3 sm:px-4 py-1.5 px-2'>
              <div className='lg:w-[8rem] w-[5rem]'>
                <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png" alt="" />
              </div>
              <div className='flex flex-col w-full sm:text-base text-sm whitespace-nowrap'>
                <div className='text-white font-bold'>Stranger Things</div>
                <div className='text-blue-600 font-bold'>Downloading...</div>
              </div>
              <div className='ml-8'>
                <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif" alt="" />
              </div>
            </div>
          </div>
          <div className='lg:w-[50%] text-white flex flex-col gap-y-4 lg:text-start text-center'>
            <h1 className='lg:text-[3.125rem] md:text-[2.5rem] text-2xl font-bold text-white leading-tight'>Download your shows to watch offline.</h1>
            <h2 className='lg:text-[1.625rem] md:text-xl text-lg font-semibold text-white leading-tight'>Save your favorites easily and always have something to watch.</h2>
          </div>
        </div>
    </div>
  )
}

export default Download
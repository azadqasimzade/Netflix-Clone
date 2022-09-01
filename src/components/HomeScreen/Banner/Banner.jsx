import React from 'react'
import Email from '../Email/Email'

function Banner() {
  return (
    <>
        <header className='w-full h-[45.875rem] relative flex items-center justify-center border-b-8 border-bordercolor'>
            <img className='w-full h-full object-cover absolute' src="https://assets.nflxext.com/ffe/siteui/vlv3/ac824598-245b-4828-b14f-5cff9074f4d0/160132a3-8204-4c54-b4ec-5935f9b14a33/AZ-en-20220822-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="" />
            <div className='bg-[rgba(0,0,0,.4)] w-full h-full absolute gradient'/>
            <div className='max-w-[59.375rem] w-full md:px-20 px-6 pt-16 absolute text-white text-center flex flex-col gap-y-4'>
              <h1 className='xl:text-6xl sm:text-5xl text-3xl max-w-[50rem] leading-tight font-bold tracking-wide'>Unlimited movies, TV shows, and more.</h1>
              <h2 className='sm:text-[1.625rem] text-lg font-semibold'>Watch anywhere. Cancel anytime.</h2>
              <Email/>
            </div>
        </header>
    </>
  )
}

export default Banner
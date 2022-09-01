import React from 'react'
import { BsChevronRight } from 'react-icons/bs'
import { NavLink } from 'react-router-dom'


function Email() {
  return (
    <>
        <form className='w-full flex flex-col gap-y-3 lg:px-6 px-0' noValidate>
            <h3 className='lg:text-[1.2rem] text-lg font-semibold'>Ready to watch? Enter your email to create or restart your membership.</h3>
            <div className='flex lg:flex-row flex-col sm:items-center w-full mt-2'>
                <label className='relative block w-full'>
                    <input type="text" required className='lg:min-w-[31.25rem] w-full lg:h-[4.375rem] sm:h-[3.5rem] h-[3rem] pb-0 p-3 rounded-sm lg:rounded-tr-none lg:rounded-br-none peer text-black outline-none' />
                    <span className='absolute top-0 lef0 h-full px-3 flex items-center peer-focus:h-7 peer-focus:text-sm peer-focus:font-semibold peer-valid:h-7 peer-valid:text-sm peer-valid:font-semibold select-none transition-all text-inputColor'>Email addres</span>
                </label>
                <div className='lg:w-full lg:mt-0 mt-4 flex justify-center w-full'>
                  <NavLink to={'/signin'} className='xl:text-[1.875rem] lg:text-[1.625rem] lg:w-full text-base lg:min-h-[4.375rem] px-3 py-2 rounded-sm lg:rounded-tl-none lg:rounded-bl-none btn-red bg-btnColor flex items-center justify-center gap-x-3 font-semibold'>Get Started <span className='lg:text-2xl text-base'><BsChevronRight/></span></NavLink>
                </div>
            </div>
        </form>
    </>
  )
}

export default Email
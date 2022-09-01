import React from 'react'

function ProfileKids() {
  return (
    <div className='border-b-8 border-bordercolor mb-16'>
        <div className='max-w-[78rem] mx-auto flex lg:flex-row flex-col-reverse items-center justify-center mb-16 lg:px-16 px-6 py-10'>
          <div className='lg:w-1/2 w-full flex justify-center'>
            <img src="https://occ-0-6194-2774.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABfpnX3dbgjZ-Je8Ax3xn0kXehZm_5L6-xe6YSTq_ucht9TI5jwDMqusWZKNYT8DfGudD0_wWVVTFLiN2_kaQJumz2iivUWbIbAtF.png?r=11f" alt="" />
          </div>
          <div className='lg:w-1/2 text-white flex flex-col gap-y-4 lg:text-start text-center'>
            <h1 className='lg:text-[3.125rem] md:text-[2.5rem] text-2xl lg:mb-8 mb-2 font-bold text-white leading-tight'>Create profiles for kids.</h1>
            <h2 className='lg:text-[1.625rem] md:text-xl text-lg font-semibold text-white leading-tight'>Send kids on adventures with their favorite characters in a space made just for them—free with your membership.</h2>
          </div>
        </div>
    </div>
  )
}

export default ProfileKids
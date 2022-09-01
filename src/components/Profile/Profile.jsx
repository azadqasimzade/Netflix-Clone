import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { selectUser } from '../../features/userSlice'
import { auth } from '../../firebase'

function Profile() {
    const user = useSelector(selectUser)

    const navigate = useNavigate()

    const handleSignOut = () =>{
        auth.signOut()
        navigate('/')
    }

  return (

    <div className='h-[100vh] flex justify-center text-white'>
        <div className='flex flex-col md:w-1/2 w-full mx-auto pt-[6rem] lg:px-14 px-6 '>
            <h1 className='xl:text-6xl sm:text-5xl text-3xl font-normal border-b border-borderB mb-5'>Edit Profile</h1>
            <div className='flex '>
                <img className='md:h-[6.25rem] h-[5rem]' src="https://imgs.search.brave.com/5OoASox4IeXX6ukt6K2Oq-3jb6rlqqgYQejMtPOVj4Y/rs:fit:1000:1000:1/g:ce/aHR0cHM6Ly9paDAu/cmVkYnViYmxlLm5l/dC9pbWFnZS42MTg0/MjcyNzcuMzIyMi9m/bGF0LDEwMDB4MTAw/MCwwNzUsZi51Mi5q/cGc" alt="" />
                <div className='ml-6 flex-1'>
                    <h2 className='bg-gray-500 p-4 text-base pl-5'>{user.email}</h2>
                    <div className='mt-5'>
                        <button className='px-5 py-[0.625rem] text-base bg-btnColor w-full mt-[3%] border-none font-semibold cursor-pointer' onClick={handleSignOut}>Sign Out</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Profile
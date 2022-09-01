import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from "../../features/userSlice"
import { NavLink } from 'react-router-dom'

function Nav() {
    const [show, setShow] = useState(false)
    const user = useSelector(selectUser)

    const transitionShow = () =>{
        if(window.scrollY > 100){
            setShow(true)
        }else{
            setShow(false)
        }
    }

    useEffect(() =>{
        window.addEventListener('scroll', transitionShow)
        return () => window.removeEventListener('scroll', transitionShow)
    }, [show])


  return (
    <div className={`${show && 'bg-black'} transition-all duration-[.4s] flex items-center justify-between lg:px-14 py-6 px-6 fixed top-0 w-full z-50`}>
        <NavLink to={'/'} className='xl:w-[11rem] xl:h-[2.8125rem] lg:w-[8.375rem] lg:h-[2.25rem] md:w-[6.75rem] md:h-8 w-[5.55rem] h-6'>
            <img src="https://imgs.search.brave.com/9X1ftLLhzBVjzkpaFvhIbiguNWfrWioefTXYw3JHl74/rs:fit:1200:684:1/g:ce/aHR0cDovL3d3dy5m/cmVlcG5nbG9nb3Mu/Y29tL3VwbG9hZHMv/bmV0ZmxpeC1sb2dv/LTAucG5n" alt="" />
        </NavLink>
        {
            !user ? (
                <div className='flex items-center sm:gap-x-8 gap-x-4 sm:text-base text-sm'>
                    <select className='bg-transparent text-white sm:px-2 sm:py-1.5 px-1 py-1 rounded border border-inputColor'>
                        <option defaultValue value="" className='bg-gray-400'>Engslish</option>
                        <option value="" className='bg-gray-400'>Русский</option>
                    </select>
                    <NavLink to={'/signin'} className='bg-btnColor text-white sm:px-4 sm:py-1.5 px-1.5 py-1 font-semibold rounded'>Sign In</NavLink>
                </div>
            )
            :
            (
                <NavLink to={'/profile'} className='md:w-10 w-8'> 
                    <img src="https://imgs.search.brave.com/5OoASox4IeXX6ukt6K2Oq-3jb6rlqqgYQejMtPOVj4Y/rs:fit:1000:1000:1/g:ce/aHR0cHM6Ly9paDAu/cmVkYnViYmxlLm5l/dC9pbWFnZS42MTg0/MjcyNzcuMzIyMi9m/bGF0LDEwMDB4MTAw/MCwwNzUsZi51Mi5q/cGc" alt="" />
                </NavLink>
            )
        }
    </div>
  )
}

export default Nav
import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className='border-t-8 border-bordercolor mt-16'>
        <div className='max-w-[78rem] mx-auto lg:px-44 px-6 py-10 text-inputColor'>
            <p><Link to={'/'} className='hover:underline'>Questions? Contact us.</Link></p>
            <ul className='max-w-[62.54rem] grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-y-4 mt-6'>
                <li>
                    <Link to={'/'} className='hover:underline text-sm'>FAQ</Link>
                </li>
                <li>
                    <Link to={'/'} className='hover:underline text-sm'>Help Center</Link>
                </li>
                <li>
                    <Link to={'/'} className='hover:underline text-sm'>Account</Link>
                </li>
                <li>
                    <Link to={'/'} className='hover:underline text-sm'>Media Center</Link>
                </li>
                <li>
                    <Link to={'/'} className='hover:underline text-sm'>Investor Relations</Link>
                </li>
                <li>
                    <Link to={'/'} className='hover:underline text-sm'>Jobs</Link>
                </li>
                <li>
                    <Link to={'/'} className='hover:underline text-sm'>Ways to Watch</Link>
                </li>
                <li>
                    <Link to={'/'} className='hover:underline text-sm'>Terms of Use</Link>
                </li>
                <li>
                    <Link to={'/'} className='hover:underline text-sm'>Privacy</Link>
                </li>
                <li>
                    <Link to={'/'} className='hover:underline text-sm'>Cookie Preferences</Link>
                </li>
                <li>
                    <Link to={'/'} className='hover:underline text-sm'>Corporate Information</Link>
                </li>
                <li>
                    <Link to={'/'} className='hover:underline text-sm'>Contact Us</Link>
                </li>
                <li>
                    <Link to={'/'} className='hover:underline text-sm'>Speed Test</Link>
                </li>
                <li>
                    <Link to={'/'} className='hover:underline text-sm'>Legal Notices</Link>
                </li>
                <li>
                    <Link to={'/'} className='hover:underline text-sm'>Only on Netflix</Link>
                </li>
            </ul>
            <div className='mt-8'>
                <select className='bg-transparent text-white sm:px-5 sm:py-3 px-1 py-1 rounded border border-inputColor border-opacity-50'>
                    <option defaultValue value="" className='bg-gray-400'>Engslish</option>
                    <option value="" className='bg-gray-400'>Русский</option>
                </select>
            </div>
            <p className='text-inputColor text-sm mt-5'>Netflix Azerbaijan</p>
        </div>
    </footer>
  )
}

export default Footer
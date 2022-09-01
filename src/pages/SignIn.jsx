import React, { useRef } from 'react'
import { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { auth } from '../firebase'

function SignIn() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)
  const [notUser, setNotUser] = useState('')
  const [erEmail, setErEmail] = useState('')
  const [erPassword, setErPassword] = useState('')
  
  const emailRef = useRef(null)
  const passwordRef = useRef(null)

  const signIn = e =>{
    e.preventDefault()
    
    if(!email.trim() && !password.trim()){
        setErEmail('Please enter a valid email or phone number.')
        setErPassword('Your password must contain between 6 and 60 characters.')
    }else if(!email.trim()){
        setErEmail('Please enter a valid email or phone number.')
    }else if(!password.trim()){
        setErPassword('Your password must contain between 6 and 60 characters.')
    }else{
        auth.signInWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then(() => {
            navigate('/')
        }).catch(err =>{
            if(err.code === 'auth/invalid-email'){
                setNotUser('Sorry, we can\'t find an account with this email address. Please try again or')
                setError('')
            }else if(err.code === 'auth/wrong-password'){
                setError('Wrong password')
                setNotUser('')
            }else if(err.code === 'auth/user-not-found'){
                setNotUser('User not found')
                setError('')
            }else if(err.code === 'auth/too-many-requests'){
                setError('Too mayn request. Try again later')
                setNotUser('')
            }
            console.log(err.code)
        })
    }
    
  }


  return (
        <div className='w-full min-h-[100vh] h-full flex flex-col relative'>
            <img className='w-full h-full object-cover absolute' src="https://assets.nflxext.com/ffe/siteui/vlv3/ac824598-245b-4828-b14f-5cff9074f4d0/160132a3-8204-4c54-b4ec-5935f9b14a33/AZ-en-20220822-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="" />
            <div className='bg-[rgba(0,0,0,.4)] w-full h-full absolute gradient'/>
            <div className='flex items-center justify-center w-full h-full'>
                <div className='lg:max-w-[28.125rem] lg:min-h-[100vg] w-full h-full lg:px-14 px-6  lg:mt-24 lg:bg-black/70 bg-black z-10 text-white rounded'>
                    <div className='pt-[3.75rem] h-[100vh]'>
                        <h1 className='text-[2rem] font-bold mb-6'>Sign In</h1>
                        {
                            notUser && (
                                <p className='bg-wrongText p-4 font-semibold rounded mb-3 text-sm'>{notUser} <NavLink to={'/signup'} className='underline'>create a new account</NavLink></p>
                            )
                        }
                        {
                            error && (
                                <p className='bg-wrongText p-4 font-semibold rounded mb-3 text-sm'>{error}</p>
                            )
                        }
                        <form noValidate className='flex flex-col w-full'>
                            <div className='mb-4'>
                                <label className='relative block'>
                                    <input ref={emailRef} value={email} onChange={e => setEmail(e.target.value)} required type="text" className='h-12 px-4 w-full rounded transition-colors outline-none peer text-sm pt-5 bg-inputBg focus:bg-inputFocus'/>
                                    <span className='absolute top-0 left-0 px-4 h-full flex items-center transition-all peer-focus:h-7 peer-valid:!h-7 peer-valid:!text-xs peer-focus:!text-xs text-inputColor select-none'>Email</span>
                                </label>
                                {
                                    erEmail && <p className='text-sm text-wrongText tracking-wide pt-1'>{erEmail}</p>
                                }
                            </div>
                            <div>
                                <label className='relative block'>
                                    <input ref={passwordRef} value={password} onChange={e => setPassword(e.target.value)} required type="password" className='h-12 px-4 w-full rounded transition-colors outline-none peer text-sm pt-5 bg-inputBg focus:bg-inputFocus'/>
                                    <span className='absolute top-0 left-0 px-4 h-full flex items-center transition-all peer-focus:h-7 peer-valid:h-7 peer-valid:text-xs peer-focus:text-xs text-inputColor select-none'>Password</span>
                                </label>
                                {
                                    erPassword && <p className='text-sm text-wrongText tracking-wide pt-1'>{erPassword}</p>
                                }
                            </div>
                            <button onClick={signIn} className='bg-red-700 rounded w-full p-3 font-semibold mt-10'>Sign In</button>
                            <div className="flex items-center justify-between mt-2">
                                <label htmlFor="rememberMe">
                                    <input id='rememberMe' type="checkbox" className='indeterminate:bg-gray-300 mr-2' />
                                    <span className='text-xs opacity-70 tracking-wide'>Remember me</span>
                                </label>
                                <Link to={'/'} className='text-xs opacity-70 tracking-wide'>
                                    Need help?
                                </Link>
                            </div>
                        </form>
                        <div className='flex flex-col lg:mt-20 mt-5'>
                            <div className='flex items-center gap-x-1'>
                                <span className='text-inputColor'>Now to Netflix?</span>
                                <NavLink to={'/signup'} className='cursor-pointer'>Sign up now.</NavLink>
                            </div>
                            <div className='mt-3'>
                                <p className='text-xs text-inputColor'>
                                    This page is protected bg Google reCAPTCHA to ensure your're not a bot.
                                    <Link to={'/'} className='text-blue-600 text-semibold ml-1'>Learn more.</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <footer className='lg:mt-16 lg:border-none border-t border-inputColor z-50 lg:bg-black/70 bg-black'>
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
                    </ul>
                    <div className='mt-8'>
                        <select className='bg-transparent text-white sm:px-5 sm:py-3 px-1 py-1 rounded border border-inputColor border-opacity-50'>
                            <option defaultValue value="" className='bg-gray-400'>Engslish</option>
                            <option value="" className='bg-gray-400'>Русский</option>
                        </select>
                    </div>
                </div>
            </footer>
        </div>
  )
}

export default SignIn
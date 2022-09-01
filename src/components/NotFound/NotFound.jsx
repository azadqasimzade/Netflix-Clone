import React from 'react'
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className='w-full h-[100vh] flex items-center justify-center'>
      <div className='text-white p-4 border border-borderB grid gap-y-4'>
          <h1 className='text-4xl font-semibold mb-6'>Page Not Found</h1>
          <p>The requested page does not exist.</p>
          <p>Please go to the Netflix home page by clicking the btton below.</p>
          <button onClick={() => navigate('/')} className='bg-btnColor w-36 py-2 rounded'>Netflix Home</button>
      </div>
    </div>
  )
}

export default NotFound
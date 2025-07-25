import Header from '@/components/header'
import React from 'react'

export default function home(){
  return (
    <div className='w-full h-screen'>
        <Header/>

        <div className='flex justify-center items-center h-screen'>
        <h1 className='text-8xl'>home page</h1>
        </div>
        
    </div>
  )
}

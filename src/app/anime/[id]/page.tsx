"use client";

import { useApi } from '@/services/useApi'
import { useParams } from 'next/navigation'
import React from 'react'

const AnimeInfo = () => {

    const params = useParams()
    const endpoint = `/anime/${params?.id}`

    console.log("endpoint: ",JSON.stringify(endpoint))
    console.log("params",params)

    const {data,isLoading,error} = useApi(endpoint)

    const anime= data?.data

    console.log("anime data :", anime);
    
  return (
    <div className='mt-[60px]'>

    </div>
  )
}

export default AnimeInfo
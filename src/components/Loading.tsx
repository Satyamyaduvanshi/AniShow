import React from 'react'
import { Ring } from 'ldrs/react'
import 'ldrs/react/Ring.css'

const Loading = () => { 
  return (
  <Ring
    size="40"
    stroke="5"
    bgOpacity="0"
    speed="2"
    color="black" 
  />
  )
}

export default Loading
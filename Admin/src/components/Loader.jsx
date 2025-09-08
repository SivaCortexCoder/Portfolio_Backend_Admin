import React from 'react'
import { OrbitProgress } from 'react-loading-indicators'

const Loader = () => {
  return (
    <div>
        <div>
        <OrbitProgress variant="split-disc" color="#494949" size="medium" text="" textColor="" />
        <h1 className='text-md font-bold'>Loading....</h1>
    </div>
    </div>
  )
}

export default Loader
import React from 'react'

import loader from '@/assets/loader.gif'
import Image from 'next/image'

const LoadingPage = () => {
  return (
    <div className='flex-center h-[100vh] w-[100vw]'>
        <Image 
            src={loader}
            height={150}
            width={150}
            alt='loading...'
        />

    </div>
  )
}

export default LoadingPage
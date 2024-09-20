import React from 'react'

export const Spinner = () => {
  return (
    <div  className='flex flex-col items-center'>
           <div className='custom-loader mt-10 '></div>
           <p>Loading...</p>
    </div>
 
  )
}

export default Spinner;
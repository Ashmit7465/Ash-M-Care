import React from 'react'

const Error = ({errMessage}) => {
  return (
    <div className='flex items-center justify-center w-full h-full'>
      <h3 className='text-headingClr text-[20px] leading-[30px] font-semibold'>{errMessage}  Please Refresh the page once</h3>
    </div>
  )
}

export default Error
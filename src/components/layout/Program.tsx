import Image from 'next/image'
import React, { FC } from 'react'

const Program: FC<{ img: any, course: string }> = ({ img, course }) => {
  return (
    <div className='flex space-y-5 items-center shadow hover:shadow-lg'>
      <div className='px-2'>
        <Image src={img} alt='a logo'/>
      </div>
      <div className='px-3'>
        <p className='text-md sm text-teal-700'>Specialized Program</p>
        <h4 className='mb-2 font-semibold text-sm  text-slate-600'>{course}</h4>

      </div>
    </div>
  )
}

export default Program

import React, { FC } from 'react'

const Box:FC<{ quarter:string, desc:string}> = ({quarter, desc}) => {
  return (
    <div>
      <div className='border border-gray-300 rounded-lg space-x-4'>
            <h4 className='text-teal-700 font-semibold text-lg p-2'>Quarter {quarter}</h4>
            <p className='mt-3 text-md sm:text-lg text-slate-600 p-2'>{desc}</p>
        </div>
    </div>
  )
}

export default Box
 
import Wrapper from '@/shared/Wrapper'
import Image from 'next/image'
import React from 'react'
import business from '@/assets/images/business.png';

const Outcome = () => {
  return (
    <section>
        <Wrapper>
            <div className='flex mt-32 mb-20'>
                {/* picturediv */}
                <div>
                    <Image src={business} alt='business'/>
                </div>
                {/* rightside */}
                <div className='max-w-screen-sm px-8'>
                    <h2 className='text-3xl sm:text-4xl font-medium'>The Outcome for Participants of the Program</h2>
                    <p className='text-md sm:text-lg text-slate-600 mt-4'>As a graduate of this program, you will own valuable products such as Full-Stack App Templates, AR and VR Experiences, and APIs that are marketed globally by the Panaverse DAO. You will also have the opportunity to offer your services at a rate of $50 per hour, providing a path to financial stability while contributing to the growth of Pakistan's software exports.</p>
                <div className='flex'></div>
                </div>
            </div>
        </Wrapper>
    </section>
  )
}

export default Outcome

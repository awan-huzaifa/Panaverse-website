import Box from '@/components/layout/Box'
import Button from '@/shared/Button'
import Wrapper from '@/shared/Wrapper'
import React from 'react'

const CoreTracks = () => {
  return (
    <section className='mt-10 lg:mt-28'>
      <Wrapper>
        <div className='max-w-screen-sm'>
          <h4 className='text-teal-700 font-semibold text-lg'>Program of Studies</h4>
          <h2 className='text-3xl sm:text-4xl font-medium'>Core Courses <br></br>(Common in all Specialization):</h2>
          <p className='mt-6 text-md sm:text-lg text-slate-600'>Every participant of the program will start by completing the following three core courses:</p>
          <div className='mt-4'><Button text={"Learn More"}/></div>
        </div>

        {/* boxes */}
        {/*Box*/}
        <div className='max-w-screen-lg flex flex-col md:flex-row mt-16 space-x-4 '>
          <Box quarter='I' desc='CS-101: Object-Oriented Programming using TypeScript'/>
          <Box quarter='II' desc='W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform'/>
          <Box quarter='III' desc='$-101: Dollar Making Bootcamp - Full-Stack Template and API Product Development'/>
        </div>
        
      </Wrapper>
      </section>
  )
}

export default CoreTracks

import Wrapper from '@/shared/Wrapper'
import Image from 'next/image'
import React from 'react'
import hero from "@/assets/images/hero.png"
import Button from '@/shared/Button'

const Hero = () => {
  return (
    <section>
    <Wrapper>
        <div className='flex flex-col md:flex-row items-center'>
            {/* leftside */}
            <div className='flex-1'>
                <h4 className='text-teal-700 font-semibold text-lg'>Presidential Initiative for Artificial Intelligence and Computing (PIAIC)</h4>
                <h1 className='text-4xl sm:text-5xl font-bold'>Certified Web 3.0 and Metaverse Developer</h1>
                <p className='mt-6 text-md sm:text-lg text-slate-600'>A One and Quarter Years Panaverse DAO Earn as you Learn Program Getting Ready for the Next Generation of the Internet</p>
                <p className='mt-6 text-md sm:text-lg text-slate-600'>Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI), Cloud, Edge, Ambient Computing/IoT, Network Automation, and Bioinformatics Technologies</p>
                <div className='mt-5' >
                  <Button text={"Learn More"}/>
                  
                </div>
            </div>
            {/* rightside */}
            <div className='flex-1'>
            <Image src={hero} alt="hero pic"/>
            </div>
        </div>
    </Wrapper>
    </section>
  )
}

export default Hero

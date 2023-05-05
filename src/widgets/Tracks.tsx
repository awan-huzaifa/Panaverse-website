import Program from '@/components/layout/Program';
import Wrapper from '@/shared/Wrapper'
import React from 'react'
import blockchain from '@/assets/images/blockchain.png';
import ai from '@/assets/images/ai.png';



const Tracks = () => {
    const learn = "Learn More>";
    return (
        <section className='mt-10 lg:mt-28'>
            <Wrapper>
                <div className='max-w-screen-sm'>
                    <h2 className='text-3xl sm:text-4xl font-medium'>Specialized Tracks:</h2>
                    <p className='mt-6 text-md sm:text-lg text-slate-600'>After completing the first three quarters the participants will select one or more specializations consisting of two courses each: </p>
                </div>

                <div className='flex items-center' >
                    <div className='border border-gray-300 rounded-lg mt-6 max-w-screen-sm flex-3'>
                        <h4 className='text-teal-700 font-semibold text-lg px-3 pt-6'>Specialized Program</h4>
                        <h2 className='text-3xl mt-3 sm:text-4xl font-medium px-3'>Web 3.0 (Blockchain) and Metaverse Specialization</h2>
                        <p className='mt-6 text-md sm:text-lg text-slate-600 px-3'>This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet by specializing in building worlds that merge the best of cutting-edge decentralized distributed blockchains with 3D metaverse client experiences.
                        </p>
                        <h4 className='text-decoration: underline text-teal-700 font-semibold text-lg px-3'>{learn}</h4>

                        <div className='flex mt-16 mb-16'>
                            <div>
                                <h4 className='font-semibold text-lg p-2'>Quarter IV</h4>
                                <p className='mt-6 text-md sm:text-lg text-slate-600 px-3'>W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform</p>
                            </div>

                            <div>
                                <h4 className='font-semibold text-lg p-2'>Quarter V</h4>
                                <p className='mt-6 text-md sm:text-lg text-slate-600 px-3'>W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform</p>
                            </div>
                        </div> 
                    </div>



                    {/* flex-col */}
                    <div className='flex flex-col px-3 space-y-4 flex-1'>
                     <Program img={blockchain} course='Web 3.0 (Blockchain) and Metaverse Specialization'/>
                     <Program img={blockchain} course='Artificial Intelligence and Deep Learning Specialization'/>
                     <Program img={blockchain} course='Cloud-Native Computing Specialization'/>
                     <Program img={ai} course='Ambient Computing and IoT Specialization'/>
                     
                    </div>
                </div>

            </Wrapper>
        </section>
    )
}

export default Tracks

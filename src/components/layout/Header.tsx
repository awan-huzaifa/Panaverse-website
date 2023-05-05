import Wrapper from '@/shared/Wrapper'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from "/public/panaverse-logo.png"
const Header = () => {
  return (
    <Wrapper>
    <header className="bg-white flex justify-between py-4 sticky top-0 items-center">
        {/*logo*/}
        <div>
        <Image src={logo} alt='dao logo'/>
        </div>
        {/*navbar*/}
        <ul className='flex space-x-8 font-medium'>
            <li><Link href={"/"}>Home</Link></li>
            <li><Link href={"/courses"}>Courses</Link></li>
        </ul>
    </header>
    </Wrapper>
  )
}

export default Header

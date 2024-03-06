import React from 'react'
import Navbar from '../Navbar/Navbar'
import Image from 'next/image'
import Link from 'next/link'

const Breadcrumb = ({title }) => {
  return (
    <div className='navbar-breadcrumb'>
      <Navbar/>
      <div className='breadcrumb container-layout'>
        <h2 className='title text-[#101A29] lg:text-[40px] font-semibold leading-[51px] lg:mb-5'>{title}</h2>
        <div className=''>
          <h3 className='flex gap-3'>
            <Link href={"/"}><span>Home</span></Link>
            <Image
              height={16}
              width={10}
              src="/arrow.svg"
              alt=''
            />
            <span className='text-[#20B15A]'>{title}</span>
          </h3>
        </div>
      </div>
    </div>
  )
}

export default Breadcrumb

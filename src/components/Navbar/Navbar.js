import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <header className='relative top-[15px]'>
        <div className='py-[5px]'>
            <div className='h-20 flex justify-between items-center'>
                <div className='logo'>
                    <h2 className='text-xl font-bold'><Link href="/">Design<span className='text-[#F6551A]'>AGENCY</span></Link></h2>
                </div>
                <div>
                    <ul className='flex justify-between gap-[30px]'>
                        <li className='flex gap-[10px] justify-center p-[10px] leading-6 text-base font-medium'>
                            <Link href="/">Home</Link>
                        </li>
                        <li className='flex gap-[10px] justify-center p-[10px] leading-6 text-base font-medium'>
                            <Link href="/team">Team</Link>
                        </li>
                        <li className='flex gap-[10px] justify-center p-[10px] leading-6 text-base font-medium'>
                            <Link href="/service">Service</Link>
                        </li>
                        <li className='flex gap-[10px] justify-center p-[10px] leading-6 text-base font-medium'>
                            <Link href="/projects">Projects</Link>
                        </li>
                        <li className='flex gap-[10px] justify-center p-[10px] leading-6 text-base font-medium'>
                            <Link href="/testimonials">Testimonials</Link>
                        </li>
                        <li className='w-[93px] flex gap-[10px] justify-center p-[10px] leading-6 border-[1px] rounded-[10px] border-[#20B15A] text-base font-medium'>
                            <Link href="/login">Login</Link>
                        </li>
                        <li className='w-[105px] flex gap-[10px] justify-center p-[10px] leading-6 rounded-[10px] bg-[#20B15A] text-base text-white font-medium'>
                            <Link href="/register">Register</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Navbar
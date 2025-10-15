import { ArrowBigDownDashIcon, ChevronDown, Menu, Search } from 'lucide-react'
import React from 'react'

function Navbar() {
  return (
    <div className='w-full h-20 py-3 bg-pink-100 z-50  px-12 fixed flex justify-between items-center'>
        <img src="/images/logo.png" className='h-full' alt="" />
        <ul className='flex justify-center text-white font-medium items-center gap-10 text-lg'>
                <a className='hover:text-[#D83054]' href="/">Home</a>
                <a className='hover:text-[#D83054]' href="/About">About Us</a>
                <li className='reletev group'><a className='hover:text-[#D83054] flex items-center' href="#" >Pages <ChevronDown size={20}/></a>
                <ul className='absolute group-hover:flex transition-all duration-700 hidden mt-0 bg-pink-100 text-black py-5 w-48 z-50 flex-col'>
                    <li className='py-2 px-3 hover:bg-pink-50 w-full'><a href="/Protfolio">Protfolio</a></li>
                    <li className='py-2 px-3 hover:bg-pink-50 w-full'><a href="/Team">Taem</a></li>
                    <li className='py-2 px-3 hover:bg-pink-50 w-full'><a href="/Priceng">Priceng</a></li>
                    <li className='py-2 px-3 hover:bg-pink-50 w-full'><a href="/Faq">FAQ</a></li>
                    <li className='py-2 px-3 hover:bg-pink-50 w-full'><a href="NotFound">404 pages</a></li>
                </ul>
                </li>
                <li className='reletev group'><a className='hover:text-[#D83054] flex items-center' href="">News<ChevronDown size={20}/></a>
                 <ul className='absolute z-50 group-hover:flex transition-all duration-700 hidden mt-0 bg-pink-100 text-black py-5 w-48  flex-col'>
                    <li className='py-2 px-3 hover:bg-pink-50 w-full'><a href="/News">News</a></li>
                    <li className='py-2 px-3 hover:bg-pink-50 w-full'><a href="/SengelNews">Singel News</a></li>
                </ul>
                </li>
                <a className='hover:text-[#D83054]' href="/Contact">Contact</a>
        </ul>
        <div className='flex justify-center items-center gap-5'>
            <Search className='text-white'/>
            <Menu className='text-white' />
        </div>
    </div>
  )
}

export default Navbar
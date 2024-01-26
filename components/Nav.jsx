"use client"
import React, { useState } from 'react'
import '../app/globalS.css'
import Image from 'next/image'
import { GiHamburgerMenu } from 'react-icons/gi'
import { AiOutlineClose } from 'react-icons/ai'
import images from '@/constants/images';
import { navLinks } from '@/constants'

const Nav = () => {

    const [toggleMenu, seToggleMenu] = useState(false);

    return (
        <header className='padding-x py-8 absolute z-10 w-full'>
            <nav className='px-5 flex justify-between items-center max-container'>
                <div className='header_logo'>
                    <Image
                        src={images.logo}
                        alt="Nft-logo"
                        style={{
                            width: '50px',
                            height: '50px',
                        }}
                    />
                </div>
                <ul className='flex flex-1 items-center header_ul justify-center gap-16 max-lg:hidden'>
                    {navLinks.map((item) => (
                        <li key={item.label}>
                            <a href={item.href}>
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
                <div>
                    <div className='hidden max-lg:block pr-5'>
                        {toggleMenu
                            ? <AiOutlineClose color='gray' fontSize={24} onClick={() => { seToggleMenu(false) }} />
                            : <GiHamburgerMenu color='gray' fontSize={24} onClick={() => { seToggleMenu(true) }} />
                        }
                        {toggleMenu && (
                            <div
                                className='scale-up-center flex justify-center items-center flex-col 
                                    text-center p-1 absolute top-[60px] right-0 mt-4 min-w-[170px] rounded-lg
                                     bg-black text-white cursor-pointer mr-9 font-quicksand text-[17px]'>
                                <ul className='gap-6'>
                                    <li className='mb-6 mt-4'><a href="#home">Home</a></li>
                                    <li className='mb-6'><a href="#about">About</a></li>
                                    <li className='mb-6'><a href="#products">Products</a></li>
                                    <li className='mb-6'><a href="#contact">Contact</a></li>
                                </ul>
                            </div>
                        )}
                    </div>
                    <div className='flex items-center max-lg:hidden'>
                        <button className='header_but'>Contact us</button>
                    </div>
                </div>

            </nav>
        </header>
    )
}

export default Nav
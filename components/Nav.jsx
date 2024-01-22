"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import { GiHamburgerMenu } from 'react-icons/gi'
import '../app/globalS.css'
import images from '@/constants/images'

const Nav = () => {

    const [toggleMenu, seToggleMenu] = useState(false);

    return (
        <header className='padding-x py-8 absolute z-10 w-full'>
            <nav className='px-24 flex justify-between items-center max-container'>
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
                <ul className='flex items-center header_ul justify-center gap-16 max-lg:hidden'>
                    <li className='active font-bespoke'>Marketplace</li>
                    <li>Artists</li>
                    <li>Community</li>
                    <li>Collections</li>
                </ul>
                <div className='flex items-center'>
                    <button className='header_but'>Contact us</button>
                </div>

            </nav>
        </header>
    )
}

export default Nav
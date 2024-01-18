import React from 'react'
import '../app/globalS.css'
import images from '@/constants/images'

const Nav = () => {
    return (
        <header className='p-5'>
            <nav className='px-24 flex flex-1 justify-between'>
                <div className='header_logo'>
                    <img src={images.logo} alt="logo" />
                </div>
                <ul className='flex justify-between'>
                    <li>Marketplace</li>
                    <li>Artists</li>
                    <li>Community</li>
                    <li>Collections</li>
                </ul>
            </nav>
        </header>
    )
}

export default Nav
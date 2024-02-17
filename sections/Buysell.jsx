"use client"
import React from 'react'
import Button from '@/components/Button'
import Buttonsec from '@/components/Button-sec'
import Image from 'next/image'
import images from '@/constants/images'

const Buysell = () => {
    return (
        <section className='buysell_sec w-full flex max-lg:flex-col flex-row  justify-between items-center gap-10 max-container' id='hero'>
            <div className='relative flex flex-col justify-center items-start max-xl:padding-x buysell_lef_sec'>
                <h1 className='text-8xl buysell_sec_h1'>
                    Create and Sell <br />
                    Your <span className='text'>
                        Best NFTs
                    </span>
                </h1>
                <p className='mt-4'>
                    Start exploring the world of digital art and NFTs today <br />
                    and take control of your digital assets with confidence!
                </p>
                <div className='flex mt-5 mb-10 hero_button_sec'>
                    <Button label="Create Now" />
                    <Buttonsec label="Learn More" />
                </div>
            </div>
            <div className='flex justify-center items-center max-xl:padding-x buysell_right_sec'>
                <Image
                    src={images.buysell}
                    alt='buysell'
                    className='banner_img2'
                />
            </div>
        </section>
    )
}

export default Buysell
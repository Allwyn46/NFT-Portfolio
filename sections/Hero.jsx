"use client"
import React from 'react'
import '../app/globals.css'
import '../app/responsive.css'
import Button from '@/components/Button'
import images from '@/constants/images'
import ButtonSec from '@/components/Button-sec'
import { statistics } from '@/constants'

const Hero = () => {
  return (
    <section className='hero_sec w-full flex max-xl:flex-row flex-col justify-center gap-10 max-container' id='hero'>
      <div className='relative w-2/5 flex flex-col justify-center items-start max-xl:padding-x  hero_sec_lef'>
        <h1 className='text-8xl hero_sec_h1 font-bespoke'>
          
          Discover and <br />
          Collect The Best <br /> NFTs <span className='text'>
            Digital Art.
          </span>

        </h1>
        <p className='font-supreme mt-4 text-sm'>
          Get started with the easiest and most secure platform to buy and trade digital ART and NFT’s. Start exploring the world of digital art and NFTs today and take control of your digital assets with confidence!
        </p>
        <div className='flex mt-5'>
          <Button label="Explore Now" />
          <ButtonSec label="Learn More" />
        </div>
      </div>
    </section>
  )
}

export default Hero
"use client"
import React from 'react'
import '../app/globals.css'
import '../app/responsive.css'
import Image from 'next/image'
import Button from '@/components/Button'
import images from '@/constants/images'
import ButtonSec from '@/components/Button-sec'
import { statistics } from '@/constants'

const Hero = () => {
  return (
    <section className='hero_sec w-full flex max-lg:flex-col flex-row  justify-between gap-10 max-container' id='hero'>

      {/* LEFT sECTION */}

      <div className='relative w-2/5 flex flex-col justify-center items-start max-xl:padding-x hero_sec_lef'>
        <h1 className='text-8xl hero_sec_h1 font-bespoke'>

          Discover and <br />
          Collect The Best <br /> NFTs <span className='text'>
            Digital Art.
          </span>

        </h1>
        <p className='font-supreme mt-4 text-sm'>
          Get started with the easiest and most secure platform to buy and trade digital ART and NFT’s. Start exploring the world of digital art and NFTs today and take control of your digital assets with confidence!
        </p>
        <div className='flex mt-5 mb-10 hero_button_sec'>
          <Button label="Explore Now" />
          <ButtonSec label="Learn More" />
        </div>
        <div className='stat'>
          <ul className='flex items-center justify-around gap-16 mt-5 stat_ul'>
            {statistics.map((item) => (
              <li key={item.label}>
                <h1 className='stat_h1'>
                  {item.value}
                </h1>
                <h6 className='stat_h6'>{item.label}</h6>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* RIGHT SECTION */}

      <div className='flex flex-col justify-center items-start max-xl:padding-x pt-28 hero_sec_right'>
        <div className='cus_right_img_sec relative'>
          <Image
            src={images.herob}
            alt='hero_banner'
          />
          <Image
            src={images.rounded}
            alt='deco'
            className='deco_img'
          />
          <Image
            src={images.counter}
            alt='deco'
            className='counter_img'
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
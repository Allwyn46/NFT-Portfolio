"use client"
import React from 'react'
import Button from '@/components/Button'
import AbtCard from '@/components/AbtCard'
import images from '@/constants/images'

const Aboutus = () => {
    return (
        <section className='about_sec w-full flex flex-col justify-between gap-10 max-container' id='about'>
            <div className='relative w-full flex flex-row justify-between items-start max-xl:padding-x about_sec_lef'>
                <h1 className='text-8xl about_sec_h1'>
                    <span>Amazing</span> and Super <br />
                    Unique Art of This <span>Week</span>
                </h1>
                <Button label="See All" />
            </div>
            <div>
                <AbtCard
                    label="Cyberpunk Cocomo"
                    imgurl={images.card1}
                />
            </div>
        </section>
    )
}

export default Aboutus
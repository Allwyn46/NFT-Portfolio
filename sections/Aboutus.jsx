"use client"
import React from 'react'
import Button from '@/components/Button'

const Aboutus = () => {
    return (
        <section className='about_sec w-full flex max-lg:flex-col flex-row  justify-between gap-10 max-container' id='hero'>
            <div className='relative w-full flex flex-row justify-between items-start max-xl:padding-x hero_sec_lef'>
                <h1 className='text-8xl about_sec_h1'>
                    <span>Amazing</span> and Super <br />
                    Unique Art of This <span>Week</span>
                </h1>
                {/* <Button label="See All" /> */}
            </div>
        </section>
    )
}

export default Aboutus
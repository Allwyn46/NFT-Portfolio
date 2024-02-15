"use client"
import React from 'react'
import '../app/globals.css'
import '../app/responsive.css'
import Button from '@/components/Button'
import AbtCard from '@/components/AbtCard'
import images from '@/constants/images'

const Aboutus = () => {
    const deadline = "December, 31, 2024";
    const deadline1 = "March, 27, 2024";
    const deadline2 = "June, 21, 2024";
    const deadline3 = "August, 26, 2024";
    return (
        <section className='about_sec w-full flex flex-col gap-10 max-container' id='about'>
            <div className='relative w-full flex flex-row justify-between items-start max-xl:padding-x about_sec_lef'>
                <h1 className='text-8xl about_sec_h1'>
                    <span>Amazing</span> and Super <br />
                    Unique Art of This <span>Week</span>
                </h1>
                <Button label="See All" />
            </div>
            <div className='abt_card_sec'>
                <AbtCard
                    label="Cyberpunk Cocomo"
                    imgurl={images.card1}
                    deadline={deadline}
                />
                <AbtCard
                    label="Charge, Qi tiao yu"
                    imgurl={images.card2}
                    deadline={deadline1}
                />
                <AbtCard
                    label="Sugeon, Josh Rife"
                    imgurl={images.card3}
                    deadline={deadline2}
                />
                <AbtCard
                    label="Sugeon, Josh Rife"
                    imgurl={images.card4}
                    deadline={deadline3}
                />
            </div>

            <div>

            </div>
        </section>
    )
}

export default Aboutus
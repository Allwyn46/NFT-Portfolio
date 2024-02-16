"use client"
import React from 'react'
import Image from 'next/image'
import Counter from './Counter'

const AbtCard = ({ label, imgurl, deadline }) => {

    return (
        <div className='abtcard'>
            <Image
                src={imgurl}
                alt='card1'
                height={300}
                width={300}
            />
            <div className='flex justify-between items-center mt-5'>
                <h3 className='text-xl font-bold'>
                    {label}
                </h3>
                <p className='text-xs'>
                    490 ETH
                </p>
            </div>
            <div className='w-full flex justify-between items-center abt_card_bottom gap-2 mt-4'>
                <div className='count_out'>
                    <Counter
                        deadline={deadline}
                    />
                </div>
                <div className='but_out'>
                    <p className='but_in'>
                        place a bid
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AbtCard
"use client"
import React from 'react'
import Image from 'next/image'
import Button from './Button'

const AbtCard = ({ label, imgurl }) => {
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
            <div className='w-full flex justify-center items-center'>
                <Button
                    label="place A Bid"
                />
            </div>
        </div>
    )
}

export default AbtCard
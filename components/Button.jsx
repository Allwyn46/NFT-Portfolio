import React from 'react'
import Image from 'next/image'


const Button = ({ label, iconUrl }) => {
    return (
        <button className='flex justify-center items-center gap-2 border font-jose text-lg leading-none w-[30px] mt-3 button_com'>
            {label}
            {/* <Image
                src={iconUrl}
                alt={label}
            /> */}
        </button>
    )
}

export default Button
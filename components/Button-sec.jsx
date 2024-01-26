import React from 'react'

const Buttonsec = ({label,iconUrl}) => {
    return (
        <button className='flex justify-center items-center gap-2 border font-jose text-lg leading-none w-2/5 mt-3 button_com_sec'>
            {label}
            {/* <Image
                src={iconUrl}
                alt={label}
            /> */}
        </button>
    )
}

export default Buttonsec
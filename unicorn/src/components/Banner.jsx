import React from 'react'

export default function Banner({ tableNumber }) {
    return (<div className='bg-banner w-full h-[240px] object-cover relative'>
        <p className="absolute flex flex-col items-start text-white bottom-2 leading-[26px] left-5 font-['Racing']">
            <span className='text-[36px]'>SANDZ</span>
            <span className='text-[11px]'>Soup made with simmered beef</span>
        </p>
        {tableNumber}
    </div>)
}Banner
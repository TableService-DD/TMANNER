import React from 'react'
import { useParams } from 'react-router-dom'

export default function Order() {
    const { tableNumber } = useParams();
    return (
        <div>
            <img
                className='h-[246px] w-full object-cover'
                src="../../images/Banner.png" alt="" />
            <h1 className="font-['Racing']">SANDZ</h1>
            {tableNumber}
        </div>
    )
}

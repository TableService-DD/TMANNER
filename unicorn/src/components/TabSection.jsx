import React, { useEffect, useState } from 'react'
export default function TabSection({ tabs, active, setActive }) {
    const activeTab = (index) => {
        setActive(index);
    }
    return (
        <section className='grid grid-cols-4 px-4'>
            {tabs.map((tab, index) => {
                return <button
                    key={tab}
                    onClick={() => activeTab(index)}
                    className={`font-bold py-1 px-[6px] ${index === active ? 'border-b-[3px] text-primary' : 'text-textGray'} border-primary 
                    `}
                >{tab}</button>
                // </Link>
            })}
        </section>
    )
}

import React, { useEffect, useState } from 'react'
import { Link, animateScroll as scroll } from "react-scroll";
export default function TabSection({ tabs, active, setActive }) {
    const activeTab = (index) => {
        setActive(index);
    }
    return (
        <section className='grid grid-cols-4 px-4'>
            {tabs.map((tab, index) => {
                return <button
                    onClick={() => activeTab(index)}
                    className={`font-bold py-1 px-[6px] text-textGray ${index === active && 'border-b-[3px] text-primary'} border-primary`}
                >{tab}</button>
                // </Link>
            })}
        </section>
    )
}

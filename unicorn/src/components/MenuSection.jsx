import React from 'react'

export default function MenuSection({ menuTitle, menuItems }) {
    return (
        <section className='flex flex-col bg-menuSection px-5'>
            <h1 className='text-left py-2 font-bold'>{menuTitle}</h1>
            <div className='grid grid-cols-3 '>
                {menuItems.map((item, index) =>
                (<div key={index} className=''>
                    <img className='w-[110px] h-[110px] rounded-xl overflow-hidden bg-white p-4 '
                        src={item.image} alt={item.name} />
                    <p className='text-[12.5px] relative font-bold'>{item.name}
                        {item.isBest ? <span className='text-[8.5px] text-primary absolute -top-3 left-1 -rotate-12'>Best</span> : null}
                    </p>
                    <p className='text-[12.5px] font-bold'>₩{item.price}</p>
                </div>)
                )}
            </div>
        </section>
    )
}

import React, { useEffect } from 'react'

export default function MenuSection({ menuTitle, menuItems, index, active }) {

    return (
        <section id={menuTitle} className='flex flex-col bg-menuSection px-5'>
            <h1
                className='text-left py-2 font-bold'>
                {menuTitle}
            </h1>
            <div
                className='grid grid-cols-3 '>
                {menuItems.map((item, index) => {
                    const hotImages = [];
                    if (item.hotLevel) {
                        for (let i = 0; i < item.hotLevel; i++) {
                            hotImages.push(<img
                                className='w-[13px] h-[13px] object-contain'
                                key={i} src="/images/menuImage/hot.png" alt="Hot" />);
                        }
                    }

                    return <div key={item.name} className=''>
                        <img
                            className='w-[110px] h-[110px] rounded-xl overflow-hidden bg-white p-4 '
                            src={item.image}
                            alt={item.name} />
                        <p
                            className='text-menuTitle relative font-bold'>
                            {item.name}
                            {item.isBest
                                ? <span className='text-[10.5px] font-bold text-primary absolute -top-3 left-1 -rotate-12'>Best</span>
                                : null}

                        </p>
                        <p
                            className='text-price font-bold flex'>
                            ₩{item.price}
                        </p>
                    </div>
                }
                )

                }
            </div>
        </section>
    )
}

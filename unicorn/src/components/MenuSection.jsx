import React from 'react'

export default function MenuSection({ menuTitle, menuItems }) {
    return (
        <section>
            <h1>{menuTitle}</h1>
            <div className='grid grid-cols-3 px-5'>
                {menuItems.map((item, index) =>
                (<div key={index}>
                    <img src={item.image} alt={item.name} />
                    <h2>{item.name}</h2>
                    <p>{item.price}</p>
                </div>)
                )}
            </div>
        </section>
    )
}

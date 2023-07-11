import React from 'react'
import { useCartContext } from '../Context/context'

export default function Receipt() {
    const { cart } = useCartContext();

    return (
        <div>
            {cart.map((item) => {
                return (
                    <div key={item.name}>
                        <p>{item.name}</p>
                        <p>{item.quantity}</p>
                    </div>
                )
            })
            }

        </div>
    )
}

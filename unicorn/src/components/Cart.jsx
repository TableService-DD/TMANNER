import React from 'react'
import { PiShoppingCartSimpleFill } from 'react-icons/pi';
import MultiCarousel from './MultiCarousel';
import { useCartContext } from '../Context/context';

export default function Cart() {
    const { cart, setCart } = useCartContext();
    return (
        <section
            className='z-0 fixed flex bottom-[25px] w-[85%] h-[100px] right-10
        '>
            <div className='relative flex items-center p-1 w-full'>
                <div className="grid grid-cols-4 gap-2 w-full h-[67px] rounded-lg bg-gradient-to-r from-orange-200 to-primary pr-16 overflow-y-auto whitespace-nowrap">
                    {/* <MultiCarousel> */}
                    {cart.map((item) => {
                        return (
                            <div key={item.name}
                                className='w-[58px] h-[58px] bg-white rounded-xl'>
                                <img
                                    className='w-[58px] h-[58px] rounded-xl object-cover'
                                    src={item.image}
                                    alt={item.name} />
                            </div>
                        )
                    }
                    )}
                    {/* </MultiCarousel> */}
                </div>
                <div
                    className='absolute -right-5 bottom-12
                    transform translate-y-1/2 
                     w-[85px] h-[85px] z-99 rounded-full 
                        flex justify-center items-center p-2 text-5xl bg-primary text-white'>
                    <PiShoppingCartSimpleFill className='' />
                </div>
            </div>
        </section>
    )
}

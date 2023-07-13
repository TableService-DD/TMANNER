import React, { useEffect } from 'react'
import { useCartContext } from '../Context/context';
import { BsFillPlusCircleFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

export default function MenuSection({ menuTitle, menuItems, index, active }) {
    const { cart, setCart } = useCartContext();
    const navigate = useNavigate();
    
    const addToCart = (item) => {
        const itemExists = cart.find((cartItem) => cartItem.name === item.name);
        if (itemExists) {
            // 중복 항목이 있는 경우 수량 증가
            const updatedCart = cart.map((cartItem) =>
                cartItem.name === item.name
                    ? { ...cartItem, quantity: cartItem.quantity + 1 }
                    : cartItem
            );
            setCart(updatedCart);
        } else {
            // 중복 항목이 없는 경우 cart 배열에 항목 추가
            setCart([...cart, { ...item, quantity: 1 }]);
        }
    };
        console.log(menuTitle, menuItems)
    return (
        <section id={menuTitle} className='flex flex-col bg-menuSection px-5'>
            <h1
                className='text-left py-2 font-bold'>
                {menuTitle}
            </h1>
            <div
                className='grid grid-cols-3 relative gap-2 '>
                {menuItems.map((item, index) => {
                    const hotImages = [];
                    //맵기
                    if (item.hotLevel) {
                        for (let i = 0; i < item.hotLevel; i++) {
                            hotImages.push(<img
                                className='w-[13px] h-[13px] object-contain'
                                key={i} src="/images/menuImage/hot.png" alt="Hot" />);
                        }
                    }
                    //menuItems.map() 함수 내부에서 각 아이템 반복 반환
                    return (<div key={item.name} className='relative'>
                        <img
                            className='w-[110px] h-[110px] rounded-xl overflow-hidden bg-white p-4 '
                            src={item.image}
                            alt={item.name} 
                            onClick={()=> navigate(`${menuTitle}/${item.foodId}`)}
                            />
                        <p
                            className='text-menuTitle relative font-bold'>
                            {item.name}
                            {item.isBest
                                ? <span className='text-[10.5px] font-bold text-primary absolute -top-3 left-1 -rotate-12'>Best</span>
                                : null}
                        </p>
                        <p
                            className='text-price font-bold text-center relative '>
                            ₩{item.price}
                        </p>
                        <span
                            className='flex absolute top-2'>
                            {hotImages.map((image) => image)}
                        </span>
                        <BsFillPlusCircleFill
                            onClick={() => addToCart(item)}
                            className='text-[28px] text-primary absolute -top-1 -right-1' />
                    </div>)
                }
                )

                }
            </div>
        </section>
    )
}

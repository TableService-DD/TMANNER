import React, { useEffect, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Banner from '../components/Banner';
import TabSection from '../components/TabSection';
import MenuSection from '../components/MenuSection';
import { fetchMenuData } from '../api/data';
import Cart from '../components/Cart';
import { CartContextProvider, useCartContext } from '../Context/context';

export default function Order() {
    const { tableNumber } = useParams();
    const [tabs, setTabs] = useState(["SET", "MAIN", "SIDE", "DRINK"]);
    // const [tabs, setTabs] = useState(["BURGER", "BURGER2", "SANDWICH", "DRINK"]);
    const [active, setActive] = useState(0);
    const [menu, setMenu] = useState(null);
    const { cart, setCart } = useCartContext();
    const navigate = useNavigate();
    useEffect(() => {
        async function fetchData() {
            const menuData = await fetchMenuData();
            setMenu(menuData);
        }
        fetchData();
    }, []);
    useEffect(() => {
        console.log(cart);
    }, [cart])

    
    return (
        <section className='flex flex-col'>
            <Banner tableNumber={tableNumber} />
            <TabSection tabs={tabs} active={active} setActive={setActive} />
            {
                menu &&
                Object.keys(menu).map((menuTitle, index) => {
                    return (
                        <MenuSection key={index} menuTitle={menuTitle} active={active} menuItems={menu[menuTitle]} index={index} />
                    )
                }
                )
            }
            {cart.length && <Cart />}
            {
                cart.length &&
                <button
                    onClick={() => navigate(`receipt`)}
                    className='fixed bottom-3 text-2xl font-bold w-[80%] self-center h-[40px] bg-white text-black border-2 border-primary rounded-full'>
                    주문 준비
                </button>
            }
        </section>
    )
}

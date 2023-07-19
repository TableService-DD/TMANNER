import React, { useEffect, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Banner from '../components/Banner';
import TabSection from '../components/TabSection';
import MenuSection from '../components/MenuSection';
import { CartAdd, CartList, OrderList, UpdateUser, fetchMenuData, getUserList } from '../api/data';
import Cart from '../components/Cart';
import { useCartContext } from '../Context/context';

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
    }, [menu]);

    const HandleCartList = async () => {
        const cartList = await CartList();
    }
    useEffect(() => {
        console.log(cart);
    }, [cart])

    const HandleCart = () => {
        console.log("cart", cart);
        navigate('receipt');
    }

    return (
        <section className='flex flex-col'>
            <button onClick={HandleCartList} className='p-4 bg-orange-400 text-white '>sss</button>
            <Banner tableNumber={tableNumber} />
            <TabSection tabs={tabs} active={active} setActive={setActive} />
            {
                menu &&
                Object.keys(menu).map((menuTitle, index) => {
                    return (
                        <MenuSection key={index} menuTitle={menuTitle} active={active} menuItems={menu[menuTitle]} index={index} tableNumber={tableNumber} />
                    )
                }
                )
            }
            {cart.length > 0 && (
                <>
                    <Cart />
                    <button
                        onClick={HandleCart}
                        className="fixed bottom-3 text-2xl font-bold w-[80%] self-center h-[40px] bg-white text-black border-2 border-primary rounded-full"
                    >
                        주문 준비
                    </button>
                </>
            )}
        </section>
    )
}

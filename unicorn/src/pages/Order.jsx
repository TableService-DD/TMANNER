import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Banner from '../components/Banner';
import TabSection from '../components/TabSection';
import MenuSection from '../components/MenuSection';
import { fetchMenuData } from '../api/data';
// import { deleteCart, getCartList } from '../api/cart';
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

    // const HandleDeleteCart = async (item) => {
    //     const deleteCartList = await deleteCart("aaheeaai");
    // }
    // const HandleCartList = async () => {
    //     const cartList = await getCartList();
    // }
    useEffect(() => {
        console.log(cart);
    }, [cart])

    const HandleCart = () => {
        console.log("cart", cart);
        navigate('/receipt');
    }
    return (
        <section className='flex flex-col'>
            {/* <button onClick={HandleDeleteCart} className='bg-black text-white p-2'>delete</button>
            <button onClick={HandleCartList} className='p-2 bg-orange-400 text-white '>sss</button> */}
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
                </>
            )}
        </section>
    )
}

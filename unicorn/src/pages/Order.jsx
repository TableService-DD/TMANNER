import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Banner from '../components/Banner';
import TabSection from '../components/TabSection';
import MenuSection from '../components/MenuSection';
import { fetchMenuData } from '../api/data';

export default function Order() {

    const { tableNumber } = useParams();
    const [tabs, setTabs] = useState(["SET", "MAIN", "SIDE", "DRINK"]);
    const [active, setActive] = useState(0);
    const [menu, setMenu] = useState(null);
    useEffect(() => {
        async function fetchData() {
            const menuData = await fetchMenuData();
            setMenu(menuData);
        }
        fetchData();
    }, []);
    return (
        <section className='flex flex-col'>
            <Banner tableNumber={tableNumber} />
            <TabSection tabs={tabs} active={active} setActive={setActive} />
            {
                menu &&
                Object.keys(menu).map((menuTitle, index) => {
                    return (
                        <MenuSection key={index} menuTitle={menuTitle} menuItems={menu[menuTitle]} />
                    )
                }
                )
            }
        </section>
    )
}

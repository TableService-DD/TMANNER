import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Banner from '../components/Banner';
import TabSection from '../components/TabSection';

export default function Order() {
    const { tableNumber } = useParams();
    const [tabs, setTabs] = useState(["SET", "MAIN", "SIDE", "DRINK"]);
    const [active, setActive] = useState(0);
    return (
        <section className='flex flex-col'>
            <Banner tableNumber={tableNumber} />
            <TabSection tabs={tabs} active={active} setActive={setActive} />

        </section>
    )
}



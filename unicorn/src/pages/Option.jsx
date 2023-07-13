import React, { useState, useEffect } from 'react';
import { fetchMenuData } from '../api/data';
import { useParams } from 'react-router-dom';

import Header from '../components/Header';
import FoodBanner from '../components/FoodBanner';
import MenuDescription from '../components/MenuDescription';

function Option(props) {
    const [menu, setMenu] = useState([]);
    
    //URL에서 Type과 FOOD ID 추출
    const {type, foodId} = useParams();
    console.log(type, foodId)

    //메뉴정보 추출
    useEffect(() => {
        async function fetchData() {
            const menuData = await fetchMenuData();
            setMenu(menuData); 
        }
        fetchData();
    }, []);

    
    const menuItem = menu[type] && menu[type].find(item => item.foodId.toString() === foodId);

    return (
        <div>
            <Header title={'옵션'}/>
            {
                menuItem &&
                <div>
                    <FoodBanner src={menuItem.bannerImage} alt={menuItem.name}/>
                    <MenuDescription intro = {menuItem.menu_intro} 
                    price ={menuItem.price} name={menuItem.name}>
                    </MenuDescription>
                </div>
            }
        </div>
    ); 
}

export default Option;

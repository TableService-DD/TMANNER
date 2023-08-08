import React, { useState, useEffect } from "react";
import { fetchMenuData } from "../api/data";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import FoodBanner from "../components/FoodBanner";
import MenuDescription from "../components/MenuDescription";
import AddOption from "../components/AddOption";

function Option(props) {
  const [menu, setMenu] = useState([]);

  const { tableNumber, type, foodId } = useParams();
  console.log(tableNumber, type, foodId);

  useEffect(() => {
    async function fetchData() {
      const menuData = await fetchMenuData();
      setMenu(menuData);
    }
    fetchData();
  }, []);
  const menuItem =
    menu[type] && menu[type].find((item) => item.foodId.toString() === foodId);
  return (
    <div style={{ width: 390, height: 844 }}>
      <Header title={"옵션"} tableNumber={tableNumber} />
      {menuItem && (
        <div>
          <FoodBanner src={menuItem.bannerImage} alt={menuItem.name} />
          <MenuDescription
            intro={menuItem.menu_intro}
            price={menuItem.price}
            name={menuItem.name}
            origin={menuItem.origin}
          ></MenuDescription>
          <AddOption
            addOption={menuItem.addOption}
            name={menuItem.name}
            price={menuItem.price}
            foodId={menuItem.foodId}
            image={menuItem.image}
          ></AddOption>
        </div>
      )}
    </div>
  );
}

export default Option;

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMenuData } from "../api/data";

function MenuOption() {
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
  return <div>MenuOption</div>;
}

export default MenuOption;

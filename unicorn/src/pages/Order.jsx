import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Banner from "../components/Banner";
import TabSection from "../components/TabSection";
import MenuSection from "../components/MenuSection";
import { fetchMenuData } from "../api/data";
import Cart from "../components/Cart";
import { useCartContext } from "../Context/context";
import { deleteCart, getCartList } from "../api/cart";
export default function Order() {
  const { tableNumber } = useParams();
  const [tabs, setTabs] = useState(["SET", "MAIN", "SIDE", "DRINK"]);
  const [active, setActive] = useState(0);
  const [menu, setMenu] = useState(null);
  const { cart, setCart } = useCartContext();
  useEffect(() => {
    async function fetchData() {
      const menuData = await fetchMenuData();
      setMenu(menuData);
    }
    fetchData();
  }, [menu]);

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  const getCart = () => {
    getCartList();
  };
  const cartDelete = () => {
    deleteCart("Signature");
  };

  return (
    <section className="flex flex-col">
      <Banner tableNumber={tableNumber} />
      <TabSection tabs={tabs} active={active} setActive={setActive} />
      <div className="pb-2 bg-menuSection">
        {menu &&
          Object.keys(menu).map((menuTitle, index) => {
            return (
              <MenuSection
                key={index}
                menuTitle={menuTitle}
                active={active}
                menuItems={menu[menuTitle]}
                index={index}
                tableNumber={tableNumber}
              />
            );
          })}
      </div>
      {cart.length > 0 && (
        <>
          <Cart />
        </>
      )}
    </section>
  );
}

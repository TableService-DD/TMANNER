import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TabSection from "../components/TabSection";
import MenuSection from "../components/MenuSection";
import { fetchMenuData } from "../api/data";
import Cart from "../components/Cart";
import { useCartContext } from "../Context/context";
import { deleteCart, getCartList } from "../api/cart";
export default function Order() {
  const { tableNumber } = useParams();
  const [tabs, setTabs] = useState([
    "SET",
    "MAIN",
    "PREMIUM",
    "SALAD",
    "SIDE",
    "DRINK",
    "ALCOHOL",
  ]);
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

  // useEffect(() => {
  //   console.log(cart);
  // }, [cart]);

  const getCart = () => {
    getCartList();
  };

  return (
    <section className="flex flex-col">
      <div className="px-3 py-4 flex justify-between items-center rounded-b-xl shadow-md">
        <div className="flex items-center gap-3">
          <h2 className="text-xl font-bold">BURGERS SHOP</h2>
          <span className="font-bold text-primary text-xl">
            {tableNumber}번
          </span>
        </div>
        <button className="p-2 tracking-wider bg-primary text-white font-bold rounded-md">
          빠른요청
        </button>
      </div>
      <TabSection tabs={tabs} active={active} setActive={setActive} />
      {/* divide */}
      <div className="w-full h-[2px] bg-primary" />
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

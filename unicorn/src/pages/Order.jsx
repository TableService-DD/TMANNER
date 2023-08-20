import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import TabSection from "../components/TabSection";
import MenuSection from "../components/MenuSection";
import { fetchMenuData } from "../api/data";
import Cart from "../components/Cart";
import { useCartContext } from "../Context/context";
import { getCartList } from "../api/cart";
import { getOrderList } from "../api/order";
export default function Order() {
  const { tableNumber } = useParams();
  const [orderList, setOrderList] = useState(null);
  const [modal, setModal] = useState(false);
  const [tabs, setTabs] = useState([
    "SET",
    "MAIN",
    "PREMIUM",
    "SALAD",
    "SIDE",
    "DRINK",
    "ALCOHOL",
  ]);
  useEffect(() => {
    async function getOrderReceipt() {
      const orderReceipt = await getOrderList();
      if (orderReceipt) {
        setModal(true);
      }
      setOrderList(orderReceipt);
    }
    getOrderReceipt();
  }, []);

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
      {/* HERE IS MODAL SECTION */}
      {modal && (
        <div className="fixed inset-0 z-50 flex justify-start items-start p-6">
          <div className="absolute inset-0 bg-black opacity-50" />
          {/* Modal */}
          <div className="z-10 p-4 bg-white rounded-md shadow-lg w-full max-w-lg relative">
            <h2 className="text-xl font-bold mb-4">주문 진행중이예요</h2>
            <p className="text-sm leading-4">
              맛있게 조리해 드릴게요!
              <br />
              잠시만 기다려주세요
            </p>
            <button className="absolute top-2 right-2 mt-4 p-2 tracking-wider bg-primary text-white font-bold rounded-md">
              닫기
            </button>
          </div>
        </div>
      )}
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

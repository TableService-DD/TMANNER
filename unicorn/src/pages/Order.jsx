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
  const [selectedItems, setSelectedItems] = useState([]);

  const handleItemClick = (index) => {
    if (selectedItems.includes(index)) {
      // 이미 선택된 아이템을 다시 클릭하면 선택 해제
      setSelectedItems(selectedItems.filter((i) => i !== index));
    } else {
      // 새로운 아이템 선택
      setSelectedItems([...selectedItems, index]);
    }
  };

  // 선택한 아이템 확인
  const checkSelectedItems = () => {
    console.log(selectedItems);
    // 여기서 선택된 아이템을 처리하실 수 있습니다.
  };
  const [tabs, setTabs] = useState([
    "SET",
    "MAIN",
    "PREMIUM",
    "SALAD",
    "SIDE",
    "DRINK",
    "ALCOHOL",
  ]);

  const sides = [
    {
      name: "단무지",
      image: "/images/sidedish.png",
    },
    {
      name: "물",
      image: "/images/water.png",
    },
    {
      name: "냅킨",
      image: "/images/napkin.png",
    },
  ];

  useEffect(() => {
    async function getOrderReceipt() {
      const orderReceipt = await getOrderList();
      if (orderReceipt) {
        setModal(false);
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
        <div className="fixed inset-0 z-50 flex flex-col gap-2 justify-start items-start p-6">
          <div className="absolute inset-0 bg-black opacity-50" />
          {/* Modal */}
          <div className="z-10 p-4 bg-white rounded-md shadow-lg w-full max-w-lg relative">
            <h2 className="text-xl font-bold mb-1">주문 진행중이예요</h2>
            <p className="text-sm leading-4">
              맛있게 조리해 드릴게요!
              <br />
              잠시만 기다려주세요
            </p>
            <button className="absolute top-0 right-2 mt-4 p-1 tracking-wider bg-[#E5E5E5] font-bold rounded-md flex flex-col items-center">
              <span className="text-[10px] text-gray-500">남은시간</span>
              <span className="text-md font-bold">10분</span>
            </button>
            <div id="progressbar" className="relative pt-1">
              <div className="overflow-hidden h-2 my-2 text-xs flex rounded bg-gray-200">
                <div
                  style={{ width: "70%" }}
                  className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-primary"
                ></div>
              </div>
              <div className="flex justify-between mt-1 text-xs text-gray-500">
                <span>접수중</span>
                <span>조리중</span>
                <span>조리완료</span>
              </div>
            </div>
          </div>

          <div className="z-10 p-4 bg-white rounded-md shadow-lg w-full max-w-lg relative">
            <h2 className="text-xl font-bold mb-1">빠른 요청하기</h2>
            <div className="relative flex justify-start items-center px-2 w-full rounded-xl h-full ">
              <div
                id="testbox"
                className="grid grid-cols-none grid-flow-col items-center justify-start x-auto overflow-x-auto max-w-[300px] gap-2 w-full h-auto pb-2 "
              >
                {sides.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className={`relative w-[65px] h-full flex flex-col items-center bg-white rounded-xl ${
                        selectedItems.includes(index)
                          ? "border-primary border-[3px]"
                          : "border-[3px] "
                      }`}
                      onClick={() => handleItemClick(index)}
                    >
                      <img
                        className="w-full h-[55px] rounded-xl object-contain"
                        src={item.image}
                        alt={item.name}
                      />
                      <span className="text-xs">{item.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
            <div
              onClick={() => setModal(false)}
              className="w-full rounded-full bg-white text-black px-4 py-2 "
            >
              더 주문하러 가기
            </div>
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

{
  /* <p className="absolute flex justify-center items-center top-0 right-0 bg-primary text-[12px] text-center text-white font-bold w-[16px] h-[16px] rounded-full">
                        <AiOutlinePlus />
                      </p> */
}

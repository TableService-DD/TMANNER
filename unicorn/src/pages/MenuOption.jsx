import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fetchMenuData } from "../api/data";
import {
  AiFillMinusCircle,
  AiFillPlusCircle,
  AiOutlineHome,
  AiOutlineLeft,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import useFetchMenu from "../hooks/useFetchMenu";
import { addCart, getCartList } from "../api/cart";
import { useCartContext } from "../Context/context";

const OPTIONCARD_STYLE =
  "flex flex-col border-2 rounded-xl p-5 pt-3 bg-white gap-2";

function MenuOption() {
  const { menu, loading, error } = useFetchMenu();
  const { cart, setCart } = useCartContext();
  const navigate = useNavigate();
  const [optionQuantities, setOptionQuantities] = useState({});
  const { tableNumber, type, foodId } = useParams();
  useEffect(() => {
    if (optionQuantities) {
      console.log(optionQuantities);
    }
  }, [optionQuantities]);
  const menuItem =
    menu[type] && menu[type].find((item) => item.foodId.toString() === foodId);

  const handleOptionQuantityChange = (optionName, change) => {
    setOptionQuantities((prev) => {
      const newQuantity = (prev[optionName] || 0) + change;
      if (newQuantity < 0) return { ...prev, [optionName]: 0 };
      if (newQuantity > 9) return { ...prev, [optionName]: 9 };
      return {
        ...prev,
        [optionName]: newQuantity,
      };
    });
  };
  const handleAddToCart = async () => {
    const fakeItem = {
      name: menuItem.name,
      image: menuItem.image,
      price: menuItem.price,
      quantity: 1,
      product_option: menuItem.addOption,
    };
    const item = {
      name: menuItem.name,
      price: menuItem.price,
      quantity: 1, // 기본 수량. 필요에 따라 변경할 수 있습니다.
      product_option: optionQuantities,
    };
    const success = await addCart(item, tableNumber);
    if (success) {
      console.log("성공적으로 카트에 추가됨");
      setCart((prev) => [...prev, fakeItem]);
      navigate(`/order/${tableNumber}`);
    } else {
      console.log("카트에 추가하는 데 실패함");
    }
  };

  if (loading) {
    return <div>메뉴 데이터를 불러오는 중...</div>;
  }
  if (error) {
    return <div>메뉴 데이터를 불러오는 중 에러가 발생했습니다.</div>;
  }
  if (!menuItem) return null;

  return (
    <section className="flex flex-col relative">
      <div className="flex items-center justify-between pt-5 px-5">
        <AiOutlineLeft onClick={() => navigate(-1)} size={28} />
        <div className="flex items-center gap-4">
          <AiOutlineHome size={28} />
          <AiOutlineShoppingCart size={28} />
        </div>
      </div>
      <img
        className="w-[90%] mx-auto h-48 bg-no-repeat object-contain px-4 py-2 overflow-hidden"
        src={menuItem.image}
        alt="menuImage"
      />
      <div className="px-4 flex flex-col bg-menuSection py-2 gap-1">
        <div className={OPTIONCARD_STYLE}>
          <p className="flex font-bold items-center justify-between">
            <span className="text-[32px]">{menuItem.name}</span>
            <span className="text-md">{menuItem.price}원</span>
          </p>
          <p>{menuItem.menu_intro}</p>
        </div>
        <div className={OPTIONCARD_STYLE}>
          <h1 className="font-bold text-lg">옵션 선택</h1>
          {menuItem.addOption.map((option, index) => (
            <div key={index} className="flex items-center justify-between">
              <p className="flex-[0.25]">{option.name}</p>
              <p className="flex-[0.25]">{option.price}원</p>
              <div className="flex items-center justify-between flex-[0.25]">
                <AiFillMinusCircle
                  size={28}
                  color="gray"
                  onClick={() => handleOptionQuantityChange(option.name, -1)}
                />
                <span>{optionQuantities[option.name] || 0}</span>
                <AiFillPlusCircle
                  size={28}
                  color="orange"
                  onClick={() => handleOptionQuantityChange(option.name, 1)}
                />
              </div>
            </div>
          ))}
        </div>

        <div className={OPTIONCARD_STYLE}>
          <h1 className="font-bold">원산지</h1>
          {menuItem.origin.map((origin, index) => (
            <div key={index} className="flex items-center gap-2">
              <span>{origin.name}</span>
              <span>-</span>
              <span>{origin.country}</span>
            </div>
          ))}
        </div>
        <button
          onClick={handleAddToCart}
          className="w-3/4 mx-auto bg-primary px-5 py-1 text-2xl font-bold text-white rounded-full"
        >
          주문 담기
        </button>
      </div>
    </section>
  );
}

export default MenuOption;

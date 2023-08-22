import React, { useEffect, useState } from "react";
import { deleteCart, getCartList, updateCart } from "../api/cart";
import { useNavigate, useParams } from "react-router-dom";
import HeaderTitle from "../components/UI/HeaderTitle";
import { OrderTotal } from "../components/OrderTotal";
import { OrderItem } from "../components/OrderItem";
import { useCartContext } from "../Context/context";
import { addOrder } from "../api/order";
import { storeAdd, storeList } from "../api/store";
export default function ReceiptTest() {
  const [receipt, setReceipt] = useState([]);
  const { cart, setCart } = useCartContext();
  const { tableNumber } = useParams();
  const navigate = useNavigate();
  const getCart = async () => {
    try {
      const response = await getCartList();
      console.log("response" + response);
      setReceipt(response.data.data);
      console.log(cart);
    } catch (error) {
      console.error("An error occurred while fetching the cart:", error);
    }
  };
  const checkAdd = (item) => {
    storeAdd(1, "test");
  };
  const getStore = () => {
    storeList("test");
  };
  const cartDelete = async (product_id) => {
    try {
      const data = await deleteCart(product_id);
      getCart();
    } catch (error) {
      console.error("An error occurred while deleting the cart:", error);
    }
  };

  const updateQuantity = (product_id, change) => {
    const updatedReceipt = receipt.map((item) =>
      item.product_id === product_id
        ? { ...item, product_count: Math.max(item.product_count + change, 1) }
        : item
    );
    setReceipt(updatedReceipt);

    const updatedItem = updatedReceipt.find(
      (item) => item.product_id === product_id
    );
    updateCart(updatedItem).then((success) => {
      if (!success) {
        setReceipt(receipt);
      }
    });
  };

  const handleOrder = async () => {
    try {
      await Promise.all(receipt.map((item) => addOrder(item, tableNumber)));
      console.log("모든 주문이 성공적으로 추가되었습니다.");
      // navigate(`/order/${tableNumber}`, { state: { receipt: receipt } });
    } catch (error) {
      console.error("주문 추가 중 오류 발생:", error);
    }
  };

  useEffect(() => {
    getCart();
  }, []);
  return (
    <section className="flex flex-col relative">
      {/* <button onClick={() => checkAdd()}>ssss</button>
      <button onClick={() => getStore()}>aaaa</button> */}
      <HeaderTitle title={"장바구니"} />
      <div className="bg-menuSection h-[92vh] p-6">
        <div className="p-6 bg-white shadow-sm rounded-md max-w-md mx-auto flex flex-col items-start">
          <h2 className="w-full text-start text-black text-xl font-bold border-b pb-3">
            {tableNumber}번 테이블의 장바구니
          </h2>
          <div className="flex flex-col w-full gap-1">
            {receipt.map((item, index) => (
              <OrderItem
                key={index}
                item={item}
                updateQuantity={updateQuantity}
                cartDelete={cartDelete}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 bg-white w-full pb-6 px-6 flex flex-col justify-center gap-4 rounded-t-xl">
        <OrderTotal receipt={receipt} />
        <button
          onClick={() => handleOrder()}
          className="bg-primary text-white font-bold w-full py-2 rounded-full"
        >
          최종 주문 전송
        </button>
      </div>
    </section>
  );
}

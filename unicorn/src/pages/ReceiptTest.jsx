import React, { useEffect, useState } from "react";
import { deleteCart, getCartList, updateCart } from "../api/cart";
import { useNavigate, useParams } from "react-router-dom";
import HeaderTitle from "../components/UI/HeaderTitle";
import { OrderTotal } from "../components/OrderTotal";
import { OrderItem } from "../components/OrderItem";
import { useCartContext } from "../Context/context";

export default function ReceiptTest() {
  const [receipt, setReceipt] = useState([]);
  const { cart, setCart } = useCartContext();
  const { tableNumber } = useParams();
  const navigate = useNavigate();
  const getCart = async () => {
    try {
      const data = await getCartList();
      setReceipt(data.data.data);
      console.log(cart);
    } catch (error) {
      console.error("An error occurred while fetching the cart:", error);
    }
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

  useEffect(() => {
    getCart();
  }, []);
  return (
    <section className="flex flex-col relative">
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
          onClick={() =>
            navigate(`/order/${tableNumber}`, { state: { receipt: receipt } })
          }
          className="bg-primary text-white font-bold w-full py-2 rounded-full"
        >
          최종 주문 전송
        </button>
      </div>
    </section>
  );
}

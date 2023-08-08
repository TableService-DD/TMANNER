import React, { useEffect, useState } from "react";
import { deleteCart, getCartList } from "../api/cart";
import { useParams } from "react-router-dom";
import {
  AiFillCloseCircle,
  AiOutlineMinusCircle,
  AiOutlinePlusCircle,
} from "react-icons/ai";

export default function ReceiptTest() {
  const [receipt, setReceipt] = useState([]);
  const { tableNumber } = useParams();
  console.log(tableNumber);
  const getCart = async () => {
    try {
      const data = await getCartList();
      setReceipt(data);
    } catch (error) {
      console.error("An error occurred while fetching the cart:", error);
    }
  };
  const cartDelete = async (product_id) => {
    try {
      const data = await deleteCart(product_id);
      setReceipt(data);
    } catch (error) {
      console.error("An error occurred while deleting the cart:", error);
    }
  };
  useEffect(() => {
    getCart();
  }, [receipt]);
  return (
    <section className="bg-menuSection h-[100vh] p-6">
      <div className="p-6 bg-white shadow-sm rounded-md max-w-md mx-auto flex flex-col justify-center items-start">
        <h2 className="w-full text-start text-black text-xl font-bold border-b pb-2">
          {tableNumber}번 테이블의 장바구니
        </h2>
        <div className="flex flex-col w-full gap-2">
          {receipt.map((item, index) => (
            <div
              key={index}
              className="flex w-full flex-col gap-2 py-2 border-b-2 relative z-10"
            >
              <span className="text-xl">{item.product_id}</span>
              <div className="flex justify-between items-center">
                <span className="text-md text-textGray font-bold">
                  {item.product_price.toLocaleString()}원
                </span>
                <div className="flex justify-between items-center px-2 w-1/3">
                  <AiOutlineMinusCircle className="w-5 h-5 text-textGray" />
                  <span className="text-gray-500">{item.product_count}</span>
                  <AiOutlinePlusCircle className="w-5 h-5 text-textGray" />
                </div>
              </div>
              <AiFillCloseCircle
                onClick={() => cartDelete(item.product_id)}
                className="absolute top-0 right-1 text-textGray z-20 w-5 h-5"
              />
            </div>
          ))}
        </div>
        {/* 토탈 주문 금액 */}
        {/* <div className="mt-4 pt-4 flex flex-col">
          <span className="text-xl font-bold">Total</span>
          <span className="text-lg">
            {receipt
              .reduce(
                (acc, item) => acc + item.product_count * item.product_price,
                0
              )
              .toLocaleString()}{" "}
            Won
          </span>
        </div> */}
      </div>
    </section>
  );
}

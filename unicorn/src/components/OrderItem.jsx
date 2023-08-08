import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";
import { IoIosClose } from "react-icons/io";

export function OrderItem({ item, updateQuantity, cartDelete }) {
  return (
    <div className="flex w-full flex-col gap-2 py-2 border-b-2 relative z-10">
      <span className="text-xl">{item.product_id}</span>
      <div className="flex justify-between items-center">
        <span className="text-md text-textGray font-bold">
          {item.product_price.toLocaleString()}원
        </span>
        {/* 수량 체크 */}
        <div className="flex justify-around items-center px-2 w-1/3">
          <AiOutlineMinusCircle
            onClick={() => updateQuantity(item.product_id, -1)}
            className="w-5 h-5 text-textGray"
          />
          <span className="text-textGray text-bold">{item.product_count}</span>
          <AiOutlinePlusCircle
            onClick={() => updateQuantity(item.product_id, 1)}
            className="w-5 h-5 text-textGray"
          />
        </div>
      </div>
      <IoIosClose
        onClick={() => cartDelete(item.product_id)}
        className="absolute top-1 right-2 text-primary rounded-full z-20 w-8 h-8"
      />
    </div>
  );
}

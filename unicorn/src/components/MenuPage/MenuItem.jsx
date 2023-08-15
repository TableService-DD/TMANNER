import { BsFillPlusCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

function MenuItem({ item, tableNumber, menuTitle, addToCart }) {
  const navigate = useNavigate();
  const hotImages = [];

  if (item.hotLevel) {
    for (let i = 0; i < item.hotLevel; i++) {
      hotImages.push(
        <img
          className="w-[13px] h-[13px] object-contain"
          key={i}
          src="/images/menuImage/hot.png"
          alt="Hot"
        />
      );
    }
  }

  return (
    <div className="flex items-center justify-between relative py-3">
      <div className="flex-1">
        <p className="text-menuTitle relative font-bold text-md">
          {item.isBest && (
            <span className="text-[15px] font-bold text-primary mr-2">
              Best
            </span>
          )}
          {item.name}
        </p>
        <span className="text-price font-bold text-center relative">
          {item.price}원
        </span>
        <span className="flex absolute top-2">{hotImages}</span>
      </div>
      <img
        className=" w-20 h-20 object-cover rounded-xl overflow-hidden bg-white p-2"
        src={item.image}
        alt={item.name}
        onClick={() =>
          navigate(`/order/${tableNumber}/${menuTitle}/${item.foodId}`)
        }
      />
    </div>
  );
}

export default MenuItem;

{
  /* <BsFillPlusCircleFill
  onClick={() => addToCart(item)}
  className="text-[28px] text-primary absolute -top-1 -right-1"
/>; */
}

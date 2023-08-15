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
    <div
      onClick={() =>
        navigate(`/order/${tableNumber}/${menuTitle}/${item.foodId}`)
      }
      className="flex items-center justify-between relative py-2 px-5 border-b-4 border-white"
    >
      <div className="flex flex-col gap-1 flex-[0.85] line-clamp-2">
        <p className="flex items-center relative font-bold text-md">
          {item.isBest && (
            <span className="text-md font-bold text-primary mr-2">Best</span>
          )}
          {item.name}
          <span className="flex">{hotImages}</span>
        </p>
        <p className="text-[15px] tracking-tighter">{item.menu_intro}</p>
        <span className="text-[14px] text-start text-primary">
          {item.price}원
        </span>
      </div>
      <img
        className="w-20 h-20 object-cover rounded-xl overflow-hidden bg-white p-2"
        src={item.image}
        alt={item.name}
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

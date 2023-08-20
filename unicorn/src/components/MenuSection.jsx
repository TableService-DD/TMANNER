import { useCartContext } from "../Context/context";
import { addCart } from "../api/cart";
import MenuItem from "./MenuPage/MenuItem";

export default function MenuSection({
  menuTitle,
  menuItems,
  index,
  active,
  tableNumber,
}) {
  const { cart, setCart } = useCartContext();
  const addToCart = (item) => {
    const options = item.addOption
      ? item.addOption.map((option) => ({ ...option, quantity: 0 }))
      : [];
    const itemExists = cart.find((cartItem) => {
      if (
        cartItem.name === item.name &&
        JSON.stringify(cartItem.selectedOptions) === JSON.stringify(options)
      ) {
        return true;
      }
      return false;
    });

    if (itemExists) {
      const updatedCart = cart.map((cartItem) => {
        if (
          cartItem.name === item.name &&
          JSON.stringify(cartItem.selectedOptions) === JSON.stringify(options)
        ) {
          const updatedOptions = cartItem.selectedOptions.map((option, i) => ({
            ...option,
            quantity: option.quantity + options[i].quantity,
          }));
          return {
            ...cartItem,
            quantity: cartItem.quantity + 1,
            selectedOptions: updatedOptions,
          };
        }
        return cartItem;
      });
      addCart(updatedCart);
      setCart(updatedCart);
    } else {
      const newItem = {
        name: item.name,
        price: item.price,
        image: item.image,
        quantity: 1,
        selectedOptions: options,
      };
      console.log("newItem", newItem);
      addCart(newItem);
      setCart([...cart, newItem]);
    }
  };

  return (
    <section id={menuTitle} className="flex flex-col bg-menuSection">
      <div id="cartbox" className="flex flex-col relative gap-2 border-b-2">
        {menuItems.map((item, index) => (
          <MenuItem
            key={index}
            item={item}
            tableNumber={tableNumber}
            menuTitle={menuTitle}
            addToCart={addToCart}
          />
        ))}
      </div>
    </section>
  );
}

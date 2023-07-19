import { useCartContext } from '../Context/context';
import { BsFillPlusCircleFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { addCart } from '../api/cart';
export default function MenuSection({ menuTitle, menuItems, index, active, tableNumber }) {
    const { cart, setCart } = useCartContext();
    const navigate = useNavigate();

    const addToCart = (item) => {
        const options = item.addOption ? item.addOption.map(option => ({ ...option, quantity: 0 })) : [];
        const itemExists = cart.find((cartItem) => {
            if (cartItem.name === item.name && JSON.stringify(cartItem.selectedOptions) === JSON.stringify(options)) {
                return true;
            }
            return false;
        });

        if (itemExists) {
            const updatedCart = cart.map((cartItem) => {
                if (cartItem.name === item.name && JSON.stringify(cartItem.selectedOptions) === JSON.stringify(options)) {
                    const updatedOptions = cartItem.selectedOptions.map((option, i) => ({
                        ...option,
                        quantity: option.quantity + options[i].quantity
                    }));
                    return { ...cartItem, quantity: cartItem.quantity + 1, selectedOptions: updatedOptions };
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
                selectedOptions: options
            };
            console.log("newItem", newItem);
            addCart(newItem);
            setCart([...cart, newItem]);
        }
    };



    return (
        <section id={menuTitle} className='flex flex-col bg-menuSection px-5'>
            <h1 className='text-left py-2 font-bold'>{menuTitle}</h1>
            <div id='cartbox' className='grid grid-cols-3 relative gap-2'>
                {menuItems.map((item, index) => {
                    const hotImages = [];
                    if (item.hotLevel) {
                        for (let i = 0; i < item.hotLevel; i++) {
                            hotImages.push(<img className='w-[13px] h-[13px] object-contain' key={i} src="/images/menuImage/hot.png" alt="Hot" />);
                        }
                    }
                    return (
                        <div key={index} className='relative'>
                            <img
                                className='w-[110px] h-[110px] rounded-xl overflow-hidden bg-white p-4'
                                src={item.image}
                                alt={item.name}
                                onClick={() => navigate(`/order/${tableNumber}/${menuTitle}/${item.foodId}`)}
                            />
                            <p className='text-menuTitle relative font-bold'>
                                {item.name}
                                {item.isBest && <span className='text-[10.5px] font-bold text-primary absolute -top-3 left-1 -rotate-12'>Best</span>}
                            </p>
                            <p className='text-price font-bold text-center relative'>₩{item.price}</p>
                            <span className='flex absolute top-2'>{hotImages}</span>
                            <BsFillPlusCircleFill
                                onClick={() => addToCart(item)}
                                className='text-[28px] text-primary absolute -top-1 -right-1'
                            />
                        </div>
                    );
                })}
            </div>
        </section>
    );
}

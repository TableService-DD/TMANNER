import { createContext, useContext, useState } from "react";

const CartContext = createContext(); //이런식으로 생성

export function CartContextProvider({ children }) {
    const [cart, setCart] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    return (
        <CartContext.Provider value={{ cart, setCart, totalPrice, setTotalPrice }} >
            {children}
        </CartContext.Provider>
    )
}

export function useCartContext() {
    return useContext(CartContext);
}




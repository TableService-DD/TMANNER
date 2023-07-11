import { createContext, useContext, useState } from "react";

const CartContext = createContext(); //이런식으로 생성

export function CartContextProvider({ children }) {
    const [cart, setCart] = useState([]);
    return (
        <CartContext.Provider value={{ cart, setCart }} >
            {children}
        </CartContext.Provider>
    )
}

export function useCartContext() {
    return useContext(CartContext);
}




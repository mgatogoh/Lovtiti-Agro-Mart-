import { createContext, useState, type ReactNode, useContext } from "react";

export interface CartItem {
    id: string;
    name: string;
    price: number;
    quantity: number;
}

interface CartContextType {
    cart: CartItem[];
    addItem: (item: CartItem) => void;
    removeItem: (id: string) => void;
    clearCart: () => void;
    totalPrice: number;
}

// create the magic backpack
const CartContext = createContext<CartContextType>({
    cart: [],
    addItem: () => {},
    removeItem: () => {},
    clearCart: () => {},
    totalPrice: 0,
});

// provider = person carrying the backpack
export const CartProvider = ({ children }: { children: ReactNode }) => {
    const [cart, setCart] = useState<CartItem[]>([]);

    const addItem = (newItem: CartItem) => {
        setCart((prev) => {
            const existing = prev.find((p) => p.id === newItem.id);
            if (existing) {
                // update quantity if item already in cart
                return prev.map((p) =>
                    p.id === newItem.id ? { ...p, quantity: p.quantity + newItem.quantity } : p
                );
            }
            return [...prev, newItem];
        });
    };

    const removeItem = (id: string) =>
        setCart((prev) => prev.filter((p) => p.id !== id));

    const clearCart = () => setCart([]);

    const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, totalPrice }}>
            {children}
        </CartContext.Provider>
    );
};

// custom hook for easy use
export const useCart = () => useContext(CartContext);

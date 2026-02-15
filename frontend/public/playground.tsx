import {InputField} from "../src/components/common/InputFields";
import {useState} from "react";

export default function App() {
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [description, setDescription] = useState("");

    return (
        <div className="bg-gray-100 min-h-screen flex items-center justify-center p-4 font-sans">
            <script src="https://cdn.tailwindcss.com"></script>
            <div className="w-full max-w-md p-8 bg-white rounded-xl shadow-lg">
                <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">
                    Custom Input Fields
                </h1>

                <InputField
                    label="Email Address"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    icon="https://placehold.co/20x20/000000/FFFFFF?text=E"
                />

                <InputField
                    label="Password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    secureTextEntry
                />

                <InputField
                    label="Short Description"
                    placeholder="Write a brief description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    maxLength={100}
                    showCount
                />
            </div>
        </div>
    );
}


//==========================
// Cart                   //
//==========================

// import React, { createContext, useContext, useState } from 'react';
//
// // Create a context for the shopping cart
// const CartContext = createContext(null);
//
// // Create a custom hook to use the cart context
// export const useCart = () => {
//     const context = useContext(CartContext);
//     if (!context) {
//         throw new Error('useCart must be used within a CartProvider');
//     }
//     return context;
// };
//
// // CartProvider component to wrap your application
// export const CartProvider = ({ children }) => {
//     const [cartItems, setCartItems] = useState([]);
//
//     // Function to add an item to the cart
//     const addItem = (item) => {
//         setCartItems((prevItems) => {
//             // Check if the item is already in the cart
//             const existingItem = prevItems.find((cartItem) => cartItem.id === item.id);
//             if (existingItem) {
//                 // If it exists, update the quantity
//                 return prevItems.map((cartItem) =>
//                     cartItem.id === item.id
//                         ? { ...cartItem, quantity: cartItem.quantity + 1 }
//                         : cartItem
//                 );
//             } else {
//                 // Otherwise, add the new item with a quantity of 1
//                 return [...prevItems, { ...item, quantity: 1 }];
//             }
//         });
//     };
//
//     // Function to remove an item from the cart
//     const removeItem = (itemId) => {
//         setCartItems((prevItems) => {
//             // Find the item to check its quantity
//             const existingItem = prevItems.find((cartItem) => cartItem.id === itemId);
//             if (existingItem && existingItem.quantity > 1) {
//                 // If quantity is more than 1, just decrement it
//                 return prevItems.map((cartItem) =>
//                     cartItem.id === itemId
//                         ? { ...cartItem, quantity: cartItem.quantity - 1 }
//                         : cartItem
//                 );
//             } else {
//                 // Otherwise, remove the item entirely
//                 return prevItems.filter((cartItem) => cartItem.id !== itemId);
//             }
//         });
//     };
//
//     // Function to clear the entire cart
//     const clearCart = () => {
//         setCartItems([]);
//     };
//
//     const cartValue = {
//         cartItems,
//         addItem,
//         removeItem,
//         clearCart,
//     };
//
//     return (
//         <CartContext.Provider value={cartValue}>{children}</CartContext.Provider>
//     );
// };
//
// // -----------------------------------------------------------------------------
// // UI Components to demonstrate the CartProvider
// // -----------------------------------------------------------------------------
//
// const ProductItem = ({ product }) => {
//     const { addItem } = useCart();
//     return (
//         <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow">
//             <div className="flex-1">
//                 <h3 className="font-semibold text-lg">{product.name}</h3>
//                 <p className="text-gray-600">${product.price.toFixed(2)}</p>
//             </div>
//             <button
//                 onClick={() => addItem(product)}
//                 className="px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors"
//             >
//                 Add to Cart
//             </button>
//         </div>
//     );
// };
//
// const CartItem = ({ item }) => {
//     const { addItem, removeItem } = useCart();
//     return (
//         <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg shadow-sm">
//             <div className="flex-1">
//                 <h3 className="font-semibold">{item.name}</h3>
//                 <p className="text-gray-500">${item.price.toFixed(2)}</p>
//             </div>
//             <div className="flex items-center space-x-2">
//                 <button
//                     onClick={() => removeItem(item.id)}
//                     className="px-3 py-1 text-gray-700 bg-gray-200 rounded-full hover:bg-gray-300"
//                 >
//                     -
//                 </button>
//                 <span className="font-bold">{item.quantity}</span>
//                 <button
//                     onClick={() => addItem(item)}
//                     className="px-3 py-1 text-gray-700 bg-gray-200 rounded-full hover:bg-gray-300"
//                 >
//                     +
//                 </button>
//             </div>
//         </div>
//     );
// };
//
// const CartSummary = () => {
//     const { cartItems, clearCart } = useCart();
//     const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);
//     const totalCost = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
//
//     return (
//         <div className="p-6 bg-white rounded-lg shadow-lg">
//             <h2 className="font-bold text-2xl mb-4">Your Cart</h2>
//             {cartItems.length > 0 ? (
//                 <div className="space-y-4">
//                     {cartItems.map((item) => (
//                         <CartItem key={item.id} item={item} />
//                     ))}
//                     <div className="border-t pt-4">
//                         <div className="flex justify-between font-semibold text-lg">
//                             <span>Total Items:</span>
//                             <span>{totalItems}</span>
//                         </div>
//                         <div className="flex justify-between font-bold text-xl text-green-600 mt-2">
//                             <span>Total:</span>
//                             <span>${totalCost.toFixed(2)}</span>
//                         </div>
//                     </div>
//                     <button
//                         onClick={clearCart}
//                         className="w-full mt-4 py-2 text-white bg-red-500 rounded-lg hover:bg-red-600 transition-colors"
//                     >
//                         Clear Cart
//                     </button>
//                 </div>
//             ) : (
//                 <p className="text-gray-500 text-center">Your cart is empty.</p>
//             )}
//         </div>
//     );
// };
//
// const products = [
//     { id: '1', name: 'Coffee Mug', price: 9.99 },
//     { id: '2', name: 'Keyboard', price: 79.99 },
//     { id: '3', name: 'Mouse', price: 24.50 },
// ];
//
// export default function App() {
//     return (
//         <div className="font-sans min-h-screen bg-gray-100 p-8">
//             <script src="https://cdn.tailwindcss.com"></script>
//             <CartProvider>
//                 <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
//                     <div className="space-y-4">
//                         <h1 className="text-3xl font-bold text-gray-800 mb-6">Products</h1>
//                         {products.map((product) => (
//                             <ProductItem key={product.id} product={product} />
//                         ))}
//                     </div>
//                     <CartSummary />
//                 </div>
//             </CartProvider>
//         </div>
//     );
// }

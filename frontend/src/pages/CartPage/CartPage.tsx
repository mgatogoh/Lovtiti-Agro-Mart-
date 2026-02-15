import { useCart } from "../../context/CartContext";

export default function CartPage() {
    const { cart, removeItem, totalPrice, clearCart } = useCart();

    if (cart.length === 0) return <p>Your cart is empty.</p>;

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
            {cart.map(item => (
                <div key={item.id} className="flex justify-between border-b py-2">
                    <span>{item.name} x {item.quantity}</span>
                    <span>${(item.price * item.quantity).toFixed(2)}</span>
                    <button
                        className="text-red-500"
                        onClick={() => removeItem(item.id)}
                    >
                        Remove
                    </button>
                </div>
            ))}
            <div className="mt-4 font-semibold">
                Total: ${totalPrice.toFixed(2)}
            </div>
            <button
                onClick={clearCart}
                className="mt-4 bg-green-600 text-white px-4 py-2 rounded"
            >
                Clear Cart
            </button>
        </div>
    );
}

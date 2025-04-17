
import React, { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';
import { getImgUrl } from '../../utils/getImageURL';


const CartPage = () => {
    const { cartItems, clearCart } = useContext(CartContext);

    const total = cartItems.reduce((sum, item) => sum + item.price, 0);

    return (
        <div className="container max-w-4xl px-4 py-10 mx-auto">
            <h1 className="mb-6 text-3xl font-bold">Your Cart</h1>

            {cartItems.length === 0 ? (
                <p className="text-lg">Your cart is empty 🛒</p>
            ) : (
                <>
                    <ul className="space-y-4">
                        {cartItems.map((item) => (
                            <li
                                key={item.id}
                                className="flex items-start justify-between p-4 border rounded shadow-sm"
                            >
                                <div className="space-y-1 text-left">
                                    <h2 className="text-xl font-semibold">{item.name}</h2>
                                    <p>Category: {item.category}</p>
                                    <p>Price: ${item.price}</p>
                                </div>
                                <img
                                    src={getImgUrl(`${item.imageUrl}`)}
                                    alt={item.name}
                                    className="object-cover w-24 h-auto rounded"
                                />
                            </li>
                        ))}
                    </ul>


                    <div className="mt-6">
                        <div className="flex items-center justify-between">
                            <button
                                onClick={clearCart}
                                className="px-6 py-2 text-white bg-red-600 rounded hover:bg-red-700">
                                Clear Cart
                            </button>
                            <div className="flex items-center space-x-4">
                                <p className="text-xl font-semibold">Total: ${total.toFixed(2)}</p>
                                <button
                                    className="px-6 py-2 text-white bg-green-600 rounded hover:bg-green-700">
                                    Checkout
                                </button>
                            </div>
                        </div>
                    </div>


                </>
            )}
        </div>
    );
};

export default CartPage;
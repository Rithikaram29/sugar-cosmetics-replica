import axios from "axios";
import React, { useEffect, useState } from "react";
import { localHost } from "../utils/constants.jsx";

const CartBody = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const cartFromStorage = JSON.parse(localStorage.getItem("cart"));
    setCart(cartFromStorage);
  }, []);

  useEffect(() => {
    const addToCart = async () => {
      try {
        // Prepare the payload to update the cart
        const payload = { cart };
  
        // Send POST request to the backend to update the cart
        const response = await axios.post(`${localHost}/user/update`, payload, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("authToken")}`, // Pass auth token
            "Content-Type": "application/json", // Ensure JSON payload is sent correctly
          },
        });
  
        console.log("Cart updated successfully:", response.data.message);
      } catch (error) {
        console.error("Error updating cart:", error.message);
      }
    };
  
    if (cart.length > 0) {
      addToCart();
    }
  }, [cart]);

  const handleQuantityChange = (index, operation) => {
    setCart((prevCart) =>
      prevCart.map((item, i) =>
        i === index
          ? {
              ...item,
              quantity:
                operation === "increment"
                  ? item.quantity + 1
                  : Math.max(1, item.quantity - 1),
            }
          : item
      )
    );
  };



  const handleRemoveItem = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index); // Remove item at the given index
    setCart(updatedCart); // Update state
    localStorage.setItem("cart", JSON.stringify(updatedCart)); // Save updated cart to localStorage
  };

 
  

  

  return (
    <div className="container mx-auto my-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Bag Summary</h2>
          {cart.length > 0 ? (
            cart.map((item, index) => (
              <div key={index} className="cart flex items-center mb-4">
                <div className="w-20 h-20 mr-4">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold">{item.name}</h3>
                  <p className="text-gray-500">₹{item.price}</p>
                </div>
                <div className="flex items-center">
                  <button
                    className="px-3 py-1 bg-gray-200 rounded-l-lg hover:bg-gray-300"
                    onClick={() => handleQuantityChange(index, "decrement")}
                  >
                    -
                  </button>
                  <input
                    type="number"
                    value={item.quantity}
                    min={1}
                    className="w-12 py-1 text-center bg-gray-200 outline-none"
                    readOnly
                  />
                  <button
                    className="px-3 py-1 bg-gray-200 rounded-r-lg hover:bg-gray-300"
                    onClick={() => handleQuantityChange(index, "increment")}
                  >
                    +
                  </button>
                </div>
                <button
                  className="ml-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                  onClick={() => handleRemoveItem(index)}
                >
                  Remove
                </button>
              </div>
            ))
          ) : (
            <p className="text-gray-500">Your cart is empty.</p>
          )}
          <hr className="my-4" />
        </div>
        <div className="bg-white border-gray-700 rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Apply Coupon</h2>
          <div className="flex space-x-3 mb-4">
            <input
              type="text"
              placeholder="Enter Gift code or discount code"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="w-80 bg-gray-100 text-white py-2 px-4 rounded-lg hover:bg-gray-500 hover:text-gray-950">
              Apply
            </button>
          </div>
          <hr className="my-4 border-dashed" />
          <div className="p-4 hover:bg-slate-100">
            <a href="#" className="text-gray-950 font-bold ">
              Offers & Coupons
            </a>
          </div>
          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Price Details</h2>
            <div className="flex justify-between items-center mb-1">
              <p className="text-gray-500 font-bold">
                Item(s) Total (Inclusive of taxes)
              </p>
              <p className="text-gray-500 font-bold">
                ₹
                {cart.reduce(
                  (total, item) => total + item.price * item.quantity,
                  0
                )}
              </p>
            </div>
            <div className="flex justify-between items-center mb-1">
              <p className="text-gray-500 font-bold">Savings</p>
              <p className="text-green-500 font-bold">-₹0</p>
            </div>
            <div className="flex justify-between items-center mb-1">
              <p className="text-gray-500 font-bold">Club Vellvette Savings</p>
              <p className="text-green-500 font-bold">-₹0</p>
            </div>
            <div className="flex justify-between items-center mb-2">
              <p className="text-gray-500 font-bold">Standard Shipping</p>
              <p className="text-green-500 font-bold">Free</p>
            </div>
            <hr />
            <div className="flex justify-between items-center mt-2">
              <p className="text-gray-950 font-bold  text-lg">Order Total</p>
              <p className="text-gray-950 font-bold text-lg">
                ₹
                {cart.reduce(
                  (total, item) => total + item.price * item.quantity,
                  0
                )}
              </p>
            </div>
          </div>
        </div>

     
      </div>
      <div
         style={{
          position: "sticky", // Change from fixed to sticky
          width: "100%",
          bottom: 0, // Stick to the bottom of the viewport
          backgroundColor: "white",
          display: "flex",
          justifyContent: "space-between",
          borderTop: "1px solid rgb(245, 245, 245)",
          zIndex: 1000, // Ensures it stays above other content
        }}
        >
          <button className=" bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-800 mt-8">
            ₹
            {cart.reduce(
              (total, item) => total + item.price * item.quantity,
              0
            )}{" "}
            PLACE ORDER
          </button>
        </div>
    </div>
  );
};

export default CartBody;

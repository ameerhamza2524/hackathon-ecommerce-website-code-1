// page.tsx
import React from "react";
import FooterSection from "@/app/components/FooterSection";

const CartPage = () => {
  return (
    <>
    <div className="min-h-screen bg-gray-50 px-20">
      {/* Breadcrumb */}
      <header className="p-4 bg-white ">
        <div className="container mx-auto flex items-center space-x-2 text-gray-600 text-sm">
          <span className="hover:text-black cursor-pointer">Home</span>
          <span className="text-gray-400">/</span>
          <span className="font-semibold">Cart</span>
        </div>
      </header>

      <main className="container mx-auto mt-8 px-4 lg:flex gap-8">
      <section className="flex-1 h-[570px] mb-16 bg-white p-6 rounded shadow">
  <h1 className="text-4xl font-bold mb-6">Your Cart</h1>

  {/* Cart Items */}
  {[
    {
      name: "Gradient Graphic T-shirt",
      size: "Large",
      color: "White",
      price: 145,
      image: "/images/Frame338.png", // Replace with your T-shirt image
    },
    {
      name: "Checkered Shirt",
      size: "Medium",
      color: "Red",
      price: 180,
      image: "/images/Frame333.png", // Replace with your Shirt image
    },
    {
      name: "Skinny Fit Jeans",
      size: "Large",
      color: "Blue",
      price: 240,
      image: "/images/Frame334.png", // Replace with your Jeans image
    },
  ].map((item, index) => (
    <div
      key={index}
      className="relative flex items-start justify-between border-b pb-8 mb-8 last:border-b-0 last:pb-0"
    >
      {/* Item Details */}
      <div className="flex items-start space-x-4">
        <img
          src={item.image}
          alt={item.name}
          className="w-24 h-24 object-cover rounded"
        />
        <div>
          <h2 className="text-lg font-semibold">{item.name}</h2>
          <p className="text-sm text-gray-500">Size: {item.size}</p>
          <p className="text-sm text-gray-500">Color: {item.color}</p>
          <p className="text-lg font-bold mt-2">${item.price}</p>
        </div>
      </div>
        <div>

          {/* Remove Button */}{/* Delete Icon */}
      <button
        className="absolute top-0 right-0 text-red-500 p-2"
        title="Remove item"
      >
        <img src="/images/delete.png" alt="Delete Icon" className="w-6 h-6" />
      </button>

      {/* Quantity Controls */}
      <div className="absolute bottom-5 right-0 flex items-center space-x-2 border rounded px-2 py-1">
        
        <button className="px-2">-</button>
        <span className="px-2">1</span>
        <button className="px-2">+</button>
      </div>
        </div>
      
    </div>
  ))}
</section>

        {/* Right Section: Order Summary */}
        <section className="w-full h-[350px] lg:w-96 bg-white p-6 rounded shadow">
          <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>$565</span>
            </div>
            <div className="flex justify-between">
              <span>Discount (-20%)</span>
              <span className="text-red-500">-$113</span>
            </div>
            <div className="flex justify-between">
              <span>Delivery Fee</span>
              <span>$15</span>
            </div>
          </div>
          <div className="flex justify-between border-t-[1px] border-blsck text-lg font-bold mt-4">
            <span>Total</span>
            <span>$467</span>
          </div>

          {/* Promo Code and Apply Button */}
          <div className="flex items-center mt-4 gap-2">
            <input
              type="text"
              placeholder="Add promo code"
              className="flex-1 border px-4 py-2 rounded"
            />
            <button className="bg-black text-white px-6 py-2 rounded">Apply</button>
          </div>

          <button className="w-full bg-black text-white py-3 rounded mt-4">
            Go to Checkout →
          </button>
        </section>
      </main>
    </div>


    <FooterSection /> 

    </>
  );
};

export default CartPage;

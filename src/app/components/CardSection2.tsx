// components/CardSection2.tsx
import React from "react";
import Image from "next/image";

const CardSection2: React.FC = () => {
  // Sample product data
  const products = [
    {
      image: "/images/Frame-32.png",
      title: "T-shirt with Tape Details",
      rating: 4.5,
      price: 120,
      originalPrice: 150,
      discount: 20,
      alt: "T-shirt with Tape Details",
    },
    {
      image: "/images/Frame-33.png",
      title: "Skinny Fit Jeans",
      rating: 3.5,
      price: 240,
      originalPrice: 260,
      discount: 20,
      alt: "Skinny Fit Jeans",
    },
    {
      image: "/images/Frame-34.png",
      title: "Checkered Shirt",
      rating: 4.5,
      price: 180,
      originalPrice: 180,
      discount: 0,
      alt: "Checkered Shirt",
    },
    {
      image: "/images/Frame-38.png",
      title: "Sleeve Striped T-shirt",
      rating: 4.5,
      price: 130,
      originalPrice: 160,
      discount: 30,
      alt: "Sleeve Striped T-shirt",
    },
  ];

  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
        {/* Section Title */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 sm:mb-10 lg:mb-12 text-center text-gray-900 tracking-wide">
          TOP SELLING
        </h2>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-transform duration-300 hover:scale-105 overflow-hidden"
            >
              <Image
                src={product.image}
                alt={product.alt}
                width={400}
                height={240} 
                className="w-full h-40 sm:h-48 object-cover"
                loading="lazy"
              />
              <div className="p-4 sm:p-5">
                <h3 className="text-sm sm:text-base font-medium text-gray-800">
                  {product.title}
                </h3>
                <div className="flex items-center mt-2">
                  <span className="text-yellow-500">
                    {"★".repeat(Math.floor(product.rating))}
                    {"☆".repeat(5 - Math.floor(product.rating))}
                  </span>
                  <span className="ml-2 text-gray-500 text-xs sm:text-sm">
                    {product.rating.toFixed(1)}/5
                  </span>
                </div>
                <div className="mt-3">
                  <p className="text-base sm:text-lg font-bold text-gray-900">
                    ${product.price}
                  </p>
                  {product.discount > 0 && (
                    <>
                      <p className="text-xs text-gray-500 line-through">
                        ${product.originalPrice}
                      </p>
                      <p className="text-red-500 text-xs font-semibold">
                        -{product.discount}%
                      </p>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-12 sm:mt-16 text-center">
          <button className="bg-white text-black px-6 sm:px-8 py-2 sm:py-3 rounded-full text-sm sm:text-lg font-light hover:bg-gray-200 transition-colors duration-300">
            View All
          </button>
        </div>
      </div>
    </section>
  );
};

export default CardSection2;

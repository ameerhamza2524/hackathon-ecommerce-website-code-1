import Image from "next/image";
import FooterSection from "@/app/components/FooterSection";

export default function TShirtPage() {

  // Sample product data
  const products = [
    {
      image: "/images/Frame332.png",
      title: "T-shirt with Tape Details",
      rating: 4.5,
      price: 120,
      originalPrice: 150,
      discount: 20,
      alt: "T-shirt with Tape Details",
    },
    {
      image: "/images/Frame333.png",
      title: "Skinny Fit Jeans",
      rating: 3.5,
      price: 240,
      originalPrice: 260,
      discount: 20,
      alt: "Skinny Fit Jeans",
    },
    {
      image: "/images/Frame334.png",
      title: "Checkered Shirt",
      rating: 4.5,
      price: 180,
      originalPrice: 180,
      discount: 0,
      alt: "Checkered Shirt",
    },
    {
      image: "/images/Frame338.png",
      title: "Sleeve Striped T-shirt",
      rating: 4.5,
      price: 130,
      originalPrice: 160,
      discount: 30,
      alt: "Sleeve Striped T-shirt",
    },
  ];
  
  const reviews = [
    {
      name: "Samantha D.",
      date: "August 15, 2023",
      text: "I absolutely love this t-shirt! The design is unique, and the fabric feels so comfortable.",
      rating: 5,
    },
    {
      name: "Wasif Official",
      date: "August 16, 2023",
      text: "This t-shirt is a must-have for anyone who appreciates good design.",
      rating: 4,
    },
    {
      name: "Ethan R.",
      date: "August 17, 2023",
      text: "Minimalist yet stylish design. The fit is perfect.",
      rating: 5,
    },
    {
      name: "Olivia P.",
      date: "August 18, 2023",
      text: "As a designer, this t-shirt inspires me with its creativity.",
      rating: 4,
    },
    {
      name: "Liam K.",
      date: "August 19, 2023",
      text: "Fusion of comfort and creativity. A must-have for fashion enthusiasts.",
      rating: 5,
    },
    {
      name: "Ava H.",
      date: "August 20, 2023",
      text: "Intricate design and a great conversation starter.",
      rating: 5,
    },
  ];

  return (
    <>
    <div className="max-w-5xl mx-auto px-4 py-8">
      {/* Product Header */}
      <div className="flex gap-8">
        {/* Left: Images */}
        <div className="flex">
          {/* Small Images (Stacked Vertically) */}
          <div className="flex flex-col gap-2">
            <Image
              src="/images/image-5.png" // Replace with actual image paths
              alt="Small Image 1"
              width={100}
              height={100}
              className="rounded-lg w-full"
            />
            <Image
              src="/images/image-2.png" // Replace with actual image paths
              alt="Small Image 2"
              width={100}
              height={100}
              className="rounded-lg w-full"
            />
            <Image
              src="/images/image-6.png" // Replace with actual image paths
              alt="Small Image 3"
              width={200}
              height={200}
              className="rounded-lg w-[130px] h-[130px]"
            />
          </div>

          {/* Large Image */}
          <div className="flex-1 ml-4">
            <Image
              src="/images/image-111.png" // Replace with actual image paths
              alt="Large Image"
              width={400}
              height={600}
              className="rounded-lg w-[400px] h-[450px] object-cover"
            />
          </div>
        </div>

        {/* Right: Product Info */}
        <div className="flex-1">
          <h1 className="text-3xl font-bold">ONE LIFE GRAPHIC T-SHIRT</h1>
          <p className="text-lg text-gray-600 mt-2">4.5/5 ⭐️</p>
          <div className="text-2xl font-bold text-green-600 mt-2">$260</div>
          <div className="text-gray-400 line-through">$300</div>
          <p className="text-sm text-gray-600">40% off</p>

          <p className="mt-4">
            This graphic t-shirt is perfect for any occasion. Crafted from a soft
            and breathable fabric, it offers superior comfort and style.
          </p>

          {/* Select Options */}
          <div className="mt-6">
            <div className="mb-2 font-medium">Select Color</div>
            <div className="flex gap-2">
              <button className="w-8 h-8 rounded-full bg-green-600"></button>
              <button className="w-8 h-8 rounded-full bg-gray-600"></button>
              <button className="w-8 h-8 rounded-full bg-blue-600"></button>
            </div>
          </div>

          <div className="mt-6">
            <div className="mb-2 font-medium">Choose Size</div>
            <div className="flex gap-4">
              {["Small", "Medium", "Large", "X-Large"].map((size) => (
                <button
                  key={size}
                  className="border px-4 py-2 rounded hover:bg-gray-200"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Add to Cart */}
          <div className="mt-6">
            <button className="w-full bg-black text-white py-2 rounded hover:bg-gray-800">
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-8">
      {/* Product Header */}
      <div className="flex gap-8">
        {/* (Product images and details from the previous code remain unchanged) */}
      </div>

      {/* All Reviews Section */}
      <div className="mt-12">
        {/* Tab Navigation */}
        <div className="flex justify-between items-center border-b pb-2">
          <div className="flex gap-8">
            <button className="text-gray-500 font-medium">Product Details</button>
            <button className="text-black font-bold border-b-2 border-black">
              Rating & Reviews
            </button>
            <button className="text-gray-500 font-medium">FAQs</button>
          </div>
        </div>

        {/* All Reviews Header */}
        <div className="mt-6 flex justify-between items-center">
          <h2 className="text-2xl font-bold">
            All Reviews <span className="text-gray-500 text-lg">(451)</span>
          </h2>
          {/* Buttons */}
          <div className="flex items-center gap-2">
            {/* Filter Button */}
            {/* <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center"> */}
              <Image
                src="/images/Frame-19.png" // Replace with your filter icon image path
                alt="Filter Icon"
                width={40}
                height={40}
              />
            {/* </button> */}

            {/* Latest Button */}
            <button className="px-4 py-2 bg-gray-100 rounded-lg text-gray-700 font-medium">
              Latest <span className="ml-1">&#x25BC;</span> {/* Dropdown icon */}
            </button>

            {/* Write a Review Button */}
            <button className="px-4 py-2 bg-black text-white rounded-lg font-medium">
              Write a Review
            </button>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="p-4 border rounded-lg shadow-sm bg-white"
            >
              <div className="flex justify-between">
                <span className="font-bold">{review.name}</span>
                <span className="text-sm text-gray-400">{review.date}</span>
              </div>
              <div className="text-yellow-400">
                {"⭐".repeat(review.rating)}
              </div>
              <p className="mt-2 text-gray-600">{review.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    
    </div>

    <section className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-20">
        {/* Section Title */}
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-900 tracking-wide">
        You might also like
        </h2>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md w-[270px]  duration-300 overflow-hidden"
            >
              <Image
                src={product.image}
                alt={product.alt}
                width={400}
                height={256}
                className="w-full h-56 object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <h3 className="text-lg font-medium text-gray-800">{product.title}</h3>
                <div className="flex items-center mt-2">
                  <span className="text-yellow-500">
                    {"★".repeat(Math.floor(product.rating))}
                    {"☆".repeat(5 - Math.floor(product.rating))}
                  </span>
                  <span className="ml-2 text-gray-500 text-sm">
                    {product.rating.toFixed(1)}/5
                  </span>
                </div>
                <div className="mt-4">
                  <p className="text-xl font-bold text-gray-900">${product.price}</p>
                  {product.discount > 0 && (
                    <>
                      <p className="text-sm text-gray-500 line-through">
                        ${product.originalPrice}
                      </p>
                      <p className="text-red-500 text-sm font-semibold">
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
        <div className="mt-16 text-center">
          <button className="bg-white text-black px-8 py-3 rounded-full text-lg font-light hover:bg-white-800 transition-colors duration-300">
            View All
          </button>
        </div>

        {/* Horizontal Line */}
        <div className="mt-20">
          <hr className="border-t-1 border-black" />
        </div>
      </div>
    </section>

    <FooterSection />

    </>
  );
}

import Image from "next/image";
import FooterSection from "@/app/components/FooterSection";

export default function CasualPage() {
  const products = [
    {
        name: "Gradient Graphic T-shirt",
        price: "$145",
        rating: 3.5,
        imgSrc: "/images/Frame338.png",
      },
      {
        name: "Polo with Tipping Details",
        price: "$180",
        rating: 4.5,
        imgSrc: "/images/Frame334.png",
      },
    {
      name: "Gradient Graphic T-shirt",
      price: "$145",
      rating: 3.5,
      imgSrc: "/images/Frame333.png",
    },
    {
      name: "Polo with Tipping Details",
      price: "$180",
      rating: 4.5,
      imgSrc: "/images/Frame332.png",
    },
    {
      name: "Black Striped T-shirt",
      price: "$120",
      oldPrice: "$160",
      discount: "-30%",
      rating: 5,
      imgSrc: "/images/Frame-34.png",
    },
    {
      name: "Skinny Fit Jeans",
      price: "$240",
      oldPrice: "$260",
      discount: "-20%",
      rating: 3.5,
      imgSrc: "/images/Frame-33.png",
    },
    {
      name: "Checkered Shirt",
      price: "$180",
      rating: 4.5,
      imgSrc: "/images/Frame-32.png",
    },
    {
      name: "Sleeve Striped T-shirt",
      price: "$130",
      oldPrice: "$160",
      discount: "-30%",
      rating: 4.5,
      imgSrc: "/images/Frame332.png",
    },
    {
      name: "Vertical Striped Shirt",
      price: "$212",
      oldPrice: "$232",
      discount: "-20%",
      rating: 5,
      imgSrc: "/images/Frame--38.png",
    },
    {
      name: "Courage Graphic T-shirt",
      price: "$145",
      rating: 4,
      imgSrc: "/images/Frame--34.png",
    },
    {
      name: "Loose Fit Bermuda Shorts",
      price: "$80",
      rating: 3,
      imgSrc: "/images/Frame--32.png",
    },
  ];

  return (
    <>
    <div className="max-w-7xl mx-auto px-20 py-8">
      {/* Breadcrumb */}
      <div className="mb-4 text-gray-500 text-sm">
        Home &gt; <span className="text-black">Casual</span>
      </div>

      <div className="flex gap-8">
        {/* Sidebar Filters */}
        <div className="w-1/4 bg-gray-50 p-4 rounded-lg shadow ">
  <h3 className="font-bold mb-4">Filters</h3>

  <div className="mb-6 border-b-[1px] border-black ">
    <h4 className="font-medium mt-7 mb-7 border-t-[1px] border-black "></h4>
    <ul className="text-gray-600 space-y-1 mb-5">
      <li className="flex justify-between items-center">
        <span>T-shirts</span>
        <img src="/images/Frame-20.png" alt="arrow" className="w-4 h-4" />
      </li>
      <li className="flex justify-between items-center">
        <span>Shorts</span>
        <img src="/images/Frame-20.png" alt="arrow" className="w-4 h-4" />
      </li>
      <li className="flex justify-between items-center">
        <span>Shirts</span>
        <img src="/images/Frame-20.png" alt="arrow" className="w-4 h-4" />
      </li>
      <li className="flex justify-between items-center">
        <span>Hoodie</span>
        <img src="/images/Frame-20.png" alt="arrow" className="w-4 h-4" />
      </li>
      <li className="flex justify-between items-center">
        <span>Jeans</span>
        <img src="/images/Frame-20.png" alt="arrow" className="w-4 h-4" />
      </li>
    </ul>
  </div>

  <div className="mb-11 border-b-[1px] border-black pb-11">
    <h4 className="font-medium mb-2">Price</h4>
    <div className="flex items-center gap-2">
      <span className="text-gray-600 text-sm">$50</span>
      <input type="range" className="w-full" min="50" max="200" />
      <span className="text-gray-600 text-sm"> $200</span>
    </div>
  </div>

  <div className="mb-6 border-b-[1px] border-black pb-11">
    <h4 className="font-medium mb-2">Colors</h4>
    <div className="flex flex-wrap gap-2">
      <div className="w-6 h-6 rounded-full bg-blue-500 border"></div>
      <div className="w-6 h-6 rounded-full bg-red-500 border"></div>
      <div className="w-6 h-6 rounded-full bg-green-500 border"></div>
      <div className="w-6 h-6 rounded-full bg-yellow-500 border"></div>
      <div className="w-6 h-6 rounded-full bg-purple-500 border"></div>
      <div className="w-6 h-6 rounded-full bg-black border"></div>
      <div className="w-6 h-6 rounded-full bg-gray-500 border"></div>
      <div className="w-6 h-6 rounded-full bg-white border"></div>
      <div className="w-6 h-6 rounded-full bg-pink-500 border"></div>
      <div className="w-6 h-6 rounded-full bg-blue-500 border"></div>
      <div className="w-6 h-6 rounded-full bg-orange-500 border"></div>
      <div className="w-6 h-6 rounded-full bg-indigo-500 border"></div>
      <div className="w-6 h-6 rounded-full bg-teal-500 border"></div>
      <div className="w-6 h-6 rounded-full bg-pink-500 border"></div>
      <div className="w-6 h-6 rounded-full bg-indigo-500 border"></div>
    </div>
  </div>

  <div className="mb-6 border-b-[1px] border-black pb-11">
    <h4 className="font-medium mb-2">Size</h4>
    <div className="flex flex-wrap gap-2">
      <button className="border px-2 py-1 rounded">Small</button>
      <button className="border px-2 py-1 rounded bg-black text-white">
        Large
      </button>
      <button className="border px-2 py-1 rounded">X-Large</button>
      <button className="border px-2 py-1 rounded">X-Large</button>
      <button className="border px-2 py-1 rounded">4X-Large</button>
      <button className="border px-2 py-1 rounded">3X-Large</button>
      <button className="border px-2 py-1 rounded">4X-Large</button>
    </div>
  </div>

  <div>
    <h4 className="font-medium mb-2">Dress Style</h4>
    <ul className="text-gray-600 space-y-1">
      <li className="flex justify-between items-center">
        <span>Casual</span>
        <img src="/images/Frame-20.png" alt="arrow" className="w-4 h-4" />
      </li>
      <li className="flex justify-between items-center">
        <span>Formal</span>
        <img src="/images/Frame-20.png" alt="arrow" className="w-4 h-4" />
      </li>
      <li className="flex justify-between items-center">
        <span>Party</span>
        <img src="/images/Frame-20.png" alt="arrow" className="w-4 h-4" />
      </li>
      <li className="flex justify-between items-center">
        <span>Gym</span>
        <img src="/images/Frame-20.png" alt="arrow" className="w-4 h-4" />
      </li>
    </ul>
  </div>

  <button className="w-full mt-6 bg-black text-white py-2 rounded-lg">
    Apply Filter
  </button>
</div>


        {/* Product Grid */}
        <div className="w-3/4">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">Casual</h2>
            <span className="text-sm text-gray-500">
              Showing 1-10 of 100 Products
            </span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <div key={index} className="p-4 border rounded-lg">
                <Image
                  src={product.imgSrc}
                  alt={product.name}
                  width={150}
                  height={150}
                  className="w-full h-40 object-cover rounded-md mb-4"
                />
                <h3 className="font-medium text-gray-800">{product.name}</h3>
                <div className="flex justify-between items-center ">
                  <span className="text-lg font-bold">{product.price}</span>
                  <span className="text-sm text-red-500">{product.discount}</span>
                  {product.oldPrice && (
                    <span className="text-sm text-gray-400 line-through">
                      {product.oldPrice}
                    </span>
                    
                  )}
                </div>
                {product.discount && (
                  <span className="text-sm text-red-500">{product.discount}</span>
                )}
                <div className="text-yellow-400 ">
                  {"⭐".repeat(Math.floor(product.rating))}
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-between items-center mt-8 mb-11">
            <button className="text-gray-500">Previous</button>
            <div className="flex gap-2">
              <button className="px-3 py-1 border rounded">1</button>
              <button className="px-3 py-1 border rounded">2</button>
              <button className="px-3 py-1 border rounded">3</button>
              <button className="px-3 py-1 border rounded">...</button>
              <button className="px-3 py-1 border rounded">10</button>
              <button className="px-3 py-1 border rounded">11</button>
              <button className="px-3 py-1 border rounded">Last</button>
            </div>
            <button className="text-gray-500">Next</button>
          </div>
        </div>
      </div>

    </div>
      <FooterSection />
      </>
  );
}

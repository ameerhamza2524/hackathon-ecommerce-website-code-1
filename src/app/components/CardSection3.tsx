import Image from "next/image";


const CardSection3 = () => {
    return (
        <>
      <div className="max-w-screen-lg items-center mx-auto p-6 h-[700px] mb-10 mt-10 bg-gray-200 rounded-xl shadow-lg">x    
          <h2 className="text-4xl font-extrabold text-black mb-[-100px] mt-8 text-center">BROWSE BY DRESS STYLE</h2>
          <div className="relative">
          {/* First Card */}
          <div
            className="absolute"
            style={{
              width: '300px', // Reduced width
              height: '220px', // Reduced height
              top: '160px', // Adjusted position
              left: '30px', // Adjusted position
              borderRadius: '20px',
              overflow: 'hidden',
            }}
          >
            <Image 
              src="/images/image-11.png" 
              alt="Casual" 
              width={300} 
              height={220} 
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 flex justify-center items-center bg-white bg-opacity-[200px] rounded-lg">
              <h3 className="text-2xl  font-bold relative top-[-70px] left-[-90px] text-black ">Casual</h3>
            </div>
          </div>
  
          {/* Second Card */}
          <div
            className="absolute"
            style={{
              width: '500px', // Reduced width
              height: '220px', // Reduced height
              top: '160px', // Adjusted position
              left: '380px', // Added more space between cards
              borderRadius: '20px',
              overflow: 'hidden',
            }}
          >
            <Image 
              src="/images/image-12.png" 
              alt="Formal" 
              width={500} 
              height={220} 
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 flex justify-center items-center bg-white bg-opacity-[200px] rounded-lg">
              <h3 className="text-2xl  font-bold relative top-[-70px] left-[-190px] text-black">Formal</h3>
            </div>
          </div>
  
          {/* Third Card */}
          <div
            className="absolute"
            style={{
              width: '500px', // Reduced width
              height: '220px', // Reduced height
              top: '400px', // Added gap between the two rows
              left: '30px', // Adjusted position
              borderRadius: '20px',
              overflow: 'hidden',
            }}
          >
            <Image 
              src="/images/image-13.png" 
              alt="Party" 
              width={500} 
              height={220} 
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 flex justify-center items-center bg-white bg-opacity-[200px] rounded-lg">
              <h3 className="text-2xl  font-bold relative top-[-70px] left-[-190px] text-black">Party</h3>
            </div>
          </div>
  
          {/* Fourth Card */}
          <div
            className="absolute"
            style={{
              width: '300px', // Reduced width
              height: '220px', // Reduced height
              top: '400px', // Added gap between the two rows
              left: '570px', // Added more space between cards
              borderRadius: '20px',
              overflow: 'hidden',
            }}
          >
            <Image 
              src="/images/image-14.png" 
              alt="Gym" 
              width={300} 
              height={220} 
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 flex justify-center items-center bg-white bg-opacity-[200px] rounded-lg">
              <h3 className="text-2xl  font-bold relative top-[-70px] left-[-90px] text-black">Gym</h3>
            </div>
          </div>
        </div>
</div>

        {/* Testimonials Section */}
        <div className="max-w-screen-xl mx-auto z-50  px-9 py-12">
        <h2 className="text-3xl font-bold text-center mb-8">OUR HAPPY CUSTOMERS</h2>
            <div className="flex gap-6 mb-10 overflow-auto">
                {/* Customer Cards */}
                <div className="bg-white mb-5 shadow-lg rounded-lg p-6 z-30 flex-1 min-w-[300px]">
                    <p className="text-yellow-500 text-xl mb-2">★★★★★</p>
                    <h3 className="font-bold text-lg mb-2">Sarah M. <span className="text-green-600">✔</span></h3>
                    <p className="text-gray-600">
                    Im blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I’ve bought has exceeded my expectations.
                    </p>
                </div>
                <div className="bg-white mb-5 shadow-lg rounded-lg p-6 flex-1 min-w-[300px]">
                    <p className="text-yellow-500 text-xl mb-2">★★★★★</p>
                    <h3 className="font-bold text-lg mb-2">Alex K. <span className="text-green-600">✔</span></h3>
                    <p className="text-gray-600">
                    Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.
                    </p>
                </div>
                <div className="bg-white mb-5 shadow-lg rounded-lg p-6 flex-1 min-w-[300px]">
                    <p className="text-yellow-500 text-xl mb-2">★★★★★</p>
                    <h3 className="font-bold text-lg mb-2">James L. <span className="text-green-600">✔</span></h3>
                    <p className="text-gray-600">
                    As someone whos always on the lookout for unique fashion pieces, Im thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.
                    </p>
                </div>
            </div>
        </div>
        </>

        
    );
  };
  
  export default CardSection3;

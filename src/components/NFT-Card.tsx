import React from "react";
 
   const nftItems = [
    { id: 1, image:'/images.png', price: 20 },
    { id: 2, image:'/images.png', price: 25 },
    { id: 3, image:'/images.png', price: 22 },
    { id: 4, image:'/images.png', price: 18 },
    { id: 5, image:'/images.png', price: 30 },
    { id: 6, image:'/images.png', price: 28 },
    { id: 7, image:'/images.png', price: 24 },
    { id: 8, image:'/images.png', price: 26 },
  ];




const NFTCard: React.FC= () => {

  
  return (
 <div className="bg-black pb-10 p-6">
    {/* menu Title */}
    <div className="flex cursor-pointer justify-around w-full items-center px-6 py-6 border-t border-b border-gray-100 my-2">
    {/* Left */}
    <h3 className="text-white text-lg font-semibold uppercase tracking-wide">
      Rion
    </h3>

    {/* Middle (repeat 3 times) */}
    <div className="flex gap-6">
      {Array(3).fill("New Collection").map((text, index) => (
        <h3 
          key={index} 
          className="text-white text-lg font-semibold uppercase tracking-wide"
        >
          {text}
        </h3>
      ))}
    </div>

    {/* Right */}
    <h3 className="text-white text-lg font-semibold uppercase tracking-wide">
      New CI
    </h3>
  </div>

    <div className="px-16   grid grids-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {nftItems.map((item,idx)=> (
            <div className="p-8 relative bg-white rounded-lg overflow-hidden group cursor-pointer shadow-lg " key={idx}>
              <img className="w-full h-64 object-contain" src={item.image} alt={`NFT ${item.id}`} />
             
             {/* hover button */}
             <div className="absolute bottom-0 left-0 w-full bg-amber-500 text-white text-center py-3 opacity-0 translate-y-full group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 flex justify-between px-4">
              <button className="font-bold">BUY MINT</button>
              <span className="">{item.price} SOL</span>
             </div>

               </div>
        ))}
    </div>
 </div>
  );
};

export default NFTCard;

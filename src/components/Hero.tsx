import React from "react";
import heroImg from '../assets/img/heroImg.jpg'

const Hero: React.FC = () => {
  return (
    <div className="w-full">
        <section className="relative h-screen bg-black text-white flex flex-col items-center justify-center text-center font-orbitron">
      {/* Top-left: EHYZ */}
      <div className="absolute font-bold top-5 left-5 text-xl  tracking-wider">
        EHYZ
      </div>

      {/* Top-center: Leaderboard */}
      <div className="absolute top-5 left-1/2 -translate-x-1/2  text-xl tracking-wider">
        Leaderboard
      </div>

      {/* Top-right: CONNECT WALLET with box */}
      <div className="absolute top-5 right-5 border border-white px-2 py-1 text-xs tracking-wider">
        CONNECT WALLET
      </div>

      {/* Small green side labels (example placements) */}
      <div className="absolute top-1/4 left-10 text-green-400 text-[10px]">
        X: 192 Y: 476
      </div>
      <div className="absolute bottom-1/3 right-10 text-green-400 text-[10px]">
        V: 67% B: 09.08
      </div>
      <div className="absolute bottom-20 left-20 text-green-400 text-[10px]">
        WGT: Dynamic Label
      </div>

      {/* Title */}
      <h1 className="text-4xl md:text-6xl tracking-widest font-bold mb-4">
        EXPLORE NFT COLLECTION
      </h1>

      {/* Subtitle */}
      <p className="max-w-xl text-base md:text-lg leading-relaxed mb-6">
        A collection of 525 highly-fashionable NFTs on the ETH blockchain. Unique,
        metaverse-ready, and designed to benefit their holders.
      </p>

      {/* Button */}
      <button className="px-6 py-2 border border-white hover:bg-white hover:text-black transition-all duration-300">
        START GAME
      </button>

     

      {/* Background grid */}
      <div className="absolute inset-0 bg-[url('/grid-bg.png')] bg-bottom bg-cover opacity-40 -z-10"></div>

      {/* Bottom-left designer credit */}
      {/* <div className="absolute bottom-5 left-5 text-yellow-400 text-sm">
        saeed saiyed
      </div> */}

     
    </section>
    
      {/* Full-width Image */}
      <img 
        src={heroImg}
        alt="Hero visual" 
        className="w-full h-[300px] object-cover"
      />
    </div>
  );
};

export default Hero;

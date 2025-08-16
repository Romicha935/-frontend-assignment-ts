import React from "react";
import heroImg from '../assets/img/heroImg.jpg'

const Hero: React.FC = () => {
  return (
    <div className="w-full">
        <section className="relative h-screen bg-black text-white flex flex-col items-center justify-center text-center font-orbitron">
  <div className="absolute top-5 w-full px-5 flex justify-between items-center">
       
      <div className="absolute font-bold top-5 left-5 text-xl  tracking-wider">
        EHYZ
      </div>
       <div className="absolute uppercase top-5 left-1/2 -translate-x-1/2  text-xl tracking-wider">
        Leaderboard
      </div>
     <div className="absolute top-5 right-5 border border-white px-2 py-1 text-xs tracking-wider">
        CONNECT WALLET
      </div>
  </div>

      {/* Small green side */}
      <div className="absolute top-1/4 left-10 text-green-400 text-[10px]">
        X: 192 Y: 476
      </div>
      <div className="absolute bottom-1/3 right-10 text-green-400 text-[10px]">
        V: 67% B: 09.08
      </div>
      <div className="absolute bottom-20 left-20 text-green-400 text-[10px]">
        WGT: Dynamic Label
      </div>

      {/* hero */}
      <h1 className="text-2xl font-orbitron md:text-4xl md:font-extrabold uppercase tracking-widest font-bold mb-4">
        EXPLORE NFT COLLECTION
      </h1>

      <p className="max-w-xl font-orbitron text-base md:text-lg leading-relaxed mb-6">
        A collection of 525 highly-fashionable NFTs on the ETH blockchain. Unique,
        metaverse-ready, and designed to benefit their holders.
      </p>

     
      <button 
  className="
    font-orbitron px-8 py-3
    text-yellow-300 border border-wh  uppercase tracking-wider 
    transition-all duration-300
    hover:bg-yellow-300 hover:text-black
    hover:shadow-[0_0_10px_#facc15,0_0_20px_#facc15]
  "
  style={{ clipPath: "polygon(0 0, 95% 0, 100% 20%, 100% 100%, 0 100%)" }}
>
  Start Game
</button>


     

      {/* Background grid */}
      <div className="absolute inset-0 bg-[url('/grid-bg.png')] bg-bottom bg-cover opacity-40 -z-10"></div>

    </section>
    
      {/* Image */}
      <img 
        src={heroImg}
        alt="Hero visual" 
        className="w-full h-[300px] object-cover"
      />
    </div>
  );
};

export default Hero;

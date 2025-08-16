import React from "react";
import NFTCard from "./components/NFT-Card";
import Hero from "./components/Hero";
import Leaderboard from "./components/LeaderBoard";
import Footer from "./components/Footer";
// import NFTCard from "./NFTCard";

const App: React.FC = () => {


  return (
    <div className="px-10 bg-black">
      <Hero/>
    <NFTCard />
    <Leaderboard/>
    <Footer/>
    </div>

  );
};

export default App;

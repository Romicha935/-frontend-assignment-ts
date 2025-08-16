// Leaderboard.tsx
import React from "react";

type Team = {
  id: number;
  name: string;
  logo: string;
  kills: number;
  sol?: number;
};

const teams: Team[] = [
  { id: 1, name: "REALTECH", logo: "/public/cropped-PRO-REAL-TECH-LOGO-1-removebg-preview.png", kills: 17 },
  { id: 2, name: "PSYCHO H2O", logo: "/public/icon-2.png", kills: 15, sol: 30 },
  { id: 3, name: "SSTS", logo: "/public/icon3.png", kills: 8, sol: 25 },
  { id: 4, name: "38TH AMA", logo: "/public/icon4.png", kills: 11, sol: 25 },
];

const Leaderboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center p-6">
      <h1 className="text-white text-4xl font-extrabold mb-6">THE LEAGUE</h1>

      <div className="w-full max-w-3xl bg-gray-900 border border-blue-500 rounded-lg p-4 space-y-4 ">
        {teams.map((team, idx) => (
          <div key={team.id}>
            <div className="flex items-center justify-between py-2 px-4 text-white">
              <div className="flex items-center gap-3">
                <img  src={team.logo} alt={team.name} className="w-10 h-8" />
                <span className="font-bold">{team.name}</span>
              </div>
              <div className="flex items-center gap-4">
               <div className="flex gap-1 items-center">
                 <span>{team.kills}</span>
                <span><img src="/public/iconImg.png" className="h-10 w-6" alt="" /></span>
               </div>
                {team.sol && <span>{team.sol} SOL</span>}
              </div>
            </div>
            {idx < teams.length - 1 && <hr className="border-red-500" />}
          </div>
        ))}
      </div>

      <div className="w-full max-w-3xl h-36 border  mt-6"></div>
    </div>
  );
};

export default Leaderboard;

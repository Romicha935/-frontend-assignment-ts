import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-gray-900 flex justify-center py-4">
      <div className="w-full cursor-pointer max-w-5xl py-5 border border-blue-500 flex justify-between items-center px-4 text-white text-xs font-bold italic">
        <span className="text-white">/ © WEB3TREE 2024</span>
        <span className="text-white">/ ALL RIGHTS RESERVED</span>
      </div>
    </footer>
  );
};

export default Footer;

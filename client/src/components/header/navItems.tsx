import React from "react";

interface Props {
  margin: string;
}

const NavItems: React.FC<Props> = ({ margin }) => {
  return (
    <>
      <a href="/products">
        <div
          className="border rounded-md py-1 px-3 cursor-pointer hover:bg-gray-100"
          style={{ marginRight: margin }}
        >
          Products
        </div>
      </a>
      <a href="/hiscores">
        <div
          className="border rounded-md py-1 px-3 cursor-pointer hover:bg-gray-100"
          style={{ marginRight: margin }}
        >
          Get HiScores
        </div>
      </a>
      <a href="/Leagues">
        <div
          className="border rounded-md py-1 px-3 cursor-pointer hover:bg-gray-100"
          style={{ marginRight: margin }}
        >
          Leagues HiScores
        </div>
      </a>
    </>
  );
};

export default NavItems;

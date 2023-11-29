import { Image } from "@chakra-ui/react";
import React from "react";

const Logo: React.FC = () => {
  return (
    <div className="flex flex-initial my-4 ml-8">
      <Image className="logo" src="first_logo.png" height={20} width={20} />
      <h1 className="underline text-3xl ml-8">XP Gains Tracker</h1>
    </div>
  );
};
export default Logo;

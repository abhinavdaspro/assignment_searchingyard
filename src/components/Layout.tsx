import React from "react";
import { Navbar } from "./Navbar";

type TProps = {
  children: React.ReactElement;
};

export const Layout = ({ children }: TProps) => {
  return (
    <div className="min-h-screen h-full bg-layout">
      <Navbar />
      <div className="w-screen h-auto px-4 sm:px-8 md:px-20 mt-10">
        {children}
      </div>
    </div>
  );
};

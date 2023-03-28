import React from "react";
import { Navbar } from "./Navbar";

type TProps = {
  children: React.ReactElement;
};

export const Layout = ({ children }: TProps) => {
  return (
    <div className="min-h-screen h-full bg-layout">
      <Navbar />
      {children}
    </div>
  );
};

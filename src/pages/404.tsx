import { Header } from "@/components/Header";
import React from "react";

const ErrorPage = () => {
  return (
    <>
      <Header pageName={"Not Found"} />
      <div className="w-full text-center ">
        <p className="text-primary font-mont font-light">
          Sorry, The page is not available.
        </p>
      </div>
    </>
  );
};

export default ErrorPage;

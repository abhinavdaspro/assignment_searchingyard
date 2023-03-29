import React from "react";

const LoadingSkeleton = () => {
  const arr = new Array(4);
  return (
    <>
      {arr.map((val, i) => {
        return (
          <div key={i} className="w-full">
            &nbsp;
          </div>
        );
      })}
    </>
  );
};

export default LoadingSkeleton;

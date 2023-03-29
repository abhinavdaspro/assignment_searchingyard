import React from "react";

const LoadingSkeleton = () => {
  const arr = [1,2,3,4];
  return (
    <>
      {arr.map((val, i) => {
        return (
          <div key={i} className="w-full rounded-xl bg-slate-300 h-40 animate-pulse">
            &nbsp;
          </div>
        );
      })}
    </>
  );
};

export default LoadingSkeleton;

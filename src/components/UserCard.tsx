import React from "react";
import { FaUserCircle } from "react-icons/fa";

type TProps = {
  data: object;
};

const UserCard = ({ data }: TProps) => {
  return (
    <div className="w-full bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition-all duration-150 ease-out cursor-pointer">
      <div className="flex items-center">
        <FaUserCircle className="h-6 w-6 text-slate-600" />
        <p className="pl-3 text-primary font-poppins text-base">{data.name}</p>
      </div>
    </div>
  );
};

export default UserCard;

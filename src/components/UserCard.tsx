import React from "react";
import { FaUserCircle, FaPhone } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { BiWorld } from "react-icons/bi";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { set_allUser, set_singleUser } from "@/redux/user/userReducer";

const UserCard = ({ data }: any) => {
  const users = useSelector((state: any) => state.AllUsers);
  const router = useRouter();
  const dispatch = useDispatch();
  const navigateUser = (val: any) => {
    dispatch(set_singleUser(val));
    router.push(`/user/${val.id}`);
  };

  const removeUser = (userId: number) => {
    let filterUser = users.filter((val: object) => val.id !== userId);
    dispatch(set_allUser(filterUser));
  };

  return (
    <div className="w-full flex flex-col bg-white shadow-md rounded-xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-200 ease-out cursor-pointer">
      <div className="flex items-center pb-4">
        <FaUserCircle className="h-6 w-6 text-slate-600" />
        <p className="pl-3 text-primary font-poppins text-base">{data.name}</p>
      </div>
      <div className="flex items-center mb-2">
        <span>
          <HiMail className="h-4 w-4 text-slate-600 mr-3" />
        </span>
        <p className="text-sm font-light break-all">{data.email}</p>
      </div>
      <div className="flex items-center mb-2">
        <span>
          <BiWorld className="h-4 w-4 text-slate-600 mr-3" />
        </span>
        <p className="text-sm font-light">{data.website}</p>
      </div>
      <div className="flex items-center mb-4">
        <span>
          <FaPhone className="h-4 w-4 text-slate-600 mr-3" />
        </span>
        <p className="text-sm font-light">{data.phone}</p>
      </div>

      <div className="flex items-center gap-x-2 mt-auto">
        <button
          onClick={() => {
            navigateUser(data);
          }}
          className="ml-auto text-sm px-2 py-1 border border-primary text-primary hover:text-white hover:bg-primary font-poppins transition-all duration-200 ease-in-out rounded-md"
        >
          View
        </button>
        <button
          onClick={() => {
            removeUser(data.id);
          }}
          className="text-sm px-2 py-1 border border-red-400 text-red-400 hover:text-white hover:bg-red-400 font-poppins transition-all duration-200 ease-in-out rounded-md"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default UserCard;

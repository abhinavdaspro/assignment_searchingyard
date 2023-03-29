import { useRouter } from "next/router";
import React from "react";
import { FaUserCircle, FaUserEdit } from "react-icons/fa";
import { HiArrowLeft } from "react-icons/hi";
import { useSelector } from "react-redux";

const UserOverView = () => {
  const router = useRouter();
  const singleUser = useSelector((state: any) => state.SingleUser);
  return (
    <>
      <button onClick={() => router.back()}>
        <HiArrowLeft className="h-6 w-6 text-primary" />
      </button>
      <div className="w-full bg-white rounded-xl shadow-lg shadow-primary-light p-6">
        <div className="flex items-center pb-4">
          <FaUserCircle className="h-8 w-8 text-slate-600" />
          <p className="pl-3 text-primary font-poppins text-xl">
            {singleUser?.name}
          </p>
          <button className="flex items-center ml-auto text-primary bg-white hover:bg-primary hover:text-white hover:shadow-lg hover:-translate-y-1 font-poppins text-base border border-primary px-2 py-1 rounded-md transition-all duration-200 ease-in-out">
            <FaUserEdit className="h-4 w-4 mr-3" />
            Edit
          </button>
        </div>

        <div className="grid grid-cols-2 mt-5 gap-2">
          <div className="flex flex-col gap-y-2">
            <div className="flex items-center">
              <p className="text-base font-poppins text-slate-500">Username:</p>
              <p className="text-base font-poppins ml-2">
                {singleUser?.username}
              </p>
            </div>
            <div className="flex items-center">
              <p className="text-base font-poppins text-slate-500">Email:</p>
              <p className="text-base font-poppins ml-2">{singleUser?.email}</p>
            </div>
            <div className="flex items-center">
              <p className="text-base font-poppins text-slate-500">Phone:</p>
              <p className="text-base font-poppins ml-2">{singleUser?.phone}</p>
            </div>
            <div className="flex items-center">
              <p className="text-base font-poppins text-slate-500">Phone:</p>
              <p className="text-base font-poppins ml-2">{singleUser?.phone}</p>
            </div>
            <div className="flex items-center">
              <p className="text-base font-poppins text-slate-500">Web:</p>
              <p className="text-base font-poppins ml-2">
                {singleUser?.website}
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-y-2">
            <div className="flex items-center">
              <p className="text-base font-poppins text-slate-500">Company:</p>
              <p className="text-base font-poppins ml-2">
                {singleUser?.company?.name}
              </p>
            </div>
            <div className="flex items-center">
              <p className="text-base font-poppins text-slate-500">Address:</p>
              <p className="text-base font-poppins ml-2">
                {`${singleUser?.address?.street}, ${singleUser?.address?.suite}`}
              </p>
            </div>
            <div className="flex items-center">
              <p className="text-base font-poppins text-slate-500">City:</p>
              <p className="text-base font-poppins ml-2">
                {singleUser?.address?.city}
              </p>
            </div>
            <div className="flex items-center">
              <p className="text-base font-poppins text-slate-500">Zip Code:</p>
              <p className="text-base font-poppins ml-2">
                {singleUser?.address?.zipcode}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserOverView;

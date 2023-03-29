import { Header } from "@/components/Header";
import UserCard from "@/components/UserCard";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { IoPersonAdd } from "react-icons/io5";

export default function Home() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const source = axios.CancelToken.source();
    let url = "https://jsonplaceholder.typicode.com/users";
    axios
      .get(url, { cancelToken: source.token })
      .then(({ data }) => {
        console.log("users----", data);
        setUsers(data);
      })
      .catch((err) => {
        // if (axios.isCancel(err)) {
        //   console.log("Axios request aborted.");
        // } else {
        //   console.error(err);
        // }
      });

    return () => {
      source.cancel();
    };
  }, []);

  return (
    <>
      <Header pageName={"Home"} />
      <div className="flex items-center mb-5">
        <p className="text-primary font-poppins text-lg">Users</p>
        <button className="rounded-md bg-white ml-auto px-4 py-1 border border-primary text-primary flex items-center hover:text-white hover:bg-primary font-poppins hover:-translate-y-1 hover:shadow-lg transition-all duration-200 ease-in-out">
          <IoPersonAdd className="h-3 w-3 mr-3" /> Add User
        </button>
      </div>
      <div className="w-full grid grid-cols-1 xxs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pb-10">
        {users.length > 0 &&
          users.map((val: object, i: number) => {
            return <UserCard key={i} data={val} />;
          })}
      </div>
    </>
  );
}

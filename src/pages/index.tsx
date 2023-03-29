import UserCard from "@/components/UserCard";
import axios from "axios";
import React, { useEffect, useState } from "react";

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
      <p className="text-primary font-poppins text-lg mb-5">Users</p>
      <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {users.length > 0 &&
          users.map((val: object, i: number) => {
            return <UserCard key={i} data={val} />;
          })}
      </div>
    </>
  );
}

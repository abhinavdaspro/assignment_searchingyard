import { Header } from "@/components/Header";
import UserCard from "@/components/UserCard";
import LoadingSkeleton from "@/components/LoadingSkeleton";
import { set_allUser } from "@/redux/user/userReducer";
import axios from "axios";
import React, { useEffect, useState } from "react";
import {MdPersonAddAlt1} from "react-icons/md"
import { useDispatch, useSelector } from "react-redux";
import UserCreateEditModal from "@/components/UserCreateEditModal";

export default function Home() {
  const users = useSelector((state: any) => state.AllUsers);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    let url = "https://jsonplaceholder.typicode.com/users";
    if (users.length === 0) {
      setLoading(true);
      axios
        .get(url, { signal })
        .then(({ data }) => {
          setLoading(false);
          dispatch(set_allUser(data));
        })
        .catch((err) => {
          setLoading(false);
          if (err.name !== "CanceledError") console.error("err---", err);
        });
    }
    return () => {
      controller.abort();
    };
  }, []);

  return (
    <>
      <Header pageName={"Home"} />
      <div className="flex items-center mb-5">
        <p className="text-primary font-poppins text-lg">Users</p>
        <button
          onClick={() => {
            setShowModal(true);
          }}
          className="rounded-md bg-primary ml-auto px-4 py-1 text-white flex items-center  font-poppins hover:-translate-y-1 hover:shadow-lg transition-all duration-200 ease-in-out"
        >
          <MdPersonAddAlt1 className="h-4 w-4 mr-3" /> Add User
        </button>
      </div>
      <div className="w-full grid grid-cols-1 xxs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pb-10">
        {loading && <LoadingSkeleton />}

        {users.length > 0 &&
          users.map((val: object, i: number) => {
            return <UserCard key={i} data={val} />;
          })}
      </div>
      <UserCreateEditModal
        show={showModal}
        setShow={setShowModal}
        action={"create"}
      />
    </>
  );
}

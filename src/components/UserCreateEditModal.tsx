import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";

const UserCreateEditModal = ({ show, setShow, action }: any) => {
  const singleUser = useSelector((state: any) => state.SingleUser);
  const [user, setUser] = useState({
    name: "",
    userName: "",
    email: "",
    phone: "",
    website: "",
    company: {
      name: "",
    },
    address: {
      city: "",
      street: "",
      suite: "",
    },
  });

  useEffect(() => {
    if (action === "edit") {
      setUser((prev) => ({
        ...prev,
        name: singleUser.name,
        userName: singleUser.username,
        email: singleUser.email,
        phone: singleUser.phone,
        website: singleUser.website,
        company: {
          ...prev.company,
          name: singleUser.company.name,
        },
        address: {
          ...prev.address,
          city: singleUser.address.city,
          street: singleUser.address.street,
        },
      }));
    }
  }, [action]);

  return (
    <Transition appear show={show} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={() => setShow(false)}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-primary uppercase"
                >
                  {action === "create" ? "Add User" : "Update User"}
                </Dialog.Title>
                <div className="grid grid-cols-1 xs:grid-cols-2 gap-3 mt-5">
                  <div>
                    <p className="text-sm font-normal font-poppins text-slate-700">
                      FullName
                    </p>
                    <input
                      type="text"
                      className="w-full focus:outline-none h-10 px-3 border border-primary-light rounded-md mt-1"
                      value={user.name}
                      onChange={(e) => {
                        setUser((prev) => ({
                          ...prev,
                          name: e.target.value,
                        }));
                      }}
                    />
                  </div>
                  <div>
                    <p className="text-sm font-normal font-poppins text-slate-700">
                      Username
                    </p>
                    <input
                      type="text"
                      className="w-full focus:outline-none h-10 px-3 border border-primary-light rounded-md mt-1"
                      value={user.userName}
                      onChange={(e) => {
                        setUser((prev) => ({
                          ...prev,
                          userName: e.target.value,
                        }));
                      }}
                    />
                  </div>
                  <div>
                    <p className="text-sm font-normal font-poppins text-slate-700">
                      Email
                    </p>
                    <input
                      type="email"
                      className="w-full focus:outline-none h-10 px-3 border border-primary-light rounded-md mt-1"
                      value={user.email}
                      onChange={(e) => {
                        setUser((prev) => ({
                          ...prev,
                          email: e.target.value,
                        }));
                      }}
                    />
                  </div>
                  <div>
                    <p className="text-sm font-normal font-poppins text-slate-700">
                      Phone
                    </p>
                    <input
                      type="number"
                      className="w-full focus:outline-none h-10 px-3 border border-primary-light rounded-md mt-1"
                      value={user.phone}
                      onChange={(e) => {
                        setUser((prev) => ({
                          ...prev,
                          phone: e.target.value,
                        }));
                      }}
                    />
                  </div>
                  <div>
                    <p className="text-sm font-normal font-poppins text-slate-700">
                      Website
                    </p>
                    <input
                      type="text"
                      className="w-full focus:outline-none h-10 px-3 border border-primary-light rounded-md mt-1"
                      value={user.website}
                      onChange={(e) => {
                        setUser((prev) => ({
                          ...prev,
                          website: e.target.value,
                        }));
                      }}
                    />
                  </div>
                  <div>
                    <p className="text-sm font-normal font-poppins text-slate-700">
                      Company Name
                    </p>
                    <input
                      type="text"
                      className="w-full focus:outline-none h-10 px-3 border border-primary-light rounded-md mt-1"
                      value={user.company.name}
                      onChange={(e) => {
                        setUser((prev) => ({
                          ...prev,
                          company: {
                            ...prev.company,
                            name: e.target.value,
                          },
                        }));
                      }}
                    />
                  </div>
                  <div>
                    <p className="text-sm font-normal font-poppins text-slate-700">
                      City
                    </p>
                    <input
                      type="text"
                      className="w-full focus:outline-none h-10 px-3 border border-primary-light rounded-md mt-1"
                      value={user.address.city}
                      onChange={(e) => {
                        setUser((prev) => ({
                          ...prev,
                          address: {
                            ...prev.address,
                            city: e.target.value,
                          },
                        }));
                      }}
                    />
                  </div>
                  <div>
                    <p className="text-sm font-normal font-poppins text-slate-700">
                      Street Address
                    </p>
                    <input
                      type="text"
                      className="w-full focus:outline-none h-10 px-3 border border-primary-light rounded-md mt-1"
                      value={user.address.city}
                      onChange={(e) => {
                        setUser((prev) => ({
                          ...prev,
                          street: {
                            ...prev.address,
                            city: e.target.value,
                          },
                        }));
                      }}
                    />
                  </div>
                  <div>
                    <p className="text-sm font-normal font-poppins text-slate-700">
                      Suite Address
                    </p>
                    <input
                      type="text"
                      className="w-full focus:outline-none h-10 px-3 border border-primary-light rounded-md mt-1"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-normal font-poppins text-slate-700">
                      ZipCode
                    </p>
                    <input
                      type="text"
                      className="w-full focus:outline-none h-10 px-3 border border-primary-light rounded-md mt-1"
                    />
                  </div>
                </div>

                <div className="mt-4">
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                  >
                    Got it, thanks!
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default UserCreateEditModal;

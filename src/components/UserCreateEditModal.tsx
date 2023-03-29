import { set_allUser, set_singleUser } from "@/redux/user/userReducer";
import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const UserCreateEditModal = ({ show, setShow, action }: any) => {
  const singleUser = useSelector((state: any) => state.SingleUser);
  const allUsers = useSelector((state: any) => state.AllUsers);
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    name: "",
    username: "",
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
      zipcode: "",
    },
  });

  useEffect(() => {
    if (action === "edit") {
      setUser((prev) => ({
        ...prev,
        name: singleUser.name,
        username: singleUser.username,
        email: singleUser.email,
        phone: singleUser.phone,
        website: singleUser.website,
        company: {
          ...prev.company,
          name: singleUser.company?.name,
        },
        address: {
          ...prev.address,
          city: singleUser.address?.city,
          suite: singleUser.address?.suite,
          street: singleUser.address?.street,
          zipcode: singleUser.address?.zipcode,
        },
      }));
    }
  }, [action, singleUser]);

  const handleSubmit = (e:any) => {
    e.preventDefault();
    switch (action) {
      case "create":
        if (user.phone.length < 10) {
          alert("Please enter a valid phone number");
          return;
        }
        let finalUsers = [user, ...allUsers];
        // allUsers.push(user);
        dispatch(set_allUser(finalUsers));
        break;
      case "edit":{

        let index= allUsers.findIndex((val:any)=> val.id=== singleUser.id)
        let copyUser= [...allUsers]
        copyUser.splice(index, 1, {id:singleUser.id, ...user})
        dispatch(set_allUser(copyUser));
        dispatch(set_singleUser({id:singleUser.id, ...user}))
        break;
      }  
      default:
        break;
    }

    cleanUp();
  };

  const cleanUp = () => {
    if(action === "create"){
      setUser((prev) => ({
        ...prev,
        name: "",
        username: "",
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
          zipcode: "",
        },
      }));
    }

    setShow(false);
  };

  return (
    <Transition appear show={show} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={() => cleanUp()}>
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
                <form
                  onSubmit={(e) => {
                    handleSubmit(e);
                  }}
                >
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
                        required
                      />
                    </div>
                    <div>
                      <p className="text-sm font-normal font-poppins text-slate-700">
                        Username
                      </p>
                      <input
                        type="text"
                        className="w-full focus:outline-none h-10 px-3 border border-primary-light rounded-md mt-1"
                        value={user.username}
                        onChange={(e) => {
                          setUser((prev) => ({
                            ...prev,
                            username: e.target.value,
                          }));
                        }}
                        required
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
                        required
                      />
                    </div>
                    <div>
                      <p className="text-sm font-normal font-poppins text-slate-700">
                        Phone
                      </p>
                      <input
                        type="text"
                        className="w-full focus:outline-none h-10 px-3 border border-primary-light rounded-md mt-1"
                        min={"10"}
                        value={user.phone}
                        onChange={(e) => {
                            setUser((prev) => ({
                              ...prev,
                              phone: e.target.value,
                            }));
                        }}
                        required
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
                        required
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
                        required
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
                        required
                      />
                    </div>
                    <div>
                      <p className="text-sm font-normal font-poppins text-slate-700">
                        Street Address
                      </p>
                      <input
                        type="text"
                        className="w-full focus:outline-none h-10 px-3 border border-primary-light rounded-md mt-1"
                        value={user.address.street}
                        onChange={(e) => {
                          setUser((prev) => ({
                            ...prev,
                            address: {
                              ...prev.address,
                              street: e.target.value,
                            },
                          }));
                        }}
                        required
                      />
                    </div>
                    <div>
                      <p className="text-sm font-normal font-poppins text-slate-700">
                        Suite Address
                      </p>
                      <input
                        type="text"
                        className="w-full focus:outline-none h-10 px-3 border border-primary-light rounded-md mt-1"
                        value={user.address.suite}
                        onChange={(e) => {
                          setUser((prev) => ({
                            ...prev,
                            address: {
                              ...prev.address,
                              suite: e.target.value,
                            },
                          }));
                        }}
                        required
                      />
                    </div>
                    <div>
                      <p className="text-sm font-normal font-poppins text-slate-700">
                        ZipCode
                      </p>
                      <input
                        type="text"
                        className="w-full focus:outline-none h-10 px-3 border border-primary-light rounded-md mt-1"
                        value={user.address.zipcode}
                        onChange={(e) => {
                          setUser((prev) => ({
                            ...prev,
                            address: {
                              ...prev.address,
                              zipcode: e.target.value,
                            },
                          }));
                        }}
                        required
                      />
                    </div>
                  </div>

                  <div className="mt-8 flex items-center gap-x-3">
                    <button
                      type="button"
                      onClick={() => cleanUp()}
                      className="ml-auto text-red-400 bg-white border border-red-400 h-8 px-3 rounded-md hover:shadow-lg transition-all duration-200 ease-in-out"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="text-white bg-primary h-8 px-3 rounded-md hover:shadow-lg transition-all duration-200 ease-in-out"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default UserCreateEditModal;

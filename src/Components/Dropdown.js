import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { useNavigate } from "react-router-dom";
// import {  MenuItem } from "@progress/kendo-react-layout";
import { Route, Routes } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Login from "../Components/Auth";
import DayAhead from "../Components/Dayahead";
import CreateUser from "../Components/create-user";
import DeleteUser from "../Components/delete-user";
import UpdateUserPassword from "../Components/update-user-password";
import ResetPassword from "../Components/reset-password"

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function DropdownComponent() {

    const navigate = useNavigate();
    const onSelect = (event) => {
      navigate(event.item.data.route);
    };
    // const {myValue} = props;
    return (
        <Fragment>        
        
        <Menu as="div" className="relative inline-block text-left">
            <div>
                <Menu.Button className="inline-flex justify-center w-full px-2 text-sm font-medium text-gray-100 rounded-md shadow-sm focus:ring-1  ">
                    Accounts
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 ml-2 -mr-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19 9l-7 7-7-7"
                        />
                    </svg>
                </Menu.Button>
            </div>

            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >                
                <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">                    
                    <div className="py-1">
                    {/* <li><NavLink to={`/Online`}> Online </NavLink> </li> */}
                        {/* <Menu.Item>
                            {({ active }) => (
                            
                                <NavLink to={`/update-password`} className={classNames(
                                    active
                                        ? "bg-gray-100 text-gray-900"
                                        : "text-gray-700",
                                    "block px-4 py-2 text-sm"
                                )} element={<UpdateUserPassword/>} >
                                    Change Password
                                </NavLink> 
                                                           
                            )}
                        </Menu.Item> */}
                        <Menu.Item>
                            {({ active }) => (
                                <a
                                    href="/create-user"
                                    className={classNames(
                                        active
                                            ? "bg-gray-100 text-gray-900"
                                            : "text-gray-700",
                                        "block px-4 py-2 text-sm"
                                    )}
                                >
                                    Create User Account
                                </a>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <a
                                    href="/delete-user"
                                    className={classNames(
                                        active
                                            ? "bg-gray-100 text-gray-900"
                                            : "text-gray-700",
                                        "block px-4 py-2 text-sm"
                                    )}
                                >
                                    Delete User Account
                                </a>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <a
                                    href="/update-user-password"
                                    className={classNames(
                                        active
                                            ? "bg-gray-100 text-gray-900"
                                            : "text-gray-700",
                                        "block px-4 py-2 text-sm"
                                    )}
                                >
                                    Update User Password
                                </a>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <a
                                    href="/create-user"
                                    className={classNames(
                                        active
                                            ? "bg-gray-100 text-gray-900"
                                            : "text-gray-700",
                                        "block px-4 py-2 text-sm"
                                    )}
                                >
                                    Update User Role
                                </a>
                            )}
                        </Menu.Item>
                        {/* <form method="POST" action="#">
                            <Menu.Item>
                                {({ active }) => (
                                    <button
                                        type="submit"
                                        className={classNames(
                                            active
                                                ? "bg-gray-100 text-gray-900"
                                                : "text-gray-700",
                                            "block w-full text-left px-4 py-2 text-sm"
                                        )}
                                    >
                                        Sign out
                                    </button>
                                )}
                            </Menu.Item>
                        </form> */}
                    </div>                    
                </Menu.Items>
                {/* : */}                    
            </Transition>
        </Menu>
        </Fragment>
    );
}
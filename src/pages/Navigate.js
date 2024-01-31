import React from 'react';
import './css/Navigate.css';

import { AiOutlineHome } from "react-icons/ai";
import { FaBars, FaRegUser } from 'react-icons/fa';
import { HiOutlineBookOpen } from "react-icons/hi2";
import { FiLogOut } from "react-icons/fi";
import { Link } from "react-router-dom";

import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';

export default function Navigate() {
  return (
    <div>
        <div className='burn'>
          <div className='text-3xl ml-10 flex ring-0 gap-x-8 columns-2 hover:columns-3 items-center md:font-bold justify-center'>
            <Link to="/home"><AiOutlineHome /></Link>
            <Link to="/aboute"><HiOutlineBookOpen /></Link>
            <Link to="/profile"><FaRegUser /></Link>
          </div>
          <div className='bum'>
        <div className="fixed top-2 text-right">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button>
            <FaBars />
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
          <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              <Menu.Item>
                {({ active }) => (
                  <Link
                    to="/profile"
                    className={`${
                      active ? 'bg-violet-500 text-white' : 'text-gray-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    {active ? (
                      <FaRegUser
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    ) : (
                      <FaRegUser
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    )}
                    Profile
                  </Link>
                )}
              </Menu.Item>
            </div>
            <div className="px-1 py-1">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-violet-500 text-white' : 'text-gray-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    {active ? (
                      <FiLogOut
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    ) : (
                      <FiLogOut
                        className="mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                    )}
                    Logout
                  </button>
                )}
              </Menu.Item>
            </div>
            <div className="px-1 py-1">
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
          </div>
        </div>
    </div>
  )
}

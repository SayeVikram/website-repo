"use client";
import React from "react";
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from "next/link";
import { usePathname } from 'next/navigation';


const NavBar = () => {

  const path = usePathname()

  const navigation =  [
  { name: 'Home', href: '/'},
  { name: 'Blog', href: '/Blog' },
  { name: 'Projects', href: '/Projects' },
  { name: 'Contact Me', href: '/Contact' }
  
  ]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}




    return(
        <Disclosure as="nav" className="!bg-[#121212] right-0 left-0 top-0 z-1 fixed">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 ">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">

            <DisclosureButton className="border-none group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 hover:border-none focus:ring-white focus:outline-hidden focus:ring-inset">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center">
              <img
                alt="Your Company"
                src="/svk.png"
                className="h-8 w-auto"
              />
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={path === (item.href) ? 'page' : undefined}
                    className={classNames(
                      (path === (item.href)) ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'no-underline rounded-md px-3 py-2 text-sm font-medium',
                    )}
                  >
                    {item.name}
                  </a>
                 
                ))}
              </div>
            </div>
          </div>
          
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pt-2 pb-3">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              aria-current={(path === (item.href)) ? 'page' : undefined}
              className={classNames(
                (path === (item.href)) ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:border-none hover:text-white',
                'no-underline block rounded-md px-3 py-2 text-base font-medium',
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
    );
}

export default NavBar;
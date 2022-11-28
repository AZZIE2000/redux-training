import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {
    return (
        <nav class="bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-900  w-full z-20 border-b border-gray-200 dark:border-gray-600 mb-10">
            <div class="container flex flex-wrap items-center justify-around mx-auto">
                <p href="https://flowbite.com/" class="flex items-center">
                    <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                        Banker Land
                    </span>
                </p>

                <div
                    class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
                    id="navbar-sticky"
                >
                    <ul class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    )
}

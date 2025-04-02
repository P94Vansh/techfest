"use client";

import { useState } from 'react';
import { IoIosAdd } from "react-icons/io";

const CheckboxComponent = () => {
    // State to keep track of the checkbox status
    const [isChecked, setIsChecked] = useState(false);

    // Function to handle the checkbox change
    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    return (
        <div className="flex items-center">
            <input 
                type="checkbox" 
                id="my-checkbox" 
                className="form-checkbox h-5 w-5 text-blue-600"
                checked={isChecked}
                onChange={handleCheckboxChange} 
            />
            <label htmlFor="my-checkbox" className="ml-2 text-gray-700">
                {isChecked ? 'Checked' : 'Unchecked'}
            </label>
        </div>
    );
};

const Page = () => {
    const [isOpen, setIsOpen] = useState({});

    const visibilityfunc = (eventname) => {
        setIsOpen((prev) => ({
            ...prev,
            [eventname]: !prev[eventname],
        }));
    };

    return (
        <div>
            <div className="flex justify-center gap-8 p-9 items-center">
                <div className='font-bold text-4xl'>BGMI</div>
                <div className='font-bold text-4xl' onClick={() => visibilityfunc("bgmi")}>
                    <IoIosAdd />
                </div>
            </div>

            {isOpen.bgmi && (
                <div>
                    <form className="max-w-md mx-auto">
                        <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>
                            </div>
                            <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Roll No" required />
                            <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                        </div>
                    </form>

                    <div className="relative shadow-md sm:rounded-lg">
                        <div className="flex flex-col">
                            <div className="-m-1.5 overflow-x-auto">
                                <div className=" min-w-full inline-block align-middle">
                                    <div className="overflow-hidden">
                                        <table className="min-w-full divide-y divide-gray-200">
                                            <thead>
                                                <tr>
                                                    <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Name</th>
                                                    <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Email Id</th>
                                                    <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Events</th>
                                                    <th scope="col" className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase">Roll No</th>
                                                    <th scope="col" className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase">Transaction Id</th>
                                                    <th scope="col" className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase">Payment CheckBox</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-gray-200">
                                                <tr className="hover:bg-gray-100">
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">John Brown</td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">john@example.com</td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">BGMI</td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">12345</td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">TRX12345</td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                                                        <CheckboxComponent />
                                                    </td>
                                                </tr>
                                                {/* Add other rows here */}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Page;

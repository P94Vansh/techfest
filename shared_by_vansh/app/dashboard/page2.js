"use client";
import { useState, useCallback } from "react";

const CheckboxComponent = ({ isChecked, handleCheckboxChange }) => {
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

const Select = ({
    label,
    name,
    value = -1,
    onChange,
    options = [],
    id,
    className,
    required = false,
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(value);

    const handleToggle = useCallback(() => {
        setIsOpen((prevIsOpen) => !prevIsOpen);
    }, []);

    const handleOptionClick = (index, e) => {
        e.stopPropagation();    
        setSelectedOption(index);
        setIsOpen(false);
        if (onChange) {
            onChange({ target: { name, value: options[index] } });
        }
    };

    const handleKeyDown = (event) => {
        if (event.key === " " || event.key === "Enter") {
            event.preventDefault();
            handleToggle();
        }
    };

    const handleKeys = (e) => {
        e.stopPropagation();
        if (e.code !== "ArrowUp" && e.code !== "ArrowDown") return;
        let index;
        if (e.code === "ArrowUp") {
            index = (selectedOption - 1 + options.length) % options.length;
        } else if (e.code === "ArrowDown") {
            index = (selectedOption + 1) % options.length;
        } else if (e.key === "Enter" || e.key === " ") {
            return setIsOpen(false);
        }

        setSelectedOption(index);
        if (onChange) {
            onChange({ target: { name, value: options[index] } });
        }
    };

    return (
        <div className={`relative flex flex-col mb-3 ${className}`} tabIndex={0}>
            {label && (
                <label htmlFor={id} className="text-black mb-1">
                    {label} {required && "*"}
                </label>
            )}
            <div
                id={id}
                className="relative cursor-pointer border border-gray-300 rounded-md shadow-sm bg-[#ffffff01] focus:outline-none focus:ring-[3px] focus:ring-blue-500 focus:border-transparent"
                onClick={handleToggle}
                onKeyDown={handleKeyDown}
            >
                <div className="px-3 py-2 flex justify-between items-center">
                    <span className="text-black">
                        {selectedOption >= 0 ? options[selectedOption] : "Select an option"}
                    </span>
                    <svg
                        className={`w-5 h-5 transition-transform ${isOpen ? "rotate-180" : ""}`}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                    >
                        <path
                            fillRule="evenodd"
                            d="M6.293 9.293a1 1 0 011.414 0L10 10.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                            clipRule="evenodd"
                        />
                    </svg>
                </div>
                {isOpen && (
                    <div
                        tabIndex={0}
                        onKeyDown={handleKeys}
                        className="absolute z-10 mt-1 w-full bg-[#000000] border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto focus:outline-none focus:ring-[3px] focus:ring-blue-500 focus:border-transparent"
                    >
                        {options.map((option, i) => (
                            <div
                                key={i}
                                className={`px-3 py-2 cursor-pointer hover:bg-[#ffffff33] text-white ${
                                    i === selectedOption ? "bg-[#4455ff]" : ""
                                }`}
                                onClick={(e) => handleOptionClick(i, e)}
                            >
                                {option}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

const Page = () => {
    const [checkboxStates, setCheckboxStates] = useState([
        { id: 1, isChecked: false },
        // Add more checkboxes here if needed
    ]);

    const [searchColumn, setSearchColumn] = useState("Name");
    const [searchQuery, setSearchQuery] = useState("");

    const data = [
        { id: 1, name: "John Brown", email: "john@example.com", events: "BGMI", rollNo: "12345", transactionId: "TRX12345" },
        // Add more data rows here
    ];

    const handleCheckboxChange = (index) => {
        const updatedCheckboxes = [...checkboxStates];
        updatedCheckboxes[index].isChecked = !updatedCheckboxes[index].isChecked;
        setCheckboxStates(updatedCheckboxes);
    };

    const handleInput = (event) => {
        setSearchColumn(event.target.value);
    };

    const handleSearch = (event) => {
        setSearchQuery(event.target.value);
    };

    const filteredData = data.filter((row) => {
        if (searchColumn === "Name") {
            return row.name.toLowerCase().includes(searchQuery.toLowerCase());
        } else if (searchColumn === "Email Id") {
            return row.email.toLowerCase().includes(searchQuery.toLowerCase());
        } else if (searchColumn === "Events") {
            return row.events.toLowerCase().includes(searchQuery.toLowerCase());
        } else if (searchColumn === "Roll NO") {
            return row.rollNo.toLowerCase().includes(searchQuery.toLowerCase());
        } else if (searchColumn === "Transaction Id") {
            return row.transactionId.toLowerCase().includes(searchQuery.toLowerCase());
        }
        return false;
    });

    return (
        <div>
            <div className="p-9">
                <div className="font-bold text-4xl">Dashboard</div>
                <div className="flex flex-col md:flex-row gap-x-5">
                    <Select
                        label={"Search By Column Name"}
                        name={"searchcolname"}
                        options={["Name", "Email Id", "Events", "Roll NO", "Transaction Id"]}
                        className={"flex-1 "}
                        onChange={handleInput}
                        required
                    />
                    <div className="flex-1"></div>
                </div>
                    <input
                        type="text"
                        placeholder="Search..."
                        value={searchQuery}
                        onChange={handleSearch}
                        className="flex-1 p-2 border border-gray-300 rounded-md"
                    />
            </div>

            <div className="relative shadow-md sm:rounded-lg">
                <div className="flex flex-col">
                    <div className="-m-1.5 overflow-x-auto">
                        <div className="p-1.5 min-w-full inline-block align-middle">
                            <div className="overflow-hidden">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead>
                                        <tr>
                                            <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">
                                                Name
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">
                                                Email Id
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">
                                                Events
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase">
                                                Roll No
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase">
                                                Transaction Id
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase">
                                                Payment CheckBox
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200">
                                        {filteredData.map((row, index) => (
                                            <tr key={row.id} className="hover:bg-gray-100">
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                                                    {row.name}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                                                    {row.email}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{row.events}</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">{row.rollNo}</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">{row.transactionId}</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                                                    <CheckboxComponent
                                                        isChecked={checkboxStates[index].isChecked}
                                                        handleCheckboxChange={() => handleCheckboxChange(index)}
                                                    />
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;

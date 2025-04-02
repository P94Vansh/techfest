"use client";

import { useEffect, useReducer, useRef, useState } from "react";
import Select from "../components/select";
import Link from "next/link";

export default function Dashboard() {
  const [loading, setLoading] = useState(true);
  const [col, setCol] = useState("firstname");

  const [data, setData] = useState([
    {
      universityrollno: "2320000157",
      emailaddress: "abhaybishthestudent@gmail.com",
      firstname: "Abhay",
      lastname: " ",
      branch: "MCA",
      department: "USCS",
      year: 2,
      phonenumber: "9639147660",
      selectedevents: ["BGMI BADSHAH", "Website making competition"],
      gender: "Male",
      semester: 3,
      transaction_id: "hello",
      event: "Face Painting",
      amount: "50.00",
      verified: false,
    },
  ]);
  const [filteredData, setFilteredData] = useState(data);
  const [refreshDisabled, setRefreshDisabled] = useState(false);

  const fetchNewData = async () => {
    setLoading(true);
    let res = await fetch("/api/registration");
    let newdata = await res.json();
    setLoading(false);
    setData(newdata);
    setFilteredData(newdata);

    return newdata;
    // .then((res) => res.json())
    // .then((newdata) => {
    //   setLoading(false);
    //   setData(newdata);
    //   setFilteredData(newdata);
    // });
  };

  const loadData = () => {
    // load data from cache first
    let newdata;
    if (localStorage.getItem("newdata")) {
      try {
        newdata = JSON.parse(localStorage.getItem("newdata"));
        setLoading(false);
        setData(newdata);
        setFilteredData(newdata);
        return;
      } catch (e) {}
    }
    if (newdata) return;
    fetchNewData().then((newdata) => {
      localStorage.setItem("newdata", JSON.stringify(newdata));
    });
    // return ()=>{};
  };

  useEffect(loadData, []);

  const handleRefresh = () => {
    setRefreshDisabled(true);
    fetchNewData().then((newdata) => {
      setRefreshDisabled(false);
      localStorage.setItem("newdata", JSON.stringify(newdata));
    });
  };

  const handleSearch = (searchTerm) => {
    // console.log(data);
    if (!searchTerm) {
      setFilteredData(data);
    } else {
      setFilteredData(
        data.filter(
          (row) =>
            row[col] + "" &&
            (row[col] + "").toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }
  };

  const handleVerify = (transaction_id, newValue, setDisabled) => {
    console.log({ transaction_id, newValue });
    setDisabled(true);
    let index = data.findIndex((row) => row.transaction_id === transaction_id);
    if (index === -1) return;
  
    data[index].verified = "updating";
  
    fetch("/api/transaction", {
      headers: {
        "content-type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({ transaction_id, value: newValue }),
    })
      .then(async (res) => {
        if (res.ok) {
          let { type } = await res.json();
          switch (type) {
            case "success":
              data[index].verified = newValue;
              setData([...data]);
              localStorage.setItem("newdata", JSON.stringify(data));
              break;
            case "error":
              console.error("Error updating verification status");
              break;
          }
        }
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setDisabled(false);
      });
  };
  return (
    <>
      <div className="min-h-screen dark:bg-gray-950">
        <h1 className="text-4xl text-center font-medium py-5 dark:text-white">
          Registration Records
        </h1>

        {/* Table contanier */}
        {loading && (
          <div className="flex flex-col items-center justify-center p-10 text-xl gap-4 dark:text-white ">
            <div className="h-20 w-20 rounded-full border-[10px] dark:border-[rgba(0,0,0,0.3)] border-[rgba(0,0,0,0.1)] border-t-[royalblue] spinner"></div>
            <div>Loading</div>
          </div>
        )}
        {!loading && (
          <div className="w-[95%] rounded-md  mx-auto pb-10 min-h-20 mt-10">
            <div className="w-full md:w-[500px] mx-auto">
              <SearchBox className="mb-3" onSearch={handleSearch} />
              <Select
                className="w-full md:w-[300px] "
                theme="light"
                name="col"
                value={col}
                onChange={(e) => setCol(e.target.value)}
                label={"Search by Column"}
                options={Array.isArray(data) ? Object.keys(data[0] || {}) : []}
              />
            </div>
            <Table
              handleVerify={handleVerify}
              data={filteredData}
              className="rounded-md"
              onRefresh={handleRefresh}
              isRefreshDisabled={refreshDisabled}
            />
          </div>
        )}
      </div>
      {/* logout container */}
      {/* <div className="dark:bg-gray-950 dark:text-white text-center py-4">
        <Link href={"/api/logout"}>
          <button className=" border border-gray-300 dark:border-gray-800 rounded py-3 px-5">
            Logout
          </button>
        </Link>
      </div> */}
    </>
  );
}

function Table({ data, className, onRefresh, isRefreshDisabled, handleVerify }) {
  if (!data?.length)
    return (
      <div className="w-full rounded p-10 text-2xl text-center dark:text-gray-500 sticky top-0 border dark:border-gray-800 border-gray-50">
        No Records
      </div>
    );

  const headers = Object.keys(data[0]);
  const [active, setActive] = useState(-1);

  const handleActive = (index) => {
    if (index === active) return setActive(-1);
    else setActive(index);
  };

  return (
    <>
      <div className="mb-2 dark:text-gray-200 ml-5">
        <span>
          {data.length} {data.length > 1 ? "records" : "record"} found
        </span>
        <button
          className="px-5 bg-[royalblue] text-white py-2 rounded-full ml-3 hover:bg-blue-700"
          onClick={onRefresh}
          disabled={isRefreshDisabled}
        >
          Refresh
        </button>
      </div>
      <div
        className={`relative overflow-x-auto border border-gray-300 rounded-md dark:border-gray-800 ${className}`}
      >
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-[#eef] dark:bg-gray-700 dark:text-gray-400">
            <tr>
              {headers.map((header, index) => (
                <th key={index} scope="col" className="px-6 py-3">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className={
                  "bg-white border-b dark:bg-gray-800 dark:border-gray-700 " +
                  (rowIndex === active ? "dark:bg-gray-900 bg-gray-200" : "")
                }
              >
                {headers.map((header, colIndex) => (
                  <td
                    key={colIndex}
                    className={"px-6 py-4 whitespace-nowrap "}
                    onClick={() => handleActive(rowIndex)}
                  >
                    {header.toLowerCase() === "verified" ? (
                      <VerifyButton
                        value={row[header]}
                        onClick={(newValue, setDisabled) =>
                          handleVerify(row["transaction_id"], newValue, setDisabled)
                        }
                      />
                    ) : Array.isArray(row[header]) ? (
                      row[header].join(", ")
                    ) : (
                      row[header] + ""
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
} 
function VerifyButton({ value, onClick }) {
  const [disabled, setDisabled] = useState(false);

  const handleClick = (newValue) => {
    setDisabled(true);
    onClick(newValue, () => setDisabled(false));
  };

  return (
    <div className="flex gap-2">
      <button
        onClick={() => handleClick(true)}
        disabled={disabled}
        className={`border border-gray-200 dark:border-gray-700 px-3 py-1 rounded cursor-pointer active:scale-95 ${
          value === true ? "bg-green-500 text-white" : ""
        }`}
      >
        True
      </button>
      <button
        onClick={() => handleClick(false)}
        disabled={disabled}
        className={`border border-gray-200 dark:border-gray-700 px-3 py-1 rounded cursor-pointer active:scale-95 ${
          value === false ? "bg-red-500 text-white" : ""
        }`}
      >
        False
      </button>
    </div>
  );
}
function SearchBox_({ className, onSearch }) {
  const inputRef = useRef(null);

  return (
    <form className={"md:w-[500px] w-full md:mx-auto " + className}>
      <label
        for="default-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
      >
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search Records ..."
          required
        />
        <button
          type="submit"
          className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Search
        </button>
      </div>
    </form>
  );
}

function SearchBox({ className, onSearch }) {
  const inputRef = useRef(null);

  const handleSearch = (event) => {
    event.preventDefault();
    onSearch(inputRef.current.value);
  };

  return (
    <form
      className={"md:w-[500px] w-full md:mx-auto " + className}
      onSubmit={handleSearch}
    >
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
      >
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          ref={inputRef}
          className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search Records ..."
        />
        <button
          type="submit"
          className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Search
        </button>
      </div>
    </form>
  );
}

"use client";

import Head from "next/head";
import { useState } from "react";
import Info from "../components/infobox";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
  const [password, setPassword] = useState("");

  const [infoTheme, setInfoTheme] = useState('none');
  const [infoText, setInfoText] = useState('Info Text');

  const handleSubmit = async (e) =>{
    e.preventDefault();

    setInfoTheme("suggest")
    setInfoText("Logging in ...")

    try {
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ password }),
      });

      const data = await res.json();

      if (res.ok) {
        // If login is successful, set success message
        setInfoTheme('success');
        setInfoText("Login Successfull");
        
        router.replace("/dashboard")
        // console.log('Login successful:', data);
      } else {
        // If login failed, set the error message from the response
        setInfoTheme('error');
        setInfoText('Login Failed')
        console.log('Login failed:', data);
      }
    } catch (err) {
      // Catch any unexpected errors (e.g., network issues)
      // setError('Something went wrong. Please try again.');
      setInfoTheme('error');
      setInfoText("Network Error")
      console.log('Error:', err);
    }
  }
  return (
    <div className="bg-[#223] h-svh flex flex-col shrink-0 justify-start pt-32 gap-y-8">
      <title>ADMIN LOGIN</title>
      <h1 className="text-3xl text-white text-center">ADMIN LOGIN</h1>
      <form
        className="max-w-[600px] mx-auto shrink-0 flex flex-col justify-center px-7"
        style={{ width: "min(500px, 98%)" }}
        action="/api/login"
        method="post"
        onSubmit={handleSubmit}
      >
        <div className="mb-5">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Admin password
          </label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            name='admin-password'
            id="password"
            placeholder="Admin Password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <div className="relative">
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Login
          </button>
          <div className="h-4"></div>
          <Info theme={infoTheme} text={infoText} className="absolute w-full" />
        </div>
      </form>
    </div>
  );
}

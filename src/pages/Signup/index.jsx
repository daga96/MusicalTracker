// src/Signup.js

import React, { useState } from "react";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = () => {
    console.log("Signing up with:", { email, username, password });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen h-full w-screen bg-zinc-900 text-white">
      <div className="bg-zinc-700 p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-6 text-zinc-100">Sign Up</h2>
        <div className="mb-4">
          <label
            className="block text-zinc-100 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email Address
          </label>
          <input
            className="w-full p-3 rounded bg-zinc-800 text-zinc-100"
            type="email"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-zinc-100 text-sm font-bold mb-2"
            htmlFor="username"
          >
            Username
          </label>
          <input
            className="w-full p-3  rounded bg-zinc-800 text-zinc-100"
            type="text"
            id="username"
            placeholder="Choose a username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-zinc-100 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="w-full p-3  rounded bg-zinc-800 text-zinc-100"
            type="password"
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          className="bg-yellow-500 text-zinc-900 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue active:bg-yellow-800"
          onClick={handleSignup}
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Signup;

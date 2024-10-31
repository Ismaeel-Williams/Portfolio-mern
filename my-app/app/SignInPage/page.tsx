"use client";

import Link from "next/link";
import { useState } from "react";

export default function Page1() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <>
      <div className="text-center h-screen bg-[#FCFAEE] flex items-start justify-center pt-24">
        <div className="bg-[#507687] w-max text-[#FCFAEE] p-16 rounded-lg font-semibold flex flex-col">
          <h1 className="text-5xl mb-6">Basic Sign In Here</h1>
          <form className="text-xl space-y-4 mb-2" onSubmit={handleSubmit}>
            <div className="flex items-center">
              <label htmlFor="email" className="w-24 text-left">
                Email:
              </label>
              <input
                type="email"
                className="p-1 rounded ml-2 text-black"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex items-center">
              <label htmlFor="password" className="w-24 text-left">
                Password:
              </label>
              <input
                type="password"
                className="p-1 rounded ml-2 text-black"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="bg-[#384B70] rounded-md px-5 py-2 mt-4"
            >
              Sign In
            </button>
          </form>
          <Link href="/SignUpPage" passHref>
            <button className="bg-[#384B70] rounded-md px-5 py-2 mb-4">
              Sign Up
            </button>
          </Link>
          <p className="mt-auto">Disclaimer: make a mock email and name.</p>
        </div>
      </div>
    </>
  );
}

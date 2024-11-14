"use client";

import { useState } from "react";
import { useRouter } from "next/navigation"; // Import useRouter for navigation

export default function SignUpPage() {
  const router = useRouter(); // Initialize useRouter for navigation
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // State for error handling

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newUser = {
      name,
      surname,
      email,
      password,
    };

    try {
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      });

      if (response.status === 409) {
        throw new Error("User already exists");
      }

      if (!response.ok) {
        throw new Error("Failed to sign up. Please try again.");
      }

      router.push("/pages/confirmPage");
    } catch (error: unknown) {
      console.error(error);
      if (error instanceof Error) {
        setError(error.message); // Show the specific error message
      } else {
        setError("An unexpected error occurred.");
      }
    }
  };

  return (
    <div className="text-center h-screen min-h-max bg-[#FCFAEE] flex items-start justify-center pt-24 pb-20">
      <div className="bg-[#507687] w-max text-[#FCFAEE] p-16 rounded-lg font-semibold flex flex-col">
        <h1 className="text-5xl mb-6">Basic Sign Up Here</h1>
        <form className="text-xl space-y-6 mb-2" onSubmit={handleSubmit}>
          <div className="flex items-center">
            <label className="w-24 text-left">Name:</label>
            <input
              type="text"
              className="p-1 rounded ml-2 text-black"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required // Optional: enforce field to be required
            />
          </div>
          <div className="flex items-center">
            <label className="w-24 text-left">Surname:</label>
            <input
              type="text"
              className="p-1 rounded ml-2 text-black"
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
              required
            />
          </div>
          <div className="flex items-center">
            <label htmlFor="email" className="w-24 text-left">
              Email:
            </label>
            <input
              type="email"
              className="p-1 rounded ml-2 text-black"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
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
              required
            />
          </div>
          <button
            type="submit"
            className="bg-[#384B70] rounded-md px-5 py-2 mt-8"
          >
            Sign Up
          </button>
        </form>
        {error && <p className="text-red-500">{error}</p>}{" "}
        {/* Display error message */}
        <p className="mt-auto">Disclaimer: make a mock email and name.</p>
      </div>
    </div>
  );
}

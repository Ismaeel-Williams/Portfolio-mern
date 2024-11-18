"use client";

import Link from "next/link";
import { useState } from "react";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // State for error handling
  const [loading, setLoading] = useState(false); // Loading state for form submission

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      // Send sign-in request to your custom API route
      const response = await fetch("/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const result = await response.json();

      if (response.ok) {
        // If sign-in is successful, redirect to dashboard or home page
        window.location.href = "/pages/dashboard"; // Redirect to dashboard or another page
      } else {
        // Handle error if sign-in fails
        setError(result.message || "An error occurred during sign-in.");
      }
    } catch (error) {
      setError("An error occurred during sign-in.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[92vh] bg-[#FCFAEE] flex flex-col items-center justify-start pt-24">
      <div className="bg-[#507687] w-max text-[#FCFAEE] p-16 rounded-lg font-semibold flex flex-col items-center">
        <h1 className="text-5xl mb-6">Basic Sign In Here</h1>
        <form
          className="text-xl space-y-4 mb-2 w-full flex flex-col items-center"
          onSubmit={handleSubmit}
        >
          <div className="flex items-center w-full">
            <label htmlFor="email" className="w-24 text-left">
              Email:
            </label>
            <input
              type="email"
              className="p-1 rounded ml-2 text-black flex-1"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex items-center w-full">
            <label htmlFor="password" className="w-24 text-left">
              Password:
            </label>
            <input
              type="password"
              className="p-1 rounded ml-2 text-black flex-1"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && <p className="text-red-600">{error}</p>}
          <button
            type="submit"
            className="bg-[#384B70] rounded-md px-5 py-2 mt-4 w-full"
            disabled={loading}
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>

        <Link href="/pages/SignUpPage" passHref>
          <button className="bg-[#384B70] rounded-md px-5 py-2 mb-4 w-full">
            Sign Up
          </button>
        </Link>
        <p className="mt-auto">Disclaimer: make a mock email and name.</p>
      </div>

      <div className="flex items-center mt-4 mb-32 w-[32rem] space-x-2">
        <button className="bg-[#384B70] rounded-md px-5 py-2 flex-1">
          Sign in with Google
        </button>
        <button className="bg-[#384B70] rounded-md px-5 py-2 flex-1">
          Sign in with Facebook
        </button>
      </div>
    </div>
  );
}

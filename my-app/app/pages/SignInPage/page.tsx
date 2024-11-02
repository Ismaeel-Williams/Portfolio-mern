// app/pages/SignInPage/page.tsx

"use client";

import Link from "next/link";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation"; // Change to 'next/navigation'

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter(); // Initialize useRouter to handle redirection

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = await signIn("credentials", {
      redirect: false, // Set to false to handle redirection manually
      email,
      password,
    });

    if (result?.error) {
      // Handle error (show error message, etc.)
      console.error(result.error);
    } else {
      // If sign-in is successful, redirect to confirmation page
      router.push("/confirm"); // Change to the correct route for your confirmation page
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
          <button
            type="submit"
            className="bg-[#384B70] rounded-md px-5 py-2 mt-4 w-full"
          >
            Sign In
          </button>
        </form>

        <Link href="/pages/SignUpPage" passHref>
          <button className="bg-[#384B70] rounded-md px-5 py-2 mb-4 w-full">
            Sign Up
          </button>
        </Link>
        <p className="mt-auto">Disclaimer: make a mock email and name.</p>
      </div>

      {/* Container for social sign-in buttons */}
      <div className="flex items-center mt-4">
        <button
          onClick={() => signIn("google")}
          className="bg-[#384B70] rounded-md px-5 py-2"
        >
          Sign in with Google
        </button>
        <button
          onClick={() => signIn("facebook")}
          className="bg-[#384B70] rounded-md px-5 py-2"
        >
          Sign in with Facebook
        </button>
      </div>
    </div>
  );
}
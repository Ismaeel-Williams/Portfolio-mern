"use client"; // Ensures this component runs only on the client side

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; // Correct import for Next.js 13+ App Directory

const TestConnectionPage = () => {
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter(); // Client-side router

  useEffect(() => {
    const fetchStatus = async () => {
      try {
        const res = await fetch("/api/test-connection");
        const data = await res.json();
        setStatus(data.message);
      } catch (err) {
        setError("Failed to connect to the database.");
      } finally {
        setLoading(false);
      }
    };

    fetchStatus();
  }, []);

  const handleGoHome = () => {
    router.push("/"); // Navigate to home page
  };

  return (
    <div className="text-center h-screen bg-[#FCFAEE] flex items-start justify-center pt-24">
      <div className="bg-[#507687] w-max text-[#FCFAEE] p-16 rounded-lg font-semibold flex flex-col">
        <h1 className="text-5xl mb-6">Test Database Connection</h1>
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : (
          <p>{status}</p>
        )}
        <button
          onClick={handleGoHome}
          className="bg-[#384B70] rounded-md px-5 py-2 mt-8"
        >
          Go Home
        </button>
      </div>
    </div>
  );
};

export default TestConnectionPage;

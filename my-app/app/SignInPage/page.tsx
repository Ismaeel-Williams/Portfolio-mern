import Link from "next/link";

export default function Page1() {
  return (
    <>
      <div className="text-center h-screen bg-[#FCFAEE] flex items-center justify-center">
        <div className="bg-[#507687] w-max text-[#FCFAEE] p-16 rounded-lg font-semibold flex flex-col">
          <h1 className="text-5xl mb-6">Basic Sign In Here</h1>
          <form className="text-xl space-y-4 mb-2">
            <div className="flex items-center">
              <label htmlFor="email" className="w-24 text-left">
                Email:
              </label>
              <input type="email" className="p-1 rounded ml-2" />
            </div>
            <div className="flex items-center">
              <label htmlFor="password" className="w-24 text-left">
                Password:
              </label>
              <input type="password" className="p-1 rounded ml-2" />
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

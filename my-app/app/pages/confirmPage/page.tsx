import Link from "next/link";

export default function ConfirmPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FCFAEE] text-white font-semibold">
      <div className="bg-[#507687]  p-10 rounded-lg shadow-md mx-20">
        <h1 className="text-2xl font-bold">Hello World!</h1>
        <p className="mt-4">
          Congratulations! Your account has been successfully created. You can
          now log in. Press the &#39;Sign In&#39; button below to access your
          account.
        </p>
        <Link href="/pages/SignInPage" passHref>
          <button className="bg-[#384B70] rounded-md px-5 py-2 mt-10 w-full">
            Sign In
          </button>
        </Link>
      </div>
    </div>
  );
}

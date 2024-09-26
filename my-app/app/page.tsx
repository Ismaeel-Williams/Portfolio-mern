import Image from "next/image";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <section className="bg-[#507687] p-2 font-semibold">
        <div className="m-2 bg-[#384B70]">
          <div className=" text-[#FCFAEE] w-full pl-5">
            <h1 className="text-8xl w-3/5 font-outline-2 hover:font-outline-4 mb-10">
              Landing Page
            </h1>
            <p className="text-2xl">Ismaeel's Portfolio</p>
            <p>more projects will be added over time</p>
          </div>
          <div className="text-[#FCFAEE]">
            <h2>Title:</h2>
            <p>A full stack web developer student</p>
          </div>
        </div>
      </section>

      <a href="Page1">Page1 LINK</a>
    </>
  );
}

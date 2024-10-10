import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <section className="bg-[#507687] p-2 font-semibold ">
        <div className="m-2 bg-stars-img">
          <div className=" text-[#FCFAEE] w-full px-10 py-10">
            <h1 className="text-8xl w-3/5 font-outline-2 hover:font-outline-4 mb-40 font-notoSans">
              Landing Page
            </h1>
            {/* <p className="text-2xl">Ismaeel's Portfolio</p>
            <p>more projects will be added over time</p> */}
          </div>
          <div className="text-[#FCFAEE] w-full pb-40 pt-20">
            <p className="text-center">web stack developer student</p>
          </div>
        </div>
      </section>

      <a href="Page1">Page1 LINK</a>
    </>
  );
}

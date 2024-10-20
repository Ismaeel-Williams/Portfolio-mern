import Navbar from "@/components/Navbar";
import Card from "@/components/card";
import Footer from "@/components/footer";
import { notoSans } from "@/app/layout";

export default function Home() {
  return (
    <>
      <Navbar />
      <section className="bg-[#507687] p-2 font-semibold">
        <div className="relative m-2 bg-stars-img bg-cover bg-center h-full min-h-screen">
          <div className="absolute inset-0 bg-black opacity-60"></div>
          <div
            className={`relative text-[#FCFAEE] w-full px-10 py-10 ${notoSans.className}`}
          >
            <h1 className="text-8xl w-3/5 font-outline-2 hover:font-outline-4 mb-40">
              Landing Page
            </h1>
          </div>
          <div className="relative text-[#FCFAEE] w-full pb-40 pt-20">
            <p className="text-center">web stack developer student</p>
          </div>
        </div>
      </section>
      <section className="bg-[#507687] flex justify-center p-4">
        <div className="flex flex-wrap justify-center gap-4 w-full max-w-7xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full max-w-7xl">
            <Card title="Sign in Page" link="/SignInPage" />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

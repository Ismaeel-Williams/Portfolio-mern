"use client";
import Card from "@/components/card";
import Link from "next/link";
import dynamic from "next/dynamic";
const Particles = dynamic(() => import("@/components/particles"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <section className="bg-[#384B70] font-semibold relative -z-20">
        <Particles />
        <div className="relative min-h-[100vh] bg-fixed">
          <div className="relative text-[#FCFAEE] w-full px-10 py-10">
            <h1 className="text-7xl w-2/5 font-outline-2 mb-20">
              My Stellar Portfolio
            </h1>
          </div>
          <div className="relative text-[#FCFAEE] w-full py-24 z-20">
            <p className="text-center">junior full stack web developer</p>
          </div>
        </div>
      </section>

      <section className="bg-[#507687] flex justify-center px-4 py-8">
        <div className="w-full max-w-7xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-4 lg:gap-6 xl:gap-8">
            <Card
              title="Sign in Page"
              link="/pages/signInPage"
              image="/images/sign-in-page.png"
              description="A simple sign in page with functionality that i hardcoded."
            />
            <Card
              title="Games"
              link="/pages/gameHomePage"
              image="/images/game-homepage-stock-photo.png"
              description="Small games i made, inspired and uninspired by the web."
            />
            <Card />
            <Card />
          </div>
          <p className="font-bold text-center mt-6">
            More Pages Coming Soon ...
          </p>
        </div>
      </section>

      <section id="Information" className="bg-[rgb(80,118,135)] text-white p-4">
        <div className="p-4 border-2 border-black bg-astronaut-img bg-no-repeat bg-right bg-[length:90%_110%]">
          <h1 className="text-xl font-bold text-center underline">
            Information
          </h1>
          <div>
            <h2 className="text-lg font-bold">Certifications:</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>
                  <Link
                    href="/certificates/UC-Udemy-The-complete-web-development-boot-certificate.pdf"
                    passHref
                    className="hover:text-black hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    The Complete 2024 Web Development Bootcamp
                  </Link>
                </strong>{" "}
                -<em>Udemy</em>
                <br />
                <span>Instructor: Angela Yu</span>
                <br />
                <span>Duration: Jan 2023 to Jan 2024</span>
                <br />
                <span>Issued: Jan 17, 2024</span>
              </li>
              <li>
                <strong>
                  <Link
                    href="/certificates/Certificate-of-Completion-DSC-EUC-MERN-Ismaeel.pdf"
                    passHref
                    className="hover:text-black hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    The Complete DARA Data Sciences Corporation EUC and MERN
                    Stack Learner Programme
                  </Link>
                </strong>{" "}
                -<em>DARA Data Sciences</em>
                <br />
                <span>Instructor: Bhram Dev Mahato</span>
                <br />
                <span>Duration: Jan 2024 to Oct 2024</span>
                <br />
                <span>Issued: Nov 4, 2024</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

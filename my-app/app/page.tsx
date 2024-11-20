import Card from "@/components/card";
import Link from "next/link";
import Particles from "../components/particles";
export default function Home() {
  return (
    <>
      <section className="bg-[#507687] font-semibold">
        <div className="relative bg-stars-img bg-cover bg-center min-h-[100vh] bg-fixed">
          <Particles />
          <div className="absolute inset-0 bg-black opacity-0"></div>
          <div className={`relative text-[#FCFAEE] w-full px-10 py-10`}>
            <h1 className="text-8xl w-3/5 font-outline-2 hover:font-outline-4 mb-20">
              My Stellar Portfolio
            </h1>
          </div>
          <div className="relative text-[#FCFAEE] w-full py-24">
            <p className="text-center">web stack developer student</p>
          </div>
        </div>
      </section>
      <section className="bg-[#507687] flex justify-center px-4 py-8">
        <div className="flex flex-wrap justify-center gap-4 w-full max-w-7xl">
          <div
            id="Projects"
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full max-w-7xl min-h-screen place-items-center"
          >
            <Card
              title="Sign in Page"
              link="/pages/SignInPage"
              image="/images/sign-in-page.png"
              description="A simple sign in page with functionality"
            />
            <Card />
            <Card />
            <Card />
          </div>
          <p className="font-bold">More Pages Coming Soon ...</p>
        </div>
      </section>

      <section className="bg-[rgb(80,118,135)] text-white p-4">
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

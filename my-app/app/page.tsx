import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="bg-orange-100 p-2">
        <div className="m-2">
          <div className="bg-gray-100">
            <h1 className="text-6xl">Landing Page</h1>
            <p className="text-2xl">Ismaeel's Portfolio</p>
            <p>more projects will be added over time</p>
          </div>
          <div>
            <h2>Introduction</h2>
            <p>Introduction Paragraph</p>
          </div>
        </div>
      </section>

      <a href="Page1">Page1 LINK</a>
    </>
  );
}

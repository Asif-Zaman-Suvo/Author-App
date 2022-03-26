import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Head>
        <title className="text-black">Author Application</title>
      </Head>
      <div className="text-center text-5xl py-10 justify-center items-center">
        Welcome to the Application
      </div>
      <div className="px-4 m-auto text-gray-700 bg-gray-200 rounded-md hover:bg-blue-400 hover:text-white cursor-pointer text-center text-2xl py-10 justify-center items-center">
        <Link href="dashboard">Author Dashboard</Link>
      </div>
    </div>
  );
}

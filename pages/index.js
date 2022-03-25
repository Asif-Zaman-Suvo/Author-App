import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Head>
        <title className="text-black">Author Applications</title>
      </Head>
      <div className="text-center text-5xl py-10 justify-center items-center">
        Welcome to the Applications
      </div>
      <div className="text-center text-2xl py-10 justify-center items-center">
        <Link href="dashboard">Go to the author dashboard </Link>
      </div>
    </div>
  );
}

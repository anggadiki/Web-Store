import Link from "next/link";

export default function Home() {
  return (
    <div className=" flex min-h-screen font-mono justify-center items-center text-4xl font-semibold">
      <Link href={"/dashboard"}>
        <p className=" hover:text-sky-600">Selamat Datang Di Store Kami</p>
      </Link>
    </div>
  );
}

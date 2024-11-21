import Link from "next/link";
import image from "next/image";
import Image from "next/image";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className=" h-screen flex ">
      {/* Left */}
      <div className=" w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] bg-blue-200">
        <Link
          href="/"
          className=" flex items-center justify-center lg:justify-start gap-2"
        >
          <Image src="/logo.png" alt="logo" width={32} height={32}/>
          <span className="hidden lg:block "> Xcampus</span>
        </Link>
      </div>
      {/* Right   */}
      <div className=" w-[84%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-red-200">
        {" "}
        welcome from the right side{" "}
      </div>
    </div>
  );
}

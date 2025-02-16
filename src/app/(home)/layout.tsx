import { Navbar } from "@/components/Navbar/Navbar";
import PreNavbar from "@/components/Navbar/PreNavbar";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="">
      <PreNavbar />
      <Navbar />
      {children}
    </div>
  );
}

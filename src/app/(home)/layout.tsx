import Navbar from "@/components/Navbar/Navbar";
import PreNavbar from "@/components/Navbar/PreNavbar";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative overflow-hidden">
      <div className="w-64 h-64 bg-yellow-400 rounded-3xl rotate-[-10deg] absolute -right-40  -top-40 -z-10  "></div>

      <PreNavbar />
      <Navbar />
      {children}
    </div>
  );
}

import PolygonShape from "@/components/HeroSection/PolygonShape";
import Navbar from "@/components/Navbar/Navbar";
import PreNavbar from "@/components/Navbar/PreNavbar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative overflow-hidden">
      <PreNavbar />
      <div className="relative">
        <PolygonShape />
        <Navbar />
        {children}
      </div>
    </div>
  );
}

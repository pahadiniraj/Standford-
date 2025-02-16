export const Navbar = () => {
  return (
    <>
      <nav className=" bg-white/90   container mx-auto">
        <div className=" mx-auto  px-2 py-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-black">
            Stanford <span className="text-yellow-400">International</span>
          </h1>
          <div className="hidden md:flex text-xl gap-14 justify-center items-center">
            <a href="#about" className="text-black hover:text-amber-600">
              About us
            </a>
            <a href="#services" className="text-black hover:text-amber-600">
              Education
            </a>
            <a href="#testimonials" className="text-black hover:text-amber-600">
              Migration
            </a>
            <a href="#faq" className="text-black hover:text-amber-600">
              Other services & link
            </a>
            <button className="text-black font-semibold  py-2 rounded-md px-5  ">
              Contact Us
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

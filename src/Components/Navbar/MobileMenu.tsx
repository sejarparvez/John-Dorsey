import { useState } from "react";
import { Link } from "react-scroll";

export default function MobileMenu() {
  const [NavOpen, setNavOpen] = useState(false);

  const HandleClick = () => {
    setNavOpen((prev) => !prev);
  };

  return (
    <div className="lg:hidden">
      <div
        className={`z-40 flex flex-col gap-1 p-3 duration-300 ${
          NavOpen ? "rotate-[360deg]" : ""
        }`}
        onClick={HandleClick}
      >
        <span
          className={`h-0.5 w-6 bg-main-100 duration-300 ${
            NavOpen ? " translate-y-1.5 rotate-45 " : ""
          } `}
        ></span>
        <span
          className={`h-0.5 w-6 bg-main-100 duration-300  ${
            NavOpen ? "hidden" : ""
          } `}
        ></span>
        <span
          className={`h-0.5 w-6 bg-main-100 duration-300 ${
            NavOpen ? "-rotate-45 duration-300 ease-in-out" : ""
          } `}
        ></span>
      </div>
      <div
        className={`fixed top-0 right-0 -z-10 h-screen w-full transform  bg-slate-200 transition duration-300 ease-out dark:bg-black ${
          NavOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="mt-28  flex flex-col items-center gap-4 text-xl [&>*]:cursor-pointer hover:[&>*]:text-main-100">
          <Link to="services" spy={true} smooth={true}>
            <span onClick={HandleClick}>Services</span>
          </Link>
          <Link to="about" spy={true} smooth={true}>
            <span onClick={HandleClick}>About</span>
          </Link>
          <Link to="portfolio" spy={true} smooth={true}>
            <span onClick={HandleClick}>Portfolio</span>
          </Link>
          <Link to="testimonials" spy={true} smooth={true}>
            <span onClick={HandleClick}>Testimonials</span>
          </Link>
          <Link to="contact" spy={true} smooth={true}>
            <span onClick={HandleClick}>Contact</span>
          </Link>
          <Link to="contact" spy={true} smooth={true}>
            <span className="btn" onClick={HandleClick}>
              Hire Me
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

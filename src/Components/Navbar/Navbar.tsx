import { Link } from "react-scroll";

import Logo from "../../assets/logo.png";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  return (
    <nav className="relative z-50 w-full" id="home">
      <div className="mx-auto flex h-20 max-w-[90%] items-center justify-between md:px-8 lg:px-16">
        <div className="w-20 flex-shrink-0 md:w-24">
          <img src={Logo} alt="logo" />
        </div>
        <div className="hidden lg:block">
          <ul className="flex items-center gap-12 font-bold uppercase hover:[&>*]:text-main-100 [&>*]:cursor-pointer">
            <li>
              <Link to="home" spy={true} smooth={true}>
                Home
              </Link>
            </li>
            <li>
              <Link to="services" spy={true} smooth={true}>
                Services
              </Link>
            </li>
            <li>
              <Link to="portfolio" spy={true} smooth={true}>
                Portfolio
              </Link>
            </li>
            <li>
              <Link to="about" spy={true} smooth={true}>
                About
              </Link>
            </li>

            <li>
              <Link to="contact" spy={true} smooth={true}>
                Contact
              </Link>
            </li>
            <li className="btn !text-white">
              <Link to="contact" spy={true} smooth={true}>
                Hire Me
              </Link>
            </li>
          </ul>
        </div>
        <div className="lg:hidden">
          <MobileMenu />
        </div>
      </div>
    </nav>
  );
}

import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Linkedin from "@iconscout/react-unicons/icons/uil-linkedin";
import Twitter from "@iconscout/react-unicons/icons/uil-twitter";
import { Link } from "react-scroll";

function Footer() {
  return (
    <footer className="divide-y bg-gray-800 px-4 md:px-20">
      <div className="container mx-auto flex flex-col justify-between space-y-8 py-10 lg:flex-row lg:space-y-0">
        <div className="text-white lg:w-1/3">
          <a
            rel="noopener noreferrer"
            href="#a"
            className="flex justify-center space-x-3 lg:justify-start"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full dark:bg-green-400">
              LOGO
            </div>
            <span className="self-center text-2xl font-semibold">
              Brand name
            </span>
          </a>
        </div>
        <div className="grid grid-cols-2 gap-x-3 gap-y-8 text-sm sm:grid-cols-4 lg:w-2/3">
          <div className="space-y-3">
            <h3 className="font-bold uppercase tracking-wide text-white">
              Product
            </h3>
            <ul className="space-y-1 text-gray-200 [&>*]:cursor-pointer">
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
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="font-bold uppercase tracking-wide text-white">
              Company
            </h3>
            <ul className="space-y-1 text-gray-200 [&>*]:cursor-pointer">
              <li>
                <Link to="records" spy={true} smooth={true}>
                  Records
                </Link>
              </li>
              <li>
                <Link to="blog" spy={true} smooth={true}>
                  Blog
                </Link>
              </li>
              <li>
                <Link to="testimonials" spy={true} smooth={true}>
                  Testimonians
                </Link>
              </li>
              <li>
                <Link to="contact" spy={true} smooth={true}>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="font-bold uppercase text-white">Developers</h3>
            <ul className="space-y-1 text-gray-200 [&>*]:cursor-pointer">
              <li>
                <a rel="noopener noreferrer" href="#a">
                  Public API
                </a>
              </li>
              <li>
                <a rel="noopener noreferrer" href="#a">
                  Documentation
                </a>
              </li>
              <li>
                <a rel="noopener noreferrer" href="#a">
                  Guides
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <div className="uppercase text-gray-50">Social media</div>
            <div className="flex justify-start space-x-3">
              <a
                href="https://facebook.com/sejarparvez"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook color="white" />
              </a>
              <a href="https://twitter.com/sejar_parvez">
                <Twitter color="white" />
              </a>
              <a
                href="https://linkedin.com/in/sejarparvez"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin color="white" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="py-6 text-center text-sm text-gray-400">
        © 1968 Company Co. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;

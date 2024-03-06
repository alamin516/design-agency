"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Navbar = () => {
  const current = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header className="relative top-[15px]">
        <div className="container-layout py-[5px]">
          <div className="h-20 flex justify-between items-center">
            <div className="logo">
              <h2 className="text-xl font-bold">
                <Link href="/">
                  Design<span className="text-[#F6551A]">AGENCY</span>
                </Link>
              </h2>
            </div>
            <nav className="hidden lg:block">
              <ul className="flex justify-between gap-[30px] nav-menu">
                <li className="flex gap-[10px] justify-center p-[10px] leading-6 text-base font-medium">
                  <Link
                    href="/"
                    className={
                      current === "/" ? "text-[#20B15A] font-semibold" : ""
                    }
                  >
                    Home
                  </Link>
                </li>
                <li className="flex gap-[10px] justify-center p-[10px] leading-6 text-base font-medium">
                  <Link
                    href="/team"
                    className={
                      current === "/team" ? "text-[#20B15A] font-semibold" : ""
                    }
                  >
                    Team
                  </Link>
                </li>
                <li className="flex gap-[10px] justify-center p-[10px] leading-6 text-base font-medium">
                  <Link
                    href="/service"
                    className={
                      current === "/service"
                        ? "text-[#20B15A] font-semibold"
                        : ""
                    }
                  >
                    Service
                  </Link>
                </li>
                <li className="flex gap-[10px] justify-center p-[10px] leading-6 text-base font-medium">
                  <Link
                    href="/projects"
                    className={
                      current === "/projects"
                        ? "text-[#20B15A] font-semibold"
                        : ""
                    }
                  >
                    Projects
                  </Link>
                </li>
                <li className="flex gap-[10px] justify-center p-[10px] leading-6 text-base font-medium">
                  <Link
                    href="/testimonials"
                    className={
                      current === "/testimonials"
                        ? "text-[#20B15A] font-semibold"
                        : ""
                    }
                  >
                    Testimonials
                  </Link>
                </li>
                <li className="w-[93px] flex gap-[10px] justify-center p-[10px] leading-6 border-[1px] rounded-[10px] border-[#20B15A] text-base font-medium">
                  <Link href="#">Login</Link>
                </li>
                <li className="w-[105px] flex gap-[10px] justify-center p-[10px] leading-6 rounded-[10px] bg-[#20B15A] text-base text-white font-medium">
                  <Link href="#">Register</Link>
                </li>
              </ul>
            </nav>
            <div className="lg:hidden">
              <button
                onClick={toggleMobileMenu}
                className="mobile-menu-icon"
                aria-label="Toggle mobile menu"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {isMobileMenuOpen && (
        <div className="mobile-menu open p-10">
          <div className="logo">
              <h2 className="text-xl font-bold">
                <Link href="/">
                  Design<span className="text-[#F6551A]">AGENCY</span>
                </Link>
              </h2>
          </div>
          <nav>
            <ul className="flex flex-col gap-4 items-start">
            <li className="flex gap-[10px] justify-center p-[10px] leading-6 text-base font-medium">
                  <Link
                    href="/"
                    className={
                      current === "/" ? "text-[#20B15A] font-semibold" : ""
                    }
                  >
                    Home
                  </Link>
                </li>
                <li className="flex gap-[10px] justify-center p-[10px] leading-6 text-base font-medium">
                  <Link
                    href="/team"
                    className={
                      current === "/team" ? "text-[#20B15A] font-semibold" : ""
                    }
                  >
                    Team
                  </Link>
                </li>
                <li className="flex gap-[10px] justify-center p-[10px] leading-6 text-base font-medium">
                  <Link
                    href="/service"
                    className={
                      current === "/service"
                        ? "text-[#20B15A] font-semibold"
                        : ""
                    }
                  >
                    Service
                  </Link>
                </li>
                <li className="flex gap-[10px] justify-center p-[10px] leading-6 text-base font-medium">
                  <Link
                    href="/projects"
                    className={
                      current === "/projects"
                        ? "text-[#20B15A] font-semibold"
                        : ""
                    }
                  >
                    Projects
                  </Link>
                </li>
                <li className="flex gap-[10px] justify-center p-[10px] leading-6 text-base font-medium">
                  <Link
                    href="/testimonials"
                    className={
                      current === "/testimonials"
                        ? "text-[#20B15A] font-semibold"
                        : ""
                    }
                  >
                    Testimonials
                  </Link>
                </li>
                <li className="w-[93px] flex gap-[10px] justify-center p-[10px] leading-6 border-[1px] rounded-[10px] border-[#20B15A] text-base font-medium">
                  <Link href="#">Login</Link>
                </li>
                <li className="w-[105px] flex gap-[10px] justify-center p-[10px] leading-6 rounded-[10px] bg-[#20B15A] text-base text-white font-medium">
                  <Link href="#">Register</Link>
                </li>
            </ul>
          </nav>
        </div>
      )}
    </>
  );
};

export default Navbar;

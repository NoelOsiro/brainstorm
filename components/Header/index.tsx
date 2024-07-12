"use client";
import Image from "next/image";
import { useState } from "react";
import ThemeToggler from "./ThemeToggler";
import HamburgerToggle from "./HamburgerToggle";
import useStickyMenu from "@/app/hooks/useStickyMenu";
import NavMenu from "./NavMenu";
import SocialLinks from "./SocialLinks";
import Link from "next/link";

const Header = () => {
  const [navigationOpen, setNavigationOpen] = useState(false);
  const [dropdownToggler, setDropdownToggler] = useState(false);
  const stickyMenu = useStickyMenu();

  return (
    <header
      className={`fixed left-0 top-0 z-99999 w-full py-7 ${
        stickyMenu
          ? "bg-white !py-4 shadow transition duration-100 dark:bg-black"
          : ""
      }`}
    >
      <div className="relative mx-auto max-w-c-1390 items-center justify-between px-4 md:px-8 xl:flex 2xl:px-0">
        <div className="flex w-full items-center justify-between xl:w-1/4">
          <Logo/>
          <Link href={'/'} className="hidden text-black ml-2 dark:text-white md:block text-primary hover:text-primary md:text-lg font-medium">
            Brainstorm Junior Children's Centre
          </Link>
          {/* <!-- Hamburger Toggle BTN --> */}
          <HamburgerToggle
            navigationOpen={navigationOpen}
            setNavigationOpen={setNavigationOpen}
          />
        </div>

        {/* Nav Menu Start   */}
        <NavMenu
          navigationOpen={navigationOpen}
          setDropdownToggler={setDropdownToggler}
          dropdownToggler={dropdownToggler}
        />
        <ThemeToggler navigationOpen={navigationOpen}/>
        <SocialLinks navigationOpen={navigationOpen}/>
      </div>
    </header>
  );
};
export default Header;
const Logo = () => (
  <a href="/">
    <Image
      src="/images/logo/logo-dark.png"
      alt="logo"
      width={100}
      height={40}
      className="w-full sm:h-full h-16"
    />
  </a>
);




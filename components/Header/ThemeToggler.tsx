'use client'
import { useTheme } from "next-themes";
import Image from "next/image";

const ThemeToggler = ({ navigationOpen}) => {
  const { theme, setTheme } = useTheme();

  return (
    <button
      aria-label="theme toggler"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className={`bg-gray-2 dark:bg-dark-bg absolute right-17 mr-1.5 flex cursor-pointer right-2 md:right-6  justify-end xl:items-center sm:justify-center rounded-full text-black dark:text-white lg:static ${navigationOpen ? 'hidden' : 'visible'}`}
    >
      <Image
        src="/images/icon/icon-moon.svg"
        alt="logo"
        width={23}
        height={23}
        className="dark:hidden"
      />

      <Image
        src="/images/icon/icon-sun.svg"
        alt="logo"
        width={23}
        height={23}
        className="hidden dark:block"
      />
    </button>
  );
};

export default ThemeToggler;

'use client'
import Link from 'next/link';

const NavItem = ({ menuItem, pathUrl, setDropdownToggler, dropdownToggler }) => (
  <li className={menuItem.submenu && "group relative"}>
    {menuItem.submenu ? (
      <>
        <button
          onClick={() => setDropdownToggler(!dropdownToggler)}
          className="flex cursor-pointer items-center justify-between gap-3 hover:text-primary md:text-xl font-medium"
        >
          {menuItem.title}
          <span>
            <svg
              className="h-3 w-3 cursor-pointer fill-waterloo group-hover:fill-primary"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
            </svg>
          </span>
        </button>

        <ul className={`dropdown ${dropdownToggler ? "flex" : ""}`}>
          {menuItem.submenu.map((item, key) => (
            <li key={key} className="hover:text-primary ">
              <Link href={item.path || "#"}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </>
    ) : (
      <Link
        href={`${menuItem.path}`}
        className={
          pathUrl === menuItem.path
            ? "text-primary hover:text-primary md:text-xl font-medium"
            : "hover:text-primary md:text-xl font-medium"
        }
      >
        {menuItem.title}
      </Link>
    )}
  </li>
);

export default NavItem;

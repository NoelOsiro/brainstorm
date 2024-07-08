'use client'
import { usePathname } from 'next/navigation';
import menuData from './menuData';
import NavItem from './NavItem';

const NavMenu = ({ navigationOpen, setDropdownToggler, dropdownToggler }) => {
  const pathUrl = usePathname();

  return (
    <div
      className={`invisible h-0 w-full items-center justify-between xl:visible xl:flex xl:h-auto xl:w-full ${
        navigationOpen &&
        "navbar !visible mt-4 h-auto max-h-[400px] rounded-md bg-white p-7.5 shadow-solid-5 dark:bg-blacksection xl:h-auto xl:p-0 xl:shadow-none xl:dark:bg-transparent"
      }`}
    >
      <nav>
        <ul className="flex flex-col gap-5 xl:flex-row xl:items-center xl:gap-16">
          {menuData.map((menuItem, key) => (
            <NavItem
              key={key}
              menuItem={menuItem}
              pathUrl={pathUrl}
              setDropdownToggler={setDropdownToggler}
              dropdownToggler={dropdownToggler}
            />
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default NavMenu;

'use client'
import Link from 'next/link';
import { motion } from 'framer-motion';

const NavItem = ({ menuItem, pathUrl, setNavigationOpen, setDropdownToggler, dropdownToggler, variants }) => {
  const isActive = pathUrl === menuItem.path;

  const handleLinkClick = () => {
    // Close mobile navigation when a link is clicked
    if (setNavigationOpen) {
      setNavigationOpen(false);
    }
    // Close any open dropdowns
    if (setDropdownToggler) {
      setDropdownToggler(false);
    }
  };

  return (
    <motion.li 
      variants={variants}
      className={menuItem.submenu ? "group relative" : ""}
    >
      {menuItem.submenu ? (
        <>
          <motion.button
            onClick={() => setDropdownToggler(!dropdownToggler)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex cursor-pointer items-center justify-between gap-2 font-medium text-base lg:text-lg text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors duration-200 w-full xl:w-auto"
          >
            {menuItem.title}
            <motion.span
              animate={{ rotate: dropdownToggler ? 180 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <svg
                className="h-3 w-3 cursor-pointer fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
              </svg>
            </motion.span>
          </motion.button>

          <motion.ul 
            initial={{ opacity: 0, y: -10 }}
            animate={{ 
              opacity: dropdownToggler ? 1 : 0,
              y: dropdownToggler ? 0 : -10,
              display: dropdownToggler ? "block" : "none"
            }}
            transition={{ duration: 0.2 }}
            className="xl:absolute xl:top-full xl:left-0 xl:mt-2 xl:min-w-[200px] xl:rounded-lg xl:bg-white xl:dark:bg-gray-900 xl:shadow-lg xl:border xl:border-gray-200 xl:dark:border-gray-700 xl:py-2 xl:z-50 mt-4 space-y-2 xl:space-y-0"
          >
            {menuItem.submenu.map((item, key) => (
              <motion.li 
                key={key}
                whileHover={{ backgroundColor: "rgba(59, 130, 246, 0.1)" }}
                className="xl:px-4 xl:py-2"
              >
                <Link 
                  href={item.path || "#"}
                  onClick={handleLinkClick}
                  className="block text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors duration-200 py-2 xl:py-0"
                >
                  {item.title}
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        </>
      ) : (
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Link
            href={`${menuItem.path}`}
            onClick={handleLinkClick}
            className={`
              relative font-medium text-base lg:text-lg transition-all duration-200 group block py-2 xl:py-0
              ${isActive 
                ? "text-primary" 
                : "text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-primary"
              }
            `}
          >
            {menuItem.title}
            {/* Active indicator */}
            <motion.span
              className="absolute -bottom-1 left-0 h-0.5 bg-primary xl:block hidden"
              initial={{ width: 0 }}
              animate={{ width: isActive ? "100%" : 0 }}
              whileHover={{ width: "100%" }}
              transition={{ duration: 0.2 }}
            />
          </Link>
        </motion.div>
      )}
    </motion.li>
  );
};

export default NavItem;



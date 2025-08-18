'use client'
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import menuData from './menuData';
import NavItem from './NavItem';

const NavMenu = ({ navigationOpen, setNavigationOpen, setDropdownToggler, dropdownToggler }) => {
  const pathUrl = usePathname();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <nav className="w-full">
      <motion.ul 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className={`
          flex flex-col gap-6 xl:flex-row xl:items-center xl:justify-center xl:gap-8 2xl:gap-12
          ${navigationOpen ? 'xl:flex' : ''}
        `}
      >
        {menuData.map((menuItem, key) => (
          <NavItem
            key={key}
            menuItem={menuItem}
            pathUrl={pathUrl}
            setNavigationOpen={setNavigationOpen}
            setDropdownToggler={setDropdownToggler}
            dropdownToggler={dropdownToggler}
            variants={itemVariants}
          />
        ))}
      </motion.ul>
    </nav>
  );
};

export default NavMenu;

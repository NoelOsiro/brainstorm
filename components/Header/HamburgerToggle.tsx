import { motion } from 'framer-motion';

const HamburgerToggle = ({ navigationOpen, setNavigationOpen }) => {
  const topVariants = {
    closed: { rotate: 0, y: 0 },
    open: { rotate: 45, y: 8 }
  };

  const centerVariants = {
    closed: { opacity: 1 },
    open: { opacity: 0 }
  };

  const bottomVariants = {
    closed: { rotate: 0, y: 0 },
    open: { rotate: -45, y: -8 }
  };

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label="hamburger Toggler"
      className="flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-800 transition-colors duration-200 xl:hidden"
      onClick={() => setNavigationOpen(!navigationOpen)}
    >
      <div className="flex h-6 w-6 flex-col justify-center space-y-1">
        <motion.span
          variants={topVariants}
          animate={navigationOpen ? "open" : "closed"}
          transition={{ duration: 0.3 }}
          className="h-0.5 w-6 bg-gray-800 dark:bg-white rounded-full"
        />
        <motion.span
          variants={centerVariants}
          animate={navigationOpen ? "open" : "closed"}
          transition={{ duration: 0.3 }}
          className="h-0.5 w-6 bg-gray-800 dark:bg-white rounded-full"
        />
        <motion.span
          variants={bottomVariants}
          animate={navigationOpen ? "open" : "closed"}
          transition={{ duration: 0.3 }}
          className="h-0.5 w-6 bg-gray-800 dark:bg-white rounded-full"
        />
      </div>
    </motion.button>
  );
};

export default HamburgerToggle;
  
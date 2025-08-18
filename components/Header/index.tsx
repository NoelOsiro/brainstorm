"use client";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      className={`fixed left-0 top-0 z-99999 w-full transition-all duration-300 ${
        stickyMenu
          ? "glass-effect py-3 shadow-lg backdrop-blur-md"
          : "bg-transparent py-6"
      }`}
    >
      <div className="relative mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <motion.div 
            className="flex-shrink-0"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Logo />
          </motion.div>

          {/* Navigation Menu - Desktop */}
          <div className="hidden xl:flex xl:flex-1 xl:justify-center">
            <NavMenu
              navigationOpen={navigationOpen}
              setNavigationOpen={setNavigationOpen}
              setDropdownToggler={setDropdownToggler}
              dropdownToggler={dropdownToggler}
            />
          </div>

          {/* Right Side Actions */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.4 }}
            className="flex items-center gap-3 md:gap-4"
          >
            {/* Social Links - Hidden on Small Screens */}
            <div className="hidden lg:block">
              <SocialLinks navigationOpen={navigationOpen} />
            </div>

            {/* Mobile Menu Toggle */}
            <div className="xl:hidden">
              <HamburgerToggle
                navigationOpen={navigationOpen}
                setNavigationOpen={setNavigationOpen}
              />
            </div>
          </motion.div>
        </div>

        {/* Mobile Navigation Sidebar */}
        <AnimatePresence>
          {navigationOpen && (
            <>
              {/* Backdrop Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
                onClick={() => setNavigationOpen(false)}
              />
              
              {/* Sidebar */}
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="fixed right-0 top-0 h-full w-80 max-w-[85vw] bg-white/95 backdrop-blur-md shadow-2xl z-50 dark:bg-gray-900/95"
              >
                <div className="flex h-full flex-col">
                  {/* Sidebar Header */}
                  <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
                    <div className="text-lg font-semibold text-gray-900 dark:text-white">
                      Menu
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => setNavigationOpen(false)}
                      className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                    >
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </motion.button>
                  </div>

                  {/* Navigation Menu */}
                  <div className="flex-1 overflow-y-auto p-6">
                    <NavMenu
                      navigationOpen={navigationOpen}
                      setNavigationOpen={setNavigationOpen}
                      setDropdownToggler={setDropdownToggler}
                      dropdownToggler={dropdownToggler}
                    />
                  </div>
                  
                  {/* Sidebar Footer */}
                  <div className="border-t border-gray-200 dark:border-gray-700 p-6">
                    <div className="flex items-center justify-center gap-6">
                      {/* Social Links - Show in sidebar on small screens */}
                      <div className="lg:hidden">
                        <SocialLinks navigationOpen={navigationOpen} />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;



const Logo = () => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <Link href="/" className="block">
      <Image
        src="/images/logo/logo-dark.png"
        alt="Brainstorm Junior Children's Centre"
        width={160}
        height={45}
        className="h-12 md:h-14 lg:h-16 w-auto"
        style={{ width: "auto" }}
        priority
      />
    </Link>
  </motion.div>
);




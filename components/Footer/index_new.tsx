"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { BsFacebook, BsLinkedin, BsTiktok, BsTwitter } from "react-icons/bs";

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  return (
    <>
      <footer className="relative overflow-hidden border-t border-gray-200 bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:border-gray-700 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-gradient-to-br from-blue-400/10 to-purple-400/10 blur-3xl" />
          <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-gradient-to-br from-green-400/10 to-blue-400/10 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          {/* Footer Top */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="py-20 lg:py-25"
          >
            <div className="flex flex-wrap gap-8 lg:justify-between lg:gap-0">
              <motion.div
                variants={itemVariants}
                className="lg:w-1/4"
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="mb-6"
                >
                  <Image
                    width={210}
                    height={200}
                    src="/images/logo/logo-dark.png"
                    alt="Logo"
                    className="w-full max-w-[180px]"
                  />
                </motion.div>

                <motion.p 
                  variants={itemVariants}
                  className="mb-8 text-lg font-medium gradient-text"
                >
                  BE SMART! WORK SMART! REMAIN SMART
                </motion.p>

                <motion.div variants={itemVariants}>
                  <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-600 dark:text-gray-400">
                    Contact
                  </p>
                  <motion.a
                    href="mailto:bstormjsch@gmail.com"
                    className="mb-4 block text-lg font-medium text-black hover:text-primary dark:text-white dark:hover:text-primary"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    bstormjsch@gmail.com
                  </motion.a>
                  <div className="space-y-2">
                    <motion.a
                      href="tel:+254729474858"
                      className="block hover:text-primary"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      +254 729 474 858
                    </motion.a>
                    <motion.a
                      href="tel:+254726221581"
                      className="block hover:text-primary"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      +254 726 221 581
                    </motion.a>
                    <motion.a
                      href="tel:+254731583808"
                      className="block hover:text-primary"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      +254 731 583 808
                    </motion.a>
                  </div>
                </motion.div>
              </motion.div>

              <div className="flex w-full flex-col gap-8 md:flex-row md:justify-between md:gap-0 lg:w-2/3 xl:w-7/12">
                <motion.div
                  variants={itemVariants}
                  className="animate_top"
                >
                  <h4 className="mb-9 text-itemtitle2 font-medium text-black dark:text-white">
                    Quick Links
                  </h4>

                  <ul className="space-y-3">
                    <li>
                      <motion.a
                        href="#"
                        className="inline-block hover:text-primary transition-colors"
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        Home
                      </motion.a>
                    </li>
                    <li>
                      <motion.a
                        href="/about"
                        className="inline-block hover:text-primary transition-colors"
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        About Us
                      </motion.a>
                    </li>
                    <li>
                      <motion.a
                        href="/programs"
                        className="inline-block hover:text-primary transition-colors"
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        Our Programs
                      </motion.a>
                    </li>
                    <li>
                      <motion.a
                        href="/contact"
                        className="inline-block hover:text-primary transition-colors"
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        Contact
                      </motion.a>
                    </li>
                  </ul>
                </motion.div>

                <motion.div
                  variants={itemVariants}
                  className="animate_top"
                >
                  <h4 className="mb-9 text-itemtitle2 font-medium text-black dark:text-white">
                    Support
                  </h4>

                  <ul className="space-y-3">
                    <li>
                      <motion.a
                        href="/donate"
                        className="inline-block hover:text-primary transition-colors"
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        Donate
                      </motion.a>
                    </li>
                    <li>
                      <motion.a
                        href="/support"
                        className="inline-block hover:text-primary transition-colors"
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        Support Us
                      </motion.a>
                    </li>
                    <li>
                      <motion.a
                        href="/blog"
                        className="inline-block hover:text-primary transition-colors"
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        Blog
                      </motion.a>
                    </li>
                    <li>
                      <motion.a
                        href="/privacy"
                        className="inline-block hover:text-primary transition-colors"
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        Privacy Policy
                      </motion.a>
                    </li>
                  </ul>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Footer Bottom */}
          <motion.div 
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col-reverse flex-wrap items-center justify-center gap-5 border-t border-gray-200 py-7 dark:border-gray-700 md:flex-row md:justify-between lg:gap-0"
          >
            <motion.div variants={itemVariants}>
              <p className="text-center text-gray-600 dark:text-gray-400">
                &copy; 2025 Brainstorm Junior Children's Centre. All rights reserved.
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <div className="flex items-center gap-5">
                <motion.a
                  href="#"
                  className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary"
                  whileHover={{ scale: 1.2, y: -2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <BsFacebook className="fill-current text-xl" />
                </motion.a>
                <motion.a
                  href="#"
                  className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary"
                  whileHover={{ scale: 1.2, y: -2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <BsTwitter className="fill-current text-xl" />
                </motion.a>
                <motion.a
                  href="#"
                  className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary"
                  whileHover={{ scale: 1.2, y: -2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <BsLinkedin className="fill-current text-xl" />
                </motion.a>
                <motion.a
                  href="#"
                  className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary"
                  whileHover={{ scale: 1.2, y: -2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <BsTiktok className="fill-current text-xl" />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

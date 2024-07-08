'use client'
import { useEffect, useState } from 'react';

const useStickyMenu = () => {
  const [stickyMenu, setStickyMenu] = useState(false);

  const handleStickyMenu = () => {
    if (window.scrollY >= 80) {
      setStickyMenu(true);
    } else {
      setStickyMenu(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleStickyMenu);

    return () => {
      window.removeEventListener("scroll", handleStickyMenu);
    };
  }, []);

  return stickyMenu;
};

export default useStickyMenu;

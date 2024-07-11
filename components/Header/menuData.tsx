import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    newTab: false,
    path: "/",
  },
  {
    id: 2,
    title: "About Us",
    newTab: false,
    path: "/about",
  },
  {
    id: 2.1,
    title: "Programs",
    newTab: false,
    path: "/programs",
  },
  {
    id: 2.3,
    title: "Support Us",
    newTab: false,
    path: "/donate",
  },
  {
    id: 3,
    title: "Activities",
    newTab: false,
    submenu: [
      {
        id: 31,
        title: "Our blog",
        newTab: false,
        path: "/blog",
      },
      {
        id: 34,
        title: "Contact Us",
        newTab: false,
        path: "/support",
      },
      {
        id: 35,
        title: "Gallery",
        newTab: false,
        path: "/error",
      },
      {
        id: 35,
        title: "Docs",
        newTab: false,
        path: "/docs",
      },
      {
        id: 35.1,
        title: "Support",
        newTab: false,
        path: "/donate",
      },
      {
        id: 36,
        title: "404",
        newTab: false,
        path: "/error",
      },
    ],
  },
];

export default menuData;

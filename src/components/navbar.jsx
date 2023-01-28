import React, { useState } from "react";
import {
  AiOutlineMenu,
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineGithub,
  AiOutlineClose,
} from "react-icons/ai";

function Navbar() {
  const links = [
    {
      id: 1,
      title: "home",
      path: "/",
    },
    {
      id: 2,
      title: "about",
      path: "/",
    },
    {
      id: 3,
      title: "skills",
      path: "/",
    },
    {
      id: 4,
      title: "projects",
      path: "/",
    },
  ];

  const [nav, setNav] = useState(false);

  return (
    <nav className="w-full h-15 items-center flex px-[10%] py-5 bg-secondary text-font_color justify-between fixed z-[99999]">
      <div className="flex">
        {/* LOGO */}
        <h1 className="text-2xl font-signature">Ilham Suandi</h1>

        {/* LINKS */}
        <ul className="hidden md:flex pl-14 items-center">
          {links.map(({ id, title, path }) => (
            <li
              key={id}
              className="px-2 text-[#bebfc5] hover:text-font_color duration-200"
            >
              <a href={path} className="capitalize">
                {title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* SOCIAL MEDIA */}
      <div className="hidden md:flex text-[#e5e5e9]">
        <a className="px-1" href="#a">
          <AiOutlineInstagram size={30} />
        </a>
        <a className="px-1" href="#b">
          <AiOutlineLinkedin size={30} />
        </a>
        <a className="px-1" href="#c">
          <AiOutlineGithub size={30} />
        </a>
      </div>

      {/* HAMBURGER MENU */}
      <div
        className="items-center cursor-pointer z-10 md:hidden"
        onClick={() => setNav((p) => !p)}
      >
        <div className="z-10">
          {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
        </div>
      </div>

      <ul
        className={
          nav
            ? "fixed h-full w-[60%] bg-secondary top-0 right-0 flex flex-col justify-center items-center ease-in-out duration-500 border-r-2 z-[-1]"
            : "fixed h-full w-[60%] bg-secondary top-0 right-[-100%] flex flex-col justify-center items-center ease-in-out duration-500 z-[-1]"
        }
      >
        {links.map(({ id, title, path }) => (
          <li key={id} className="py-5">
            <a href={path} className="capitalize">
              {title}
            </a>
          </li>
        ))}

        <div className="absolute bottom-12 flex text-[#e5e5e9]">
          <a className="px-1" href="#a">
            <AiOutlineInstagram size={25} />
          </a>
          <a className="px-1" href="#b">
            <AiOutlineLinkedin size={25} />
          </a>
          <a className="px-1" href="#c">
            <AiOutlineGithub size={25} />
          </a>
        </div>
      </ul>
    </nav>
  );
}

export default Navbar;

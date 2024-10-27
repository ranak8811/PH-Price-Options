import React, { useState } from "react";
import Link from "../Link/Link";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const routes = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/about", name: "About" },
    { id: 3, path: "/services", name: "Services" },
    { id: 4, path: "/contact", name: "Contact" },
    { id: 5, path: "*", name: "NotFound" },
  ];
  return (
    <nav className="p-4">
      <div className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
        {open ? (
          <AiOutlineClose></AiOutlineClose>
        ) : (
          <AiOutlineMenu className=""></AiOutlineMenu>
        )}
      </div>
      <ul
        className={`md:flex absolute md:static duration-1000 bg-slate-200 px-6 ${
          open ? "top-12" : "-top-60"
        }`}
      >
        {routes.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const routes = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Loyalty Program", path: "/Loyal-program" },
    { name: "About Us", path: "/about" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <div className="flex justify-center py-4 lg:px-16 xl:px-20 bg-[#F5F9FF]">
      <div className="flex justify-between items-center w-full max-w-6xl px-4 sm:px-8 md:px-12 rounded-lg bg-[#FEFAE0] shadow-md h-20">
        {/* Logo */}
        <h1 className="font-extrabold flex items-center gap-2 bg-gradient-to-r from-[#007BC9] via-[#005A8D] to-[#FFD100] bg-clip-text text-transparent text-2xl cursor-pointer animate-pulse">
          SARASWATI FILLING STATION
        </h1>

        {/* Desktop Nav */}
        <div className="hidden md:flex justify-center items-center gap-6">
          {routes.map((route) => (
            <NavLink
              key={route.path}
              to={route.path}
              className={({ isActive }) =>
                `px-3 py-1 rounded-lg font-semibold transition ${isActive
                  ? "bg-[#007BC9] text-white"
                  : "text-[#007BC9] hover:bg-[#726940] hover:text-white"
                }`
              }
            >
              {route.name}
            </NavLink>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)}>
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {/* Mobile Dropdown */}
      {open && (
        <div className="absolute top-20 left-0 w-full bg-[#FEFAE0] shadow-md rounded-b-lg md:hidden z-50">
          <div className="flex flex-col items-center gap-4 py-4">
            {routes.map((route) => (
              <NavLink
                key={route.path}
                to={route.path}
                onClick={() => setOpen(false)} // close menu after click
                className={({ isActive }) =>
                  `transition ${isActive
                    ? "text-yellow-500 font-bold underline"
                    : "text-blue-600 font-semibold hover:text-yellow-400"
                  }`
                }
              >
                {route.name}
              </NavLink>
            ))}
          </div>
        </div>
      )}

    </div>
  );
}

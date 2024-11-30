import { useState } from "react";
import { NavLink } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";

function Header() {

  let navCloseClassName = "w-full block flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block";
  let navOpenClassName = "w-full block flex-grow lg:flex lg:items-center lg:w-auto lg:block open-nav h-screen lg:h-max";

  const [isNavToggle, setNavToggle] = useState(false);

  const toggleClass = () => {
    setNavToggle(!isNavToggle);
    window.scrollTo(0, 0);
  };

  const closeNav = () => {
    setNavToggle(false);
    window.scrollTo(0, 0);
  };

  return (
    <header className="fixed w-full top-0 z-50">
    <nav className="flex items-center justify-between flex-wrap py-4 px-6" style={{ backgroundImage: "linear-gradient(to right, #d7d2cc 0%, #304352 100%)" }}>
      <div className="flex items-center justify-center w-14 lg:w-36 mr-6">
        <NavLink to="/" onClick={closeNav}>
          <img src="https://i.ibb.co/7NX9kC0/Orange-Phoenix-Animal-Gaming-Logo.png" alt="Logo" className="h-10 w-auto" />
        </NavLink>
      </div>
      <div className="flex items-center lg:order-last">
        <div className="">
          <DarkModeToggle />
        </div>
        <div className="lg:hidden">
          <button onClick={toggleClass} className="flex items-center px-3 py-2 border rounded text-white border-white">
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
      </div>
      <div className={isNavToggle ? navOpenClassName : navCloseClassName}>
        <div className="text-lg font-semibold lg:flex-grow" onClick={toggleClass}>
          <NavLink to="/" className={({ isActive }) => (isActive ? "block text-2xl lg:text-xl lg:inline-block mt-8 lg:mt-0 text-[#bd0000] mr-6" : "block text-2xl lg:text-xl lg:inline-block mt-8 lg:mt-0 text-[#bd0000] hover:text-black mr-6 transition-colors duration-300")}>
            Inicio
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => (isActive ? "block text-2xl lg:text-xl lg:inline-block mt-8 lg:mt-0 text-[#bd0000] mr-6" : "block text-2xl lg:text-xl lg:inline-block mt-8 lg:mt-0 text-[#bd0000] hover:text-black mr-6 transition-colors duration-300")}>
            Sobre nosotros
          </NavLink>
          <NavLink to="/credits" className={({ isActive }) => (isActive ? "block text-2xl lg:text-xl lg:inline-block mt-8 lg:mt-0 text-[#bd0000] mr-6" : "block text-2xl lg:text-xl lg:inline-block mt-8 lg:mt-0 text-[#bd0000] hover:text-black mr-6 transition-colors duration-300")}>
            Créditos
          </NavLink>
          <NavLink to="/terms" className={({ isActive }) => (isActive ? "block text-2xl lg:text-xl lg:inline-block mt-8 lg:mt-0 text-[#bd0000] mr-6" : "block text-2xl lg:text-xl lg:inline-block mt-8 lg:mt-0 text-[#bd0000] hover:text-black mr-6 transition-colors duration-300")}>
            Términos de servicio
          </NavLink>
          <NavLink to="/404" className={({ isActive }) => (isActive ? "block text-2xl lg:text-xl lg:inline-block mt-8 lg:mt-0 text-[#bd0000] mr-6" : "block text-2xl lg:text-xl lg:inline-block mt-8 lg:mt-0 text-[#bd0000] hover:text-black mr-6 transition-colors duration-300")}>
            Página de errores
          </NavLink>
        </div>
      </div>
    </nav>
  </header>
  );
}

export default Header;

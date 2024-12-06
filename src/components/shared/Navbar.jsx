import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { FaBars, FaTimes } from "react-icons/fa";
import Snowfall from "react-snowfall";
import ScrollToTopButton from "./ScrollToTopButton";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user, signOutUser } = useContext(AuthContext);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const generateNavItems = () => {
    const items = [
      { to: "/", label: "Home" },
      { to: "/reviews", label: "All Reviews" },
    ];

    if (user) {
      items.push(
        { to: "/add-review", label: "Add Review" },
        { to: "/my-reviews", label: "My Reviews" },
        { to: "/myWatchlist", label: "Game WatchList" }
      );
    }

    return items.map((item) => (
      <li key={item.to} className="text-base font-medium">
        <NavLink
          to={item.to}
          className={({ isActive }) =>
            isActive ? "underline" : undefined
          }
        >
          {item.label}
        </NavLink>
      </li>
    ));
  };

  return (
    <>
      <Snowfall snowflakeCount={100} radius={[0.5, 0.7]} />
      <div
        className={`navbar sticky top-0 transition-all duration-300 z-50 overflow-hidden ${
          isScrolled ? "bg-secondaryAccent backdrop-blur-md bg-opacity-80" : "bg-transparent"
        }`}
      >
        <div className="navbar max-w-[1440px] mx-auto px-2">
          <div className="navbar-start">
            <NavLink className="text-xl p-2 pl-0" to="/">
              <span className="text-xl font-bold text-primaryText">
                Chill Gamer
              </span>
            </NavLink>
          </div>
          <div className="navbar-center hidden md:flex">
            <ul className="menu-horizontal gap-8">{generateNavItems()}</ul>
          </div>
          <div className="navbar-end">
            {user ? (
              <>
                <div className="relative group">
                  <img
                    src={user.photoURL}
                    alt={user.displayName}
                    className="h-8 w-8 rounded-full mr-2"
                  />
                  <div className="absolute right-0 mt-6 hidden group-hover:block bg-white text-black p-2 rounded shadow-lg">
                    {user.displayName}
                  </div>
                </div>
                <button
                  className="hidden lg:block btn rounded-none bg-primaryButton text-white border-none"
                  onClick={signOutUser}
                >
                  Log Out
                </button>
              </>
            ) : (
              <div className="hidden md:flex space-x-4">
                <NavLink
                  className="btn rounded-none bg-secondaryButton text-white border-none"
                  to="/login"
                >
                  Login
                </NavLink>
                <NavLink
                  className="btn rounded-none bg-primaryButton text-white hover:bg-primaryButton-hover border-none"
                  to="/register"
                >
                  Register
                </NavLink>
              </div>
            )}
            <button
              className="md:hidden text-2xl px-1 py-1"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
        {isMobileMenuOpen && (
          <div className="fixed inset-0 bg-white shadow-lg transform transition-transform duration-300 translate-y-0 md:hidden flex flex-col items-center justify-center z-50">
            <button
              className="absolute top-4 right-4 text-2xl"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <FaTimes />
            </button>
            <ul className="flex flex-col items-center gap-4 py-4">
              {generateNavItems()}
              {user ? (
                <>
                  <p className="mr-4">{user.displayName}</p>
                  <img
                    src={user.photoURL}
                    alt={user.displayName}
                    className="h-8 w-8 rounded-full mr-2"
                  />
                  <p className="mr-4">{user?.email}</p>
                  <button
                    className="btn rounded-none bg-primaryButton text-white border-none"
                    onClick={signOutUser}
                  >
                    Log Out
                  </button>
                </>
              ) : (
                <div className="flex flex-col space-y-4">
                  <NavLink
                    className="btn rounded-none text-black border-none"
                    style={{ backgroundColor: "#778DA9" }}
                    to="/login"
                  >
                    Login
                  </NavLink>
                  <NavLink
                    className="btn rounded-none bg-primaryButton text-white hover:bg-primaryButton-hover border-none"
                    to="/register"
                  >
                    Register
                  </NavLink>
                </div>
              )}
            </ul>
          </div>
        )}
      </div>
      <ScrollToTopButton />
    </>
  );
};

export default Navbar;
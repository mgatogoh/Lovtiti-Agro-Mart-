import { NavLink } from "react-router-dom";
import { useState } from "react";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [user, setUser] = useState({
        name: "Jane Doe",
        loggedIn: true,
    });

    const linkStyle =
        "px-3 py-2 rounded-md text-sm font-medium transition-colors";
    const activeStyle = "bg-green-700 text-white";
    const inactiveStyle = "text-gray-700 hover:bg-green-100";

    return (
        <nav className="fixed top-0 left-0 w-full h-[80px] bg-white border-b shadow-sm z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    {/* Left – Brand */}
                    <div className="text-2xl font-bold text-green-700">Lovtiti</div>

                    {/* Center – Nav Links */}
                    <div className="hidden md:flex space-x-4">
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                `${linkStyle} ${isActive ? activeStyle : inactiveStyle}`
                            }
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/marketplace"
                            className={({ isActive }) =>
                                `${linkStyle} ${isActive ? activeStyle : inactiveStyle}`
                            }
                        >
                            Marketplace
                        </NavLink>

                        {user.loggedIn && (
                            <NavLink
                                to="/profile"
                                className={({ isActive }) =>
                                    `${linkStyle} ${isActive ? activeStyle : inactiveStyle}`
                                }
                            >
                                Profile
                            </NavLink>
                        )}
                    </div>

                    {/* Right – Profile / Login */}
                    <div className="relative">
                        {user.loggedIn ? (
                            <button
                                onClick={() => setMenuOpen((p) => !p)}
                                className="flex items-center space-x-2 focus:outline-none"
                            >
                                <img
                                    src="https://i.pravatar.cc/40"
                                    alt="avatar"
                                    className="w-8 h-8 rounded-full border"
                                />
                                <span className="text-gray-700 font-medium">
                  {user.name.split(" ")[0]}
                </span>
                            </button>
                        ) : (
                            <NavLink
                                to="/login"
                                className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-green-100"
                            >
                                Login
                            </NavLink>
                        )}

                        {/* Dropdown */}
                        {menuOpen && user.loggedIn && (
                            <div
                                className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg border"
                                onMouseLeave={() => setMenuOpen(false)}
                            >
                                <NavLink
                                    to="/profile"
                                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                                >
                                    My Profile
                                </NavLink>
                                <button
                                    onClick={() => setUser({ ...user, loggedIn: false })}
                                    className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                                >
                                    Log out
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;

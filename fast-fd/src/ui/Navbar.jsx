import { NavLink } from "react-router-dom";
import { useState } from "react";
import SearchOrder from "../feature/order/SearchOrder";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="bg-body-adib shadow-md mt-20  sm:mt-14">
            <div className="container mx-auto flex ml-0 items-center px-2 py-1">
                <SearchOrder/>
             

                {/* Hamburger Icon for Mobile */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="sm:hidden text-orange-800 focus:outline-none"
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                        />
                    </svg>
                </button>

                <nav
                    className={`${
                        isOpen ? "block" : "hidden"
                    } absolute sm:static top-full left-0 sm:flex sm:space-x-6 sm:items-center bg-body-adib w-full sm:w-auto`}
                >
                    <ul className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6">
                        <li>
                            <NavLink
                                to="/burger"
                                className="text-lg font-medium text-stone-800 hover:text-orange-800"
                                activeClassName="text-orange-800 font-bold"
                            >
                                Burger
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/pizza"
                                className="text-lg font-medium text-stone-800 hover:text-orange-800"
                                activeClassName="text-orange-800 font-bold"
                            >
                                Pizza
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/tacobar"
                                className="text-lg font-medium text-stone-800 hover:text-orange-800"
                                activeClassName="text-orange-800 font-bold"
                            >
                                Taco Bar
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/about"
                                className="text-lg font-medium text-stone-800 hover:text-orange-800"
                                activeClassName="text-orange-800 font-bold"
                            >
                                About Us
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Navbar;

/*import { NavLink } from "react-router-dom";
import { useState } from "react";
import SearchOrder from "../feature/order/SearchOrder";
import Background from "./Background";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
        <header className="bg-body-Blk shadow-md mt-24 sm:mt-20 ">
            <div className="container mx-auto flex  items-center justify-between px-2 py-1">
                <SearchOrder/>
             

            
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
                    } absolute sm:static top-full left-0 sm:flex sm:space-x-6 sm:items-center bg-body-whiteSmoke px-3 py-2 rounded-md  w-full sm:w-auto`}
                >
                    <ul className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6">
                        <li>
                            <NavLink
                                to="/burger"
                                className="text-lg font-medium text-stone-800 hover:underline hover:text-orange-800"
                                activeClassName="text-orange-800 font-bold"
                            >
                                Burger
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/pizza"
                                className="text-lg font-medium text-stone-800 hover:underline hover:text-orange-800"
                                activeClassName="text-orange-800 font-bold"
                            >
                                Pizza
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/tacobar"
                                className="text-lg font-medium text-stone-800 hover:underline hover:text-orange-800"
                                activeClassName="text-orange-800 font-bold"
                            >
                                Taco Bar
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/about"
                                className="text-lg font-medium text-stone-800 hover:underline hover:text-orange-800"
                                activeClassName="text-orange-800 font-bold"
                            >
                                About Us
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
        <Background/>
        </div>
        
    );
}

export default Navbar; */




//export default Navbar;


import { useState } from "react";
import { NavLink } from "react-router-dom";
import SearchOrder from "../feature/order/SearchOrder";



function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
    <header className="bg-body-Blk shadow-md mt-24 sm:mt-14">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <SearchOrder/>
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
              d={
                isOpen
                  ? "M6 18L18 6M6 6l12 12" 
                  : "M4 6h16M4 12h16M4 18h16" 
              }
            />
          </svg>
        </button>

    
        <nav
         className={`fixed top-0 left-0 h-full w-64 uppercase z-50 transform text-gray-800 placeholder-gray-500 bg-blue-200/30 backdrop-blur-lg border border-blue-300/20 rounded-lg shadow-md ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out sm:hidden`}
        >
          <ul className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 ">
            <li>
              <NavLink
                to="/burger"
                className="text-lg font-medium text-black hover:underline hover:text-orange-800"
                activeClassName="text-orange-800 font-bold"
              >
                Burger
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/pizza"
                className="text-lg font-medium text-black hover:underline hover:text-orange-800"
                activeClassName="text-orange-800 font-bold"
              >
                Pizza
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/tacobar"
                className="text-lg font-medium text-black hover:underline hover:text-orange-800"
                activeClassName="text-orange-800 font-bold"
              >
                Taco Bar
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className="text-lg font-medium text-black hover:underline hover:text-orange-800"
                activeClassName="text-orange-800 font-bold"
              >
                About Us
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  </div>
  );
}

export default Navbar;



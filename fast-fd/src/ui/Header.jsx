import UserName from "../feature/user/UserName";
import { Link } from "react-router-dom";

function Header() {
    return (
        <div>
        <header className="flex flex-col shadow-md z-10 top-0 left-0 fixed w-full justify-between items-center p-2 sm:flex-row bg-yellow-500 text-stone-800 ">
            <div className="flex items-center space-x-4">
                <Link className="uppercase text-orange-800 font-semibold text-xl " to="/">
                    <img className="w-6 h-8" src="images/BloomBurger.png" alt="" />
                </Link>
            </div>
            <div>
                <UserName />
            </div>
        </header>
        </div>
    );
}

export default Header;

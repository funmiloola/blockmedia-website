import logo from "../assets/images/BlockMedia.svg";
import Icon from "../assets/Icons/hamburger-menu-more-svgrepo-com (1).svg";
import closeIcon from "../assets/Icons/icons8-close.svg";
import { Link } from "react-router-dom";
import { useState } from "react";
export default function NavSection({ }) {
  const [showIcon, setShowIcon] = useState(true);
  function handleToggle() {
    setShowIcon((prev) => !prev);
    onSidebarClick();
  }
  return (
    <nav className=" font-sans hidden md:flex justify-between items-center px-4 md:px-20 pt-6 ">
      <div>
        <img src={logo} alt="" />
      </div>
      <div className="hidden md:flex gap-2">
        <Link to="/">
          <button className=" border border-[#3279F3] px-4 py-2 rounded-lg text-[#3279F3] font-semibold cursor-pointer">
            Log in
          </button>
        </Link>
        <Link to="/signup">
          <button className="border border-[#3279F3] bg-[#3279F3] px-4 py-2 rounded-lg text-[#ffffff] font-semibold cursor-pointer">
            Sign up
          </button>{" "}
        </Link>
      </div>
      <div className="block md:hidden" onClick={handleToggle}>
        {showIcon ? (
          <img src={Icon} alt="" className="w-8 h-8" />
        ) : (
          <img src={closeIcon} alt="" className="w-8 h-8" />
        )}
      </div>
    </nav>
  );
}

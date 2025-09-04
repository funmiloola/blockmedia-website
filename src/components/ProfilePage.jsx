import locationIcon from "../assets/Icons/carbon_location.svg";
import dateIcon from "../assets/Icons/ph_balloon-light.svg";
import Search from "./Search";
import hamburgerIcon from "../assets/Icons/hamburger-menu-more-svgrepo-com (1).svg";
import { NavLink, Outlet, useOutletContext } from "react-router-dom";
import { Children } from "react";
export default function ProfilePage({ children }) {
  const { handleOpenSidebar } = useOutletContext();
  return (
    <section className="md:grid md:grid-cols-[2fr_1fr] md:divide-x divide-gray-300 border-l border-l-gray-300 ">
      <div>
        <div className="flex py-3 items-center md:block border-b border-b-gray-300">
          <aside className="w-[5%]">
            <img
              src={hamburgerIcon}
              alt=""
              className="w-8 h-8 md:hidden"
              onClick={handleOpenSidebar}
            />
          </aside>
          <div className="flex justify-between md:px-6 md:py-2 w-[95%] md:w-full px-4">
            <h1 className="font-semibold md:text-4xl text-2xl">johndoe</h1>
            <button className="md:px-3.5 px-0.5 md:py-1 border border-blue-500 rounded-lg text-blue-500 ">
                         
                          {children}
            </button>
          </div>
        </div>
        <div className="relative">
          <div className="w-full h-45 bg-[#D9D9D9]"></div>
          <div className="flex gap-36 md:gap-108 items-end absolute left-[24px] bottom-[-60px]">
            <div className="w-25 h-25 bg-[#999999] rounded-full"></div>
            <button className="p-1.5 md:p-3 border border-[#999999] text-[#999999] rounded-[10px]">
              Edit Profile
            </button>
          </div>
        </div>
        <h2 className="pt-20 font-semibold md:text-3xl text-2xl pl-6">
          johndoe
        </h2>
        <p className="font-[18px] text-[#999999] pl-6">@iamjohndoe</p>
        <p className="pt-2 text-base pl-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor <br />
          incididunt ut labore et dolore magna aliqua.{" "}
        </p>
        <div className="flex gap-2.5 pt-7 pl-6 ">
          <div className="flex gap-1">
            {" "}
            <img src={locationIcon} alt="" /> <span>Nigeria</span>
          </div>
          <div className="flex gap-1">
            {" "}
            <img src={dateIcon} alt="" /> <span>August 23</span>
          </div>
        </div>
        <ul className="flex justify-between pt-8.25 pb-2.75 border-b border-b-gray-300 px-6">
          <li className="text-[18px] text-[#999999]">
            <NavLink
              to="post"
              className={({ isActive }) =>
                isActive || "/profile"
                  ? "border-b-6 border-b-blue-500 pb-2.5 font-semibold text-gray-950"
                  : null
              }
            >
              Posts
            </NavLink>
          </li>
          <li className="text-[18px] text-[#999999]">
            <NavLink
              to="replies"
              className={({ isActive }) =>
                isActive
                  ? "border-b-6 border-b-blue-500 pb-2.5 font-semibold text-gray-950"
                  : null
              }
            >
              Replies
            </NavLink>
          </li>
          <li className="text-[18px] text-[#999999]">
            <NavLink to="media">Media</NavLink>
          </li>
          <li className="text-[18px] text-[#999999]">
            <NavLink to="likes">Likes</NavLink>
          </li>
        </ul>
        <Outlet />
      </div>
      <div>
        <div className="hidden md:block">
          <Search />
        </div>
      </div>
    </section>
  );
}

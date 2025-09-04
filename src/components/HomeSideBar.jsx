import logo from '../assets/images/BlockMedia.svg'
import homeIcon from '../assets/Icons/lucide_home.svg'
import searchIcon from '../assets/Icons/ri_search-line.svg'
import nIcon from '../assets/Icons/ph_bell.svg'
import bookmarkIcon from '../assets/Icons/solar_bookmark-line-duotone.svg'
import profileIcon from '../assets/Icons/iconamoon_profile-circle-light.svg'
import moreIcon from '../assets/Icons/icon-park-outline_more-two.svg'
import closeIcon from '../assets/Icons/icons8-close.svg'
import hamburgerIcon from "../assets/Icons/hamburger-menu-more-svgrepo-com (1).svg";
import { NavLink, Outlet } from 'react-router-dom'
import { useState } from 'react'
export default function HomeSideBar() {
    const [openSidebar, setOpenSidebar] = useState(false);
  function handleCloseSidebar() {
    setOpenSidebar(false);
  }
 function handleOpenSidebar() {
    setOpenSidebar(true);

    }
    const menuItems = [
  { icon: homeIcon, label: "Home", to: "/home" },
  { icon: searchIcon, label: "Explore", to: "/home/explore" },
  { icon: nIcon, label: "Notifications", to: "/home/notifications" },
  { icon: bookmarkIcon, label: "Bookmark", to: "/home/bookmark" },
  { icon: profileIcon, label: "Profile", to: "/home/profile" },
  { icon: moreIcon, label: "More", to: "/home/wallet" },
];
    return (
        <section className="block md:grid md:grid-cols-[1fr_2fr] pt-1 md:pt-0 xl:grid-cols-[1fr_4fr]  lg:pl-4 xl:pl-20">
      <aside
        className={
          openSidebar
            ? "fixed z-10 top-0 left-0 bg-white h-screen w-1/2 "
            : "hidden md:block md:static md:w-full md:pt-4 "
        }
      >
        <img src={logo} alt="" className="pb-15 lg:pt-6 hidden mid:w-24  md:block " />
        <img
          src={closeIcon}
          alt=""
          className="pb-5 block md:hidden"
          onClick={handleCloseSidebar}
        />

        <ul className="flex flex-col gap-6 md:gap-8.25 pl-5 md:pl-0">
          {menuItems.map(({ icon, label, to }) => (
              <NavLink
                  to={to}
                  end//
                  className={({ isActive }) =>
                    isActive ? "text-blue-500" : "text-gray-950"
                  }
                >
            <li key={label} className="flex items-center gap-1 md:gap-6">
              <img src={icon} alt="" className="w-3 h-3 md:w-8 md:h-8" />
              <span className="block mid:hidden xl:block font-medium md:font-bold text-base md:text-2xl">
                
                  {label}
               
              </span>
            </li>
               </NavLink>
          ))}

          <li>
            <button className="px-7 py-0.5 xl:py-3 xl:px-20.5 bg-[#3279F3] border border-[#3279F3] text-[#ffffff] rounded-lg text-base">
              Post
            </button>
          </li>
        </ul>
      </aside>
                <Outlet context={{ handleOpenSidebar }} />
    </section>

       
    )
}
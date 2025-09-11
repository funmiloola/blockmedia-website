import logo from "../assets/images/BlockMedia.svg";
import homeIcon from "../assets/Icons/lucide_home.svg";
import searchIcon from "../assets/Icons/ri_search-line.svg";
import nIcon from "../assets/Icons/ph_bell.svg";
import bookmarkIcon from "../assets/Icons/solar_bookmark-line-duotone.svg";
import profileIcon from "../assets/Icons/iconamoon_profile-circle-light.svg";
import moreIcon from "../assets/Icons/icon-park-outline_more-two.svg";
import closeIcon from "../assets/Icons/icons8-close.svg";
import { NavLink, Outlet,useNavigate } from "react-router-dom";
import { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";
import ModalSection from "./modalSection";
export default function HomeSideBar() {
  const [openSidebar, setOpenSidebar] = useState(false);
  const [openModal, setOpenModal] = useState(false)
  const navigate = useNavigate()
  function handleCloseSidebar() {
    setOpenSidebar(false);
  }
  function handleOpenSidebar() {
    setOpenSidebar(true);
  }
  function handleOpenModal() {
    setOpenModal(true)
  }
  function handleCloseModal() {
    setOpenModal(false)
  }
  const menuItems = [
    { icon: homeIcon, label: "Home", to: "/home" },
    { icon: searchIcon, label: "Explore", to: "/home/explore" },
    { icon: nIcon, label: "Notifications", to: "/home/notification" },
    { icon: bookmarkIcon, label: "Bookmark", to: "/home/bookmark" },
    { icon: profileIcon, label: "Profile", to: "/home/profile" },
    { icon: moreIcon, label: "More", to: "/home/more" },
  ]
    const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });
  const logout = async () => {
   await signOut(auth) 
         navigate('/') 
  }
  return (
    <>
    <section className= "h-screen font-sans flex">
      <aside
        className={
          openSidebar
            ? "fixed z-10 top-0 left-0 bg-white h-screen w-2/3 "
            : "hidden md:relative md:block w-1/4 mid:w-[17%] lg:w-84 md:pt-4 mid:px-4 lg:px-10 md:overflow-y-auto "
        }
      >
        <img
          src={logo}
          alt=""
          className="pb-15 mid:pt-4 hidden mid:w-24 lg:w-60 md:block"
        />
        <img
          src={closeIcon}
          alt=""
          className="absolute right-8 md:hidden"
          onClick={handleCloseSidebar}
        />

        <ul className="flex flex-col gap-6 md:gap-8.25 pl-6 pt-8 md:pt-0 md:pl-6 ">
          {menuItems.map(({ icon, label, to }) => (
            <NavLink
              to={to}
              end //
              className={({ isActive }) =>
                isActive ? "text-blue-500" : "text-gray-950"
              }
            >
              <li
                key={label}
                onClick={handleCloseSidebar}
                className="flex items-center gap-1 md:gap-2 hover:bg-gray-100 rounded-md"
              >
                <img src={icon} alt="" className="w-3 h-3 md:w-8 md:h-8" />
                <span className="block mid:hidden lg:block font-medium md:font-bold text-base md:text-2xl">
                  {label}
                </span>
              </li>
            </NavLink>
          ))}
        </ul>
        <ul className="flex flex-col xl:items-center gap-3 pt-4 md:pt-10 md:gap-3 pl-6 xl:pl-0 ">
            <li>
            <button className="mid:mr-2 px-7 py-0.5 xl:py-3 xl:px-20.5 bg-[#3279F3] border border-[#3279F3] text-[#ffffff] rounded-lg text-base cursor-pointer">
              Post
            </button>
          </li>
          <li className=" mid:flex mid:flex-col mid:items-center mid:text-sm lg:block text-base font-semibold">User:<span>{user?.email}</span></li>
          <li>
            <button onClick={handleOpenModal} className="mid:mr-2 px-7 py-0.5 xl:py-3 xl:px-19 bg-gray-300 border border-gray-300 text-[#3279F3] rounded-lg text-base cursor-pointer">
              Logout
            </button>
          </li>
        </ul>
      </aside>
      <div className="overflow-y-auto flex-1 h-screen w-full">
        <Outlet context={{ handleOpenSidebar }} />
      </div>
      </section>
      <div className={openModal ? 'block' :'hidden'}>
        <ModalSection  onCloseClick={handleCloseModal} onLogoutClick={logout} />
        </div>
      </>
  );
}

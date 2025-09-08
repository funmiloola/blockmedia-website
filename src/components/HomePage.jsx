import HomeSideBar from "./HomeSideBar";
import photoIcon from "../assets/Icons/lucide_image.svg";
import gifIcon from "../assets/Icons/fluent_gif-16-regular.svg";
import listIcon from "../assets/Icons/cil_list.svg";
import smileyIcon from "../assets/Icons/ph_smiley.svg";
import locationIcon from "../assets/Icons/fluent_location-24-regular.svg";
import textarearIcon from "../assets/Icons/Vector.jpg";
import hamburgerIcon from "../assets/Icons/hamburger-menu-more-svgrepo-com (1).svg";
import searchIcon from "../assets/Icons/ri_search-line (1).svg";
import PostSection from "./PostSection";
import { useOutletContext } from "react-router-dom";
export default function HomePage() {
    const icons = [photoIcon,gifIcon,listIcon,smileyIcon,locationIcon]
    const {handleOpenSidebar} = useOutletContext()
  return (
    <section className="font-sans md:grid md:grid-cols-[2fr_1fr] md:divide-x divide-gray-300 border-l border-l-gray-300 ">
      <div>
        <div className="flex py-3  items-center md:block border-b border-b-gray-300">
          <aside className="w-[5%]"
          >
            <img
              src={hamburgerIcon}
              alt=""
              className="w-8 h-8 md:hidden"
              onClick={handleOpenSidebar}
            />
          </aside>
          <div className="flex justify-between px-4 md:px-6 md:pb-1.5 md:pt-4 w-[95%] md:w-full">
               <h1 className="font-semibold md:text-4xl text-2xl">Home</h1>
              <div className="flex gap-2 items-center border border-[#ECEFF4] rounded-md pl-1.5">
              <img src={searchIcon} alt="" className="w-4 h-4" />
              <input
                type="text"
                placeholder="Search for post"
                className="outline-none py-0.5 md:py-1.5 text-sm text-gray-400"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col  divide-y divide-gray-300">
          <div>
            <PostSection />
          </div>
          <div>
            <PostSection />
          </div>
        </div>
      </div>
      <div className="hidden md:block">
        <div className="flex gap-2 md:gap-4 px-2 md:pl-6 pb-7.5 md:pb-5.5 border-b border-b-gray-300 pt-4">
          <div className="w-6 md:w-12 h-6 md:h-12 rounded-full bg-[#D9D9D9]"></div>
          <h2 className="md:text-lg text-base font-semibold">Make a post</h2>
        </div>
        <div className="border border-[#FAFBFC] bg-[#FAFBFC] flex flex-col ml-2 md:ml-6 mr-2 my-2 md:my-6 rounded-xl">
          <textarea
            name=""
            id=""
            placeholder="  What is happening?..."
            className=" text-gray-300 md:w-78 md:h-38.25 outline-none placeholder:text-[#000000] placeholder:font-medium placeholder:text-xs md:placeholder:text-base placeholder:pt-1 md:placeholder:pt-2"
          ></textarea>
          <div className="flex gap-0.5 justify-center items-center ml-2 mb-3 border border-blue-100 rounded-full py-1 bg-blue-100 w-4/5 md:w-1/2">
            <img src={textarearIcon} alt="" />
            <p className="text-[#007AFF] text-[11px] font-normal md:font-medium">
              Everyone can reply
            </p>
          </div>
        </div>
        <ul className="flex justify-between md:justify-normal md:gap-4 px-4 md:pl-8 pb-7.25">
                  {icons.map((icon,index) => (
                      <li key={index}>
                  <img src={icon} alt="" className="w-4 h-4 md:w-6 md:h-6"/>
              </li>
          ))}
        </ul>
        <button className="font-semibold px-6 md:px-20 py-1.5 md:py-3 bg-[#3279F3] border border-[#3279F3] text-[#ffffff] rounded-lg mx-4 md:mx-8">
          Make Post
        </button>
      </div>
    </section>
  );
}

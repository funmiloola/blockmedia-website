import logo from '../assets/images/pleased-dark-skinned-afro-american-woman-stands-ripped-space-laughs-happily-poses-paper-hole.jpg'
import { useOutletContext } from "react-router-dom";
import hamburgerIcon from "../assets/Icons/hamburger-menu-more-svgrepo-com (1).svg";
export default function Bookmark() {
    const {handleOpenSidebar} = useOutletContext()
    return (
          <section className='font-sans border-l border-l-gray-300'>
            <aside className="w-[10%] pl-4 pt-4">
                        <img
                          src={hamburgerIcon}
                          alt=""
                          className="w-8 h-8 md:hidden"
                          onClick={handleOpenSidebar}
                        />
            </aside>
            <div className='flex items-center h-screen justify-center'>
        <h1 className='text-blue-500 font-semibold text-2xl'>Coming Soon...</h1>
        <img src={logo} alt="" className='w-28 h-28 md:w-48 md:h-48 animate-spin'/>
        </div>
        
          </section>
        
    )
}

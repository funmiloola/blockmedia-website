import { Link } from "react-router-dom"
export default function NavSideBar() {
    return (
         <div className='font-sans flex flex-col gap-8 fixed top-[13%] left-0 w-full h-screen bg-[#fff]'>
                    <span className=' text-[#3279F3] text-center font-semibold'><Link to='/'>Log in</Link></span>
                    <span className=' text-center rounded-lg text-[#3279F3] font-semibold'><Link to="/signup">Sign up</Link></span>
                </div>
    )
}
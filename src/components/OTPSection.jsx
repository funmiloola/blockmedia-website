import NavSection from "./NavSection"
import NavSideBar from "./NavSideBar"
import { useState,useRef } from "react"
import { useNavigate } from "react-router-dom"
import logo from '../assets/images/BlockMedia.svg'
export default function OTP() {
    const [openSidebar, setOpenSidebar] = useState(true)
    const navigate = useNavigate()
    const input = useRef();
    function handleSideBar() {
     setOpenSidebar(prev => !prev)
    }  
    function handleVerification() {
        if (!input.current.value) return;
        navigate("/home")
 }   
    return (
        <>
            <NavSection onSidebarClick={handleSideBar} />
               <aside className={openSidebar ? 'hidden':'block'} >
                        <NavSideBar/>
                        </aside>
            <section className="font-sans flex flex-col items-center">
                <img src={logo} alt="" className='pb-8'/>
                <h1 className=' font-semibold text-3xl text-gray-900 pb-3'>OTP Verification</h1>
                <p className=' text-gray-600 pb-8 text-base'>Please enter the 5-digit code sent to your email</p>
                <div className="flex flex-col w-2/3 md:w-[20%] gap-1.5 pb-6">
                    <label htmlFor="otp" className="text-gray-700 text-sm font-semibold">Enter code</label>
                    <input type="text" name="" placeholder="  5-digit-code" id="otp" className="w-full outline-none border border-gray-300 rounded-lg py-2.5" ref={input} />
                    <button className="font-semibold w-full py-2.5 mt-4 bg-[#3279F3] border border-[#3279F3] text-[#ffffff] rounded-lg" onClick={handleVerification}>Verify</button>
                </div>
            </section>
        </>
    )
}
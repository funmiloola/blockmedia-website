import NavSection from "./NavSection"
import NavSideBar from "./NavSideBar";
import logo from '../assets/images/BlockMedia.svg'
import { Link,useNavigate } from "react-router-dom"
import { useState,useRef } from "react";
export default function SignupPage() {
     const [openSidebar, setOpenSidebar] = useState(true);
        const [errorMessage, setErrorMessage] = useState('')
        const [errMessage,setErrMessage] = useState('')
         const navigate = useNavigate()
        const inputEmail = useRef()
        const inputPassword = useRef()
        function handleSideBar() {
            setOpenSidebar(prev => !prev);
        }
        function handleLogin() {
            const inputtedEmail = inputEmail.current.value;
            const inputtedPassword = inputPassword.current.value;
            if (!inputtedEmail && !inputtedPassword) {
                setErrorMessage('Input email')
                setErrMessage('Input password')
                setTimeout(() => {
                    setErrorMessage(null)
                    setErrMessage(null)
                },1500) 
            } 
            else {
                navigate("/login");   
            }
           
        }
    return (
        <>
            <NavSection onSidebarClick={handleSideBar} onLoginClick={handleLogin} />
            <aside className={openSidebar ? 'hidden' : 'block'} >
                <NavSideBar/>
            </aside>
            <section className="font-sans flex flex-col items-center">
                <img src={logo} alt="" className='pb-8'/>
                <h1 className=' font-semibold text-3xl text-gray-900 pb-3'>Create an account</h1>
                <p className=' text-gray-600 pb-8'>Let's get you started</p>
                  <div className='w-2/3 md:w-[20%] flex flex-col gap-3'>
                    <label htmlFor="email" className="text-gray-700 text-sm font-semibold">Email</label>
                    <input ref={inputEmail} type="text" placeholder='  Enter your Email' className="py-2.5 outline-none border border-gray-300 rounded-lg " />
                    <p className='text-sm text-red-400'>{errorMessage}</p>
                </div>
                <div className='w-2/3 md:w-[20%] flex flex-col gap-3 pt-4'>
                    <label htmlFor="password" className="text-gray-700 text-sm font-semibold">Password</label>
                    <input ref={inputPassword} type="password" placeholder='  Password' className="py-2.5 outline-none border border-gray-300 rounded-lg " />
                    <p className='text-sm text-red-400'>{errMessage}</p>
                </div>
                <button onClick={handleLogin} className="font-semibold px-28 py-3 bg-[#3279F3] border border-[#3279F3] text-[#ffffff] rounded-lg mt-4">Sign up</button>
                <p className="pt-8 pb-16 text-gray-600">Have an account?<span className='text-[#3279F3] font-semibold'><Link to="/">Log in</Link></span></p>
            </section>
        </>
    )
}
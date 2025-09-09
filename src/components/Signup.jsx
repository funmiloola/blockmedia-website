import logo from '../assets/images/BlockMedia.svg'
import { useState, useRef } from 'react'
import { useNavigate,Link } from 'react-router-dom'
import NavSection from './NavSection'
import NavSideBar from './NavSideBar'
export default function Signup() {
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
        const validEmail = inputtedEmail.includes('@')
        const inputtedPassword = inputPassword.current.value;
        const passwordLength = inputtedPassword.length
        let hasError = false;
        if (!inputtedEmail) {
            setErrMessage('Input Mail');
            hasError = true;
        } else if (!validEmail) {
            setErrMessage('Input Valid Mail');
            hasError = true;
        }
  if (!inputtedPassword) {
    setErrorMessage('Input Password');
    hasError = true;
  } else if (passwordLength < 6) {
      setErrorMessage("Input Password with 6 or more Characters");
      hasError = true;
        }

  if (hasError) {
    setTimeout(() => {
      setErrorMessage(null);
      setErrMessage(null);
    }, 1500);
    return;
  }

           navigate("/login");   
    }
    return ( 
        <>
            <NavSection onSidebarClick={handleSideBar} onLoginClick={handleLogin} />    
        <aside className={openSidebar ? 'hidden':'block'} >
            <NavSideBar/>
            </aside>
            <section className='font-sans flex flex-col items-center'>
                    <img src={logo} alt="" className='pb-8'/>
                <h1 className=' font-semibold text-3xl text-gray-900 pb-3'>Log in to your account</h1>
                <p className=' text-gray-600 pb-8'>Welcome back!Please enter your details.</p>
                <div className='w-2/3 md:w-[25%] flex flex-col gap-5'>
                    <label htmlFor="email" className="text-gray-700 text-sm font-semibold">Email</label>
                    <input type="text" placeholder='Enter your Email' className="py-2.5 outline-none border border-gray-300 rounded-lg px-2" ref={inputEmail} />
                    <p className='text-sm text-red-400'>{errMessage}</p>
                </div>
                <div className='w-2/3 md:w-[25%] flex flex-col gap-5'>
                    <label htmlFor="password" className="text-gray-700 text-sm font-semibold">Password</label>
                    <input type="password" placeholder='Password' className="py-2.5 outline-none border border-gray-300 rounded-lg px-2" ref={inputPassword} />
                    <p className='text-sm text-red-400'>{errorMessage}</p>
                </div>
                <div className='flex items-center gap-14 py-6'>
                    <div className='flex gap-1'>
                   <input type="checkbox" id='checkbox'/>
                        <label htmlFor="checkbox" className="text-gray-700 font-semibold text-sm">Remember for 30days</label>
                        </div>
                    <p className="text-[#3279F3] font-semibold text-sm"><a href="">Forgot Password</a></p>
                </div> 
                <button className=" font-semibold px-36 py-3 bg-[#3279F3] border border-[#3279F3] text-[#ffffff] rounded-lg" onClick={handleLogin}>Log in</button>
                <p className='pt-8 pb-16 text-gray-600'>Don't have an account? <span className='text-[#3279F3] font-semibold'><Link to="/signup">Sign up</Link></span></p>
            </section>
        </>
    )
}
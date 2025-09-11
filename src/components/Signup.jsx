import logo from "../assets/images/BlockMedia.svg";
import { useState, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import NavSection from "./NavSection";
import NavSideBar from "./NavSideBar";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { toast, ToastContainer } from "react-toastify";
export default function Signup() {
  const [openSidebar, setOpenSidebar] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
    const [errMessage, setErrMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const [disabled,setDisabled] = useState(false)
  const navigate = useNavigate();
  const inputEmail = useRef();
  const inputPassword = useRef();
  function handleSideBar() {
    setOpenSidebar((prev) => !prev);
  }
  function handleLogin() {
    const inputtedEmail = inputEmail.current.value;
    const validEmail = inputtedEmail.includes("@gmail.com");
    const inputtedPassword = inputPassword.current.value;
      const passwordLength = inputtedPassword.length;
      let hasError = false
    if (!inputtedEmail) {
        setErrMessage("Input Mail");
        hasError = true
    } else if (!validEmail) {
        setErrMessage("Input Valid Mail");
        hasError = true
    } else {
        setErrMessage('')
    }
    if (!inputtedPassword) {
        setErrorMessage("Input Password");
        hasError = true;
    } else if (passwordLength < 6) {
        setErrorMessage("Input Password with 6 or more Characters");
        hasError = true;
    } else {
        setErrorMessage('')
    }
    return hasError
  }
  const handleRegister = async () => {
      let hasErrors = handleLogin();
      if (hasErrors) return;
      setLoading(true)
      setDisabled(true)
    try {
      const response = await login();
      if (response?.success) {
        navigate("/home");
      } else {
        toast.error(response.errorMessage.replaceAll('_',' '))
      }
    } catch {
      console.log("Enter a registered email");
      }
      setLoading(false)
      setDisabled(false)
  };

  const login = async () => {
    const inputtedEmail = inputEmail.current.value;
    const inputtedPassword = inputPassword.current.value;
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        inputtedEmail,
        inputtedPassword
      );
      return { success: true,};
    } catch (error) {
      return { success: false,errorMessage:error.code  };
      console.log(error.message);
    }
  };
    
  return (
    <>
      <NavSection
        onSidebarClick={handleSideBar}
        onLoginClick={handleRegister}
      />
      <aside className={openSidebar ? "hidden" : "block"}>
        <NavSideBar />
      </aside>
      <section className="font-sans flex flex-col items-center">
        <img src={logo} alt="" className="pb-8" />
        <h1 className=" font-semibold text-3xl text-gray-900 pb-3">
          Log in to your account
        </h1>
        <p className=" text-gray-600 pb-8">
          Welcome back!Please enter your details.
        </p>
        <div className="w-[85%] md:w-[25%] flex flex-col gap-5">
          <label
            htmlFor="email"
            className="text-gray-700 text-sm font-semibold"
          >
            Email
          </label>
          <input
            type="text"
            placeholder="Enter your Email"
            className="py-2.5 outline-none border border-gray-300 rounded-lg px-2"
            ref={inputEmail}
          />
          <p className="text-sm text-red-400">{errMessage}</p>
        </div>
        <div className="w-[85%] md:w-[25%] flex flex-col gap-5">
          <label
            htmlFor="password"
            className="text-gray-700 text-sm font-semibold"
          >
            Password
          </label>
          <input
            type="password"
            placeholder="Password"
            className="py-2.5 outline-none border border-gray-300 rounded-lg px-2"
            ref={inputPassword}
          />
          <p className="text-sm text-red-400">{errorMessage}</p>
        </div>
        <div className="flex items-center w-full px-8 justify-between mid:justify-center mid:w-1/2 mid:gap-4 xl:gap-14 py-6">
          <div className="flex gap-1">
            <input type="checkbox" id="checkbox" />
            <label
              htmlFor="checkbox"
              className="text-gray-700 font-semibold text-sm"
            >
              Remember for 30days
            </label>
          </div>
          <p className="text-[#3279F3] font-semibold text-sm">
            <a href="">Forgot Password</a>
          </p>
        </div>
        <button
          className=" flex items-center justify-center gap-2 font-semibold w-[85%] md:w-[25%] py-3 bg-[#3279F3] border border-[#3279F3] text-[#ffffff] cursor-pointer rounded-lg disabled:bg-gray-300 disabled:border-gray-300 "
          onClick={handleRegister} disabled={disabled}
        >
                  <span>Log in</span> 
                   {loading ? (<svg
            class="mr-3 -ml-1 size-5 animate-spin text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              class="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              stroke-width="4"
            ></circle>
            <path
              class="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
                  </svg>) : null }
          
        </button>
        <p className="pt-8 pb-16 text-gray-600">
          Don't have an account?{" "}
          <span className="text-[#3279F3] font-semibold">
            <Link to="/signup">Sign up</Link>
          </span>
              </p>
            <ToastContainer position="top-center" autoClose={1000}  />     
      </section>
    </>
  );
}

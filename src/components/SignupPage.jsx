import NavSection from "./NavSection";
import NavSideBar from "./NavSideBar";
import logo from "../assets/images/BlockMedia.svg";
import { Link, useNavigate } from "react-router-dom";
import { useState, useRef } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase";
export default function SignupPage() {
  const [openSidebar, setOpenSidebar] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
    const [errMessage, setErrMessage] = useState("");
    const [loading, setLoading] = useState(false)
    const [disabled,setDisabled] = useState(false)
  const navigate = useNavigate();
  const inputEmail = useRef();
  const inputPassword = useRef();
  function handleSideBar() {
    setOpenSidebar((prev) => !prev);
  }
  function handleLogin() {
    const inputtedEmail = inputEmail.current.value;
    const inputtedPassword = inputPassword.current.value;
    const validEmail = inputtedEmail.includes("@gmail.com");
      const passwordLength = inputPassword.current.value.length;
      let hasError = false
    if (!inputtedEmail) {
        setErrorMessage("Input Email");
        hasError = true;
    } else if (!validEmail) {
        setErrorMessage("Input a valid Email");
        hasError = true;
    } else {
        setErrorMessage('')
    }
    if (!inputtedPassword) {
        setErrMessage("Input Password");
        hasError = true;
    } else if (passwordLength < 6) {
        setErrMessage("Input Password with 6 or more Characters");
        hasError = true;
    } else {
        setErrMessage('')
      }
      return hasError;
      
  }
  const handleRegister = async () => {
    let hasErrors = handleLogin();
      if (!hasErrors) {
          setLoading(true)
          setDisabled(true)
      await register();
      navigate("/home");
      }
      setLoading(false)
      setDisabled(false)
  };
  const register = async () => {
    const inputtedEmail = inputEmail.current.value;
    const inputtedPassword = inputPassword.current.value;
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        inputtedEmail,
        inputtedPassword
      );
    } catch (error) {
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
          Create an account
        </h1>
        <p className=" text-gray-600 pb-8">Let's get you started</p>
        <div className="w-2/3 md:w-[20%] flex flex-col gap-3">
          <label
            htmlFor="email"
            className="text-gray-700 text-sm font-semibold"
          >
            Email
          </label>
          <input
            ref={inputEmail}
            type="text"
            placeholder="Enter your Email"
            className="py-2.5 px-2 outline-none border border-gray-300 rounded-lg "
          />
          <p className="text-sm text-red-400">{errorMessage}</p>
        </div>
        <div className="w-2/3 md:w-[20%] flex flex-col gap-3 pt-4">
          <label
            htmlFor="password"
            className="text-gray-700 text-sm font-semibold"
          >
            Password
          </label>
          <input
            ref={inputPassword}
            type="password"
            placeholder="Password"
            className="py-2.5 px-2 outline-none border border-gray-300 rounded-lg "
          />
          <p className="text-sm text-red-400">{errMessage}</p>
        </div>
        <button
          onClick={handleRegister}
          className="flex items-center gap-2 font-semibold px-26.5 py-3 bg-[#3279F3] border border-[#3279F3] text-[#ffffff] rounded-lg mt-4 cursor-pointer disabled:bg-gray-300 disabled:border-gray-300"
          disabled={disabled}        
        >
                  <span>Sign up</span>
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
          Have an account?
          <span className="text-[#3279F3] font-semibold">
            <Link to="/">Log in</Link>
          </span>
              </p>
          </section>
          
    </>
  );
}

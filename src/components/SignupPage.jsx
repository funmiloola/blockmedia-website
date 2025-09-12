import NavSection from "./NavSection";
import logo from "../assets/images/BlockMedia.svg";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { useForm } from "react-hook-form";
export default function SignupPage() {   
const {handleSubmit,register,formState:{errors,isSubmitting},getValues,setError} = useForm()
    const navigate = useNavigate();
    const onSubmit = async () => {
        try {
          await registerAccount()
        navigate('/home')
      }
        catch (error) {
            setError('email', {
                message:'This mail is already taken'
            })
        } 
    }  
    const registerAccount = async () => {
      const email = getValues('email')
      const password = getValues('password')
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
          email,
        password
        );
        return user
    } catch (error) {
        throw error;
    }
  };

  return (
    <>
      <NavSection
      />
      <section className="font-sans flex flex-col items-center pt-20 md:pt-24">
        <img src={logo} alt="" className="pb-8" />
        <h1 className=" font-semibold text-3xl text-gray-900 pb-3">
          Create an account
        </h1>
              <p className=" text-gray-600 pb-8">Let's get you started</p>
              <form action="" onSubmit={handleSubmit(onSubmit)}>
        <div className=" flex flex-col gap-3">
          <label
            htmlFor="email"
            className="text-gray-700 text-sm font-semibold"
          >
            Email
          </label>
          <input
                          {...register('email', {
                              required: "Email is required",
                              validate: (value) => {
                                  if (!value.includes('@')) {
                                      return "Enter a valid email"
                                  }
                                  return true;
                              }
            })}
            type="text"
            placeholder="Enter your Email"
            className="py-2.5 px-2 outline-none border border-gray-300 rounded-lg "
          />
                      {errors.email && (<div className="text-red-500">
                          {errors.email.message}
         </div>)} 
        </div>
        <div className=" flex flex-col gap-3 pt-4">
          <label
            htmlFor="password"
            className="text-gray-700 text-sm font-semibold"
          >
            Password
          </label>
          <input
                          {...register('password', {
                              required: "Password is required",
                              minLength:{value:6, message:'Enter a minimun of 6 characters'}
            })}
            type="password"
            placeholder="Password"
            className="py-2.5 px-2 outline-none border border-gray-300 rounded-lg "
          />
                      {errors.password && (<div className="text-red-500">
                        {errors.password.message}  
          </div>)}
        </div>
        <button
          type="submit"
          className="flex items-center justify-center gap-2 font-semibold px-35 md:px-40  py-3 bg-[#3279F3] border border-[#3279F3] text-[#ffffff] rounded-lg mt-6 cursor-pointer disabled:bg-gray-300 disabled:border-gray-300"
          disabled={isSubmitting}        
        >
                  <span className="">Sign up</span>
                   {isSubmitting ? (<svg
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
                  </form>
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

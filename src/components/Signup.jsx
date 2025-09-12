import logo from "../assets/images/BlockMedia.svg";
import { useNavigate, Link } from "react-router-dom";
import NavSection from "./NavSection";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
export default function Signup() {
    const navigate = useNavigate();
    const login = async () => {
      const email = getValues('email')
      const password = getValues('password')
    try {
      const user = await signInWithEmailAndPassword(
        auth,
          email,
       password
      );
      return { success: true,};
    } catch (error) {
      return { success: false,errorMessage:error.code  };
      
    }
    };
    const errMessage = async () => {
        const response = await login()
        try {
            const message = response.errorMessage.replaceAll('_',' ')
          if (message === 'auth/invalid-email') {
                return 'Enter a registered email '
        }
       else if (message === 'auth/network-request-failed') {
            return 'Network Failed Try again!'
        }
          else {
              return 'Error'
        }
        }
        catch(error) {
            throw error;
        }
    }
    const { register, handleSubmit,getValues, formState: {errors,isSubmitting}} = useForm()
    const onSubmit = async () => {
        try {
            const response = await login() 
          
            if (response?.success) {
                navigate('/home')
            } else {
                const message = await errMessage()
                toast.error(message)
            }
            
        } catch {
            console.log('Enter a valid mail')
        }
    }
  return (
    <>
      <NavSection  />
      <section className="font-sans flex flex-col items-center pt-20 md:pt-24">
        <img src={logo} alt="" className="pb-8" />
        <h1 className=" font-semibold text-3xl text-gray-900 pb-3">
          Log in to your account
        </h1>
        <p className=" text-gray-600 pb-8">
          Welcome back!Please enter your details.
              </p>
              <form onSubmit={handleSubmit(onSubmit)} className="">
        <div className=" flex flex-col gap-5">
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
            {...register("email",{
                              required:'Email is required',
                validate: (value) => {
                    if (!value.includes('@')) {
                                      return "Enter a valid email"
                    }
                    return true;
                              }
                          })}
          />
                      {errors.email && (<div className="text-red-500">{ errors.email.message}</div>)}
        </div>
        <div className=" flex flex-col gap-5">
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
                           {...register("password", {
                              minLength: {value:6, message:'Password must have atleast 6 characters'},
                              required:'Password is required'
                          } )}
          />
                      {errors.password && (<div className="text-red-500">
                          {errors.password.message}
         </div>)}
        </div>
        <div className="flex items-center  justify-between py-6">
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
  className="flex items-center justify-center gap-2 font-semibold px-35 md:px-40 py-3 bg-[#3279F3] border border-[#3279F3] text-white cursor-pointer rounded-lg disabled:bg-gray-300 disabled:border-gray-300"
  disabled={isSubmitting}
  type="submit"
>
  <span>Log in</span>
  {isSubmitting ? (
    <svg
      className="mr-3 -ml-1 size-5 animate-spin text-white"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      ></circle>
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      ></path>
    </svg>
  ) : null}
</button>
                  </form>
        <p className="pt-8 pb-16 text-gray-600">
          Don't have an account?{" "}
          <span className="text-[#3279F3] font-semibold">
            <Link to="/signup">Sign up</Link>
          </span>
              </p>
           
      </section>
    </>
  );
}

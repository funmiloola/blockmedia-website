import ProfilePage from "./ProfilePage"
import icon from "../assets/Icons/Icon.svg";
import groupIcon from "../assets/Icons/Group (2).svg"
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function ProfileWallet() {
    const [openWithdrawButton, setOpenWithdrawButton] = useState(false)  
    const [changeButton,setChangeButton] = useState(true)
    function handleConnection() {
        toast.success("Wallet Connected");
        setTimeout(() => {
            setChangeButton(false)
        },3000)

    }   
        function handleWithdraw() {
            setOpenWithdrawButton(prev => !prev)
        }
    return (
        <>
            <ProfilePage>
                {changeButton ? (<span onClick={handleConnection}>Connect Wallet</span>) : (<div className="relative" onClick={handleWithdraw}>
                <div className="flex items-center gap-2 ">
            <img src={groupIcon} alt="" />
            <span className="font-bold">$23.76</span>
                <img src={icon} alt="" />
                </div>
            <div className={`absolute top-11 right-[-12px] z-10 border bg-[#ffffff] rounded-md  ${openWithdrawButton ? 'block' : 'hidden'}`}>
                <button className="font-bold px-6.5 py-2 cursor-pointer">Withdraw</button>
                </div>
                </div>)}
            </ProfilePage>
             <ToastContainer position="top-center" autoClose={2000}  />  
       </>     
    )
}
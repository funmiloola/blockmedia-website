import ProfilePage from "./ProfilePage"
import icon from "../assets/Icons/Icon.svg";
import groupIcon from "../assets/Icons/Group (2).svg"
import { useState } from "react";
export default function WalletSection() {
  const [openWithdrawButton,setOpenWithdrawButton] = useState(false)  
    function handleWithdraw() {
        setOpenWithdrawButton(prev => !prev)
    }
    return (
        <ProfilePage>
            <div className="relative" onClick={handleWithdraw}>
                <div className="flex items-center gap-2 ">
            <img src={groupIcon} alt="" />
            <span className="font-bold">$23.76</span>
                <img src={icon} alt="" />
                </div>
            <div className={`absolute top-11 right-[-12px] z-10 border bg-[#ffffff] rounded-md  ${openWithdrawButton ? 'block' : 'hidden'}`}>
                <button className="font-bold px-6.5 py-2">Withdraw</button>
                </div>
                </div>
     </ProfilePage>   
    )
}
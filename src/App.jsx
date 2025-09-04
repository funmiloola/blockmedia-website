import Signup from "./components/signup"
import OTP from "./components/OTPSection"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomeSideBar from "./components/HomeSideBar"
import HomePage from "./components/HomePage"
import SignupPage from "./components/SignupPage"
import ProfileWallet from "./components/ProfileWallet"
import WalletSection from "./components/WalletSection"
import PostSection from "./components/PostSection"

function App() {

  return (
    <div className="max-w-360 mx-auto">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup/>}/>
        <Route path="/login" element={<OTP />} />
        <Route path="/home" element={<HomeSideBar />}>
          <Route index element={<HomePage/>} />
          <Route path="profile" element={<ProfileWallet/>}>
           <Route index element={<PostSection />} />
          <Route path="post" element={<PostSection />} />
          </Route>
           <Route path="wallet" element={<WalletSection/>}>
          <Route index element={<PostSection />} />
          <Route path="post" element={<PostSection />} />
          </Route> 
        </Route>
        <Route path="/signup" element={<SignupPage />} />
        <Route>404 Not Found</Route>
      </Routes>
      </BrowserRouter>
      </div>
  )
}

export default App

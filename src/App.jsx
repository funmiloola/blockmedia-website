import Signup from "./components/Signup.jsx";
import OTP from "./components/OTPSection";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {ToastContainer} from "react-toastify"
import HomeSideBar from "./components/HomeSideBar";
import HomePage from "./components/HomePage";
import SignupPage from "./components/SignupPage";
import ProfileWallet from "./components/ProfileWallet";
import PostSection from "./components/PostSection";
import Bookmark from "./components/Bookmark.jsx";
import ExplorePage from "./components/ExplorePage.jsx";
import MorePage from "./components/MorePage.jsx";
import Notification from "./components/Notification.jsx";
function App() {
  return (
    <div className="max-w-360 mx-auto">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/login" element={<OTP />} />
          <Route path="/home" element={<HomeSideBar />}>
            <Route index element={<HomePage />} />
            <Route path="bookmark" element={<Bookmark />} />
            <Route path="explore" element={<ExplorePage />} />
            <Route path="notification" element={<Notification />} />
            <Route path="more" element={<MorePage />} />
            <Route path="profile" element={<ProfileWallet />}>
              <Route index element={<PostSection />} />
              <Route path="post" element={<PostSection />} />
            </Route>
          </Route>
          <Route path="/signup" element={<SignupPage />} />
          <Route>404 Not Found</Route>
        </Routes>
      </BrowserRouter>
       <ToastContainer position="top-center" autoClose={4000}  />     
    </div>
  );
}

export default App;

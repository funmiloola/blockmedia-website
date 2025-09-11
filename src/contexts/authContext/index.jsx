import { useContext, useEffect,useState } from "react";
import { auth } from "../../firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";
const AuthContext = React.createContext();
export function useAuth() {
    return useContext(AuthContext);
}
export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(null);
    const [userLogin, setUserLogin] = useState(false)
    useEffect(() => {
        const unsubcribe = onAuthStateChanged(auth, initializeUser);
        return unsubcribe;
    }, [])
    async function initializeUser(user) {
        if (user) {
            setCurrentUser({ ...user });
            setUserLogin(true)
        } else {
            setCurrentUser(null);
            setUserLogin(false);
        }
    }
    const value = [
        currentUser,userLogin
    ]
    return (
        <AuthContext.Provider value={value}>
          {children}
        </AuthContext.Provider>
    )
}
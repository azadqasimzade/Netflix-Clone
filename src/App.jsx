import { useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SignIn from "./pages/SignIn"
import ScrollTo from "./ScrollTo"
import Home from "./pages/Home"
import HomeScreen from "./components/HomeScreen/HomeScreen"
import Nav from "./components/Nav/Nav"
import { auth } from "./firebase"
import { login, logout, selectUser } from "./features/userSlice"
import Profile from "./components/Profile/Profile"
import NotFound from "./components/NotFound/NotFound"
import SignUp from "./pages/Signup"

function App() { 
  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  useEffect(() =>{
    const unsubscribe = auth.onAuthStateChanged( (userAuth) => {
      if(userAuth){
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email
        }))
      }else{
        //  Logged out
        dispatch(logout())
      }
    })

    return unsubscribe
  }, [dispatch])

  return (
      <Router>
        <ScrollTo/>
        <Nav/>
        <Routes>
          {
            !user ? (
              <>
                <Route path="/" element={<HomeScreen/>}/>
                <Route path="/signin" element={<SignIn/>}/>
                <Route path="/signup" element={<SignUp/>}/>
              </>
            )
            :
            (
              <>
                <Route path="/profile" element={<Profile/>}/>
                <Route path="/" element={<Home/>}/>
              </>
            )
          }
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </Router>
  )
}

export default App

import { BrowserRouter, Routes,Route } from "react-router-dom"
import Home from "./Assets/components/Pages/Home/Home"
import Layout from './Layout'
import Landing from "./Assets/components/Pages/Examples/Landing"
import Profile from "./Assets/components/Pages/Examples/Profile"
import Login from "./Assets/components/Pages/Examples/Login"
import Register from "./Assets/components/Pages/Examples/Register"





function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route  path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="/landing" element={<Landing />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      </Route>
    </Routes>
  </BrowserRouter>
    
  )
}

export default App
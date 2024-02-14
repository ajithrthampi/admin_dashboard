import Dashboard from "./components/dashboard/Dashboard";
import Notifications from "./components/notifications/Notifications";
import Profile from "./components/profile/Profile";
import Tables from "./components/tables/Tables";
import Homepages from "./pages/Homepages"
import Login from "./pages/Login"
import { Routes, Route, Navigate } from "react-router-dom";
import SignUp from "./pages/SignUp";
import { NavbarContext } from "./context/NavbarContext";
import { useState } from "react";

function App() {
  const [showSidebar, setShowSidebar] = useState(false);

  console.log("kkkkkkkk", showSidebar);

  return (
    <>
      <NavbarContext.Provider value={{ showSidebar, setShowSidebar }}>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/table' element={<Tables />} />
          <Route path='/notifications' element={<Notifications />} />
          <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </Routes>
      </NavbarContext.Provider>

    </>
  )
}

export default App

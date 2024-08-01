import Home from "./home/Home";
import { Navigate, Route, Routes } from "react-router-dom";
import Courses from "./course/Courses";
import Signup from "./components/Signup";
import Login from "./components/Login";
import { Toaster } from "react-hot-toast";
import { useAuth } from "./context/AuthProvider";
// import React from 'react'
export default function App() {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser)
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/course"
            element={authUser ? <Courses /> : <Navigate to="/signup" />}
          />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} /> 
        </Routes>
        <Toaster />
      </div>
    </>
  );
}

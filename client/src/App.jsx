import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Signup from "./components/Signup";
import Allcomponent from "./components/Allcomponent";
import Courses from "./components/Courses";
import { Toaster } from "react-hot-toast";
import { useAuth } from "./components/AuthProvider";

const App = () => {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);
  return (
    <>
      <Routes>
        <Route path="/" element={<Allcomponent />} />
        <Route
          path="/courses"
          element={authUser ? <Courses /> : <Navigate to="/signup" />}
        />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Toaster />
    </>
  );
};

export default App;

import React from "react";
import { BrowserRouter, Route, Routes, Link, Navigate } from "react-router-dom";
import HomeScreen from "./Screens/HomeScreen";
import CreateScreen from "./Screens/CreateScreen";
import UpdateScreen from "./Screens/UpdateScreen";
import NavComponent from "./components/NavComponent";

const App = () => {
  const isLoggedIn = localStorage.getItem("email");
  return (
    <BrowserRouter>
      <NavComponent />
      <Routes>
        {isLoggedIn ? (
          <>
            <Route path="/home" element={<HomeScreen />} />
            <Route path="create" element={<CreateScreen />} />
            <Route path="update/:id" element={<UpdateScreen />} />
          </>
        ) : (
          <Route path="/login" element={<Navigate to="/login" replace />} />
        )}
      </Routes>
    </BrowserRouter>
  );
};

export default App;

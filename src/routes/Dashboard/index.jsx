import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home, Profile } from "../../pages/Dashboard";
import Navbar from "../../components/Navbar";

function DashboaedPage() {
  return (
    <div className="container mx-auto w-[1300px] flex justify-between ">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default DashboaedPage;

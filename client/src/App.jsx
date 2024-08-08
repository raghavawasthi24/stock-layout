import React from "react";
import SidePanel from "./components/SidePanel";
import Header from "./components/Header";
import Payments from "./components/Payments";

export default function App() {
  return (
    <div className="flex">
      <SidePanel />
      <div className="w-full h-screen overflow-auto">
        <Header />
        <Payments />
      </div>
    </div>
  );
}

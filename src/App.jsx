import { useState } from "react";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Navbar from "./components/Navbar";
function App() {
  return (
    <>
      <Navbar />
      <SignIn />
    </>
  );
}

export default App;

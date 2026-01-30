import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Exercises from "./pages/exercises.jsx";
import Workouts from "./pages/workouts.jsx";
import Login from "./pages/login.jsx";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <Login />
      </div>
      <div>
        <Exercises />
      </div>
      <div>
        <Workouts />
      </div>
    </>
  );
}

export default App;

import { useState } from "react";
import Exercises from "./pages/exercises.jsx";
import Workouts from "./pages/workouts.jsx";
import Login from "./pages/login.jsx";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import WorkoutDetails from "./pages/workoutDetails.jsx";

function App() {
  const [isLogin, setIsLogin] = useState(
    localStorage.getItem("token") ? true : false,
  );
  return (
    <Routes>
      <Route path="/" element={<Workouts isLogin={isLogin} />}></Route>
      <Route path="/workout/:workoutId" element={<WorkoutDetails />}></Route>
      <Route
        path="/exercises"
        element={<Exercises isLogin={isLogin} />}
      ></Route>
      <Route
        path="/login"
        element={<Login isLogin={isLogin} setIsLogin={setIsLogin} />}
      ></Route>
    </Routes>
  );
}

export default App;

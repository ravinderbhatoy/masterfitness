import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Exercises from "./pages/exercises.jsx";
import Workouts from "./pages/workouts.jsx";
import Login from "./pages/login.jsx";
import "./App.css";

function App() {
  const [isLogin, setIsLogin] = useState(
    localStorage.getItem("token") ? true : false,
  );

  return (
    <>
      <div>
        <Login isLogin={isLogin} setIsLogin={setIsLogin} />
      </div>
      <div>
        <Exercises isLogin={isLogin} />
      </div>
      <div>
        <Workouts isLogin={isLogin} />
      </div>
    </>
  );
}

export default App;

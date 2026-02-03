import { useEffect, useState } from "react";
import api from "../api/axios";
import Navbar from "../components/navbar";

const Exercises = ({ isLogin }) => {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    try {
      setExercises((prev) => []);
      const tokenExist = localStorage.getItem("token");
      if (tokenExist) {
        api
          .get("exercises/", {
            headers: {
              Authorization: `Token ${tokenExist}`,
            },
          })
          .then((res) => setExercises(res.data));
      }
    } catch (e) {
      console.log("Unable to fetch exercises", e);
    }
  }, [isLogin]);

  return (
    <>
      <Navbar isLogin={isLogin} />
      <div className="container">
        <h4>Exercises</h4>
        <ul>
          {exercises.map((exercise) => (
            <li key={exercise.id}>{exercise.name}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Exercises;

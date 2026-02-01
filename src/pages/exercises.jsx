import { useEffect, useState } from "react";
import api from "../api/axios";

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
    <div>
      <h2>Exercises</h2>
      <ul>
        {exercises.map((exercise) => (
          <li key={exercise.id}>{exercise.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Exercises;

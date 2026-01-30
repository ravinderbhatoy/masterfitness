import { useEffect, useState } from "react";
import api from "../api/axios";

const Exercises = () => {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    api.get("exercises/").then((res) => setExercises(res.data));
  }, []);

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

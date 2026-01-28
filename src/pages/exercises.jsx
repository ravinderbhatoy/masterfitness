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
      {exercises.map((exercise) => (
        <div key={exercise.id}>{exercise.name}</div>
      ))}
    </div>
  );
};

export default Exercises;

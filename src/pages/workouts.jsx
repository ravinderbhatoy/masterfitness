import { useEffect, useState } from "react";
import api from "../api/axios";

const Workouts = () => {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    api.get("workouts/").then((res) => setWorkouts(res.data));
  }, []);

  return (
    <div>
      <h2>workouts</h2>
      <ul>
        {workouts.map((workout) => (
          <div key={workout.id}>Workout on {workout.date}</div>
        ))}
      </ul>
    </div>
  );
};

export default Workouts;

import { useEffect, useState } from "react";
import api from "../api/axios";

const Workouts = ({ isLogin }) => {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    try {
      setWorkouts((prev) => []);
      const tokenExist = localStorage.getItem("token");
      if (tokenExist) {
        api
          .get("workouts/", {
            headers: {
              Authorization: `Token ${tokenExist}`,
            },
          })
          .then((res) => setWorkouts(res.data));
      }
    } catch (e) {
      console.log("Unable to fetch workouts", e);
    }
  }, [isLogin]);

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

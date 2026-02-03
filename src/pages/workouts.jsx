import { useEffect, useState } from "react";
import api from "../api/axios";
import Navbar from "../components/navbar";
import { Link } from "react-router-dom";

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
    <>
      <Navbar isLogin={isLogin} />
      <div className="container">
        <h2>workouts</h2>
        <ul>
          {workouts.map((workout) => (
            <li>
              <Link to={`/workout/${workout.id}`} key={workout.id}>
                Workout on {workout.date}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Workouts;

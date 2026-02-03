import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../api/axios";
import Navbar from "../components/navbar";

const WorkoutDetails = () => {
  const [workout, setWorkout] = useState({});
  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const { workoutId } = useParams();

  useEffect(() => {
    try {
      const tokenExist = localStorage.getItem("token");
      if (tokenExist) {
        api
          .get(`/workouts/${workoutId}`, {
            headers: {
              Authorization: `Token ${tokenExist}`,
            },
          })
          .then((res) => setWorkout(res.data));
      }
    } catch (e) {
      console.log(`Unable to fetch workout details with id: ${workoutId}`, e);
    }
  }, [workoutId]);

  const date = new Date(workout.date);
  console.log(date);
  console.log("Details", workout.exercises);
  return (
    <>
      <Navbar />
      <div className="container">
        <h4 className="text-success">
          Your workout on {`${date.getDate()} ${month[date.getMonth()]}`}
        </h4>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Exercise</th>
              <th scope="col">Sets</th>
              <th scope="col">Reps</th>
              <th scope="col">Weight</th>
            </tr>
          </thead>
          <tbody>
            {workout.exercises?.map((ele) => (
              <tr>
                <th scope="row">{ele.exercise.id}</th>
                <td>{ele.exercise.name}</td>
                <td>{ele.sets}</td>
                <td>{ele.reps}</td>
                <td>{ele.weight}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default WorkoutDetails;

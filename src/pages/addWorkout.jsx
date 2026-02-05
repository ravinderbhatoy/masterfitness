import React from "react";
import api from "../api/axios";

const AddWorkout = () => {
  const handleSubmit = async () => {
    console.log(localStorage.getItem("token"));
    try {
      const res = await api.post(
        "workouts/create/",
        {},
        {
          headers: { Authorization: `Token ${localStorage.getItem("token")}` },
        },
      );
    } catch (e) {
      console.log("Unable to create workout: ", e);
    }
  };

  return (
    <button onClick={handleSubmit} className="btn btn-success ms-auto">
      Add workout
    </button>
  );
};

export default AddWorkout;

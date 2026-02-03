import { useState } from "react";
import api from "../api/axios";
import Navbar from "../components/navbar";

const Login = ({ isLogin, setIsLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  console.log("Login status", isLogin);

  const handleUsername = (event) => {
    setUsername(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleLogout = (event) => {
    const tokenExist = localStorage.getItem("token");
    if (tokenExist) {
      localStorage.removeItem("token");
    }
    setIsLogin((prev) => false);
  };

  const handleSubmit = async () => {
    try {
      const { data } = await api.post("api/login/", {
        username: username,
        password: password,
      });
      localStorage.setItem("token", data.token);
      setIsLogin((prev) => true);
      alert("logged in.");
    } catch (e) {
      console.log("Unable to login", e);
    }
  };

  return (
    <>
      <Navbar isLogin={isLogin} />
      {!isLogin ? (
        <div className="container">
          <label htmlFor="username">Username</label>
          <br />
          <input
            type="text"
            name="username"
            value={username}
            onChange={handleUsername}
          />
          <br />
          <label htmlFor="password">Password</label>
          <br />
          <input
            type="text"
            name="password"
            value={password}
            onChange={handlePassword}
          />
          <br />
          <button className="btn btn-primary" onClick={handleSubmit}>
            Login
          </button>
        </div>
      ) : (
        <button className="btn btn-danger" onClick={handleLogout}>
          Logout
        </button>
      )}
    </>
  );
};

export default Login;

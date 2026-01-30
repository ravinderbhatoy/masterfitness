import { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsername = (event) => {
    setUsername(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = () => {
    console.log("Form submitted");
  };

  return (
    <div>
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
      <button onClick={handleSubmit}>Login</button>
    </div>
  );
};

export default Login;

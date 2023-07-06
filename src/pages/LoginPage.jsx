import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userLoginAuth } from "../features/authSlice";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, user, error } = useSelector((state) => state.auth);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(userLoginAuth({ username, password })).then((user) => {
      if (user.payload.token) {
        console.log(user.payload.token);
        localStorage.setItem("USER_TOKEN", user.payload.token);
        navigate("/", { replace: true });
      }
    });
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">{loading ? "loading ...." : "login"}</button>
      </form>
      {JSON.stringify(user)}
    </div>
  );
}

export default LoginPage;

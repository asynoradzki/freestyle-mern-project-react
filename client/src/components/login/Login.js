import './Login.css'
import React from "react";
import ReactSignupLoginComponent from "react-signup-login-component";
const headers = { "Content-Type": "application/json" };
const url = `http://localhost:3001`;

const Login = () => {
  const signupWasClickedCallback = async (data) => {
    const { username, password, passwordConfirmation } = data;
    if (!username || !password || !passwordConfirmation) {
      alert("Missing required fields");
      return;
    }
    if (password !== passwordConfirmation) {
      alert("Password do not match");
      return;
    }
    try {
      const response = await fetch(`${url}/api/users`);
      const users = await response.json()
      const existingUser = users.find((user) => user.username === data.username)
      if (existingUser) {
        alert("User already exist")
        return;
      }

    } catch (err) {
      console.log(err);
      alert("Error checking for existing user");
      return;
    }
    try {
      const response = await fetch(`${url}/api/users`, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(data),
      });
      const newUser = await response.json();
      console.log(newUser);
    } catch (err) {
      console.log(err);
    }
  };

  const loginWasClickedCallback = async (data) => {
    try {
      const response = await fetch(`${url}/api/users`);
      const users = await response.json();
      console.log(users);
      const user = users.find(
        (user) =>
          user.username === data.username && user.password === data.password
      );
      if (user) {
        console.log("User logged in successfully!");
        alert("User logged in successfully!")
      } else {
        console.log("Invalid username or password.");
        alert("Invalid username or password.")
      }
    } catch (err) {
      console.log(err);
    }
  };

  const recoverPasswordWasClickedCallback = async (data) => {
    try {
      const response = await fetch(`${url}/api/users`);
      const users = await response.json();
      const user = users.find((user) => user.username === data.username);
      if (user) {
        console.log(`Your passworod is: ${user.password}`);
        alert((`Your passworod is: ${user.password}`))
      } else {
        console.log(`User ${data.username} not found !`);
        alert(`User ${data.username} not found !`)
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="LoginMain">
      <ReactSignupLoginComponent
        title="Movie DataBase"
        handleSignup={signupWasClickedCallback}
        handleLogin={loginWasClickedCallback}
        handleRecoverPassword={recoverPasswordWasClickedCallback}
        submitLoginCustomLabel="Login"
        submitSignupCustomLabel="Create"
      />
    </div>
  );
};

export default Login;

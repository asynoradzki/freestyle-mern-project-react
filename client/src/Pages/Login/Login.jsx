import "./Login.css";
import React from "react";
import ReactSignupLoginComponent from "react-signup-login-component";

const headers = { "Content-Type": "application/json" };
const url = `http://localhost:3001`;

const Login = () => {
    const signupWasClickedCallback = async (data) => {
        const { username, password, passwordConfirmation } = data;
        if (!username || !password || !passwordConfirmation) {
            return alert("Missing required fields");
        }
        if (password !== passwordConfirmation) {
            return alert("Password do not match");
        }
        try {
            const response = await fetch(`${url}/api/register`, {
                method: "POST",
                headers: headers,
                body: JSON.stringify(data),
            });
            if (response.status == 409) {
                return alert("User already exist");
            }
            if (response.status == 401) {
                return alert("Password do not match");
            }
            const newUser = await response.json();
            console.log(newUser);
        } catch (err) {
            return alert("Error checking for existing user");
        }
    };

    const loginWasClickedCallback = async (data) => {
        try {
            const response = await fetch(`${url}/api/users`);
            const users = await response.json();
            console.log(users);
            const user = users.find((user) => user.username === data.username && user.password === data.password);
            if (user) {
                console.log("User logged in successfully!");
                alert("User logged in successfully!");
            } else {
                console.log("Invalid username or password.");
                alert("Invalid username or password.");
            }
        } catch (err) {
            console.log(err);
        }
    };

    const recoverPasswordWasClickedCallback = async (data) => {
        try {
          //todo crate/api/login post endpoint and check if certain user exists on backend side
            const response = await fetch(`${url}/api/users`);
            const users = await response.json();
            const user = users.find((user) => user.username === data.username);
            if (user) {
                console.log(`Your passworod is: ${user.password}`);
                alert(`Your passworod is: ${user.password}`);
            } else {
                console.log(`User ${data.username} not found !`);
                alert(`User ${data.username} not found !`);
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

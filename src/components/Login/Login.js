import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Formimg from "../../images/arrow-logo.png";
import BackToHome from "./BackToHome";

import "./Login.css";

function Login() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();
  // User Login info
  const database = [
    {
      username: "arrowscope",
      password: "arrowscope@123",
    },
    {
      username: "user2",
      password: "pass2",
    },
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password",
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
        navigate("/upload");
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className="login_form_wrapper">
      <div className="login_form__container">
        <div className="title">Sign In</div>
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <label>Username </label>
            <input type="text" name="uname" required />
            {renderErrorMessage("uname")}
          </div>
          <div className="input-container">
            <label>Password </label>
            <input type="password" name="pass" required />
            {renderErrorMessage("pass")}
          </div>
          <div className="button-container">
            <input type="submit" value="LOGIN" />
          </div>
        </form>
      </div>
    </div>
  );

  return (
    <div className="login_app">
      <div className="login_app__container">
        <div className="login__img">
          <BackToHome content="Back To Home" url="/" />
          <div className="form_profile">
            <img src={Formimg} alt="formbg" />
          </div>
        </div>
        <div className="login-form">
          {isSubmitted ? <p>Successully Logedin</p> : renderForm}
        </div>
      </div>
    </div>
  );
}

export default Login;

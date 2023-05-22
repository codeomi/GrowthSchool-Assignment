import React from "react";

const Login = () => {
  return (
    <>
      <div className="container">
        <div className="formContainer">
          <div className="heading">Login</div>
          <form>
            <div className="titleInputContainer input-cont">
              <div className="courseTitle">Your Email</div>
              <input type="email" />
            </div>
            <div className="descriptionInputContainer input-cont">
              <div className="courseDescription">Password</div>
              <input type="password" />
            </div>

            <div className="submitButton" type="submit">
              Login
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;

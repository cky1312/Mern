import React, { useState } from "react";
import SignIn from "../assets/signin.svg";
import { Link, useNavigate } from "react-router-dom";
import { signinFields as fields } from "../utils/constants";
import axios from "axios";

function Login() {
  let [user, setUser] = useState({
    password: "",
    email: "",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.id]: e.target.value });
  };

  const navigate = useNavigate();

  const login = async () => {
    console.log("clicked");
    await axios
      .post("/signin", user)
      .then((response) => {
        console.log({ response });
        setUser({
          password: "",
          email: "",
        });
        navigate("/");
      })
      .catch((error) => {
        console.log({ error });
      });
  };

  const renderFields = (field, index) => {
    return (
      <div className="form-group" key={field.placeholder}>
        <input
          id={field.id}
          type={field.type}
          className={`form-control ${index > 0 ? "mt-2" : ""}`}
          placeholder={field.placeholder}
          onChange={handleChange}
        />
      </div>
    );
  };

  return (
    <div className="register-body p-5 d-flex flex-column justify-content-center align-items-center">
      {/* <div className="d-flex justify-content-center align-items-center border"> */}
      <div className="signup-box shadow rounded p-5 text-start ">
        <h4 className="mb-3">Sign In</h4>
        <div className="d-flex">
          <div className="w-50 d-flex flex-column justify-content-center align-items-center p-3">
            {/* <div> */}
            <img src={SignIn} alt="" className="h-100 w-100" />
            {/* <div className="btn btn-secondary"> */}
            <Link to="/signup">Sign Up</Link>
            {/* </div> */}
            {/* </div> */}
          </div>
          <div className="d-flex flex-column w-50">
            {fields.map((field, index) => {
              return renderFields(field, index);
            })}

            <div className="btn btn-primary mt-2" onClick={login}>
              Login
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
}

export default Login;

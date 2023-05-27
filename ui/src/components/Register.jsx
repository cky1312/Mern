import React, { useState } from "react";
import SignUp from "../assets/signup.svg";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { signupFields as fields } from "../utils/constants";

function Register() {
  let [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    work: "",
    password: "",
    cpassword: "",
  });

  const navigate = useNavigate();

  const register = async () => {
    console.log("clicked");
    await axios
      .post("/register", user)
      .then((response) => {
        console.log({ response });
        setUser({
          name: "",
          email: "",
          phone: "",
          work: "",
          password: "",
          cpassword: "",
        });
        navigate("/login");
      })
      .catch((error) => {
        console.log({ error });
      });
  };

  const handleChange = (e) => {
    setUser({ ...user, [e.target.id]: e.target.value });
  };

  const renderFields = (field, index) => {
    return (
      <div className="form-group" key={field.placeholder}>
        <input
          id={field.id}
          type={field.type}
          value={user[field.id]}
          className={`form-control ${index > 0 ? "mt-2" : ""}`}
          placeholder={field.placeholder}
          onChange={handleChange}
        />
      </div>
    );
  };

  return (
    <div className="register-body p-5 d-flex justify-content-center align-items-center">
      {/* <div className="d-flex justify-content-center align-items-center border"> */}
      <div className="signup-box shadow rounded p-5 text-start position-absolute">
        <h4 className="mb-3">Sign Up</h4>
        <div className="d-flex">
          <div className="d-flex flex-column w-50">
            {fields.map((field, index) => {
              return renderFields(field, index);
            })}

            <div className="btn btn-primary mt-2" onClick={register}>
              Register
            </div>
          </div>
          <div className="w-50 d-flex flex-column justify-content-center align-items-center p-3">
            {/* <div> */}
            <img src={SignUp} alt="" className="h-100 w-100" />
            <Link to="/login">Sign In</Link>
            {/* </div> */}
          </div>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
}

export default Register;

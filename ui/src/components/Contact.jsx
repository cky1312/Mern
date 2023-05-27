import React, { useState } from "react";
import {
  contactDetails,
  contactDetailsFields as fields,
} from "../utils/constants";

function Contact() {
  let [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const renderCard = (detail) => {
    return (
      <div
        className="rounded d-flex align-items-center shadow m-3 p-3"
        style={{ width: "28%" }}
      >
        <div></div>
        <div>
          <p>{detail.title}</p>
          <p>{detail.value}</p>
        </div>
      </div>
    );
  };

  const renderFields = (field, index) => {
    return (
      <div className="form-group" key={field.placeholder}>
        <input
          id={field.id}
          type={field.type}
          className={`form-control ${index > 0 ? "ml-2" : ""}`}
          placeholder={field.placeholder}
          onChange={handleChange}
        />
      </div>
    );
  };

  const handleChange = (e) => {
    setUser({ ...user, [e.target.id]: e.target.value });
  };

  return (
    <div className="p-5">
      <div className="d-flex justify-content-center">
        {contactDetails.map((detail) => {
          return renderCard(detail);
        })}
      </div>
      <div className=" d-flex justify-content-center mt-5">
        <div className="signup-box shadow rounded p-5 text-start ">
          <h4 className="mb-3">Sign In</h4>
          <div className="d-flex">
            <div className="w-50 d-flex flex-column justify-content-center align-items-center p-3"></div>
            <div className="d-flex">
              {fields.map((field, index) => {
                return renderFields(field, index);
              })}

              <div className="btn btn-primary mt-2" onClick={() => {}}>
                Send Message
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
